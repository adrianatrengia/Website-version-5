import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const siteUrl = 'https://shinebrighttutoringmtl.ca';
const bookingUrl = 'https://shinebrighttutoringmtl.setmore.com/';
const email = 'shinebrighttutoringmtl@gmail.com';
const phoneDisplay = '+1 438 398 7996';
const phoneHref = 'tel:+14383987996';

const social = {
  instagram: 'https://www.instagram.com/shinebrighttutoringmtl',
  facebook: 'https://www.facebook.com/share/1DmiPhkEoz/',
  linkedin: 'https://www.linkedin.com/company/shine-bright-tutoring-mtl/',
  founder: 'https://www.linkedin.com/in/adriana-trengia-a78295268',
};

const resources = [
  'https://a.co/d/0fmVjpDH',
  'https://a.co/d/062fSZfe',
  'https://a.co/d/02sXhJAK',
  'https://a.co/d/0cHIPJbJ',
];

const services = [
  {
    key: 'elementary',
    enPath: '/services/elementary-tutoring', frPath: '/fr/services/tutorat-primaire',
    enTitle: 'Elementary Tutoring in Montreal', frTitle: 'Tutorat primaire à Montréal',
    enShort: 'Elementary tutoring', frShort: 'Tutorat primaire',
    enMeta: 'Personalized elementary tutoring in Montreal for math, French, English, science, homework, and confident learning.',
    frMeta: 'Tutorat primaire personnalisé à Montréal en mathématiques, français, anglais, sciences et aide aux devoirs.',
    enIntro: 'Patient, one-on-one support that helps young learners understand lessons, practise at the right pace, and feel proud of their progress.',
    frIntro: 'Un soutien individuel et patient qui aide les jeunes à comprendre la matière, à pratiquer à leur rythme et à être fiers de leurs progrès.',
    enFor: 'Elementary students who need help catching up, staying on track, preparing for a test, or feeling more comfortable with schoolwork.',
    frFor: 'Les élèves du primaire qui veulent rattraper une notion, rester à jour, préparer une évaluation ou se sentir plus à l’aise à l’école.',
    enChallenges: ['Homework is becoming stressful', 'Reading, writing, or math foundations feel uneven', 'The student needs clearer explanations and more practice'],
    frChallenges: ['Les devoirs deviennent stressants', 'Les bases en lecture, en écriture ou en mathématiques sont fragiles', 'L’élève a besoin d’explications plus claires et de pratique'],
    enSupport: ['Break lessons into manageable steps', 'Build skills through targeted practice', 'Encourage questions, confidence, and steady routines'],
    frSupport: ['Découper les notions en étapes accessibles', 'Renforcer les habiletés avec une pratique ciblée', 'Encourager les questions, la confiance et de bonnes habitudes'],
    enSubjects: ['Math', 'French', 'English', 'Science', 'Homework help', 'Multi-subject review'],
    frSubjects: ['Mathématiques', 'Français', 'Anglais', 'Sciences', 'Aide aux devoirs', 'Révision multidisciplinaire'],
    enFaq: [['Can sessions cover more than one subject?', 'Yes. Support can adapt to current homework, classroom priorities, and the student’s learning goals.'], ['Is elementary tutoring available online?', 'Yes. Online sessions are available across Québec, with in-person tutoring in Montreal when available.'], ['Can you help my child prepare for a test?', 'Yes. Sessions can focus on review, practice questions, study habits, and confidence before a test.']],
    frFaq: [['Une séance peut-elle couvrir plus d’une matière?', 'Oui. Le soutien peut être adapté aux devoirs, aux priorités en classe et aux objectifs de l’élève.'], ['Le tutorat primaire est-il offert en ligne?', 'Oui. Les séances en ligne sont offertes partout au Québec, et le tutorat en personne à Montréal est proposé selon les disponibilités.'], ['Pouvez-vous aider mon enfant à préparer une évaluation?', 'Oui. Les séances peuvent cibler la révision, les questions pratiques, les méthodes d’étude et la confiance.']],
    related: ['homework', 'entrance', 'summer'],
  },
  {
    key: 'high-school',
    enPath: '/services/high-school-tutoring', frPath: '/fr/services/tutorat-secondaire',
    enTitle: 'High School Tutoring in Montreal', frTitle: 'Tutorat secondaire à Montréal',
    enShort: 'High school tutoring', frShort: 'Tutorat secondaire',
    enMeta: 'One-on-one high school tutoring in Montreal for math, science, French, English, homework, midterms, and finals.',
    frMeta: 'Tutorat individuel au secondaire à Montréal en mathématiques, sciences, français, anglais, devoirs et examens.',
    enIntro: 'Clear, encouraging support for students managing more complex material, heavier workloads, and important evaluations.',
    frIntro: 'Un soutien clair et encourageant pour les élèves qui gèrent une matière plus complexe, une charge accrue et des évaluations importantes.',
    enFor: 'Secondary students who want weekly support, focused help in one subject, or a practical plan for midterms and finals.',
    frFor: 'Les élèves du secondaire qui souhaitent un soutien hebdomadaire, une aide ciblée dans une matière ou un plan pour les examens.',
    enChallenges: ['A course has become hard to follow', 'Assignments and studying feel overwhelming', 'Marks or confidence have started to slip'],
    frChallenges: ['Un cours est devenu difficile à suivre', 'Les travaux et l’étude semblent difficiles à gérer', 'Les résultats ou la confiance ont diminué'],
    enSupport: ['Revisit core concepts in plain language', 'Create focused review and practice', 'Support planning, problem-solving, and independent learning'],
    frSupport: ['Revoir les notions clés dans un langage simple', 'Proposer une révision et une pratique ciblées', 'Soutenir la planification, la résolution de problèmes et l’autonomie'],
    enSubjects: ['Math (CST, TS, and SN)', 'Science (ST and EST)', 'Physics', 'Chemistry', 'French', 'English'],
    frSubjects: ['Mathématiques (CST, TS et SN)', 'Sciences (ST et STE)', 'Physique', 'Chimie', 'Français', 'Anglais'],
    enFaq: [['Which math pathways do you support?', 'Support includes CST, TS, and SN. Contact Shine Bright to confirm the right tutor and current availability.'], ['Can tutoring be short-term?', 'Yes. Tutoring can focus on one unit or exam, or continue weekly for steady support.'], ['Do you help with science courses?', 'Yes. Support may include science, physics, and chemistry depending on level and tutor availability.']],
    frFaq: [['Quels parcours de mathématiques soutenez-vous?', 'Le soutien comprend les parcours CST, TS et SN. Communiquez avec Shine Bright pour confirmer le tutorat et les disponibilités.'], ['Le tutorat peut-il être de courte durée?', 'Oui. Le tutorat peut cibler une unité ou un examen, ou se poursuivre chaque semaine.'], ['Offrez-vous de l’aide en sciences?', 'Oui. Le soutien peut inclure les sciences, la physique et la chimie selon le niveau et les disponibilités.']],
    related: ['exam', 'homework', 'online'],
  },
  {
    key: 'cegep',
    enPath: '/services/cegep-math-tutoring', frPath: '/fr/services/tutorat-cegep-mathematiques',
    enTitle: 'CEGEP Math Tutoring in Québec', frTitle: 'Tutorat de mathématiques au cégep',
    enShort: 'CEGEP math', frShort: 'Mathématiques au cégep',
    enMeta: 'Personalized CEGEP math tutoring for Calculus 1, Calculus 2, and Linear Algebra in Montreal and online across Québec.',
    frMeta: 'Tutorat personnalisé en mathématiques au cégep : calcul différentiel, calcul intégral et algèbre linéaire, à Montréal ou en ligne.',
    enIntro: 'Focused math support for CEGEP students who want to understand the reasoning behind each step and practise with purpose.',
    frIntro: 'Un soutien ciblé pour comprendre le raisonnement derrière chaque étape et pratiquer de façon efficace.',
    enFor: 'CEGEP students looking for help with course material, assignments, midterms, finals, or a stronger math foundation.',
    frFor: 'Les étudiants du cégep qui veulent de l’aide avec la matière, les travaux, les examens ou leurs bases en mathématiques.',
    enChallenges: ['Lectures move too quickly', 'One missed concept affects the next chapter', 'Practice problems feel less clear than classroom examples'],
    frChallenges: ['Le rythme des cours est trop rapide', 'Une notion manquée nuit au chapitre suivant', 'Les exercices semblent plus difficiles que les exemples en classe'],
    enSupport: ['Work through problems step by step', 'Identify the concept behind common errors', 'Build an efficient review plan for evaluations'],
    frSupport: ['Résoudre les problèmes étape par étape', 'Repérer les notions derrière les erreurs fréquentes', 'Établir un plan de révision efficace pour les évaluations'],
    enSubjects: ['Calculus 1', 'Calculus 2', 'Linear Algebra', 'Midterm review', 'Final exam preparation'],
    frSubjects: ['Calcul différentiel', 'Calcul intégral', 'Algèbre linéaire', 'Révision de mi-session', 'Préparation aux examens finaux'],
    enFaq: [['Which CEGEP math courses are covered?', 'Current offerings include Calculus 1, Calculus 2, and Linear Algebra. Contact Shine Bright with the course name to confirm fit.'], ['Can I book before a midterm or final?', 'Yes. Early booking is encouraged during busy exam periods.'], ['Are online CEGEP sessions available?', 'Yes. Online tutoring is available across Québec and works well for guided problem-solving and review.']],
    frFaq: [['Quels cours de mathématiques sont couverts?', 'Les services comprennent le calcul différentiel, le calcul intégral et l’algèbre linéaire. Communiquez le nom du cours pour confirmer le service.'], ['Puis-je réserver avant un examen?', 'Oui. Il est conseillé de réserver tôt pendant les périodes d’examens.'], ['Les séances pour le cégep sont-elles offertes en ligne?', 'Oui. Le tutorat en ligne est offert partout au Québec et convient à la résolution guidée et à la révision.']],
    related: ['exam', 'online', 'homework'],
  },
  {
    key: 'entrance',
    enPath: '/services/entrance-exam-prep', frPath: '/fr/services/preparation-examens-entree-secondaire',
    enTitle: 'High School Entrance Exam Prep in Montreal', frTitle: 'Préparation aux examens d’entrée au secondaire',
    enShort: 'Entrance exam prep', frShort: 'Examens d’entrée',
    enMeta: 'Structured high school entrance exam preparation in Montreal covering French, English, math reasoning, writing, logic, and timed practice.',
    frMeta: 'Préparation structurée aux examens d’entrée au secondaire à Montréal : français, anglais, raisonnement mathématique, écriture et pratique chronométrée.',
    enIntro: 'Structured, personalized preparation for Grade 6 students, with guided practice and customized Shine Bright learning materials.',
    frIntro: 'Une préparation structurée et personnalisée pour les élèves de 6e année, avec de la pratique guidée et du matériel Shine Bright personnalisé.',
    enFor: 'Grade 6 students preparing for high school entrance tests who benefit from a clear plan, targeted practice, and calm test-taking support.',
    frFor: 'Les élèves de 6e année qui préparent un examen d’entrée et profitent d’un plan clair, d’une pratique ciblée et de stratégies rassurantes.',
    enChallenges: ['The exam format feels unfamiliar', 'Time limits add pressure', 'The student needs balanced language, math, and reasoning practice'],
    frChallenges: ['Le format de l’examen est peu familier', 'Le temps limité ajoute de la pression', 'L’élève doit pratiquer les langues, les mathématiques et le raisonnement'],
    enSupport: ['Introduce the format and time-management strategies', 'Use customized workbook activities and exam-style questions', 'Adapt lessons to strengths and areas for improvement'],
    frSupport: ['Présenter le format et des stratégies de gestion du temps', 'Utiliser un cahier personnalisé et des questions de type examen', 'Adapter les leçons aux forces et aux éléments à améliorer'],
    enSubjects: ['French reading, grammar, and writing', 'English reading and written practice', 'Mathematical reasoning', 'Vocabulary', 'Logic and problem-solving', 'Timed practice'],
    frSubjects: ['Lecture, grammaire et écriture en français', 'Lecture et expression écrite en anglais', 'Raisonnement mathématique', 'Vocabulaire', 'Logique et résolution de problèmes', 'Pratique chronométrée'],
    enFaq: [['When should preparation begin?', 'Starting early allows time to identify priorities, learn the format, and practise without last-minute pressure.'], ['Does the program include practice materials?', 'Yes. Students receive customized Shine Bright lessons, strategies, activities, and exam-style questions.'], ['How are sessions structured?', 'Preparation is personalized. Confirm current session details and availability on Setmore before booking.']],
    frFaq: [['Quand faut-il commencer la préparation?', 'Commencer tôt permet de cibler les priorités, de comprendre le format et de pratiquer sans pression de dernière minute.'], ['Le programme comprend-il du matériel de pratique?', 'Oui. Les élèves reçoivent des leçons, stratégies, activités et questions de type examen personnalisées.'], ['Comment les séances sont-elles structurées?', 'La préparation est personnalisée. Confirmez les modalités et les disponibilités actuelles sur Setmore.']],
    related: ['elementary', 'exam', 'online'],
  },
  {
    key: 'homework',
    enPath: '/services/homework-help', frPath: '/fr/services/aide-aux-devoirs',
    enTitle: 'Homework Help in Montreal', frTitle: 'Aide aux devoirs à Montréal',
    enShort: 'Homework help', frShort: 'Aide aux devoirs',
    enMeta: 'Personalized homework help in Montreal and online across Québec for elementary and high school students.',
    frMeta: 'Aide aux devoirs personnalisée à Montréal et en ligne partout au Québec pour les élèves du primaire et du secondaire.',
    enIntro: 'Guided homework support that helps students understand what they are doing, organize their work, and become more independent.',
    frIntro: 'Un accompagnement qui aide les élèves à comprendre leur travail, à s’organiser et à devenir plus autonomes.',
    enFor: 'Students who get stuck after class, need help organizing assignments, or benefit from a calm space to ask questions.',
    frFor: 'Les élèves qui restent bloqués après le cours, qui ont besoin d’organiser leurs travaux ou d’un espace calme pour poser leurs questions.',
    enChallenges: ['Assignments take much longer than expected', 'Instructions are unclear', 'Homework has become a source of conflict or frustration'],
    frChallenges: ['Les devoirs prennent beaucoup trop de temps', 'Les consignes ne sont pas claires', 'Les devoirs deviennent une source de conflit ou de frustration'],
    enSupport: ['Clarify instructions and underlying concepts', 'Model useful planning and checking habits', 'Guide students without simply giving answers'],
    frSupport: ['Clarifier les consignes et les notions', 'Montrer de bonnes habitudes de planification et de vérification', 'Guider l’élève sans simplement donner les réponses'],
    enSubjects: ['Elementary core subjects', 'High school core subjects', 'Math', 'French', 'English', 'Science'],
    frSubjects: ['Matières de base au primaire', 'Matières de base au secondaire', 'Mathématiques', 'Français', 'Anglais', 'Sciences'],
    enFaq: [['Will the tutor complete homework for the student?', 'No. The tutor explains, prompts, and checks understanding so the student can work with growing independence.'], ['Can sessions help with organization?', 'Yes. A session can include prioritizing tasks, breaking work into steps, and planning deadlines.'], ['Can homework help become ongoing tutoring?', 'Yes. If recurring gaps appear, support can shift toward a regular learning plan.']],
    frFaq: [['Le tuteur fera-t-il les devoirs à la place de l’élève?', 'Non. Le tuteur explique, guide et vérifie la compréhension afin que l’élève travaille avec une autonomie grandissante.'], ['Les séances peuvent-elles aider à l’organisation?', 'Oui. Une séance peut inclure la priorisation, la division du travail et la planification des échéances.'], ['L’aide aux devoirs peut-elle devenir un tutorat régulier?', 'Oui. Si des lacunes récurrentes apparaissent, le soutien peut évoluer vers un plan régulier.']],
    related: ['elementary', 'high-school', 'online'],
  },
  {
    key: 'exam',
    enPath: '/services/exam-prep', frPath: '/fr/services/preparation-aux-examens',
    enTitle: 'Exam Preparation in Montreal', frTitle: 'Préparation aux examens à Montréal',
    enShort: 'Exam preparation', frShort: 'Préparation aux examens',
    enMeta: 'Personalized midterm and final exam preparation for Montreal students, with online support available across Québec.',
    frMeta: 'Préparation personnalisée aux examens de mi-session et finaux à Montréal, avec soutien en ligne partout au Québec.',
    enIntro: 'Focused review for midterms, finals, and important evaluations—organized around what the student understands and what needs more practice.',
    frIntro: 'Une révision ciblée pour les examens et les évaluations importantes, organisée selon les acquis et les notions à pratiquer.',
    enFor: 'Students who want a clear review plan, guided practice, better study habits, and more confidence before an evaluation.',
    frFor: 'Les élèves qui veulent un plan de révision clair, une pratique guidée, de meilleures méthodes d’étude et plus de confiance.',
    enChallenges: ['There is too much material to review', 'The student is unsure where to begin', 'Test anxiety makes it difficult to show what they know'],
    frChallenges: ['Il y a trop de matière à réviser', 'L’élève ne sait pas par où commencer', 'Le stress nuit à la capacité de montrer ses acquis'],
    enSupport: ['Prioritize the most important concepts', 'Practise questions with clear feedback', 'Build a realistic schedule and test-taking strategies'],
    frSupport: ['Prioriser les notions les plus importantes', 'Pratiquer avec une rétroaction claire', 'Établir un horaire réaliste et des stratégies d’examen'],
    enSubjects: ['Midterms', 'Final exams', 'Unit tests', 'Math', 'Science', 'French and English'],
    frSubjects: ['Examens de mi-session', 'Examens finaux', 'Évaluations d’unité', 'Mathématiques', 'Sciences', 'Français et anglais'],
    enFaq: [['How far ahead should we book?', 'Book as early as practical during exam periods to allow enough time for review and practice.'], ['Can sessions focus on one upcoming test?', 'Yes. Short-term preparation can target one unit, midterm, final, or evaluation.'], ['Do you teach study strategies?', 'Yes. Sessions can include planning, active review, checking work, and test-taking strategies.']],
    frFaq: [['Combien de temps à l’avance faut-il réserver?', 'Réservez le plus tôt possible pendant les périodes d’examens afin d’avoir assez de temps.'], ['Les séances peuvent-elles cibler un seul examen?', 'Oui. Une préparation de courte durée peut cibler une unité, une mi-session, un examen final ou une évaluation.'], ['Enseignez-vous des stratégies d’étude?', 'Oui. Les séances peuvent inclure la planification, la révision active, la vérification et des stratégies d’examen.']],
    related: ['high-school', 'cegep', 'online'],
  },
  {
    key: 'summer',
    enPath: '/services/summer-tutoring', frPath: '/fr/services/tutorat-ete',
    enTitle: 'Summer Tutoring in Montreal', frTitle: 'Tutorat d’été à Montréal',
    enShort: 'Summer learning', frShort: 'Tutorat d’été',
    enMeta: 'Flexible summer tutoring in Montreal and online across Québec to strengthen skills and prepare for the next school year.',
    frMeta: 'Tutorat d’été flexible à Montréal et en ligne partout au Québec pour consolider les acquis et préparer la prochaine année.',
    enIntro: 'Low-pressure summer learning that keeps important skills active, closes selected gaps, and prepares students for what comes next.',
    frIntro: 'Un apprentissage estival sans pression pour garder les acquis actifs, combler certaines lacunes et préparer la prochaine étape.',
    enFor: 'Students who want to maintain skills, revisit difficult concepts, prepare for a new level, or learn at a calmer pace.',
    frFor: 'Les élèves qui veulent maintenir leurs acquis, revoir des notions, préparer un nouveau niveau ou apprendre à un rythme plus calme.',
    enChallenges: ['Skills can fade during a long break', 'The previous year left a few gaps', 'The next level feels intimidating'],
    frChallenges: ['Les acquis peuvent diminuer pendant une longue pause', 'L’année précédente a laissé certaines lacunes', 'Le prochain niveau semble intimidant'],
    enSupport: ['Create a flexible goal-based plan', 'Mix review with engaging practice', 'Prepare foundations without recreating school-year pressure'],
    frSupport: ['Créer un plan flexible axé sur des objectifs', 'Combiner révision et pratique engageante', 'Préparer les bases sans recréer la pression scolaire'],
    enSubjects: ['Math foundations', 'French and English literacy', 'Science review', 'Preparation for the next grade', 'Entrance exam foundations'],
    frSubjects: ['Bases en mathématiques', 'Littératie en français et en anglais', 'Révision en sciences', 'Préparation au prochain niveau', 'Bases pour les examens d’entrée'],
    enFaq: [['Is summer tutoring intensive?', 'It can be light or focused. The plan is adapted to the student’s goals and family schedule.'], ['Can we prepare for the next grade?', 'Yes. Sessions can reinforce prerequisites and introduce key foundations for the next level.'], ['Is summer tutoring available online?', 'Yes. Online sessions are available across Québec.']],
    frFaq: [['Le tutorat d’été est-il intensif?', 'Il peut être léger ou ciblé. Le plan est adapté aux objectifs et à l’horaire de la famille.'], ['Peut-on préparer la prochaine année?', 'Oui. Les séances peuvent renforcer les préalables et introduire les bases du prochain niveau.'], ['Le tutorat d’été est-il offert en ligne?', 'Oui. Les séances en ligne sont offertes partout au Québec.']],
    related: ['elementary', 'high-school', 'online'],
  },
  {
    key: 'online',
    enPath: '/services/online-tutoring-quebec', frPath: '/fr/services/tutorat-en-ligne-quebec',
    enTitle: 'Online Tutoring Across Québec', frTitle: 'Tutorat en ligne partout au Québec',
    enShort: 'Online tutoring', frShort: 'Tutorat en ligne',
    enMeta: 'Flexible one-on-one online tutoring across Québec for elementary, high school, and CEGEP students.',
    frMeta: 'Tutorat individuel et flexible en ligne partout au Québec pour les élèves du primaire, du secondaire et du cégep.',
    enIntro: 'Personalized tutoring from home, with flexible support for review, homework, exams, and ongoing weekly learning.',
    frIntro: 'Du tutorat personnalisé à la maison, avec un soutien flexible pour la révision, les devoirs, les examens et le suivi hebdomadaire.',
    enFor: 'Busy families, students outside Montreal, and learners who benefit from working in a familiar environment.',
    frFor: 'Les familles occupées, les élèves hors de Montréal et ceux qui apprennent mieux dans un environnement familier.',
    enChallenges: ['Travel time makes scheduling difficult', 'Local subject support is limited', 'The student needs a consistent weekly routine'],
    frChallenges: ['Les déplacements compliquent l’horaire', 'Le soutien local dans une matière est limité', 'L’élève a besoin d’une routine hebdomadaire stable'],
    enSupport: ['Meet from a comfortable location', 'Share work and solve problems together in real time', 'Keep a flexible, consistent support schedule'],
    frSupport: ['Se rencontrer dans un endroit confortable', 'Partager le travail et résoudre les problèmes en temps réel', 'Maintenir un horaire flexible et régulier'],
    enSubjects: ['Elementary and high school core subjects', 'CEGEP math', 'Homework help', 'Exam preparation', 'Entrance exam preparation'],
    frSubjects: ['Matières de base au primaire et au secondaire', 'Mathématiques au cégep', 'Aide aux devoirs', 'Préparation aux examens', 'Préparation aux examens d’entrée'],
    enFaq: [['What do students need for online tutoring?', 'A reliable internet connection, a device with a camera and microphone, and the course materials they want to review.'], ['Is online tutoring one-on-one?', 'Yes. Shine Bright provides personalized one-on-one academic support.'], ['Can online tutoring be weekly?', 'Yes. Sessions can be short-term or ongoing depending on goals and availability.']],
    frFaq: [['De quoi l’élève a-t-il besoin?', 'D’une connexion fiable, d’un appareil avec caméra et microphone, et du matériel de cours à réviser.'], ['Le tutorat en ligne est-il individuel?', 'Oui. Shine Bright offre un soutien scolaire individuel et personnalisé.'], ['Le tutorat en ligne peut-il être hebdomadaire?', 'Oui. Les séances peuvent être de courte durée ou régulières selon les objectifs et les disponibilités.']],
    related: ['homework', 'exam', 'cegep'],
  },
];

const testimonials = [
  ['The session went super well! My daughter really liked how Mekhi explained everything, and went over it patiently with her. He is super and nice and I am happy we got matched with him for the tutoring sessions!', 'Secondary 2 parent'],
  ['Alyssia has been doing such a great job!! My daughter got a 94 on her last test. She has never seen above a 75 in previous years. She is really working well with her. I am so happy.', 'Grade 5 parent'],
  ['She got her report card today and she did sooo much better in science this term! So happy! Thanks to Massimo :)', 'Secondary 4 parent'],
  ['This has been a fantastic experience! The tutors are knowledgeable and make learning easy and enjoyable. The website is super user-friendly, allowing for quick and flexible scheduling that fits perfectly into a busy routine. Highly recommended!', 'Secondary 1 parent'],
  ['Best tutoring service hands down. My daughter’s tutor is very knowledgeable and helpful. He is very patient and my daughter feels encouraged after every session. Thank you!!', 'CEGEP parent'],
  ['Adriana is very professional and great at what she does! She is patient, kind, caring and truly passionate about this field! She really takes the time to get to know her students and their needs. She is not only giving my little boy the tools to succeed for his academics but for all areas. She truly is great at what she does.. we are SOOOO happy to have her work with our son!', 'Grade 3 parent'],
  ['I have been using Shine Bright for my daughters tutoring for 2 years now. All tutors have been wonderful, my daughter feels comfortable and is learning. I highly recommend—excellent service! Thank you!', 'Grade 5 parent'],
  ['My daughter really enjoyed her session with Jenna today and is looking forward to the next one. Jenna is engaging and makes it fun for her to learn and review. Thank you :)', 'Grade 4 parent'],
  ['Adriana from Shine Bright Tutoring has been an incredible tutor for my son. She is patient, knowledgeable, and truly passionate about helping her students succeed. She explains concepts in a way that’s easy to understand and creates a positive, encouraging learning environment.', 'High School parent'],
  ['It’s rare to find someone who is both highly capable academically and also genuinely invested in a child’s emotional well-being and motivation. We feel very lucky to have our tutor’s support. Our child has improved so much academically. As a result his confidence has gone up too!', 'Grade 4 parent'],
  ['After their first session the girls were so happy with Alyssa. She is kind, patient and made learning verbs exciting! Looking forward to more sessions!', 'Grade 3 & 5 parent'],
  ['We love Massimo. From the moment we started, the communication was clear, professional, and very friendly. The tutor was patient, knowledgeable, and able to connect in a way that made learning feel comfortable and encouraging.', 'Secondary 4 parent'],
];

const homeFaq = {
  en: [
    ['How do I book a session?', `Use any Book Now button to open the official Setmore page, choose a service, and view current availability.`],
    ['Do you offer online tutoring?', 'Yes. Online one-on-one tutoring is available across Québec.'],
    ['What subjects do you cover?', 'Support includes French, English, math, science, core elementary and high school subjects, and specialized CEGEP math.'],
    ['Do you help with entrance exams?', 'Yes. Preparation can include French, English, mathematical reasoning, reading, writing, vocabulary, logic, timed practice, and confidence strategies.'],
    ['Do you support elementary and high school students?', 'Yes. Shine Bright supports elementary and high school learners, as well as CEGEP math students.'],
    ['Can tutoring be short-term or ongoing?', 'Yes. Support can focus on one assignment or exam, or continue weekly depending on the student’s needs and availability.'],
    ['Do you offer summer tutoring?', 'Yes. Summer sessions can maintain skills, close selected gaps, and prepare for the next school year.'],
    ['How can I contact Shine Bright?', `Call or text ${phoneDisplay}, or email ${email}.`],
  ],
  fr: [
    ['Comment réserver une séance?', 'Utilisez un bouton Réserver pour ouvrir la page Setmore officielle, choisir un service et consulter les disponibilités.'],
    ['Offrez-vous du tutorat en ligne?', 'Oui. Le tutorat individuel en ligne est offert partout au Québec.'],
    ['Quelles matières couvrez-vous?', 'Le soutien comprend le français, l’anglais, les mathématiques, les sciences, les matières de base et les mathématiques au cégep.'],
    ['Aidez-vous avec les examens d’entrée?', 'Oui. La préparation peut inclure le français, l’anglais, le raisonnement mathématique, la lecture, l’écriture, le vocabulaire, la logique et la pratique chronométrée.'],
    ['Soutenez-vous les élèves du primaire et du secondaire?', 'Oui. Shine Bright soutient les élèves du primaire et du secondaire ainsi que les étudiants en mathématiques au cégep.'],
    ['Le tutorat peut-il être ponctuel ou régulier?', 'Oui. Le soutien peut cibler un travail ou un examen, ou se poursuivre chaque semaine selon les besoins et les disponibilités.'],
    ['Offrez-vous du tutorat d’été?', 'Oui. Les séances d’été peuvent maintenir les acquis, combler certaines lacunes et préparer la prochaine année.'],
    ['Comment joindre Shine Bright?', `Appelez ou textez au ${phoneDisplay}, ou écrivez à ${email}.`],
  ],
};

const pagePairs = {
  '/': '/fr', '/about': '/fr/a-propos', '/services': '/fr/services', '/resources': '/fr/ressources', '/testimonials': '/fr/temoignages', '/contact': '/fr/contact', '/privacy': '/fr/confidentialite', '/terms': '/fr/conditions',
};
for (const service of services) pagePairs[service.enPath] = service.frPath;
const reversePairs = Object.fromEntries(Object.entries(pagePairs).map(([en, fr]) => [fr, en]));

const cleanPath = (path) => path === '/' ? '/' : path.replace(/\/$/, '');
const pathToFile = (path) => path === '/' ? 'index.html' : `${path.replace(/^\//, '')}/index.html`;
const esc = (value = '') => String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);
const json = (value) => JSON.stringify(value).replace(/</g, '\\u003c');
const list = (items) => `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
const pills = (items) => `<ul class="pill-list">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
const button = (label, href = bookingUrl, className = 'button button-primary', external = true) => `<a class="${className}" href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(label)} <span aria-hidden="true">→</span></a>`;

function nav(locale, current = '') {
  const fr = locale === 'fr';
  const links = fr ? [
    ['Accueil', '/fr'], ['À propos', '/fr/a-propos'], ['Services', '/fr/services'], ['Examens d’entrée', services[3].frPath], ['En ligne', services[7].frPath], ['Ressources', '/fr/ressources'], ['Témoignages', '/fr/temoignages'], ['Contact', '/fr/contact'],
  ] : [
    ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Entrance exams', services[3].enPath], ['Online', services[7].enPath], ['Resources', '/resources'], ['Testimonials', '/testimonials'], ['Contact', '/contact'],
  ];
  const navLinks = links.map(([label, href]) => `<a href="${href}"${current === href ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const alt = fr ? reversePairs[current] || '/' : pagePairs[current] || '/fr';
  return `
    <div class="topbar"><div class="container"><p>${fr ? 'Tutorat personnalisé à Montréal et en ligne partout au Québec' : 'Personalized tutoring in Montreal and online across Québec'}</p><a href="${phoneHref}">${fr ? 'Appelez ou textez' : 'Call or text'} ${phoneDisplay}</a></div></div>
    <header class="site-header">
      <div class="container nav-row">
        <a class="brand" href="${fr ? '/fr' : '/'}"><img src="/assets/images/logo.png" width="62" height="62" alt="Shine Bright Tutoring MTL"><span>SHINE BRIGHT<small>Tutoring MTL</small></span></a>
        <nav class="desktop-nav" aria-label="${fr ? 'Navigation principale' : 'Main navigation'}">${navLinks}</nav>
        <div class="nav-tools"><a class="lang-link" href="${alt}" lang="${fr ? 'en' : 'fr'}">${fr ? 'EN' : 'FR'}</a><a class="button button-sun header-book" href="${bookingUrl}" target="_blank" rel="noopener noreferrer">${fr ? 'Réserver' : 'Book now'}</a><button class="menu-button" type="button" aria-label="${fr ? 'Ouvrir le menu' : 'Open menu'}" aria-expanded="false" data-menu-button><span></span></button></div>
      </div>
      <nav class="mobile-menu" aria-label="${fr ? 'Navigation mobile' : 'Mobile navigation'}" data-open="false" data-mobile-menu>${navLinks}<a href="${alt}" lang="${fr ? 'en' : 'fr'}">${fr ? 'View in English' : 'Voir en français'}</a><a class="button button-sun" href="${bookingUrl}" target="_blank" rel="noopener noreferrer">${fr ? 'Réserver maintenant' : 'Book now'}</a></nav>
    </header>`;
}

function footer(locale) {
  const fr = locale === 'fr';
  return `
    <footer class="site-footer"><div class="container footer-grid">
      <div class="footer-brand"><img src="/assets/images/logo.png" width="86" height="86" alt=""><h2>Shine Bright Tutoring MTL</h2><p>${fr ? 'Un soutien scolaire individuel, chaleureux et professionnel à Montréal et en ligne partout au Québec.' : 'Warm, professional one-on-one academic support in Montreal and online across Québec.'}</p></div>
      <div class="footer-column"><h3>${fr ? 'Explorer' : 'Explore'}</h3><a href="${fr ? '/fr/a-propos' : '/about'}">${fr ? 'À propos' : 'About'}</a><a href="${fr ? '/fr/services' : '/services'}">Services</a><a href="${fr ? '/fr/temoignages' : '/testimonials'}">${fr ? 'Témoignages' : 'Testimonials'}</a><a href="${fr ? '/fr/ressources' : '/resources'}">${fr ? 'Ressources' : 'Resources'}</a></div>
      <div class="footer-column"><h3>${fr ? 'Nous joindre' : 'Connect'}</h3><a href="${phoneHref}">${phoneDisplay}</a><a href="mailto:${email}">${email}</a><a href="${social.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a><a href="${social.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a><a href="${social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      <div class="footer-column"><h3>${fr ? 'Réserver et détails' : 'Book & details'}</h3><a href="${bookingUrl}" target="_blank" rel="noopener noreferrer">${fr ? 'Réserver sur Setmore' : 'Book on Setmore'}</a><a href="${social.founder}" target="_blank" rel="noopener noreferrer">Adriana Trengia — LinkedIn</a><a href="${fr ? '/fr/confidentialite' : '/privacy'}">${fr ? 'Confidentialité' : 'Privacy'}</a><a href="${fr ? '/fr/conditions' : '/terms'}">${fr ? 'Conditions' : 'Terms'}</a></div>
    </div><div class="container footer-bottom"><span>© <span data-year></span> Shine Bright Tutoring MTL</span><span>${fr ? 'Est de Montréal · En ligne partout au Québec' : 'East End Montreal · Online across Québec'}</span></div></footer>
    <a class="button button-sun mobile-book" href="${bookingUrl}" target="_blank" rel="noopener noreferrer">${fr ? 'Réserver une séance' : 'Book a tutoring session'}</a>`;
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org', '@type': ['LocalBusiness', 'EducationalOrganization'],
    name: 'Shine Bright Tutoring MTL', url: siteUrl, logo: `${siteUrl}/assets/images/logo.png`, image: `${siteUrl}/og.png`,
    telephone: phoneDisplay, email, founder: { '@type': 'Person', name: 'Adriana Trengia', sameAs: social.founder },
    areaServed: [{ '@type': 'City', name: 'Montreal' }, { '@type': 'AdministrativeArea', name: 'Québec' }],
    sameAs: [social.instagram, social.facebook, social.linkedin],
  };
}

function layout({ locale, path, title, description, body, current = path, schemas = [] }) {
  const fr = locale === 'fr';
  const alt = fr ? reversePairs[path] || '/' : pagePairs[path] || '/fr';
  const fullTitle = title.includes('Shine Bright') ? title : `${title} | Shine Bright Tutoring MTL`;
  const scripts = [organizationSchema(), ...schemas].map((item) => `<script type="application/ld+json">${json(item)}</script>`).join('\n');
  return `<!doctype html>
<html lang="${fr ? 'fr-CA' : 'en-CA'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(fullTitle)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${siteUrl}${path === '/' ? '' : path}">
  <link rel="alternate" hreflang="${fr ? 'fr-CA' : 'en-CA'}" href="${siteUrl}${path === '/' ? '' : path}">
  <link rel="alternate" hreflang="${fr ? 'en-CA' : 'fr-CA'}" href="${siteUrl}${alt === '/' ? '' : alt}">
  <link rel="alternate" hreflang="x-default" href="${siteUrl}">
  <meta property="og:type" content="website"><meta property="og:site_name" content="Shine Bright Tutoring MTL"><meta property="og:locale" content="${fr ? 'fr_CA' : 'en_CA'}">
  <meta property="og:title" content="${esc(fullTitle)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${siteUrl}${path === '/' ? '' : path}"><meta property="og:image" content="${siteUrl}/og.png">
  <meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#D5DCFA">
  <link rel="icon" href="/favicon.png" sizes="96x96"><link rel="stylesheet" href="/assets/site.css">
  ${scripts}
</head>
<body>
  <a class="skip-link" href="#main">${fr ? 'Aller au contenu' : 'Skip to content'}</a>
  ${nav(locale, current)}
  <main id="main">${body}</main>
  ${footer(locale)}
  <script src="/assets/site.js" defer></script>
</body>
</html>`;
}

const heading = (eyebrow, title, text = '', center = false) => `<div class="section-heading${center ? ' center' : ''}"><p class="eyebrow">${esc(eyebrow)}</p><h2>${esc(title)}</h2>${text ? `<p>${esc(text)}</p>` : ''}</div>`;
const faqMarkup = (items) => `<div class="faq-list">${items.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
const faqSchema = (items) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const testimonialMarkup = (items, locale) => `<div class="testimonial-grid">${items.map(([quote, by]) => `<figure class="testimonial"><div class="stars" aria-label="5 stars">★★★★★</div><blockquote>“${esc(quote)}”</blockquote><figcaption>— ${esc(by)}</figcaption>${locale === 'fr' ? '<small>Témoignage original fourni en anglais</small>' : ''}</figure>`).join('')}</div>`;

function bookingBand(locale) {
  const fr = locale === 'fr';
  return `<section class="booking-band"><div><p class="eyebrow">${fr ? 'Réservation simple' : 'Simple booking'}</p><h2>${fr ? 'Choisissez un service et une plage horaire.' : 'Choose a service and a time that works.'}</h2><p>${fr ? 'La page Setmore officielle affiche les services, les disponibilités et les détails actuels.' : 'The official Setmore page shows current services, availability, and booking details.'}</p></div><div class="button-row">${button(fr ? 'Ouvrir la réservation' : 'Open booking', bookingUrl, 'button button-sun')}<a class="button button-secondary" href="${phoneHref}">${phoneDisplay}</a></div></section>`;
}

function serviceCards(locale, subset = services) {
  const fr = locale === 'fr';
  return `<div class="card-grid">${subset.map((service, index) => `<article class="card"><span class="card-number">${String(index + 1).padStart(2, '0')}</span><h3>${esc(fr ? service.frShort : service.enShort)}</h3><p>${esc(fr ? service.frIntro : service.enIntro)}</p><a href="${fr ? service.frPath : service.enPath}">${fr ? 'Découvrir ce service' : 'Explore this service'} →</a></article>`).join('')}</div>`;
}

function homePage(locale) {
  const fr = locale === 'fr';
  const path = fr ? '/fr' : '/';
  const faq = homeFaq[locale];
  const body = `
    <section class="hero"><div class="container hero-grid">
      <div class="hero-copy"><p class="eyebrow">${fr ? 'Montréal · En ligne partout au Québec' : 'Montreal · Online across Québec'}</p><h1>${fr ? 'Tutorat personnalisé à Montréal et en ligne partout au Québec' : 'Personalized Tutoring in Montreal and Online Across Québec'}</h1><p class="lead">${fr ? 'Un soutien scolaire individuel pour les élèves du primaire, du secondaire et les étudiants du cégep — conçu pour bâtir la confiance, renforcer les acquis et aider chaque élève à rayonner.' : 'One-on-one academic support for elementary, high school, and CEGEP students — designed to build confidence, strengthen skills, and help students shine.'}</p><div class="button-row">${button(fr ? 'Réserver une séance' : 'Book a tutoring session')}${button(fr ? 'Explorer les services' : 'Explore services', '#services', 'button button-secondary', false)}</div><div class="trust-note"><span>${fr ? 'Au service des familles depuis 6 ans — et en pleine croissance' : 'Serving families for 6 years and growing'}</span><a href="${phoneHref}">${fr ? 'Questions? Appelez ou textez' : 'Questions? Call or text'} ${phoneDisplay}</a></div></div>
      <div class="hero-portrait"><img src="/assets/images/adriana-headshot.jpg" width="1150" height="1500" fetchpriority="high" alt="${fr ? 'Adriana Trengia, fondatrice de Shine Bright Tutoring MTL' : 'Adriana Trengia, founder of Shine Bright Tutoring MTL'}"><p class="portrait-label">${fr ? 'Voici Adriana' : 'Meet Adriana'}<small>${fr ? 'Fondatrice, éducatrice et tutrice locale' : 'Founder, educator & local tutor'}</small></p></div>
    </div></section>
    <section class="trust-strip"><div class="container trust-grid"><div><strong>6</strong><span>${fr ? 'ans auprès des familles' : 'years supporting families'}</span></div><div><strong>1:1</strong><span>${fr ? 'soutien personnalisé' : 'personalized support'}</span></div><div><strong>3</strong><span>${fr ? 'niveaux : primaire à cégep' : 'levels: elementary to CEGEP'}</span></div><div><strong>QC</strong><span>${fr ? 'en ligne partout au Québec' : 'online across Québec'}</span></div></div></section>
    <section class="section" id="services"><div class="container">${heading(fr ? 'Comment pouvons-nous aider?' : 'How can we help?', fr ? 'Un soutien qui correspond au moment présent.' : 'The right support for what is happening now.', fr ? 'Un devoir difficile, un examen à venir ou un accompagnement régulier : chaque séance commence par les besoins réels de l’élève.' : 'One difficult assignment, an upcoming exam, or ongoing support: every session begins with what the student needs right now.')}${serviceCards(locale)}</div></section>
    <section class="section surface-blue"><div class="container feature-grid"><div class="photo-card classroom"><img src="/assets/images/adriana-classroom.jpg" width="1600" height="1200" loading="lazy" alt="${fr ? 'Adriana dans une classe à Montréal' : 'Adriana in a Montreal classroom'}"></div><div>${heading(fr ? 'Pourquoi les familles nous choisissent' : 'Why families choose Shine Bright', fr ? 'Des explications claires. Un espace calme. Une confiance qui grandit.' : 'Clear explanations. A calm space. Confidence that grows.')}<ul class="check-list">${(fr ? ['Soutien individuel et personnalisé', 'Tuteurs patients et compétents', 'Explications claires', 'Approche axée sur la confiance', 'Apprentissage sans pression', 'Préparation structurée', 'Pratique ciblée', 'Expérience scolaire locale'] : ['Personalized one-on-one support', 'Patient and knowledgeable tutors', 'Clear explanations', 'Confidence-building approach', 'Low-stress learning', 'Structured exam preparation', 'Targeted practice', 'Local education experience']).map((item) => `<li>${esc(item)}</li>`).join('')}</ul></div></div></section>
    <section class="section"><div class="container feature-grid"><div><p class="eyebrow">${fr ? '6e année · Une préparation calme' : 'Grade 6 · Calm, structured preparation'}</p><h2>${fr ? 'Préparation aux examens d’entrée au secondaire' : 'High school entrance exam prep'}</h2><p class="lead">${fr ? 'Un programme personnalisé pour connaître le format, pratiquer les bonnes habiletés et aborder l’examen avec plus de confiance.' : 'A personalized program to learn the format, practise the right skills, and approach exam day with more confidence.'}</p>${pills(fr ? ['Français', 'Anglais', 'Raisonnement mathématique', 'Compréhension de lecture', 'Écriture', 'Vocabulaire', 'Logique', 'Pratique chronométrée'] : ['French', 'English', 'Mathematical reasoning', 'Reading comprehension', 'Writing', 'Vocabulary', 'Logic', 'Timed practice'])}<div class="button-row">${button(fr ? 'Réserver la préparation' : 'Reserve entrance exam prep')}${button(fr ? 'Voir le programme' : 'See the program', fr ? services[3].frPath : services[3].enPath, 'button button-secondary', false)}</div></div><div class="photo-card"><img src="/assets/images/adriana-graduation.jpg" width="1066" height="1600" loading="lazy" alt="${fr ? 'Portrait de graduation d’Adriana Trengia' : 'Graduation portrait of Adriana Trengia'}"></div></div></section>
    <section class="section surface-lilac"><div class="container">${heading(fr ? 'Comment fonctionne le tutorat' : 'How tutoring works', fr ? 'Trois étapes simples pour commencer.' : 'Three simple steps to get started.', '', true)}<div class="steps"><article class="step"><b>01</b><h3>${fr ? 'Parlez-nous du besoin' : 'Tell us what is needed'}</h3><p>${fr ? 'Partagez le niveau, la matière et ce qui semble difficile.' : 'Share the level, subject, and what feels difficult right now.'}</p></article><article class="step"><b>02</b><h3>${fr ? 'Trouvez le bon soutien' : 'Find the right support'}</h3><p>${fr ? 'Nous vous aidons à choisir le service et le format appropriés.' : 'We help you choose the right service and format.'}</p></article><article class="step"><b>03</b><h3>${fr ? 'Avancez avec un plan' : 'Move forward with a plan'}</h3><p>${fr ? 'Chaque séance cible la compréhension, la pratique et la confiance.' : 'Each session focuses on understanding, practice, and confidence.'}</p></article></div></div></section>
    <section class="section"><div class="container">${bookingBand(locale)}</div></section>
    <section class="section surface"><div class="container feature-grid"><div class="photo-card"><img src="/assets/images/adriana-headshot.jpg" width="1150" height="1500" loading="lazy" alt="${fr ? 'Adriana Trengia, fondatrice' : 'Adriana Trengia, founder'}"></div><div>${heading(fr ? 'À propos de la fondatrice' : 'Meet the founder', fr ? 'Adriana Trengia, éducatrice locale et fondatrice de Shine Bright.' : 'Adriana Trengia, local educator and founder of Shine Bright.')}<p class="lead">${fr ? 'Adriana a fondé Shine Bright Tutoring MTL pour offrir un soutien patient, personnalisé et centré sur le progrès réel. Depuis six ans, l’entreprise accompagne des familles de l’Est de Montréal et en ligne partout au Québec.' : 'Adriana founded Shine Bright Tutoring MTL to provide patient, personalized support focused on real progress. For six years, the company has supported families in Montreal’s East End and online across Québec.'}</p><div class="button-row" style="margin-top:1.5rem">${button(fr ? 'En savoir plus' : 'More about Shine Bright', fr ? '/fr/a-propos' : '/about', 'button button-secondary', false)}</div></div></div></section>
    <section class="section"><div class="container">${heading(fr ? 'Témoignages de parents' : 'Real parent feedback', fr ? 'Ce que les familles disent de leur expérience.' : 'What families say about the experience.', fr ? 'Commentaires réels fournis par des familles Shine Bright.' : 'Real comments supplied by Shine Bright families.', true)}${testimonialMarkup(testimonials.slice(0, 3), locale)}<div class="button-row" style="justify-content:center;margin-top:2rem">${button(fr ? 'Lire plus de témoignages' : 'Read more parent stories', fr ? '/fr/temoignages' : '/testimonials', 'button button-secondary', false)}</div></div></section>
    <section class="section surface-blue"><div class="container">${heading(fr ? 'Questions fréquentes' : 'Parent questions', fr ? 'Des réponses simples avant de commencer.' : 'Simple answers before you begin.', '', true)}${faqMarkup(faq)}</div></section>
    <section class="section"><div class="container"><div class="booking-band"><div><p class="eyebrow">${fr ? 'Prêt à commencer?' : 'Ready to begin?'}</p><h2>${fr ? 'Prêt à aider votre enfant à rayonner?' : 'Ready to help your child shine?'}</h2><p>${fr ? 'Réservez, écrivez-nous ou suivez Shine Bright sur Instagram.' : 'Book a session, contact Shine Bright, or follow along on Instagram.'}</p></div><div class="button-row">${button(fr ? 'Réserver' : 'Book now', bookingUrl, 'button button-sun')}${button(fr ? 'Nous joindre' : 'Contact us', fr ? '/fr/contact' : '/contact', 'button button-secondary', false)}</div></div></div></section>`;
  return layout({ locale, path, title: fr ? 'Tutorat personnalisé à Montréal et en ligne' : 'Personalized Tutoring in Montreal and Online Across Québec', description: fr ? 'Tutorat individuel au primaire, au secondaire et au cégep à Montréal et en ligne partout au Québec.' : 'One-on-one tutoring for elementary, high school, and CEGEP students in Montreal and online across Québec.', body, schemas: [faqSchema(faq)] });
}

function servicesPage(locale) {
  const fr = locale === 'fr'; const path = fr ? '/fr/services' : '/services';
  const body = `<section class="subhero"><div class="container"><p class="eyebrow">${fr ? 'Primaire · Secondaire · Cégep' : 'Elementary · High school · CEGEP'}</p><h1>${fr ? 'Des services de tutorat pour chaque étape.' : 'Tutoring services for every learning stage.'}</h1><p class="lead">${fr ? 'Choisissez un service ou communiquez avec nous pour trouver le soutien qui correspond aux besoins actuels de l’élève.' : 'Choose a service or contact us to find support that fits the student’s current needs.'}</p></div></section><section class="section"><div class="container">${serviceCards(locale)}</div></section><section class="section surface-lilac"><div class="container">${heading(fr ? 'Vous ne savez pas quoi choisir?' : 'Not sure which service fits?', fr ? 'Nous vous aiderons à choisir.' : 'We will help you choose.', fr ? 'Partagez le niveau, la matière et ce qui semble difficile. Nous vous orienterons vers le bon service.' : 'Share the student’s level, subject, and what feels difficult. We will point you toward the right service.', true)}<div class="button-row" style="justify-content:center">${button(fr ? 'Nous joindre' : 'Contact Shine Bright', fr ? '/fr/contact' : '/contact', 'button button-primary', false)}${button(fr ? 'Voir les disponibilités' : 'See availability')}</div></div></section>`;
  return layout({ locale, path, title: fr ? 'Services de tutorat à Montréal' : 'Tutoring Services in Montreal', description: fr ? 'Explorez le tutorat primaire, secondaire, cégep, examens, devoirs, été et en ligne.' : 'Explore elementary, high school, CEGEP, entrance exam, homework, summer, and online tutoring services.', body });
}

function servicePage(service, locale) {
  const fr = locale === 'fr';
  const path = fr ? service.frPath : service.enPath;
  const title = fr ? service.frTitle : service.enTitle;
  const intro = fr ? service.frIntro : service.enIntro;
  const forWho = fr ? service.frFor : service.enFor;
  const challenges = fr ? service.frChallenges : service.enChallenges;
  const support = fr ? service.frSupport : service.enSupport;
  const subjects = fr ? service.frSubjects : service.enSubjects;
  const faq = fr ? service.frFaq : service.enFaq;
  const related = service.related.map((key) => services.find((item) => item.key === key));
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: title, description: intro, provider: { '@type': 'EducationalOrganization', name: 'Shine Bright Tutoring MTL', url: siteUrl }, areaServed: [{ '@type': 'City', name: 'Montreal' }, { '@type': 'AdministrativeArea', name: 'Québec' }], url: `${siteUrl}${path}` };
  const body = `<section class="subhero"><div class="container"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${fr ? '/fr' : '/'}">${fr ? 'Accueil' : 'Home'}</a> / <a href="${fr ? '/fr/services' : '/services'}">Services</a> / ${esc(fr ? service.frShort : service.enShort)}</nav><p class="eyebrow">Shine Bright Tutoring MTL</p><h1>${esc(title)}</h1><p class="lead">${esc(intro)}</p><div class="button-row" style="justify-content:center;margin-top:1.5rem">${button(fr ? 'Réserver maintenant' : 'Book now')}${button(fr ? 'Poser une question' : 'Ask a question', fr ? '/fr/contact' : '/contact', 'button button-secondary', false)}</div></div></section>
    <section class="section"><div class="container service-layout"><article>
      <div class="content-block"><h2>${fr ? 'À qui s’adresse ce service?' : 'Who this service is for'}</h2><p class="lead">${esc(forWho)}</p></div>
      <div class="content-block"><h2>${fr ? 'Défis fréquents' : 'Common challenges'}</h2>${list(challenges)}</div>
      <div class="content-block"><h2>${fr ? 'Comment Shine Bright aide' : 'How Shine Bright helps'}</h2>${list(support)}</div>
      <div class="content-block"><h2>${fr ? 'Matières et objectifs' : 'Subjects and goals'}</h2>${pills(subjects)}</div>
      <div class="content-block"><h2>${fr ? 'Questions fréquentes' : 'Frequently asked questions'}</h2>${faqMarkup(faq)}</div>
    </article><aside class="sidebar-card"><p class="eyebrow">${fr ? 'Prochaine étape' : 'Next step'}</p><h3>${fr ? 'Trouvez le bon moment.' : 'Find a time that works.'}</h3><p>${fr ? 'Consultez les services et les disponibilités actuelles sur la page Setmore officielle.' : 'See current services and availability on the official Setmore page.'}</p>${button(fr ? 'Ouvrir Setmore' : 'Open Setmore')}<a href="${phoneHref}">${phoneDisplay}</a><a href="mailto:${email}">${email}</a></aside></div></section>
    <section class="section surface"><div class="container">${heading(fr ? 'Services connexes' : 'Related support', fr ? 'Explorez d’autres façons d’aider.' : 'Explore other ways to help.', '', true)}<div class="related-grid">${related.map((item) => `<article class="card"><h3>${esc(fr ? item.frShort : item.enShort)}</h3><p>${esc(fr ? item.frIntro : item.enIntro)}</p><a href="${fr ? item.frPath : item.enPath}">${fr ? 'Voir le service' : 'View service'} →</a></article>`).join('')}</div></div></section><section class="section"><div class="container">${bookingBand(locale)}</div></section>`;
  return layout({ locale, path, title, description: fr ? service.frMeta : service.enMeta, body, current: path, schemas: [schema, faqSchema(faq), { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: fr ? 'Accueil' : 'Home', item: `${siteUrl}${fr ? '/fr' : ''}` }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}${fr ? '/fr/services' : '/services'}` }, { '@type': 'ListItem', position: 3, name: title, item: `${siteUrl}${path}` }] }] });
}

function aboutPage(locale) {
  const fr = locale === 'fr'; const path = fr ? '/fr/a-propos' : '/about';
  const body = `<section class="subhero"><div class="container"><p class="eyebrow">${fr ? 'Une entreprise locale qui grandit' : 'A growing local tutoring company'}</p><h1>${fr ? 'À propos de Shine Bright et d’Adriana Trengia' : 'About Shine Bright and Adriana Trengia'}</h1><p class="lead">${fr ? 'Un soutien scolaire personnalisé fondé sur la patience, la clarté et la confiance.' : 'Personalized academic support built on patience, clarity, and confidence.'}</p></div></section><section class="section"><div class="container feature-grid"><div class="photo-card"><img src="/assets/images/adriana-graduation.jpg" width="1066" height="1600" alt="${fr ? 'Portrait de graduation d’Adriana Trengia' : 'Graduation portrait of Adriana Trengia'}"></div><div>${heading(fr ? 'La fondatrice' : 'Meet the founder', 'Adriana Trengia')}<p class="lead">${fr ? 'Adriana est la fondatrice de Shine Bright Tutoring MTL, une éducatrice locale et une tutrice qui se consacre au progrès des élèves.' : 'Adriana is the founder of Shine Bright Tutoring MTL, a local educator and tutor dedicated to student progress.'}</p><p style="margin-top:1rem">${fr ? 'Elle a créé Shine Bright afin d’offrir un soutien individuel où les élèves peuvent poser leurs questions, comprendre les notions à leur rythme et bâtir des habiletés durables. Son approche tient compte du niveau, des besoins et de la façon d’apprendre de chaque élève.' : 'She created Shine Bright to offer one-on-one support where students can ask questions, understand ideas at their pace, and build lasting skills. Her approach begins with each learner’s level, needs, and way of understanding.'}</p><p style="margin-top:1rem">${fr ? 'Depuis six ans, l’entreprise accompagne des familles de l’Est de Montréal et en ligne partout au Québec. L’objectif est d’aider les élèves à améliorer leurs compétences tout en se sentant plus capables et confiants.' : 'For six years, the company has supported families in Montreal’s East End and online across Québec. The goal is to strengthen academic skills while helping students feel more capable and confident.'}</p><div class="button-row" style="margin-top:1.5rem">${button(fr ? 'Réserver une séance' : 'Book a session')}${button('LinkedIn', social.founder, 'button button-secondary')}</div></div></div></section><section class="section surface-blue"><div class="container">${heading(fr ? 'L’approche Shine Bright' : 'The Shine Bright approach', fr ? 'Personnalisée, claire et encourageante.' : 'Personalized, clear, and encouraging.', '', true)}<div class="steps"><article class="step"><b>01</b><h3>${fr ? 'Écouter' : 'Listen'}</h3><p>${fr ? 'Comprendre le niveau, les objectifs et les préoccupations de la famille.' : 'Understand the student’s level, goals, and the family’s concerns.'}</p></article><article class="step"><b>02</b><h3>${fr ? 'Expliquer' : 'Explain'}</h3><p>${fr ? 'Présenter les notions clairement et en étapes accessibles.' : 'Present concepts clearly and in manageable steps.'}</p></article><article class="step"><b>03</b><h3>${fr ? 'Renforcer' : 'Strengthen'}</h3><p>${fr ? 'Pratiquer de façon ciblée et souligner les progrès réels.' : 'Practise with purpose and recognize real progress.'}</p></article></div></div></section><section class="section"><div class="container">${bookingBand(locale)}</div></section>`;
  return layout({ locale, path, title: fr ? 'À propos de Shine Bright Tutoring MTL' : 'About Shine Bright Tutoring MTL', description: fr ? 'Découvrez Adriana Trengia et l’approche personnalisée de Shine Bright Tutoring MTL.' : 'Meet founder Adriana Trengia and learn about Shine Bright Tutoring MTL’s personalized tutoring approach.', body });
}

function testimonialsPage(locale) {
  const fr = locale === 'fr'; const path = fr ? '/fr/temoignages' : '/testimonials';
  const body = `<section class="subhero"><div class="container"><p class="eyebrow">${fr ? 'Commentaires de familles' : 'Feedback from families'}</p><h1>${fr ? 'De vrais témoignages de parents.' : 'Real stories from Shine Bright parents.'}</h1><p class="lead">${fr ? 'Ces commentaires ont été fournis par des familles Shine Bright. Aucun témoignage n’a été inventé.' : 'These comments were supplied by Shine Bright families. No testimonials have been invented.'}</p></div></section><section class="section surface"><div class="container">${testimonialMarkup(testimonials, locale)}</div></section><section class="section"><div class="container">${bookingBand(locale)}</div></section>`;
  return layout({ locale, path, title: fr ? 'Témoignages de parents' : 'Parent Testimonials', description: fr ? 'Lisez de vrais témoignages de familles qui ont choisi Shine Bright Tutoring MTL.' : 'Read real parent feedback from families who chose Shine Bright Tutoring MTL.', body });
}

function resourcesPage(locale) {
  const fr = locale === 'fr'; const path = fr ? '/fr/ressources' : '/resources';
  const body = `<section class="subhero"><div class="container"><p class="eyebrow">${fr ? 'Créées par une enseignante et tutrice locale' : 'Created by a teacher and local tutor'}</p><h1>${fr ? 'Mots cachés éducatifs et ressources d’apprentissage' : 'Educational word searches and learning resources'}</h1><p class="lead">${fr ? 'Des ressources amusantes pour la classe, la pratique du vocabulaire et l’enrichissement.' : 'Fun resources for classroom use, vocabulary practice, and enrichment.'}</p></div></section><section class="section"><div class="container">${heading(fr ? 'Série A and A Word Search' : 'A and A Word Search series', fr ? 'Des mots cachés personnalisés pour apprendre en s’amusant.' : 'Personalized educational word searches that make practice enjoyable.', fr ? 'Cette section est complémentaire; le tutorat personnalisé demeure le principal service de Shine Bright.' : 'This is a complementary resource; personalized tutoring remains Shine Bright’s primary service.')}<div class="resource-grid">${resources.map((href, index) => `<article class="resource-card"><div class="book-cover"><strong>A and A<br>Word Search</strong><span>${fr ? 'Volume' : 'Volume'} ${index + 1}</span></div><h3>${fr ? 'Mot caché éducatif' : 'Educational word search'}</h3><p>${fr ? 'Pour l’apprentissage ludique, le vocabulaire, la classe et l’enrichissement.' : 'For fun learning, vocabulary practice, classroom use, and enrichment.'}</p><a href="${href}" target="_blank" rel="noopener noreferrer">${fr ? 'Voir sur Amazon' : 'View on Amazon'} →</a></article>`).join('')}</div></div></section><section class="section surface-lilac"><div class="container">${heading(fr ? 'Besoin d’un soutien personnalisé?' : 'Looking for personalized support?', fr ? 'Le tutorat commence par les besoins de l’élève.' : 'Tutoring begins with the student’s needs.', '', true)}<div class="button-row" style="justify-content:center">${button(fr ? 'Réserver une séance' : 'Book tutoring')}${button(fr ? 'Nous joindre' : 'Contact us', fr ? '/fr/contact' : '/contact', 'button button-secondary', false)}</div></div></section>`;
  return layout({ locale, path, title: fr ? 'Ressources éducatives et mots cachés' : 'Educational Resources and Word Searches', description: fr ? 'Découvrez les mots cachés éducatifs créés par une enseignante et tutrice locale.' : 'Explore custom educational word searches created by a teacher and local tutor.', body });
}

function contactPage(locale) {
  const fr = locale === 'fr'; const path = fr ? '/fr/contact' : '/contact';
  const body = `<section class="subhero"><div class="container"><p class="eyebrow">${fr ? 'Nous sommes là pour vous aider' : 'We are here to help'}</p><h1>${fr ? 'Parlez-nous des besoins de votre enfant.' : 'Tell us what your child needs.'}</h1><p class="lead">${fr ? 'Vous ne savez pas quel service choisir? Communiquez avec nous et nous vous aiderons à trouver un bon point de départ.' : 'Not sure which service fits? Contact us and we will help you find a good starting point.'}</p></div></section><section class="section surface"><div class="container contact-grid"><div>${heading(fr ? 'Contact direct' : 'Contact Shine Bright', fr ? 'Une question avant de réserver?' : 'A question before booking?', fr ? 'Appelez, textez ou envoyez un courriel. Vous pouvez également consulter les disponibilités sur Setmore.' : 'Call, text, or email. You can also view current availability on Setmore.')}<div class="contact-list"><a href="${phoneHref}">${fr ? 'Téléphone' : 'Phone'}: ${phoneDisplay}</a><a href="mailto:${email}">${fr ? 'Courriel' : 'Email'}: ${email}</a><a href="${bookingUrl}" target="_blank" rel="noopener noreferrer">${fr ? 'Réservation officielle sur Setmore' : 'Official Setmore booking page'} →</a><a href="${social.instagram}" target="_blank" rel="noopener noreferrer">Instagram →</a></div></div><form class="form-card" data-contact-form data-language="${locale}"><div class="field-grid"><div class="field"><label for="name">${fr ? 'Nom du parent' : 'Parent name'}</label><input id="name" name="name" autocomplete="name" required></div><div class="field"><label for="email">${fr ? 'Courriel' : 'Email'}</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="field"><label for="phone">${fr ? 'Téléphone' : 'Phone'}</label><input id="phone" name="phone" type="tel" autocomplete="tel"></div><div class="field"><label for="level">${fr ? 'Niveau de l’élève' : 'Student level'}</label><select id="level" name="level" required><option value="">${fr ? 'Choisir' : 'Choose'}</option><option>${fr ? 'Primaire' : 'Elementary'}</option><option>${fr ? 'Secondaire' : 'High school'}</option><option>CEGEP</option><option>${fr ? 'Examens d’entrée' : 'Entrance exams'}</option></select></div><div class="field"><label for="subjectNeeded">${fr ? 'Matière recherchée' : 'Subject needed'}</label><input id="subjectNeeded" name="subjectNeeded" required></div><div class="field"><label for="format">${fr ? 'Format préféré' : 'Preferred format'}</label><select id="format" name="format" required><option value="">${fr ? 'Choisir' : 'Choose'}</option><option>${fr ? 'En ligne' : 'Online'}</option><option>${fr ? 'En personne' : 'In person'}</option><option>${fr ? 'Je ne sais pas' : 'Not sure'}</option></select></div><div class="field full"><label for="message">Message</label><textarea id="message" name="message" required></textarea></div></div><button class="button button-primary" type="submit">${fr ? 'Préparer le courriel' : 'Prepare email'}</button><p class="form-note">${fr ? 'Ce formulaire ouvre votre application de courriel. Aucune donnée n’est stockée sur ce site.' : 'This form opens your email application. No form data is stored on this website.'}</p><p class="form-status" role="status" aria-live="polite" data-form-status></p></form></div></section>`;
  return layout({ locale, path, title: fr ? 'Contacter Shine Bright Tutoring MTL' : 'Contact Shine Bright Tutoring MTL', description: fr ? 'Communiquez avec Shine Bright pour du tutorat à Montréal ou en ligne partout au Québec.' : 'Contact Shine Bright for tutoring in Montreal or online across Québec.', body });
}

function legalPage(locale, type) {
  const fr = locale === 'fr'; const privacy = type === 'privacy';
  const path = fr ? (privacy ? '/fr/confidentialite' : '/fr/conditions') : (privacy ? '/privacy' : '/terms');
  const title = fr ? (privacy ? 'Politique de confidentialité' : 'Conditions d’utilisation') : (privacy ? 'Privacy Policy' : 'Terms of Use');
  const body = `<section class="subhero"><div class="container"><p class="eyebrow">Shine Bright Tutoring MTL</p><h1>${title}</h1><p class="lead">${fr ? 'Information claire sur l’utilisation de ce site Web.' : 'Clear information about using this website.'}</p></div></section><section class="section"><div class="container legal">${privacy ? (fr ? `<h2>Renseignements recueillis</h2><p>Ce site statique ne stocke pas les renseignements soumis dans le formulaire. Le formulaire prépare un courriel dans votre application de messagerie. Les réservations sont traitées sur la plateforme externe Setmore.</p><h2>Services externes</h2><p>Les liens vers Setmore, Instagram, Facebook, LinkedIn et Amazon vous dirigent vers leurs propres sites et politiques de confidentialité.</p><h2>Communication</h2><p>Si vous communiquez directement avec Shine Bright, les renseignements transmis servent à répondre à votre demande et à organiser les services.</p><h2>Contact</h2><p>Questions : <a href="mailto:${email}">${email}</a>.</p>` : `<h2>Information collected</h2><p>This static website does not store information entered in the contact form. The form prepares an email in your email application. Booking information is handled by the external Setmore platform.</p><h2>External services</h2><p>Links to Setmore, Instagram, Facebook, LinkedIn, and Amazon lead to their own websites and privacy policies.</p><h2>Direct communication</h2><p>If you contact Shine Bright directly, the information you provide is used to respond to your inquiry and arrange services.</p><h2>Contact</h2><p>Questions: <a href="mailto:${email}">${email}</a>.</p>`) : (fr ? `<h2>Objet du site</h2><p>Ce site présente les services de Shine Bright Tutoring MTL et permet aux familles de communiquer avec l’entreprise ou d’accéder à la réservation externe.</p><h2>Disponibilités et détails</h2><p>Les services, les horaires et les disponibilités peuvent changer. Consultez Setmore ou communiquez avec Shine Bright pour confirmer les détails actuels.</p><h2>Contenu éducatif</h2><p>Le contenu du site est fourni à titre informatif et ne constitue pas une garantie de résultats scolaires particuliers.</p><h2>Liens externes</h2><p>Shine Bright n’est pas responsable du fonctionnement ou du contenu des sites externes.</p>` : `<h2>Purpose of this website</h2><p>This website describes Shine Bright Tutoring MTL services and helps families contact the company or access external booking.</p><h2>Availability and current details</h2><p>Services, schedules, and availability may change. Check Setmore or contact Shine Bright to confirm current details.</p><h2>Educational information</h2><p>Website content is informational and does not guarantee particular academic outcomes.</p><h2>External links</h2><p>Shine Bright is not responsible for the operation or content of external websites.</p>`)}</div></section>`;
  return layout({ locale, path, title, description: fr ? `${title} de Shine Bright Tutoring MTL.` : `${title} for Shine Bright Tutoring MTL.`, body });
}

async function save(path, content) {
  const file = resolve(root, path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content, 'utf8');
}

const pages = [
  { path: '/', html: homePage('en') }, { path: '/fr', html: homePage('fr') },
  { path: '/services', html: servicesPage('en') }, { path: '/fr/services', html: servicesPage('fr') },
  { path: '/about', html: aboutPage('en') }, { path: '/fr/a-propos', html: aboutPage('fr') },
  { path: '/testimonials', html: testimonialsPage('en') }, { path: '/fr/temoignages', html: testimonialsPage('fr') },
  { path: '/resources', html: resourcesPage('en') }, { path: '/fr/ressources', html: resourcesPage('fr') },
  { path: '/contact', html: contactPage('en') }, { path: '/fr/contact', html: contactPage('fr') },
  { path: '/privacy', html: legalPage('en', 'privacy') }, { path: '/fr/confidentialite', html: legalPage('fr', 'privacy') },
  { path: '/terms', html: legalPage('en', 'terms') }, { path: '/fr/conditions', html: legalPage('fr', 'terms') },
];

for (const service of services) {
  pages.push({ path: service.enPath, html: servicePage(service, 'en') });
  pages.push({ path: service.frPath, html: servicePage(service, 'fr') });
}

for (const page of pages) await save(pathToFile(page.path), page.html);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${pages.map(({ path }) => {
  const alternate = pagePairs[path] || reversePairs[path];
  const locale = path.startsWith('/fr') ? 'fr-CA' : 'en-CA';
  const altLocale = locale === 'fr-CA' ? 'en-CA' : 'fr-CA';
  return `  <url><loc>${siteUrl}${path === '/' ? '' : path}</loc>${alternate ? `<xhtml:link rel="alternate" hreflang="${locale}" href="${siteUrl}${path === '/' ? '' : path}"/><xhtml:link rel="alternate" hreflang="${altLocale}" href="${siteUrl}${alternate === '/' ? '' : alternate}"/>` : ''}</url>`;
}).join('\n')}\n</urlset>\n`;
await save('sitemap.xml', sitemap);
await save('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

const notFoundBody = `<section class="subhero"><div class="container"><p class="eyebrow">404 · Page not found</p><h1>Let’s get you back on track.</h1><p class="lead">This page could not be found. Cette page est introuvable.</p><div class="button-row" style="justify-content:center;margin-top:1.5rem"><a class="button button-primary" href="/">English home</a><a class="button button-secondary" href="/fr">Accueil français</a></div></div></section>`;
await save('404.html', layout({ locale: 'en', path: '/404', title: 'Page not found', description: 'Return to the Shine Bright Tutoring MTL website to explore tutoring services or book a session.', body: notFoundBody, current: '' }));

console.log(`Generated ${pages.length} bilingual site pages plus 404.`);
