/**
 * tcawk7.js — Question bank for THE C UNIT ARC WEEKLY EXAM -6
 *
 * Bilingual formatting:
 *   - Questions : Bangla on line 1, English on line 2 (separated by "\n").
 *                 The renderer uses CSS `white-space: pre-line` so the
 *                 "\n" becomes a real line break.
 *   - Options   : both languages inline as  "বাংলা (English)".
 *   - English (1–12) and Bangla (13–24) sections are single-language
 *     on purpose — the source files give no translation for them.
 *
 * Index ranges:
 *   English 1–12 | Bangla 13–24 | ICT 25–36
 *   Math 37–60 | Economics 61–84 | Statistics 85–108  (⚠ not in circular)
 */

window.EXAM_QUESTIONS = [

/* ═══════════════ ENGLISH (1–12) — English only ═══════════════ */
{ index: 1,  subject: 'English', question: 'Rahat will be going to the US, -------------------- she ?',
  A: "isn't", B: "won't", C: "can't", D: "didn't", ansKey: 'B' },

{ index: 2,  subject: 'English', question: 'Choose the analogous pair of Affluent : Improvement',
  A: 'Wealthy : Opulent', B: 'Rich : Poor', C: 'Sick : Sad', D: 'Impecunious : Needy', ansKey: 'A' },

{ index: 3,  subject: 'English', question: 'Find the correct sentence.',
  A: 'We stayed for a short period of time in the hotel.',
  B: 'We stayed for a short period in the hotel.',
  C: 'We stayed during a short period in the hotel.',
  D: 'We were stayed for a short period in the hotel.',
  E: 'We did stayed for a short period of time in the hotel.',
  ansKey: 'B' },

{ index: 4,  subject: 'English', question: 'Find out the correct sentence?',
  A: 'It is I who is responsible for this.',
  B: 'It is I who am responsible for this.',
  C: 'One of the boys are absent',
  D: 'The pious is happy.',
  E: 'A pair of shoes are on the table.',
  ansKey: 'B' },

{ index: 5,  subject: 'English', question: 'Choose the correct sentence',
  A: 'The girl laughingly entered the room.',
  B: 'The girl laughing entered the room.',
  C: 'The girl laughed and entered the room.',
  D: 'The girl entered the room laughing.',
  E: 'The girl laughed entering the room.',
  ansKey: 'D' },

{ index: 6,  subject: 'English', question: 'Choose the correct sentence:',
  A: "Jahir's the guy who giving us a ride",
  B: "Jahir's the guy he giving us a ride.",
  C: "Jahir's the guy whose giving us a ride",
  D: "Jahir's the guy who's giving us a ride.",
  E: 'Jahir the guy who giving us a ride.',
  ansKey: 'D' },

{ index: 7,  subject: 'English', question: 'Change the voice of this sentence: He does not like people laughing at him.',
  A: 'People laughing at him are not liked by him',
  B: 'He does not like being laughed at',
  C: 'to be laughed at by people are not like by him',
  D: 'He does not like him being laughed at by people',
  ansKey: 'A' },

{ index: 8,  subject: 'English', question: '"Whom do you want?" Change into passive.',
  A: 'By whom you are wanted?',
  B: 'By whom are you wanted?',
  C: 'Whom is wanted by you?',
  D: 'Who is wanted by you?',
  ansKey: 'D' },

{ index: 9,  subject: 'English', question: '"Elizabeth unwillingly undertook the sea voyage." The passive form of the sentence is',
  A: 'The sea voyage was undertaken by Elizabeth unwillingly',
  B: 'The sea voyage is undertaken by Elizabeth unwillingly',
  C: 'Unwillingly by Elizabeth, the sea voyage undertaken.',
  D: 'The sea voyage had undertaken by Elizabeth unwillingly',
  ansKey: 'A' },

{ index: 10, subject: 'English', question: "'Sarcasm' is",
  A: 'a belief in everything that is',
  B: 'a special kind of body movement',
  C: 'a belief that nothing in this world is of any value',
  D: 'an ironical remark or comment',
  ansKey: 'D' },

{ index: 11, subject: 'English', question: 'Write the correct indirect speech: My grandfather said, "I will have a glass of milk at night."',
  A: 'My grandfather said that he will have a glass of milk at night.',
  B: 'My grandfather told that he can have a glass of milk at night',
  C: 'My grandfather said that he would have a glass of milk at night.',
  D: 'My grandfather said that he might have a glass of milk at night.',
  ansKey: 'C' },

{ index: 12, subject: 'English', question: 'Master : Crew :: Illness',
  A: 'Dominate : Opposition', B: 'Convene : Committee',
  C: 'Complex : Convex', D: 'Annul : Accept', ansKey: 'B' },

/* ═══════════════ BANGLA (13–24) — Bangla only ═══════════════ */
{ index: 13, subject: 'Bangla', question: '‘জনতা’ কোন প্রকার বিশেষ্য?',
  A: 'গুণবাচক', B: 'জাতিবাচক', C: 'সমষ্টিবাচক', D: 'ভাববাচক', ansKey: 'C' },

{ index: 14, subject: 'Bangla', question: '‘নিজে’ কোন ধরনের সর্বনাম?',
  A: 'আত্মবাচক', B: 'ব্যক্তিবাচক', C: 'প্রশ্নবাচক', D: 'নির্দেশক', ansKey: 'A' },

{ index: 15, subject: 'Bangla', question: '‘সে বই পড়ছে’ বাক্যে ‘পড়ছে’ কোন প্রকার ক্রিয়া (কর্মের উপস্থিতি অনুসারে)?',
  A: 'অকর্মক', B: 'সকর্মক', C: 'দ্বিকর্মক', D: 'যৌগিক', ansKey: 'B' },

{ index: 16, subject: 'Bangla', question: '‘ঝাড়ু দিয়ে ঘর সাফ’—এখানে ‘ঝাড়ু দিয়ে’ কোন কারক?',
  A: 'কর্তৃকারক', B: 'কর্মকারক', C: 'করণ কারক', D: 'অধিকরণ কারক', ansKey: 'C' },

{ index: 17, subject: 'Bangla', question: '‘জীবন ও বৃক্ষ’ গদ্যের মূল বার্তা কী?',
  A: 'নদীর মতো ধ্বংসাত্মক না হয়ে বৃক্ষের মতো বিকাশমান হওয়া',
  B: 'শুধু প্রকৃতির সৌন্দর্য উপভোগ করা',
  C: 'সামাজিক আভিজাত্য অর্জন করা',
  D: 'অর্থ উপার্জনকে জীবনের লক্ষ্য করা',
  ansKey: 'A' },

{ index: 18, subject: 'Bangla', question: '‘তাহারেই পড়ে মনে’ কবিতার কাব্যরূপ কী?',
  A: 'মহাকাব্য', B: 'সংলাপনির্ভর গীতিকবিতা', C: 'আখ্যানকাব্য', D: 'রূপক কবিতা', ansKey: 'B' },

{ index: 19, subject: 'Bangla', question: '‘পূর্ব + অহ্ন’ যোগে শুদ্ধ রূপ কোনটি?',
  A: 'পূর্বাহ্ন', B: 'পূর্বাহ্ণ', C: 'পূর্বান্হ', D: 'পূবাহ্ণ', ansKey: 'B' },

{ index: 20, subject: 'Bangla', question: 'ষত্ব বিধানের ব্যতিক্রমে কোন বিদেশি শব্দে দন্ত্য-স বজায় থাকে?',
  A: 'ঋষি', B: 'পুলিশ', C: 'বর্ষা', D: 'কৃষক', ansKey: 'B' },

{ index: 21, subject: 'Bangla', question: 'মাত্রাবৃত্ত ছন্দের অন্য নাম কোনটি?',
  A: 'দলবৃত্ত', B: 'কলাবৃত্ত', C: 'যৌগিক ছন্দ', D: 'লৌকিক ছন্দ', ansKey: 'B' },

{ index: 22, subject: 'Bangla', question: '‘চাঁদের মতো মুখ’—এখানে কোন অলংকার ব্যবহৃত হয়েছে?',
  A: 'উপমা', B: 'রূপক', C: 'যমক', D: 'শ্লেষ', ansKey: 'A' },

{ index: 23, subject: 'Bangla', question: '‘রক্তজবার মতো ক্ষত’ চিত্রকল্পটি কী নির্দেশ করে?',
  A: 'মাতৃস্নেহ ও মমতা',
  B: 'শোষণ, দাসত্ব ও নির্যাতনের ইতিহাস',
  C: 'প্রকৃতির সৌন্দর্য',
  D: 'ভবিষ্যৎ প্রজন্মের আশা',
  ansKey: 'B' },

{ index: 24, subject: 'Bangla', question: '‘The Necklace’-এর ফরাসি নাম কী?',
  A: 'La Parure', B: 'Le Parure', C: 'La Pature', D: 'La Perure', ansKey: 'A' },

/* ═══════════════ ICT (25–36) — both languages, inline ═══════════════ */
{ index: 25, subject: 'ICT', question: 'এনক্রিপশন করার পূর্বে মূল মেসেজ বা মানুষের পাঠযোগ্য- (The original message or human-readable form before encryption is-)',
  A: 'সাইফারটেক্সট (Ciphertext)', B: 'প্লেইনটেক্সট (Plaintext)',
  C: 'এনক্রিপশন অ্যালগরিদম (Encryption Algorithm)', D: 'কী (Key)', ansKey: 'B' },

{ index: 26, subject: 'ICT', question: 'Foreign Key এর সাথে Primary Key এর রিলেশন কিরূপ? (What is the relationship between a Foreign Key and a Primary Key?)',
  A: 'one to one', B: 'one to many', C: 'many to one', D: 'many to many', ansKey: 'C' },

{ index: 27, subject: 'ICT', question: 'শর্ত সাপেক্ষে তথ্য প্রদর্শনের জন্য কোন পদ্ধতি ব্যবহৃত হয়? (Which method is used to display data based on conditions?)',
  A: 'সর্টিং (Sorting)', B: 'কুয়েরি (Query)', C: 'সার্চিং (Searching)', D: 'ইনডেক্সিং (Indexing)', ansKey: 'B' },

{ index: 28, subject: 'ICT', question: 'Date of Admission ফিল্ডের জন্য মেমরিতে কত বাইট জায়গা প্রয়োজন? (How many bytes of memory are required for the Date of Admission field?)',
  A: '1', B: '4', C: '8', D: '16', ansKey: 'C' },

{ index: 29, subject: 'ICT', question: 'CAD বলতে কী বুঝায়? (What does CAD stand for?)',
  A: 'Computer Aided Direction', B: 'Control Aided Design',
  C: 'Computer Aided Design', D: 'Computer Aided Direction', ansKey: 'C' },

{ index: 30, subject: 'ICT', question: 'কোনো রেকর্ডের ক্ষুদ্রতম অংশকে কী বলে? (What is the smallest part of a record called?)',
  A: 'ডেটা (Data)', B: 'ফিল্ড (Field)', C: 'রেকর্ড (Record)', D: 'টেক্সট (Text)', ansKey: 'B' },

{ index: 31, subject: 'ICT', question: 'নিচের কোনটি ডেটাবেজ প্রোগ্রামের নয়? (Which of the following is not a database program?)',
  A: 'ফক্স প্রো (FoxPro)', B: 'ওরাকল (Oracle)',
  C: 'মাইক্রোসফট অ্যাক্সেস (Microsoft Access)',
  D: 'মাইক্রোসফট পাওয়ার পয়েন্ট (Microsoft PowerPoint)', ansKey: 'D' },

{ index: 32, subject: 'ICT', question: 'সকল ধনাত্মক পূর্ণসংখ্যাকে কী বলা হয়? (What are all positive integers called?)',
  A: 'কারেক্টার (Character)', B: 'ইন্টিজার (Integer)',
  C: 'রিয়াল (Real)', D: 'ডাবল (Double)', ansKey: 'B' },

{ index: 33, subject: 'ICT', question: 'ডেটা ফাইল তৈরির সঠিক অনুক্রম কোনটি? (What is the correct sequence for creating a data file?)',
  A: 'বর্ণ→ফিল্ড→রেকর্ড→ডেটাবেজ (Character → Field → Record → Database)',
  B: 'ফিল্ড→রেকর্ড→টেবিল→ডেটাবেজ (Field → Record → Table → Database)',
  C: 'রেকর্ড→ফিল্ড→তথ্য→ডেটাবেজ (Record → Field → Information → Database)',
  D: 'রেকর্ড→ফিল্ড→বর্ণ→ডেটাবেজ (Record → Field → Character → Database)',
  ansKey: 'A' },

{ index: 34, subject: 'ICT', question: 'SQL এর পূর্ণরূপ হলো Structured —— Language. (The full form of SQL is Structured —— Language.)',
  A: 'Question', B: 'Query', C: 'Quotient', D: 'Quiet', ansKey: 'B' },

{ index: 35, subject: 'ICT', question: 'একসেস ডেটাবেজের প্রধান অবজেক্ট কোনটি? (What is the main object of an Access database?)',
  A: 'ফিল্ড (Field)', B: 'রেকর্ড (Record)', C: 'টেবিল (Table)', D: 'ফর্ম (Form)', ansKey: 'C' },

{ index: 36, subject: 'ICT', question: 'সংক্ষিপ্ত ডেটা গ্রুপ আকারে প্রদর্শিত হয় কোন রিপোর্টে (In which report is summarized data displayed in groups?)',
  A: 'সামারি রিপোর্ট (Summary Report)', B: 'ক্রসটেবুলেশন রিপোর্ট (Crosstabulation Report)',
  C: 'রিপোর্টস ফরম (Reports Form)', D: 'রিপোর্ট উইথ লেবেল (Report with Label)', ansKey: 'B' },

/* ═══════════════ MATH (37–60) — Bangla\nEnglish, options Bangla only ═══════════════ */
{ index: 37, subject: 'HM', question: 'একটি বৃত্তের দুটি সমান্তরাল স্পর্শকের দূরত্ব ১৮ সেমি হলে, বৃত্তটির ব্যাসার্ধ কত?\nIf the distance between two parallel tangents of a circle is 18 cm, what is its radius?',
  A: '৭ সেমি', B: '১০ সেমি', C: '৯ সেমি', D: '৪ সেমি', ansKey: 'C' },

{ index: 38, subject: 'HM', question: 'একটি বৃত্তের সমীকরণ $x^2 + y^2 + 8x - c = 0$। $(1, 1)$ বিন্দুটি বৃত্তের উপর অবস্থিত হলে $c$-এর মান কত?\nThe equation of a circle is $x^2 + y^2 + 8x - c = 0$. If $(1, 1)$ lies on the circle, what is $c$?',
  A: '১০', B: '−১০', C: '২০', D: '১', ansKey: 'A' },

{ index: 39, subject: 'HM', question: 'মূলবিন্দুগামী একটি বৃত্ত ধনাত্মক $x$-অক্ষ থেকে ৪ একক এবং ধনাত্মক $y$-অক্ষ থেকে ২ একক অংশ কর্তন করে। বৃত্তটির সমীকরণ কোনটি?\nA circle passing through the origin cuts off intercepts of 4 units on the positive x-axis and 2 units on the positive y-axis. Which is its equation?',
  A: '$x^2 + y^2 - 4x - 2y = 0$', B: '$x^2 + y^2 + 4x + 2y = 0$',
  C: '$x^2 + y^2 - 2x - 4y = 0$', D: '$x^2 + y^2 + 2x - 4y = 0$', ansKey: 'A' },

{ index: 40, subject: 'HM', question: '$(-4, 3)$ ও $(12, -1)$ বিন্দু দুটির সংযোগরেখাংশকে ব্যাস ধরে অঙ্কিত বৃত্তের সমীকরণ কোনটি?\nWhat is the equation of the circle whose diameter is the line segment joining $(-4, 3)$ and $(12, -1)$?',
  A: '$x^2 + y^2 - 8x - 2y - 51 = 0$', B: '$x^2 + y^2 + 8x + 2y - 51 = 0$',
  C: '$x^2 + y^2 - 4x - 2y + 51 = 0$', D: '$x^2 + y^2 - 8x + 2y + 51 = 0$', ansKey: 'A' },

{ index: 41, subject: 'HM', question: 'একটি বর্গক্ষেত্রের দুটি বাহুর সমীকরণ $y - 4 = 0$ এবং $y - 8 = 0$ হলে বর্গক্ষেত্রটির ক্ষেত্রফল কত?\nIf two sides of a square are given by $y - 4 = 0$ and $y - 8 = 0$, what is its area?',
  A: '১৬ বর্গএকক', B: '৩০ বর্গএকক', C: '৬৪ বর্গএকক', D: '২৪ বর্গএকক', ansKey: 'A' },

{ index: 42, subject: 'HM', question: '$(1, -1)$ ও $(2, 4)$ বিন্দু দুটির সংযোজক সরলরেখার লম্ব সমদ্বিখণ্ডকের সমীকরণ কোনটি?\nWhat is the equation of the perpendicular bisector of the line segment joining $(1, -1)$ and $(2, 4)$?',
  A: '$x + 5y - 9 = 0$', B: '$5x - y - 6 = 0$', C: '$x - 5y + 9 = 0$', D: '$5x + y - 6 = 0$', ansKey: 'A' },

{ index: 43, subject: 'HM', question: 'কোনো বিন্দুর পোলার স্থানাঙ্ক $(3, 90°)$ হলে তার কার্তেসীয় স্থানাঙ্ক কত?\nIf a point has polar coordinates $(3, 90^\\circ)$, what are its Cartesian coordinates?',
  A: '$(3, 0)$', B: '$(0, 3)$', C: '$(0, -3)$', D: '$(-3, 0)$', ansKey: 'B' },

{ index: 44, subject: 'HM', question: 'একটি সরলরেখার অক্ষদ্বয়ের মধ্যবর্তী অংশ $(2, 3)$ বিন্দুতে সমদ্বিখণ্ডিত হয়। সরলরেখাটির সমীকরণ কোনটি?\nThe segment of a straight line between the coordinate axes is bisected at $(2, 3)$. What is the equation of the line?',
  A: '$2x + 3y - 12 = 0$', B: '$3x + 2y - 12 = 0$', C: '$2x + 3y - 6 = 0$', D: '$3x + 2y - 6 = 0$', ansKey: 'B' },

{ index: 45, subject: 'HM', question: '$(7, 7)$ ও $(-5, -10)$ বিন্দু দুটির সংযোগরেখাংশ $y$-অক্ষকে যে অনুপাতে বিভক্ত করে, তা কত?\nIn what ratio does the $y$-axis divide the line segment joining $(7, 7)$ and $(-5, -10)$?',
  A: '৭ : ১০', B: '১০ : ৭', C: '৭ : ৫', D: '৫ : ৭', ansKey: 'C' },

{ index: 46, subject: 'HM', question: 'A বিন্দুটি $x - 3y - 2 = 0$ রেখার উপর অবস্থিত এবং $(2, 3)$ ও $(6, -5)$ বিন্দু থেকে সমদূরবর্তী। A-এর স্থানাঙ্ক কত?\nPoint A lies on $x - 3y - 2 = 0$ and is equidistant from $(2, 3)$ and $(6, -5)$. What are the coordinates of A?',
  A: '$(12, 2)$', B: '$(14, -4)$', C: '$(4, -14)$', D: '$(14, 4)$', ansKey: 'D' },

{ index: 47, subject: 'HM', question: '$P(6, 8)$, $Q(4, 0)$ ও $R(0, 0)$ শীর্ষবিশিষ্ট ত্রিভুজের ক্ষেত্রফল কত বর্গএকক?\nWhat is the area of the triangle with vertices $P(6, 8)$, $Q(4, 0)$, and $R(0, 0)$?',
  A: '৩২', B: '১৬', C: '১২', D: '২৪', ansKey: 'B' },

{ index: 48, subject: 'HM', question: 'মূলবিন্দু থেকে $(-6, 8)$ বিন্দুর দূরত্ব কত?\nWhat is the distance from the origin to the point $(-6, 8)$?',
  A: '৮', B: '১১', C: '১০', D: '০', ansKey: 'C' },

{ index: 49, subject: 'HM', question: '$y = 2x - x^2$ বক্ররেখা ও $x$-অক্ষ দ্বারা আবদ্ধ ক্ষেত্রের ক্ষেত্রফল কত?\nWhat is the area enclosed by the curve $y = 2x - x^2$ and the $x$-axis?',
  A: '৪/৩ বর্গএকক', B: '২/৩ বর্গএকক', C: '৮/৩ বর্গএকক', D: '১ বর্গএকক', ansKey: 'A' },

{ index: 50, subject: 'HM', question: 'যদি $\\int_0^1 f(x)\\,dx = 2$ এবং $\\int_0^5 f(x)\\,dx = 1$ হয়, তবে $\\int_1^5 f(x)\\,dx$ কত?\nIf $\\int_0^1 f(x)\\,dx = 2$ and $\\int_0^5 f(x)\\,dx = 1$, what is $\\int_1^5 f(x)\\,dx$?',
  A: '৩', B: '১', C: '−১', D: '০', ansKey: 'C' },

{ index: 51, subject: 'HM', question: '$\\int_0^2 |x - 1|\\,dx$ এর মান কত?\nWhat is the value of $\\int_0^2 |x - 1|\\,dx$?',
  A: '০', B: '১', C: '২', D: '১/২', ansKey: 'B' },

{ index: 52, subject: 'HM', question: '$\\int \\frac{dx}{1 + \\cos x}$ এর মান কোনটি?\nWhich is the value of $\\int \\frac{dx}{1 + \\cos x}$?',
  A: '$2\\tan(x/2) + C$', B: '$\\frac{1}{2}\\tan(x/2) + C$',
  C: '$\\tan(x/2) + C$', D: '$\\tan x + C$', ansKey: 'C' },

{ index: 53, subject: 'HM', question: 'যদি $y = x^3 - 6x^2 + 12x - 9$ হয়, তবে বক্ররেখাটির কোন বিন্দুতে স্পর্শক $x$-অক্ষের সমান্তরাল?\nFor $y = x^3 - 6x^2 + 12x - 9$, at which point is the tangent parallel to the $x$-axis?',
  A: '$(1, 1)$', B: '$(-2, 0)$', C: '$(2, -1)$', D: '$(5, 0)$', ansKey: 'C' },

{ index: 54, subject: 'HM', question: 'কোনো বৃত্তের ব্যাসার্ধ সমহারে বৃদ্ধি পেলে ক্ষেত্রফল বৃদ্ধির হার ও ব্যাসার্ধের মধ্যে সম্পর্ক কী?\nIf a circle\'s radius increases at a constant rate, how is the rate of increase of its area related to its radius?',
  A: 'সমানুপাতিক', B: 'ব্যস্তানুপাতিক', C: 'সমান', D: 'দ্বিগুণ', ansKey: 'A' },

{ index: 55, subject: 'HM', question: '$y = x^3 + xy$ বক্ররেখাটির $(2, -8)$ বিন্দুতে স্পর্শকের ঢাল কত?\nWhat is the slope of the tangent to $y = x^3 + xy$ at $(2, -8)$?',
  A: '৩/৪', B: '৪/৩', C: '−৪', D: '−৮', ansKey: 'C' },

{ index: 56, subject: 'HM', question: '$y = 5 - 3x - x^2$ এর সর্বোচ্চ মান কত?\nWhat is the maximum value of $y = 5 - 3x - x^2$?',
  A: '৩', B: '৫', C: '৪৭/৪', D: '২৯/৪', ansKey: 'D' },

{ index: 57, subject: 'HM', question: '$f(x) = \\frac{1}{\\sqrt{4 - x^2}}$ ফাংশনটির ডোমেন কোনটি?\nWhat is the domain of $f(x) = \\frac{1}{\\sqrt{4 - x^2}}$?',
  A: '$-2 \\le x \\le 2$', B: '$-2 < x < 2$',
  C: '$0 \\le x \\le 2$', D: '$-2 \\le x \\le 0$', ansKey: 'B' },

{ index: 58, subject: 'HM', question: '$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x}$ এর মান কত?\nWhat is the value of $\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x}$?',
  A: '০', B: '১/২', C: '−১', D: '১', ansKey: 'D' },

{ index: 59, subject: 'HM', question: '$\\lim_{x \\to 0} \\frac{\\cos x - 1}{x^2}$ এর মান কত?\nWhat is the value of $\\lim_{x \\to 0} \\frac{\\cos x - 1}{x^2}$?',
  A: '−৮', B: '−১/২', C: '১/২', D: '৮', ansKey: 'B' },

{ index: 60, subject: 'HM', question: '$a$-এর মান কত হলে $3x + 5y + 7 = 0$ এবং $x - ay + 11 = 0$ রেখা দুটি পরস্পর সমান্তরাল হবে?\nWhat value of $a$ makes the lines $3x + 5y + 7 = 0$ and $x - ay + 11 = 0$ parallel?',
  A: '−৫/৩', B: '−৩/৫', C: '৩/৫', D: '৫/৩', ansKey: 'A' },

/* ═══════════════ ECONOMICS (61–84) — Bangla\nEnglish, options বাংলা (English) ═══════════════ */
{ index: 61, subject: 'Econ', question: 'সমাজে প্রধান অর্থনৈতিক সমস্যা কোনটি?\nWhat is the main economic problem faced by the society?',
  A: 'বেকারত্ব (Unemployment)', B: 'বৈষম্য (Inequality)',
  C: 'দারিদ্র্য (Poverty)', D: 'দুষ্প্রাপ্যতা (Scarcity)', ansKey: 'D' },

{ index: 62, subject: 'Econ', question: "অর্থনীতিকে 'সম্পদের বিজ্ঞান' বলে অভিহিত করেছেন কে?\nWho defined economics as the 'Science of Wealth'?",
  A: 'অ্যাডাম স্মিথ (Adam Smith)', B: 'লায়োনেল রবিন্স (Lionel Robbins)',
  C: 'আলফ্রেড মার্শাল (Alfred Marshall)', D: 'পি. এ. স্যামুয়েলসন (P. A. Samuelson)', ansKey: 'A' },

{ index: 63, subject: 'Econ', question: 'একটি দ্রব্যের অতিরিক্ত এক একক উৎপাদন পাওয়ার জন্য অপর দ্রব্যের যতটুকু ত্যাগ করতে হয়, তাকে কী বলে?\nWhat is the amount of another good sacrificed to produce an additional unit of a good called?',
  A: 'প্রান্তিক ব্যয় (Marginal Cost)', B: 'সুযোগ ব্যয় (Opportunity Cost)',
  C: 'গড় ব্যয় (Average Cost)', D: 'বিকল্প ব্যয় (Accounting Cost)', ansKey: 'B' },

{ index: 64, subject: 'Econ', question: 'কোন অর্থব্যবস্থায় বাজার প্রক্রিয়ার মাধ্যমে স্বয়ংক্রিয় দাম ব্যবস্থা (Automatic Price Mechanism) কার্যকর থাকে?\nIn which economic system does the automatic price mechanism operate through market forces?',
  A: 'সমাজতান্ত্রিক অর্থব্যবস্থা (Socialistic Economy)',
  B: 'নির্দেশমূলক অর্থব্যবস্থা (Command Economy)',
  C: 'ধনতান্ত্রিক অর্থব্যবস্থা (Capitalistic Economy)',
  D: 'ইসলামি অর্থব্যবস্থা (Islamic Economy)', ansKey: 'C' },

{ index: 65, subject: 'Econ', question: 'উৎপাদন সম্ভাবনা রেখার (PPC) অভ্যন্তরীণ কোনো বিন্দু কী নির্দেশ করে?\nWhat does a point inside the Production Possibility Curve (PPC) indicate?',
  A: 'সম্পদের কাম্য ও দক্ষ ব্যবহার (Efficient resource utilization)',
  B: 'সম্পদের অদক্ষ ব্যবহার ও অপূর্ণ নিয়োগ (Underutilization of resources & unemployment)',
  C: 'চলতি প্রযুক্তিতে অ-অর্জনযোগ্য উৎপাদন (Unattainable production with current technology)',
  D: 'দ্রব্যের অতি-উৎপাদন অবস্থা (State of overproduction)', ansKey: 'B' },

{ index: 66, subject: 'Econ', question: "অর্থনীতিকে সর্বপ্রথম 'ব্যষ্টিক' (Micro) ও 'সামষ্টিক' (Macro) এই দুই ভাগে বিভক্ত করেন কে?\nWho first divided economics into 'Micro' and 'Macro' branches in 1933?",
  A: 'জে. এম. কেইনস (J. M. Keynes)', B: 'র‌্যাগনার ফ্রিশ (Ragnar Frisch)',
  C: 'পল স্যামুয়েলসন (Paul Samuelson)', D: 'কার্ল মেনজার (Carl Menger)', ansKey: 'B' },

{ index: 67, subject: 'Econ', question: 'গাড়ির চাহিদা বাড়লে যদি সিএনজির (CNG) চাহিদাও বাড়ে, তবে এ দুইটি পণ্যকে পরস্পরের কী পণ্য বলা হয়?\nIf demand for cars increases, the demand for CNG also increases, then what are these two goods called?',
  A: 'বিকল্প পণ্য (Substitute goods)', B: 'বিলাসী পণ্য (Luxury goods)',
  C: 'পরিপূরক পণ্য (Complementary goods)', D: 'নিকৃষ্ট পণ্য (Inferior goods)', ansKey: 'C' },

{ index: 68, subject: 'Econ', question: 'নিচের কোন দ্রব্যটির চাহিদা অধিক স্থিতিস্থাপক (Highly Elastic)?\nWhich of the following goods is highly elastic?',
  A: 'চাল (Rice)', B: 'হীরা (Diamond)', C: 'লবণ (Salt)', D: 'রুটি (Bread)', ansKey: 'B' },

{ index: 69, subject: 'Econ', question: 'চাহিদা রেখা বাম থেকে ডানে নিম্নগামী হওয়ার প্রধান কারণ কোনটি?\nWhat is the primary reason for the downward slope of a demand curve?',
  A: 'ক্রমহ্রাসমান প্রান্তিক উপযোগ বিধি (Law of diminishing marginal utility)',
  B: 'আয়ের প্রভাব (Income effect)',
  C: 'বিকল্প প্রভাব (Substitution effect)',
  D: 'উৎপাদন খরচ বৃদ্ধি (Increase in production cost)', ansKey: 'A' },

{ index: 70, subject: 'Econ', question: 'ভোক্তার কোনো দ্রব্যের মোট উপযোগ (TU) যখন সর্বোচ্চ হয়, তখন প্রান্তিক উপযোগ (MU) কত হয়?\nWhen a consumer\'s total utility (TU) reaches its maximum, what is the marginal utility (MU)?',
  A: 'সর্বোচ্চ (Maximum)', B: 'একক (One)', C: 'ঋণাত্মক (Negative)', D: 'শূন্য (Zero)', ansKey: 'D' },

{ index: 71, subject: 'Econ', question: 'ভূমি অক্ষের (X-axis) সমান্তরাল অনুভূমিক চাহিদা রেখার স্থিতিস্থাপকতা (Elasticity of demand) কত?\nWhat is the elasticity of a horizontal demand curve parallel to the X-axis?',
  A: 'শূন্য (e = 0)', B: 'অসীম (e = ∞)', C: 'এককের সমান (e = 1)', D: 'একক অপেক্ষা কম (e < 1)', ansKey: 'B' },

{ index: 72, subject: 'Econ', question: 'একটি চাহিদা সমীকরণ $Q_d = 100 - 2P$ এবং যোগান সমীকরণ $Q_s = 20 + 3P$ হলে, ভারসাম্য দাম (P) কত?\nIf demand equation is $Q_d = 100 - 2P$ and supply equation is $Q_s = 20 + 3P$, what is the equilibrium price (P)?',
  A: '16 টাকা (16 TK)', B: '14 টাকা (14 TK)', C: '20 টাকা (20 TK)', D: '12 টাকা (12 TK)', ansKey: 'A' },

{ index: 73, subject: 'Econ', question: 'একটি প্রতিষ্ঠানের মোট ব্যয় অপেক্ষক $TC = 500 + 20Q$। প্রতিষ্ঠানটি 50 একক উৎপাদন করলে গড় ব্যয় (AC) কত হবে?\nA firm\'s total cost function is $TC = 500 + 20Q$. If the firm produces 50 units, what is the average cost (AC)?',
  A: '25 টাকা (25 TK)', B: '20 টাকা (20 TK)', C: '30 টাকা (30 TK)', D: '35 টাকা (35 TK)', ansKey: 'C' },

{ index: 74, subject: 'Econ', question: 'স্বল্পকালে প্রান্তিক ব্যয় (MC) রেখা গড় পরিবর্তনশীল ব্যয় (AVC) রেখাকে কোন বিন্দুতে ছেদ করে?\nIn the short run, at which point does the marginal cost (MC) curve intersect the average variable cost (AVC) curve?',
  A: 'AVC রেখার সর্বোচ্চ বিন্দুতে (At the maximum point of AVC)',
  B: 'AVC রেখার সর্বনিম্ন বিন্দুতে (At the minimum point of AVC)',
  C: 'উৎপাদনের শূন্য বিন্দুতে (At zero level of output)',
  D: 'AVC রেখার ঋণাত্মক ঢাল অংশে (On the downward-sloping portion)', ansKey: 'B' },

{ index: 75, subject: 'Econ', question: 'নিচের কোনটি একটি ফার্মের স্বল্পকালীন পরিবর্তনশীল ব্যয়ের (Variable Cost) অন্তর্ভুক্ত?\nWhich of the following is included in a firm\'s short-run variable cost?',
  A: 'কারখানার জমি ও দালানকোঠা ক্রয় (Land and factory building purchase)',
  B: 'স্থায়ী কর্মকর্তাদের প্রশাসনিক বেতন (Salaries of permanent administrative staff)',
  C: 'কাঁচামাল ও জ্বালানি ব্যয় (Raw materials and fuel costs)',
  D: 'স্থায়ী মূলধনী যন্ত্রপাতির অবচয় ব্যয় (Depreciation of heavy capital machinery)', ansKey: 'C' },

{ index: 76, subject: 'Econ', question: 'অন্যান্য উপকরণ স্থির রেখে একটি পরিবর্তনশীল উপকরণ বাড়ালে যদি উৎপাদন ক্রমহ্রাসমান হারে বাড়ে, তাকে কী বলে?\nIf an increase in a variable input while keeping others fixed causes output to increase at a decreasing rate, what is it called?',
  A: 'ক্রমহ্রাসমান প্রান্তিক উৎপাদন বিধি (Law of Diminishing Marginal Returns)',
  B: 'ক্রমবর্ধমান উৎপাদন বিধি (Law of Increasing Returns)',
  C: 'মাত্রাগত প্রতিদান বিধি (Law of Returns to Scale)',
  D: 'পরিবর্তনশীল অনুপাত বিধির ১ম পর্যায় (Stage 1 of Variable Proportions)', ansKey: 'A' },

{ index: 77, subject: 'Econ', question: 'স্বল্পকালে একটি উৎপাদনকারী প্রতিষ্ঠান কখন সাময়িকভাবে উৎপাদন বন্ধ (Shut-down point) করার সিদ্ধান্ত নেয়?\nIn the short run, when should a producing firm decide to shut down its operations temporarily?',
  A: 'দাম গড় মোট ব্যয়ের চেয়ে কম হলে (When Price < AC)',
  B: 'দাম প্রান্তিক ব্যয়ের সমান হলে (When Price = MC)',
  C: 'ফার্মের নিট মুনাফা শূন্য হলে (When Firm\'s economic profit is zero)',
  D: 'দাম গড় পরিবর্তনশীল ব্যয়ের চেয়ে কম হলে (When Price < AVC)', ansKey: 'D' },

{ index: 78, subject: 'Econ', question: 'উৎপাদনের সকল উপকরণ যে অনুপাতে বৃদ্ধি করা হয়, মোট উৎপাদন যদি ঠিক একই অনুপাতে বৃদ্ধি পায়, তবে তাকে কী বলে?\nIf output increases in the exact same proportion as all inputs are increased, what is it termed?',
  A: 'ক্রমবর্ধমান মাত্রাগত উৎপাদন (Increasing Returns to Scale)',
  B: 'স্থির মাত্রাগত উৎপাদন (Constant Returns to Scale)',
  C: 'ক্রমহ্রাসমান মাত্রাগত উৎপাদন (Decreasing Returns to Scale)',
  D: 'শূন্য মাত্রাগত উৎপাদন (Zero Returns to Scale)', ansKey: 'B' },

{ index: 79, subject: 'Econ', question: 'পূর্ণ প্রতিযোগিতামূলক বাজারে একটি পণ্যের বাজার মূল্য ২০ টাকা এবং প্রান্তিক ব্যয় $MC = 10 + 2Q$ হলে, মুনাফা সর্বাধিক করতে প্রতিষ্ঠানটিকে কত একক উৎপাদন করতে হবে?\nIn a perfectly competitive market, the market price of a product is 20 TK and the marginal cost function is $MC = 10 + 2Q$ where Q is the quantity produced. What quantity should the firm produce to maximize profit?',
  A: '5 একক (5 units)', B: '7 একক (7 units)', C: '10 একক (10 units)', D: '15 একক (15 units)', ansKey: 'A' },

{ index: 80, subject: 'Econ', question: 'যে বাজার ব্যবস্থায় মাত্র গুটিকয়েক বৃহৎ বিক্রেতা বা উৎপাদক প্রতিষ্ঠান থাকে, তাকে কী বলা হয়?\nWhat is the market structure called in which there are only a few large sellers or producing firms?',
  A: 'একচেটিয়া বাজার (Monopoly)', B: 'ডুয়োপলি বাজার (Duopoly)',
  C: 'অলিগোপলি বাজার (Oligopoly)', D: 'পূর্ণ প্রতিযোগিতামূলক বাজার (Perfect Competition)', ansKey: 'C' },

{ index: 81, subject: 'Econ', question: 'কোন বাজার ব্যবস্থায় একক ফার্ম বা বিক্রেতা মূল্যের ওপর কোনো প্রভাব বিস্তার করতে পারে না এবং মূল্য গ্রহণকারী (Price Taker) হয়?\nIn which market structure can an individual firm or seller exert no influence on price and acts as a \'Price Taker\'?',
  A: 'একচেটিয়া বাজার (Monopoly)', B: 'অলিগোপলি বাজার (Oligopoly)',
  C: 'একচেটিয়ামূলক প্রতিযোগিতা (Monopolistic Competition)',
  D: 'পূর্ণ প্রতিযোগিতামূলক বাজার (Perfect Competition)', ansKey: 'D' },

{ index: 82, subject: 'Econ', question: 'পূর্ণ প্রতিযোগিতামূলক বাজারে একটি ফার্মের গড় আয় (AR) ও প্রান্তিক আয় (MR) রেখার আকৃতি কীরূপ হয়?\nWhat is the shape of a firm\'s average revenue (AR) and marginal revenue (MR) curves in a perfectly competitive market?',
  A: 'বাম থেকে ডানদিকে নিম্নগামী (Downward sloping from left to right)',
  B: 'ভূমি অক্ষের সমান্তরাল অনুভূমিক সরলরেখা (Horizontal straight line parallel to X-axis)',
  C: 'উল্লম্ব অক্ষের সমান্তরাল খাড়া রেখা (Vertical line parallel to Y-axis)',
  D: 'বাম থেকে ডানদিকে ঊর্ধ্বগামী (Upward sloping from left to right)', ansKey: 'B' },

{ index: 83, subject: 'Econ', question: 'কোন বাজারে কোনো ফার্মের উৎপাদিত পণ্যের কোনো নিকটতম বিকল্প দ্রব্য (Close Substitute) থাকে না?\nIn which market does a firm\'s product have no close substitute available?',
  A: 'পূর্ণ প্রতিযোগিতা (Perfect Competition)', B: 'ডুয়োপলি (Duopoly)',
  C: 'একচেটিয়া বাজার (Monopoly)', D: 'একচেটিয়ামূলক প্রতিযোগিতা (Monopolistic Competition)', ansKey: 'C' },

{ index: 84, subject: 'Econ', question: 'কোন বাজার ব্যবস্থায় ফার্ম ও শিল্পের মধ্যে কোনো পার্থক্য থাকে না?\nIn which market structure is there no distinction between a firm and an industry?',
  A: 'পূর্ণ প্রতিযোগিতা (Perfect Competition)', B: 'একচেটিয়া বাজার (Monopoly)',
  C: 'অলিগোপলি (Oligopoly)', D: 'দ্বিপাক্ষিক একচেটিয়া (Bilateral Monopoly)', ansKey: 'B' },

/* ═══════════════ STATISTICS (85–108) — Bangla\nEnglish, options বাংলা (English)
   ⚠ NOT IN CURRENT CIRCULAR ═══════════════ */
{ index: 85, subject: 'Stat', question: 'প্রথম নয়টি স্বাভাবিক সংখ্যার (১, ২, ৩, ..., ৯) গাণিতিক গড় কত?\nWhat is the arithmetic mean of the first nine natural numbers (1, 2, 3, ..., 9)?',
  A: '৪.৫ (4.5)', B: '৫ (5)', C: '৫.৫ (5.5)', D: '৪৫ (45)', ansKey: 'B' },

{ index: 86, subject: 'Stat', question: 'একটি তথ্যসেটের সর্বোচ্চ মান ৭০ এবং সর্বনিম্ন মান ৩০। পরিসরের সহগ নির্ণয় করো।\nThe highest value of a data set is 70 and the lowest value is 30. Find the Coefficient of Range.',
  A: '৩০% (30%)', B: '৪০% (40%)', C: '৫০% (50%)', D: '৬০% (60%)', ansKey: 'B' },

{ index: 87, subject: 'Stat', question: 'মধ্যমা নির্ণয় করো: ১৪, ৯, ২১, ৬, ১৭।\nFind the median of: 14, 9, 21, 6, 17.',
  A: '৯ (9)', B: '১৩.৪ (13.4)', C: '১৪ (14)', D: '১৭ (17)', ansKey: 'C' },

{ index: 88, subject: 'Stat', question: 'গণসংখ্যা বহুভুজ আঁকা হয় গণসংখ্যাগুলোকে নিচের কোনটির বিপরীতে স্থাপন করে:\nA frequency polygon is drawn by plotting the frequencies against the:',
  A: 'শ্রেণির নিম্ন সীমানা (Lower class boundaries)',
  B: 'শ্রেণির উচ্চ সীমানা (Upper class boundaries)',
  C: 'শ্রেণির মধ্যমান (Class midpoints)',
  D: 'শ্রেণির প্রস্থ / শ্রেণি ব্যাপ্তি (Class widths)', ansKey: 'C' },

{ index: 89, subject: 'Stat', question: 'একটি তথ্যসেটের পরিমিত ব্যবধান (স্ট্যান্ডার্ড ডেভিয়েশন) ৭ হলে, এর ভেদাঙ্ক (ভ্যারিয়েন্স) কত?\nIf the standard deviation of a data set is 7, what is its variance?',
  A: '৪৯ (49)', B: '১৪ (14)', C: '৭ (7)', D: '৩.৫ (3.5)', ansKey: 'A' },

{ index: 90, subject: 'Stat', question: 'প্রচুরক নির্ণয় করো: ৪, ৭, ৭, ৯, ৩, ৭, ৪।\nFind the mode of: 4, 7, 7, 9, 3, 7, 4.',
  A: '৭ (7)', B: '৪ (4)', C: '৬ (6)', D: '৯ (9)', ansKey: 'A' },

{ index: 91, subject: 'Stat', question: 'একটি তথ্যসেটের পরিমিত ব্যবধান ৪ এবং গড় ৫০। বিচ্যুতির সহগ (কোএফিসিয়েন্ট অব ভ্যারিয়েশন) নির্ণয় করো।\nA data set has standard deviation 4 and mean 50. Find the Coefficient of Variation.',
  A: '৪% (4%)', B: '৬% (6%)', C: '১২.৫% (12.5%)', D: '৮% (8%)', ansKey: 'D' },

{ index: 92, subject: 'Stat', question: 'নিচের কোনটি গুণবাচক চলক?\nWhich of the following is a qualitative variable?',
  A: 'একটি পার্সেলের ওজন (Weight of a parcel)',
  B: 'একটি প্রতিষ্ঠানের কর্মীর সংখ্যা (Number of employees in a firm)',
  C: 'শিক্ষার্থীদের চোখের রং (Eye colour of students)',
  D: 'একটি পরিবারের মাসিক আয় (Monthly income of a family)', ansKey: 'C' },

{ index: 93, subject: 'Stat', question: '২ ও ১৮ এর জ্যামিতিক গড় নির্ণয় করো।\nFind the Geometric Mean of 2 and 18.',
  A: '৬ (6)', B: '৯ (9)', C: '১০ (10)', D: '৩৬ (36)', ansKey: 'A' },

{ index: 94, subject: 'Stat', question: 'যদি $Q_1 = 12$ এবং $Q_3 = 40$ হয়, চতুর্থক ব্যবধান (কোয়ার্টাইল ডেভিয়েশন) নির্ণয় করো।\nIf $Q_1 = 12$ and $Q_3 = 40$, find the Quartile Deviation.',
  A: '১২ (12)', B: '২৮ (28)', C: '১৪ (14)', D: '২৬ (26)', ansKey: 'C' },

{ index: 95, subject: 'Stat', question: '৩ ও ৬ এর harmonic গড় (গুণোত্তর/বিপরীত গড়) নির্ণয় করো।\nFind the Harmonic Mean of 3 and 6.',
  A: '৪.৫ (4.5)', B: '৪ (4)', C: '৩.৫ (3.5)', D: '৫ (5)', ansKey: 'B' },

{ index: 96, subject: 'Stat', question: "পরপর চারটি শ্রেণির গণসংখ্যা যথাক্রমে ৪, ৭, ১০ ও ৯। তৃতীয় শ্রেণির 'চেয়ে কম' ক্রমযোজিত গণসংখ্যা কত?\nThe frequencies of four consecutive classes are 4, 7, 10, and 9. What is the 'less-than' cumulative frequency of the third class?",
  A: '১০ (10)', B: '১৭ (17)', C: '২১ (21)', D: '৩০ (30)', ansKey: 'C' },

{ index: 97, subject: 'Stat', question: 'গড় সাপেক্ষে গড় ব্যবধান (মিন ডেভিয়েশন) নির্ণয় করো: ১, ৩, ৫, ৭।\nFind the Mean Deviation about the mean for: 1, 3, 5, 7.',
  A: '২ (2)', B: '২.৫ (2.5)', C: '৪ (4)', D: '৮ (8)', ansKey: 'A' },

{ index: 98, subject: 'Stat', question: 'একজন শিক্ষার্থী ওজন (গুরুত্ব) ৩ সম্বলিত পরীক্ষায় ৫০ এবং ওজন ২ সম্বলিত পরীক্ষায় ৬০ পেয়েছে। ভারযুক্ত গড় নম্বর নির্ণয় করো।\nA student scores 50 in a test carrying weight 3 and 60 in a test carrying weight 2. Find the weighted mean score.',
  A: '৫২ (52)', B: '৫৫ (55)', C: '৫৪ (54)', D: '৫৮ (58)', ansKey: 'C' },

{ index: 99, subject: 'Stat', question: 'পরিমিত ব্যবধান নির্ণয় করো: ২, ৪, ৪, ৪, ৫, ৫, ৭, ৯।\nFind the standard deviation of: 2, 4, 4, 4, 5, 5, 7, 9.',
  A: '১.৫ (1.5)', B: '২ (2)', C: '৪ (4)', D: '৫ (5)', ansKey: 'B' },

{ index: 100, subject: 'Stat', question: 'একটি শ্রেণির প্রকৃত শ্রেণি সীমানা ১৪.৫ ও ২৪.৫। এই শ্রেণির প্রস্থ কত?\nThe real class boundaries of a class are 14.5 and 24.5. What is the width of this class?',
  A: '৫ (5)', B: '১০ (10)', C: '১৫ (15)', D: '২০ (20)', ansKey: 'B' },

{ index: 101, subject: 'Stat', question: 'A দলে ১০ জন শিক্ষার্থীর গড় নম্বর ৪০; B দলে ৩০ জন শিক্ষার্থীর গড় নম্বর ৬০। সম্মিলিত গড় নম্বর নির্ণয় করো।\nGroup A has 10 students with mean marks 40; Group B has 30 students with mean marks 60. Find the combined mean marks.',
  A: '৫০ (50)', B: '৫২.৫ (52.5)', C: '৫৪ (54)', D: '৫৫ (55)', ansKey: 'D' },

{ index: 102, subject: 'Stat', question: 'একটি তথ্যসেটের প্রতিটি মানের সাথে ধ্রুবক ১০ যোগ করলে, এর পরিমিত ব্যবধান:\nIf a constant 10 is added to every value in a data set, its standard deviation:',
  A: 'অপরিবর্তিত থাকে (Remains unchanged)',
  B: '১০ বাড়ে (Increases by 10)',
  C: '১০ গুণ বড় হয় (Becomes 10 times larger)',
  D: '১০০ বাড়ে (Increases by 100)', ansKey: 'A' },

{ index: 103, subject: 'Stat', question: 'যদি $x_1=2$, $x_2=4$, $x_3=6$, $x_4=8$ হয়, তবে $\\Sigma(x_i - 3)$ এর মান নির্ণয় করো।\nIf $x_1=2$, $x_2=4$, $x_3=6$, $x_4=8$, find the value of $\\Sigma(x_i - 3)$.',
  A: '৫ (5)', B: '৮ (8)', C: '১১ (11)', D: '১৭ (17)', ansKey: 'B' },

{ index: 104, subject: 'Stat', question: '$Q_1$ (প্রথম চতুর্থক) নির্ণয় করো: ৩, ৫, ৭, ৯, ১১, ১৩, ১৫।\nFind $Q_1$ (the first quartile) of: 3, 5, 7, 9, 11, 13, 15.',
  A: '৩ (3)', B: '৫ (5)', C: '৭ (7)', D: '৯ (9)', ansKey: 'B' },

{ index: 105, subject: 'Stat', question: 'বিস্তৃতির নিচের কোন পরিমাপটির কোনো একক নেই?\nWhich of the following measures of dispersion has no unit?',
  A: 'পরিসর (Range)',
  B: 'পরিমিত ব্যবধান (Standard deviation)',
  C: 'বিচ্যুতির সহগ (Coefficient of variation)',
  D: 'ভেদাঙ্ক (Variance)', ansKey: 'C' },

{ index: 106, subject: 'Stat', question: 'দুটি ধনাত্মক সংখ্যার গাণিতিক গড় ২০ এবং harmonic গড় ৫। তাদের জ্যামিতিক গড় নির্ণয় করো।\nFor two positive numbers, the Arithmetic Mean is 20 and the Harmonic Mean is 5. Find their Geometric Mean.',
  A: '১০ (10)', B: '১২.৫ (12.5)', C: '১৫ (15)', D: '১০০ (100)', ansKey: 'A' },

{ index: 107, subject: 'Stat', question: 'একটি শ্রেণির আপেক্ষিক গণসংখ্যা ০.২৫ এবং মোট গণসংখ্যা ৮০। ঐ শ্রেণির গণসংখ্যা কত?\nThe relative frequency of a class is 0.25 and the total frequency is 80. What is the frequency of that class?',
  A: '১০ (10)', B: '২০ (20)', C: '২৫ (25)', D: '৪০ (40)', ansKey: 'B' },

{ index: 108, subject: 'Stat', question: 'একটি মধ্যম মাত্রায় বঙ্কিম (অসমতিত) বণ্টনে গড় = ৩০ এবং মধ্যমা = ২৮। পরীক্ষালব্ধ (empirical) সম্পর্ক ব্যবহার করে প্রচুরক নির্ণয় করো।\nIn a moderately skewed distribution, Mean = 30 and Median = 28. Find the Mode using the empirical relation.',
  A: '২২ (22)', B: '২৬ (26)', C: '২৪ (24)', D: '৩২ (32)', ansKey: 'C' }

];
