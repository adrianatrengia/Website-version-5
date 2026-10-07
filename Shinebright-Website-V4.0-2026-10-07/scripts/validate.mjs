import { access, readFile, readdir, stat } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const errors = [];
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) htmlFiles.push(path);
  }
}

function report(file, message) {
  errors.push(`${relative(root, file)}: ${message}`);
}

function pathForUrl(urlPath) {
  const clean = decodeURI(urlPath.split('#')[0].split('?')[0]);
  if (clean === '/') return join(root, 'index.html');
  const direct = join(root, clean.replace(/^\//, ''));
  return clean.endsWith('.html') || clean.includes('.') ? direct : join(direct, 'index.html');
}

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

await walk(root);

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  if (!/<html lang="(?:en-CA|fr-CA)">/.test(html)) report(file, 'missing valid en-CA or fr-CA language');
  if (!/<title>[^<]{10,}<\/title>/.test(html)) report(file, 'missing meaningful title');
  if (!/<meta name="description" content="[^"]{40,}">/.test(html)) report(file, 'missing meaningful meta description');
  if (!/<link rel="canonical" href="https:\/\/shinebrighttutoringmtl\.ca/.test(html)) report(file, 'missing canonical URL');
  if ((html.match(/hreflang=/g) || []).length < 3 && !file.endsWith('404.html')) report(file, 'missing language alternates');
  if (html.includes('/Users/') || html.includes('/private/var/')) report(file, 'contains a local absolute path');
  if (!html.includes('shinebrighttutoringmtl.setmore.com')) report(file, 'missing booking access');

  const attributes = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const value of attributes) {
    if (/^(?:https?:|mailto:|tel:|#|data:)/.test(value)) continue;
    const target = value.startsWith('/') ? pathForUrl(value) : resolve(dirname(file), value);
    if (!(await exists(target))) report(file, `broken local reference: ${value}`);
  }
}

const required = ['index.html', 'fr/index.html', 'assets/site.css', 'assets/site.js', 'sitemap.xml', 'robots.txt', 'vercel.json', 'favicon.png', 'og.png'];
for (const item of required) if (!(await exists(join(root, item)))) errors.push(`Missing required file: ${item}`);
if (await exists(join(root, 'app'))) errors.push('Unexpected app folder found');
if (await exists(join(root, 'node_modules'))) errors.push('Unexpected node_modules folder found');

const allFiles = [];
async function count(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await count(path); else allFiles.push(path);
  }
}
await count(root);
let bytes = 0;
for (const file of allFiles) bytes += (await stat(file)).size;

if (errors.length) {
  console.error(`Validation failed with ${errors.length} error(s):\n${errors.map((item) => `- ${item}`).join('\n')}`);
  process.exit(1);
}

console.log(`Validation passed: ${htmlFiles.length} HTML files, ${allFiles.length} total files, ${(bytes / 1024 / 1024).toFixed(2)} MB.`);
