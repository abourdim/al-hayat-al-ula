/* الحياة الأولى — THE FIRST LIFE — app.js v2.0 */
/* Based on "Al-Hayat Al-Ula" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الحياة الأولى',
    splashSub: 'تأملات في أصل الخلق وغاية الوجود',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة المؤمنون ٢٣: ١١٥',
    tabHome: 'الرئيسية', tabTraits: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'بطاقات الحياة الأولى',
    traitsDesc: '٢٠ بطاقة من كتاب الحياة الأولى — كل بطاقة تأمل في أصل الخلق وغاية الوجود',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن الخلق والوجود — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي في التأمل',
    progressDesc: 'تقدمك وإنجازاتك في رحلة فهم الحياة الأولى',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية التأمل والتدبر',
    dailyLabel: '✨ تأمل اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ بطاقة عن أصل الخلق والوجود',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'The First Life',
    splashSub: 'Reflections on creation, purpose, and the hereafter',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Mu\'minun 23:115',
    tabHome: 'Home', tabTraits: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Cards of The First Life',
    traitsDesc: '20 cards from The First Life — each a reflection on creation and the purpose of existence',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of creation and existence — 4 choices per question',
    progressTitle: 'My Reflection Journey',
    progressDesc: 'Your progress and achievements in understanding the first life',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Reflection',
    dailyLabel: '✨ Today\'s Reflection',
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cards on creation and existence',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'La Vie Premiere',
    splashSub: 'Reflexions sur la creation, le but et l\'au-dela',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Mu\'minun 23:115',
    tabHome: 'Accueil', tabTraits: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Cartes de La Vie Premiere',
    traitsDesc: '20 cartes du livre La Vie Premiere — chaque carte est une reflexion sur la creation et le but de l\'existence',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur la creation et l\'existence — 4 choix par question',
    progressTitle: 'Mon Parcours de Reflexion',
    progressDesc: 'Vos progres et realisations dans la comprehension de la vie premiere',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas de Reflexion',
    dailyLabel: '✨ Reflexion du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: 'Points d\'Experience',
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cartes sur la creation et l\'existence',
      'Quiz Qui Veut Devenir Savant avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 TRAITS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🌍',
    ar:{title:'بداية الخلق',desc:'يتناول الغزالي في كتاب الحياة الأولى أسئلة الوجود الكبرى: لماذا خُلقنا؟ ما غاية الحياة الأولى قبل الحياة الآخرة؟ يجيب بمنهج يجمع بين العقل والقرآن. الخلق ليس عبثاً بل لغاية عظيمة يدركها من تدبّر.',verse:'أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ',verseRef:'المؤمنون ١١٥',hadith:'تفكروا في آلاء الله ولا تفكروا في الله — رواه الطبراني',action:'تأمل في السماء الليلة وتفكر في عظمة الخالق',young:'انظر للسماء الليلة! كل نجمة خلقها الله بحكمة — ما أعظمه! 🌍'},
    en:{title:'The Beginning of Creation',desc:'Al-Ghazali addresses in "The First Life": God created the heavens and earth in six periods. Everything in the universe is created with wisdom and purpose. Creation is not in vain but for a great purpose that those who reflect can understand.',verse:'Did you think that We created you in vain and that to Us you would not be returned?',verseRef:'Al-Mu\'minun 115',hadith:'Reflect on the blessings of God, but do not attempt to reflect on God Himself — al-Tabarani',action:'Look at the sky tonight and reflect on the Creator\'s greatness',young:'Look at the sky tonight! Every star was created by God with wisdom — how great He is! 🌍'},
    fr:{title:'Le Debut de la Creation',desc:'Al-Ghazali aborde dans "La Première Vie": Dieu a cree les cieux et la terre en six periodes. Tout dans l\'univers est cree avec sagesse et dessein. La creation n\'est pas vaine mais pour un grand but.',verse:'Pensiez-vous que Nous vous avions crees sans but et que vous ne seriez pas ramenes vers Nous ?',verseRef:'Al-Mu\'minun 115',hadith:'Reflechissez aux bienfaits de Dieu, mais ne tentez pas de reflechir sur Dieu Lui-meme — al-Tabarani',action:'Regardez le ciel ce soir et reflechissez a la grandeur du Createur',young:'Regarde le ciel ce soir ! Chaque etoile a ete creee par Dieu avec sagesse — comme Il est grand ! 🌍'}
  },
  {
    id:2, emoji:'🏔️',
    ar:{title:'غاية الوجود',desc:'يتناول الغزالي في "الحياة الأولى": لم يُخلق الإنسان ليأكل ويشرب ويموت. خُلق ليعبد الله ويعمر الأرض. الحياة اختبار قصير والآخرة هي الدار الحقيقية.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',verseRef:'الذاريات ٥٦',hadith:'كن في الدنيا كأنك غريب أو عابر سبيل — رواه البخاري',action:'اسأل نفسك: ما غايتي في الحياة؟ واكتب الإجابة',young:'أنت لم تُخلق عبثاً! لديك مهمة عظيمة — اكتشفها 🏔️'},
    en:{title:'The Purpose of Existence',desc:'Al-Ghazali addresses in "The First Life": Humans were not created just to eat, drink, and die. They were created to worship God and build the earth. Life is a short test, and the hereafter is the true abode.',verse:'And I did not create the jinn and mankind except to worship Me',verseRef:'Adh-Dhariyat 56',hadith:'Be in this world as if you are a stranger or a traveler — al-Bukhari',action:'Ask yourself: what is my purpose in life? Write down the answer',young:'You were not created without purpose! You have a great mission — discover it 🏔️'},
    fr:{title:'Le But de l\'Existence',desc:'L\'homme n\'a pas ete cree juste pour manger, boire et mourir. Il a ete cree pour adorer Dieu et construire la terre. La vie est un court test.',verse:'Je n\'ai cree les djinns et les hommes que pour qu\'ils M\'adorent',verseRef:'Adh-Dhariyat 56',hadith:'Sois dans ce monde comme un etranger ou un voyageur de passage — al-Bukhari',action:'Demandez-vous : quel est mon but dans la vie ? Ecrivez la reponse',young:'Tu n\'as pas ete cree sans but ! Tu as une grande mission — decouvre-la 🏔️'}
  },
  {
    id:3, emoji:'👤',
    ar:{title:'خلق الإنسان',desc:'يتناول الغزالي في "الحياة الأولى": خُلق الإنسان من طين ثم نُفخت فيه الروح. هذا المزيج بين التراب والروح يجعل الإنسان مخلوقاً فريداً بين السماء والأرض، مكرماً عند الله.',verse:'وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن سُلَالَةٍ مِّن طِينٍ',verseRef:'المؤمنون ١٢',hadith:'إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم — رواه مسلم',action:'اشكر الله على نعمة الخلق — أنت مخلوق بعناية إلهية',young:'أنت مخلوق مميز! الله خلقك بعناية فائقة — كن فخوراً بنفسك 👤'},
    en:{title:'The Creation of Humanity',desc:'Al-Ghazali addresses in "The First Life": Humans were created from clay, then the soul was breathed into them. This blend of earth and spirit makes humanity a unique creation between heaven and earth, honored by God.',verse:'And We created man from an extract of clay',verseRef:'Al-Mu\'minun 12',hadith:'God does not look at your appearance or wealth, but looks at your hearts and deeds — Muslim',action:'Thank God for the blessing of creation — you were crafted with divine care',young:'You are a special creation! God made you with great care — be proud of who you are 👤'},
    fr:{title:'La Creation de l\'Homme',desc:'L\'homme a ete cree d\'argile, puis l\'ame y a ete insufflee. Ce melange de terre et d\'esprit fait de l\'humanite une creation unique, honoree par Dieu.',verse:'Nous avons cree l\'homme d\'un extrait d\'argile',verseRef:'Al-Mu\'minun 12',hadith:'Dieu ne regarde ni vos apparences ni vos richesses, mais Il regarde vos coeurs et vos actes — Muslim',action:'Remerciez Dieu pour la benediction de la creation',young:'Tu es une creation speciale ! Dieu t\'a cree avec grand soin — sois fier de toi 👤'}
  },
  {
    id:4, emoji:'✨',
    ar:{title:'الروح سر من أسرار الله',desc:'يتناول الغزالي في "الحياة الأولى": الروح من أمر الله وعلمها عنده. لا يستطيع العلم الحديث أن يكشف كنهها. هي التي تمنح الجسد الحياة والإدراك والإرادة.',verse:'وَيَسْأَلُونَكَ عَنِ الرُّوحِ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي',verseRef:'الإسراء ٨٥',hadith:'الأرواح جنود مجندة فما تعارف منها ائتلف — رواه مسلم',action:'تفكر في نعمة الروح التي تحييك — ما الذي يميزك عن الجماد؟',young:'الروح هدية من الله! هي التي تجعلك حياً ومميزاً — ما أعظم هذه النعمة ✨'},
    en:{title:'The Soul: A Divine Secret',desc:'Al-Ghazali addresses in "The First Life": The soul is from God\'s command, and knowledge of it belongs to Him. Modern science cannot reveal its essence. It gives the body life, awareness, and will.',verse:'They ask you about the soul. Say: The soul is from the command of my Lord',verseRef:'Al-Isra 85',hadith:'Souls are conscripted soldiers; those that recognize each other unite — Muslim',action:'Reflect on the blessing of the soul that gives you life — what distinguishes you from inanimate objects?',young:'The soul is a gift from God! It makes you alive and special — what a great blessing ✨'},
    fr:{title:'L\'Ame : Un Secret Divin',desc:'L\'ame vient du commandement de Dieu, et sa connaissance Lui appartient. La science moderne ne peut reveler son essence. Elle donne au corps la vie et la conscience.',verse:'Ils t\'interrogent sur l\'ame. Dis : L\'ame releve de l\'ordre de mon Seigneur',verseRef:'Al-Isra 85',hadith:'Les ames sont des soldats enroles; celles qui se reconnaissent s\'unissent — Muslim',action:'Reflechissez a la benediction de l\'ame qui vous donne la vie',young:'L\'ame est un cadeau de Dieu ! Elle te rend vivant et special — quelle grande benediction ✨'}
  },
  {
    id:5, emoji:'🌙',
    ar:{title:'الجسد والروح',desc:'يتناول الغزالي في "الحياة الأولى": الإنسان ليس جسداً فقط ولا روحاً فقط. هو مزيج متوازن بينهما. من أهمل روحه مرض قلبه، ومن أهمل جسده عجز عن العبادة.',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',verseRef:'القصص ٧٧',hadith:'إن لجسدك عليك حقاً وإن لعينك عليك حقاً — رواه البخاري',action:'وازن بين حاجات روحك وجسدك اليوم — صلاة وطعام ورياضة وذكر',young:'جسدك وروحك كلاهما مهم! أطعم جسدك طعاماً وروحك ذكراً 🌙'},
    en:{title:'Body and Soul',desc:'Al-Ghazali addresses in "The First Life": A human is not just a body or just a soul. They are a balanced blend of both. Neglecting the soul sickens the heart, and neglecting the body prevents worship.',verse:'Seek the home of the hereafter with what God has given you, but do not forget your share of this world',verseRef:'Al-Qasas 77',hadith:'Your body has a right over you and your eyes have a right over you — al-Bukhari',action:'Balance your soul\'s needs and your body\'s needs today — prayer, food, exercise, and remembrance',young:'Both your body and soul matter! Feed your body with food and your soul with remembrance 🌙'},
    fr:{title:'Corps et Ame',desc:'Al-Ghazali aborde dans "La Première Vie": L\'humain n\'est pas seulement un corps ou seulement une ame. Il est un melange equilibre des deux. Negliger l\'ame rend le coeur malade.',verse:'Recherche l\'au-dela avec ce que Dieu t\'a donne, mais n\'oublie pas ta part d\'ici-bas',verseRef:'Al-Qasas 77',hadith:'Ton corps a un droit sur toi et tes yeux ont un droit sur toi — al-Bukhari',action:'Equilibrez les besoins de votre ame et de votre corps aujourd\'hui',young:'Ton corps et ton ame comptent tous les deux ! Nourris ton corps de nourriture et ton ame de dhikr 🌙'}
  },
  {
    id:6, emoji:'💎',
    ar:{title:'الفطرة السليمة',desc:'يتناول الغزالي في "الحياة الأولى": كل إنسان يولد على الفطرة — ميل فطري نحو الحق والخير والتوحيد. البيئة والتربية قد تحرف هذه الفطرة لكنها لا تمحوها أبداً.',verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا لَا تَبْدِيلَ لِخَلْقِ اللَّهِ',verseRef:'الروم ٣٠',hadith:'كل مولود يولد على الفطرة — متفق عليه',action:'استمع لصوتك الداخلي اليوم — الفطرة تدلك على الحق',young:'قلبك يعرف الحق! استمع لصوتك الداخلي — الله وضع فيك البوصلة 💎'},
    en:{title:'The Sound Nature',desc:'Al-Ghazali addresses in "The First Life": Every person is born with fitrah — an innate inclination toward truth, goodness, and monotheism. Environment and upbringing may divert this nature but can never erase it.',verse:'The fitrah of God upon which He created people — there is no changing God\'s creation',verseRef:'Ar-Rum 30',hadith:'Every child is born upon the fitrah — Agreed upon',action:'Listen to your inner voice today — your fitrah guides you to truth',young:'Your heart knows the truth! Listen to your inner voice — God placed a compass in you 💎'},
    fr:{title:'La Nature Saine',desc:'Al-Ghazali aborde dans "La Première Vie": Chaque personne nait avec la fitrah — une inclination innee vers la verite, le bien et le monotheisme. L\'environnement peut devier cette nature mais ne peut jamais l\'effacer.',verse:'La nature de Dieu selon laquelle Il a cree les gens — pas de changement dans la creation de Dieu',verseRef:'Ar-Rum 30',hadith:'Chaque enfant nait selon la fitrah — Unanimement reconnu',action:'Ecoutez votre voix interieure aujourd\'hui — la fitrah vous guide vers la verite',young:'Ton coeur connait la verite ! Ecoute ta voix interieure — Dieu a mis une boussole en toi 💎'}
  },
  {
    id:7, emoji:'⚖️',
    ar:{title:'الدنيا دار اختبار',desc:'الحياة الدنيا ليست دار إقامة بل دار عبور. كل ما فيها من نعم ومحن اختبار من الله ليرى من يشكر ومن يصبر.',verse:'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا',verseRef:'الملك ٢',hadith:'الدنيا سجن المؤمن وجنة الكافر — رواه مسلم',action:'تعامل مع كل موقف اليوم كاختبار — كيف ستنجح فيه؟',young:'الحياة مثل الامتحان! كل يوم فرصة لتنجح — اعمل أفضل ما عندك ⚖️'},
    en:{title:'This World Is a Test',desc:'This worldly life is not a permanent residence but a passage. Every blessing and hardship in it is a test from God to see who is grateful and who is patient.',verse:'He who created death and life to test which of you is best in deed',verseRef:'Al-Mulk 2',hadith:'This world is a prison for the believer and a paradise for the disbeliever — Muslim',action:'Treat every situation today as a test — how will you pass it?',young:'Life is like an exam! Every day is a chance to succeed — do your best ⚖️'},
    fr:{title:'Ce Monde Est un Test',desc:'Al-Ghazali aborde dans "La Première Vie": La vie d\'ici-bas n\'est pas une residence permanente mais un passage. Chaque benediction et epreuve est un test de Dieu.',verse:'Celui qui a cree la mort et la vie pour vous eprouver, lequel de vous est le meilleur en oeuvres',verseRef:'Al-Mulk 2',hadith:'Ce monde est une prison pour le croyant et un paradis pour le mecreant — Muslim',action:'Traitez chaque situation aujourd\'hui comme un test — comment le reussirez-vous ?',young:'La vie est comme un examen ! Chaque jour est une chance de reussir — fais de ton mieux ⚖️'}
  },
  {
    id:8, emoji:'🔑',
    ar:{title:'العقل نعمة وأمانة',desc:'العقل هبة الله للإنسان ليميز بين الحق والباطل. تعطيل العقل خيانة للأمانة. الإسلام دين يخاطب العقل ويحترمه.',verse:'إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ',verseRef:'الرعد ٤',hadith:'ما اكتسب رجل مثل عقل يهديه إلى هدى — رواه الطبراني',action:'استخدم عقلك اليوم في التفكر — اقرأ شيئاً جديداً وتدبره',young:'عقلك كنز! استخدمه كل يوم — اقرأ وتعلم واسأل أسئلة ذكية 🔑'},
    en:{title:'The Mind: A Gift and Trust',desc:'The mind is God\'s gift to humans to distinguish truth from falsehood. Disabling the mind is a betrayal of this trust. Islam addresses and respects the intellect.',verse:'Indeed in that are signs for a people who reason',verseRef:'Ar-Ra\'d 4',hadith:'No man has acquired anything better than an intellect that guides him — al-Tabarani',action:'Use your mind today in reflection — read something new and contemplate it',young:'Your mind is a treasure! Use it every day — read, learn, and ask smart questions 🔑'},
    fr:{title:'L\'Esprit : Un Don et une Confiance',desc:'L\'esprit est le don de Dieu pour distinguer le vrai du faux. Desactiver l\'esprit est une trahison de cette confiance. L\'Islam respecte l\'intellect.',verse:'En verite, il y a en cela des signes pour des gens qui raisonnent',verseRef:'Ar-Ra\'d 4',hadith:'Personne n\'a acquis quelque chose de mieux qu\'un intellect qui le guide — al-Tabarani',action:'Utilisez votre esprit aujourd\'hui pour la reflexion — lisez quelque chose de nouveau',young:'Ton esprit est un tresor ! Utilise-le chaque jour — lis, apprends et pose des questions intelligentes 🔑'}
  },
  {
    id:9, emoji:'🌱',
    ar:{title:'الحياة الدنيا متاع قليل',desc:'مهما طالت الحياة فهي قصيرة مقارنة بالآخرة. لا تتعلق بالدنيا كأنها الغاية — استمتع بها لكن اعمل للآخرة.',verse:'قُلْ مَتَاعُ الدُّنْيَا قَلِيلٌ وَالْآخِرَةُ خَيْرٌ لِّمَنِ اتَّقَىٰ',verseRef:'النساء ٧٧',hadith:'ما لي وللدنيا، ما أنا في الدنيا إلا كراكب استظل تحت شجرة — رواه الترمذي',action:'تذكر أن هذه الحياة مؤقتة — ماذا قدمت لآخرتك اليوم؟',young:'الحياة رحلة قصيرة! استمتع بها لكن لا تنسَ أن الآخرة أجمل 🌱'},
    en:{title:'Worldly Life Is Brief Enjoyment',desc:'No matter how long life is, it is short compared to the hereafter. Don\'t cling to this world as the ultimate goal — enjoy it but work for the hereafter.',verse:'Say: The enjoyment of this world is little, and the hereafter is better for those who are righteous',verseRef:'An-Nisa 77',hadith:'What have I to do with this world? I am like a rider who rests under a tree then moves on — al-Tirmidhi',action:'Remember this life is temporary — what have you prepared for the hereafter today?',young:'Life is a short journey! Enjoy it but do not forget the hereafter is more beautiful 🌱'},
    fr:{title:'La Vie d\'Ici-Bas Est une Breve Jouissance',desc:'Aussi longue soit la vie, elle est courte comparee a l\'au-dela. Ne vous accrochez pas a ce monde — profitez-en mais oeuvrez pour l\'au-dela.',verse:'Dis : La jouissance d\'ici-bas est peu de chose, et l\'au-dela est meilleur pour les pieux',verseRef:'An-Nisa 77',hadith:'Qu\'ai-je a faire avec ce monde ? Je suis comme un cavalier qui se repose sous un arbre — al-Tirmidhi',action:'Rappelez-vous que cette vie est temporaire — qu\'avez-vous prepare pour l\'au-dela ?',young:'La vie est un court voyage ! Profites-en mais n\'oublie pas que l\'au-dela est plus beau 🌱'}
  },
  {
    id:10, emoji:'💀',
    ar:{title:'الموت حق',desc:'الموت ليس نهاية بل بداية حقيقية. كل نفس ذائقة الموت. التفكر في الموت يزهّد في الدنيا ويحفز على العمل الصالح.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',verseRef:'آل عمران ١٨٥',hadith:'أكثروا ذكر هاذم اللذات — رواه الترمذي',action:'تذكر الموت اليوم — ليس للحزن بل لتحفيزك على الخير',young:'الموت جزء من الحياة! تذكّره ليحفزك على فعل الخير كل يوم 💀'},
    en:{title:'Death Is Certain',desc:'Death is not an ending but a true beginning. Every soul shall taste death. Reflecting on death helps detach from worldly life and motivates good deeds.',verse:'Every soul shall taste death',verseRef:'Al Imran 185',hadith:'Remember often the destroyer of pleasures — al-Tirmidhi',action:'Remember death today — not for sadness but to motivate you toward goodness',young:'Death is part of life! Remember it to motivate you to do good every day 💀'},
    fr:{title:'La Mort Est Certaine',desc:'Al-Ghazali aborde dans "La Première Vie": La mort n\'est pas une fin mais un vrai debut. Toute ame goutera la mort. Reflechir a la mort aide a se detacher de la vie mondaine.',verse:'Toute ame goutera la mort',verseRef:'Al Imran 185',hadith:'Rappelez-vous souvent le destructeur des plaisirs — al-Tirmidhi',action:'Rappelez-vous la mort aujourd\'hui — non pour la tristesse mais pour vous motiver vers le bien',young:'La mort fait partie de la vie ! Rappelle-toi pour te motiver a faire le bien chaque jour 💀'}
  },
  {
    id:11, emoji:'🌅',
    ar:{title:'البعث والنشور',desc:'كما يحيي الله الأرض بعد موتها، يبعث الإنسان بعد موته. البعث حقيقة يقينية أخبر عنها كل الأنبياء.',verse:'وَأَنَّ السَّاعَةَ آتِيَةٌ لَّا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ',verseRef:'الحج ٧',hadith:'لتقومن الساعة وما من نفس تعلم ما أُعد لها — رواه أحمد',action:'تأمل في الربيع وكيف تعود الحياة للأرض — هذا دليل على البعث',young:'انظر كيف يعود الربيع بعد الشتاء! هكذا يبعث الله الناس بعد الموت 🌅'},
    en:{title:'Resurrection',desc:'Just as God revives the earth after its death, He resurrects humans after death. Resurrection is a certain truth reported by all prophets.',verse:'And the Hour is coming, no doubt about it, and God will resurrect those in the graves',verseRef:'Al-Hajj 7',hadith:'The Hour will come and no soul knows what has been prepared for it — Ahmad',action:'Reflect on spring and how life returns to earth — this is evidence of resurrection',young:'Look how spring returns after winter! That is how God will resurrect people after death 🌅'},
    fr:{title:'La Resurrection',desc:'Al-Ghazali aborde dans "La Première Vie": Tout comme Dieu revivifie la terre apres sa mort, Il ressuscite les humains apres la mort. La resurrection est une verite certaine.',verse:'L\'Heure va venir, pas de doute la-dessus, et Dieu ressuscitera ceux dans les tombes',verseRef:'Al-Hajj 7',hadith:'L\'Heure viendra et aucune ame ne sait ce qui a ete prepare pour elle — Ahmad',action:'Reflechissez au printemps et au retour de la vie — c\'est une preuve de la resurrection',young:'Regarde comment le printemps revient apres l\'hiver ! C\'est ainsi que Dieu ressuscitera les gens 🌅'}
  },
  {
    id:12, emoji:'⚡',
    ar:{title:'الحساب والجزاء',desc:'يوم القيامة يُحاسب كل إنسان على أعماله — صغيرها وكبيرها. لا ظلم في حساب الله. من عمل خيراً يره ومن عمل شراً يره.',verse:'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',verseRef:'الزلزلة ٧',hadith:'حاسبوا أنفسكم قبل أن تُحاسبوا — رواه الترمذي',action:'حاسب نفسك قبل أن تُحاسب — ماذا في صحيفة أعمالك اليوم؟',young:'كل شيء تفعله محسوب! حتى الابتسامة — فاعمل خيراً دائماً ⚡'},
    en:{title:'Accountability and Reward',desc:'On the Day of Judgment, every person will be held accountable for their deeds — small and large. There is no injustice in God\'s accounting.',verse:'Whoever does an atom\'s weight of good will see it',verseRef:'Az-Zalzalah 7',hadith:'Hold yourselves accountable before you are held accountable — al-Tirmidhi',action:'Hold yourself accountable before you are held accountable — what is in your record today?',young:'Everything you do counts! Even a smile — so always do good ⚡'},
    fr:{title:'La Reddition des Comptes',desc:'Le Jour du Jugement, chaque personne sera jugee pour ses actes — petits et grands. Il n\'y a pas d\'injustice dans le jugement de Dieu.',verse:'Quiconque fait un bien fut-ce du poids d\'un atome le verra',verseRef:'Az-Zalzalah 7',hadith:'Jugez-vous avant d\'etre juges — al-Tirmidhi',action:'Jugez-vous avant d\'etre juge — qu\'y a-t-il dans votre registre aujourd\'hui ?',young:'Tout ce que tu fais compte ! Meme un sourire — alors fais toujours le bien ⚡'}
  },
  {
    id:13, emoji:'🏡',
    ar:{title:'الجنة والنعيم',desc:'الجنة دار السلام الأبدية لمن أحسن في الدنيا. فيها ما لا عين رأت ولا أذن سمعت ولا خطر على قلب بشر.',verse:'وَعَدَ اللَّهُ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ',verseRef:'التوبة ٧٢',hadith:'فيها ما لا عين رأت ولا أذن سمعت ولا خطر على قلب بشر — متفق عليه',action:'اعمل اليوم عملاً صالحاً يقربك من الجنة — صدقة أو ذكر أو مساعدة',young:'الجنة أجمل مكان! فيها كل ما تتمنى — اعمل خيراً لتدخلها 🏡'},
    en:{title:'Paradise and Bliss',desc:'Paradise is the eternal abode of peace for those who did good in this world. In it is what no eye has seen, no ear has heard, and no heart has imagined.',verse:'God has promised the believing men and women gardens beneath which rivers flow',verseRef:'At-Tawbah 72',hadith:'In it is what no eye has seen, no ear has heard, and no heart has imagined — Agreed upon',action:'Do a good deed today that brings you closer to Paradise — charity, remembrance, or helping others',young:'Paradise is the most beautiful place! It has everything you wish for — do good to enter it 🏡'},
    fr:{title:'Le Paradis et la Felicite',desc:'Le Paradis est la demeure eternelle de paix pour ceux qui ont fait le bien. Il y a ce qu\'aucun oeil n\'a vu, aucune oreille n\'a entendu, aucun coeur n\'a imagine.',verse:'Dieu a promis aux croyants et croyantes des jardins sous lesquels coulent les rivieres',verseRef:'At-Tawbah 72',hadith:'Il y a ce qu\'aucun oeil n\'a vu, aucune oreille n\'a entendu, aucun coeur n\'a imagine — Unanimement reconnu',action:'Faites une bonne action aujourd\'hui qui vous rapproche du Paradis',young:'Le Paradis est le plus bel endroit ! Il a tout ce que tu souhaites — fais le bien pour y entrer 🏡'}
  },
  {
    id:14, emoji:'🔥',
    ar:{title:'النار والعقاب',desc:'النار عقاب أليم لمن ظلم وأفسد في الأرض. التحذير منها ليس تخويفاً بل تنبيه رحيم من الله ليعود الإنسان إلى الصراط.',verse:'فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ',verseRef:'البقرة ٢٤',hadith:'حُفّت الجنة بالمكاره وحُفّت النار بالشهوات — متفق عليه',action:'تجنب ذنباً واحداً اليوم — كل خطوة بعيداً عن المعصية خطوة نحو الجنة',young:'ابتعد عن الأفعال السيئة! كل مرة تقول "لا" للخطأ تقترب من الجنة 🔥'},
    en:{title:'Hellfire and Punishment',desc:'Hellfire is a painful punishment for those who oppressed and corrupted the earth. Warning about it is not to frighten but a merciful alert from God to return to the right path.',verse:'Fear the Fire whose fuel is people and stones',verseRef:'Al-Baqarah 24',hadith:'Paradise is surrounded by hardships and Hellfire is surrounded by desires — Agreed upon',action:'Avoid one sin today — every step away from disobedience is a step toward Paradise',young:'Stay away from bad deeds! Every time you say "no" to wrong, you get closer to Paradise 🔥'},
    fr:{title:'L\'Enfer et le Chatiment',desc:'L\'Enfer est un chatiment douloureux pour ceux qui ont opprime et corrompu la terre. L\'avertissement est un rappel misericordieux de Dieu.',verse:'Craignez le Feu dont le combustible est les hommes et les pierres',verseRef:'Al-Baqarah 24',hadith:'Le Paradis est entoure de difficultes et l\'Enfer est entoure de desirs — Unanimement reconnu',action:'Evitez un peche aujourd\'hui — chaque pas loin de la desobeissance est un pas vers le Paradis',young:'Eloigne-toi des mauvaises actions ! Chaque fois que tu dis "non" au mal, tu te rapproches du Paradis 🔥'}
  },
  {
    id:15, emoji:'🤲',
    ar:{title:'التوبة والرجوع إلى الله',desc:'باب التوبة مفتوح ما لم تطلع الشمس من مغربها. الله يفرح بتوبة عبده أشد من فرح أحدكم بضالته. لا يأس مع التوبة.',verse:'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',verseRef:'الزمر ٥٣',hadith:'لله أفرح بتوبة عبده من أحدكم بضالته — متفق عليه',action:'تب إلى الله الآن من ذنب تعرفه — واعزم ألا تعود إليه',young:'الله يفرح عندما ترجع إليه! إذا أخطأت قل: أستغفر الله — وابدأ من جديد 🤲'},
    en:{title:'Repentance and Returning to God',desc:'The door of repentance is open as long as the sun has not risen from the west. God rejoices in the repentance of His servant more than one of you finding a lost camel. No despair with repentance.',verse:'Say: O My servants who have transgressed, do not despair of the mercy of God',verseRef:'Az-Zumar 53',hadith:'God is happier with the repentance of His servant than one of you finding your lost camel — Agreed upon',action:'Repent to God now from a sin you know — and resolve not to return to it',young:'God is happy when you come back to Him! If you make a mistake, say: I seek forgiveness — and start fresh 🤲'},
    fr:{title:'Le Repentir et le Retour a Dieu',desc:'La porte du repentir est ouverte tant que le soleil ne s\'est pas leve de l\'ouest. Dieu se rejouit du repentir de Son serviteur. Pas de desespoir avec le repentir.',verse:'Dis : O Mes serviteurs qui avez transgresse, ne desesperez pas de la misericorde de Dieu',verseRef:'Az-Zumar 53',hadith:'Dieu est plus heureux du repentir de Son serviteur que celui qui retrouve son chameau perdu — Unanimement reconnu',action:'Repentez-vous a Dieu maintenant d\'un peche que vous connaissez',young:'Dieu est content quand tu reviens vers Lui ! Si tu fais une erreur, dis : Astaghfirullah — et recommence 🤲'}
  },
  {
    id:16, emoji:'📖',
    ar:{title:'العمل الصالح',desc:'العمل الصالح هو زاد الآخرة. ليس فقط الصلاة والصوم بل كل عمل نافع بنية خالصة. الابتسامة صدقة والكلمة الطيبة صدقة.',verse:'مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً',verseRef:'النحل ٩٧',hadith:'تبسمك في وجه أخيك صدقة — رواه الترمذي',action:'افعل ثلاثة أعمال صالحة اليوم: ابتسم وساعد وتصدق',young:'كل عمل خير يحبه الله! ابتسم وساعد وكن لطيفاً — كلها صدقات 📖'},
    en:{title:'Good Deeds',desc:'Good deeds are provisions for the hereafter. Not just prayer and fasting but every beneficial act with pure intention. A smile is charity and a kind word is charity.',verse:'Whoever does good, male or female, while being a believer, We will grant them a good life',verseRef:'An-Nahl 97',hadith:'Your smile in the face of your brother is charity — al-Tirmidhi',action:'Do three good deeds today: smile, help someone, and give charity',young:'God loves every good deed! Smile, help, and be kind — they are all charity 📖'},
    fr:{title:'Les Bonnes Actions',desc:'Les bonnes actions sont des provisions pour l\'au-dela. Pas seulement la priere et le jeune mais chaque acte benefique avec une intention pure.',verse:'Quiconque fait le bien, homme ou femme, tout en etant croyant, Nous lui ferons vivre une bonne vie',verseRef:'An-Nahl 97',hadith:'Ton sourire au visage de ton frere est une charite — al-Tirmidhi',action:'Faites trois bonnes actions aujourd\'hui : souriez, aidez et donnez',young:'Dieu aime chaque bonne action ! Souris, aide et sois gentil — ce sont toutes des charites 📖'}
  },
  {
    id:17, emoji:'⏳',
    ar:{title:'الوقت أمانة',desc:'الوقت رأس مال الإنسان الحقيقي. كل لحظة تمر لا تعود. المسلم يحاسب نفسه على وقته كيف أنفقه وفيم أضاعه.',verse:'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',verseRef:'العصر ١-٢',hadith:'نعمتان مغبون فيهما كثير من الناس: الصحة والفراغ — رواه البخاري',action:'خطط ليومك وخصص وقتاً للعبادة والعمل والعائلة — لا تضيع دقيقة',young:'وقتك كنز لا يعود! خطط ليومك وادرس والعب وتعلم — كل دقيقة مهمة ⏳'},
    en:{title:'Time Is a Trust',desc:'Time is a person\'s true capital. Every moment that passes never returns. A Muslim holds themselves accountable for their time — how they spent it and what they wasted.',verse:'By time, indeed mankind is in loss',verseRef:'Al-Asr 1-2',hadith:'Two blessings which many people squander: health and free time — al-Bukhari',action:'Plan your day and allocate time for worship, work, and family — do not waste a minute',young:'Your time is a treasure that never returns! Plan your day, study, play, and learn — every minute matters ⏳'},
    fr:{title:'Le Temps Est une Confiance',desc:'Le temps est le vrai capital de l\'homme. Chaque moment qui passe ne revient jamais. Le musulman se juge sur son temps.',verse:'Par le temps, l\'homme est certes en perdition',verseRef:'Al-Asr 1-2',hadith:'Deux bienfaits que beaucoup de gens gaspillent : la sante et le temps libre — al-Bukhari',action:'Planifiez votre journee et consacrez du temps a l\'adoration, au travail et a la famille',young:'Ton temps est un tresor qui ne revient pas ! Planifie ta journee, etudie, joue et apprends ⏳'}
  },
  {
    id:18, emoji:'🌻',
    ar:{title:'الشكر والصبر',desc:'المؤمن بين الشكر والصبر. إن أصابه خير شكر فكان خيراً له، وإن أصابه ضر صبر فكان خيراً له. كل أمر المؤمن خير.',verse:'لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ',verseRef:'إبراهيم ٧',hadith:'عجباً لأمر المؤمن إن أمره كله خير — رواه مسلم',action:'اشكر الله على ٥ نعم واصبر على مشكلة واحدة تواجهها اليوم',young:'اشكر الله دائماً واصبر عند المشاكل! كل شيء في حياتك فيه خير 🌻'},
    en:{title:'Gratitude and Patience',desc:'A believer lives between gratitude and patience. If good comes, they are grateful and it is good for them. If hardship strikes, they are patient and it is good for them.',verse:'If you are grateful, I will surely increase you',verseRef:'Ibrahim 7',hadith:'How wonderful is the affair of the believer — all of it is good for them — Muslim',action:'Thank God for 5 blessings and be patient with one problem you face today',young:'Always be grateful to God and patient in problems! Everything in your life has good in it 🌻'},
    fr:{title:'La Gratitude et la Patience',desc:'Le croyant vit entre la gratitude et la patience. Si un bien arrive, il est reconnaissant. Si un mal arrive, il est patient. Tout est bon pour le croyant.',verse:'Si vous etes reconnaissants, Je vous augmenterai certainement',verseRef:'Ibrahim 7',hadith:'Comme l\'affaire du croyant est merveilleuse — tout est bon pour lui — Muslim',action:'Remerciez Dieu pour 5 bienfaits et soyez patient avec un probleme aujourd\'hui',young:'Sois toujours reconnaissant envers Dieu et patient face aux problemes ! Tout a du bien 🌻'}
  },
  {
    id:19, emoji:'🙏',
    ar:{title:'المسؤولية الفردية',desc:'كل إنسان مسؤول عن عمله يوم القيامة. لا تزر وازرة وزر أخرى. لا يُحاسب أحد على ذنب غيره ولا ينفعه عمل غيره.',verse:'وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ',verseRef:'الأنعام ١٦٤',hadith:'كلكم راع وكلكم مسؤول عن رعيته — متفق عليه',action:'تحمل مسؤولية أفعالك اليوم — لا تلقِ اللوم على غيرك',young:'أنت مسؤول عن أفعالك! لا تلم غيرك — كن شجاعاً وتحمل مسؤوليتك 🙏'},
    en:{title:'Individual Accountability',desc:'Every person is responsible for their own deeds on the Day of Judgment. No bearer of burdens shall bear the burden of another. No one is punished for another\'s sin.',verse:'And no bearer of burdens shall bear the burden of another',verseRef:'Al-An\'am 164',hadith:'Each of you is a shepherd and each is responsible for their flock — Agreed upon',action:'Take responsibility for your actions today — do not blame others',young:'You are responsible for your actions! Do not blame others — be brave and own your choices 🙏'},
    fr:{title:'La Responsabilite Individuelle',desc:'Chaque personne est responsable de ses propres actes le Jour du Jugement. Aucune ame ne portera le fardeau d\'une autre.',verse:'Aucune ame ne portera le fardeau d\'une autre',verseRef:'Al-An\'am 164',hadith:'Chacun de vous est un berger et chacun est responsable de son troupeau — Unanimement reconnu',action:'Prenez la responsabilite de vos actions aujourd\'hui — ne blâmez pas les autres',young:'Tu es responsable de tes actes ! Ne blame pas les autres — sois courageux et assume tes choix 🙏'}
  },
  {
    id:20, emoji:'🕌',
    ar:{title:'استعد للحياة الأبدية',desc:'الحياة الأولى قصيرة والثانية أبدية. العاقل من استعد للأبدية ولم يغتر بالفانية. اجعل كل يوم خطوة نحو رضا الله.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ',verseRef:'الحشر ١٨',hadith:'الكيّس من دان نفسه وعمل لما بعد الموت — رواه الترمذي',action:'اختر درساً واحداً من هذه البطاقات وطبقه الآن — ليس غداً، الآن',young:'كل يوم فرصة جديدة! اختر درساً واحداً وطبقه اليوم — ابدأ الآن 🕌'},
    en:{title:'Prepare for Eternal Life',desc:'The first life is short and the second is eternal. The wise person prepares for eternity and is not deceived by the temporary. Make every day a step toward God\'s pleasure.',verse:'O you who believe, fear God and let every soul see what it has sent forth for tomorrow',verseRef:'Al-Hashr 18',hadith:'The wise person is one who holds themselves accountable and works for what comes after death — al-Tirmidhi',action:'Choose one lesson from these cards and apply it now — not tomorrow, now',young:'Every day is a new chance! Choose one lesson and apply it today — start now 🕌'},
    fr:{title:'Preparez-Vous pour la Vie Eternelle',desc:'La premiere vie est courte et la seconde est eternelle. Le sage se prepare pour l\'eternite. Faites de chaque jour un pas vers l\'agrement de Dieu.',verse:'O vous qui croyez, craignez Dieu et que chaque ame voie ce qu\'elle a envoye pour demain',verseRef:'Al-Hashr 18',hadith:'Le sage est celui qui se juge et travaille pour ce qui vient apres la mort — al-Tirmidhi',action:'Choisissez une lecon de ces cartes et appliquez-la maintenant — pas demain, maintenant',young:'Chaque jour est une nouvelle chance ! Choisis une lecon et applique-la aujourd\'hui — commence maintenant 🕌'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما غاية خلق الإنسان كما ذكرها القرآن الكريم؟',opts:['الأكل والشرب','العبادة','اللعب','التجارة'],correct:1,hint:'الإجابة في سورة الذاريات',quran:'الذاريات ٥٦'},
    en:{q:'What is the purpose of human creation as stated in the Quran?',opts:['Eating and drinking','Worship','Entertainment','Commerce'],correct:1,hint:'The answer is in Surah Adh-Dhariyat',quran:'Adh-Dhariyat 56'},
    fr:{q:'Quel est le but de la creation de l\'homme selon le Coran ?',opts:['Manger et boire','L\'adoration','Le divertissement','Le commerce'],correct:1,hint:'La reponse est dans la sourate Adh-Dhariyat',quran:'Adh-Dhariyat 56'}
  },
  {
    ar:{q:'ماذا قال النبي ﷺ عن النعمتين اللتين يُغبن فيهما كثير من الناس؟',opts:['المال والجاه','الصحة والفراغ','العلم والمال','الشباب والقوة'],correct:1,hint:'حديث رواه البخاري عن نعمتين مضيعتين',quran:'العصر ١-٢'},
    en:{q:'What two blessings did the Prophet (PBUH) say many people squander?',opts:['Wealth and status','Health and free time','Knowledge and wealth','Youth and strength'],correct:1,hint:'A hadith narrated by al-Bukhari about two wasted blessings',quran:'Al-Asr 1-2'},
    fr:{q:'Quelles deux benedictions le Prophete (PSL) a-t-il dit que beaucoup de gens gaspillent ?',opts:['La richesse et le statut','La sante et le temps libre','Le savoir et la richesse','La jeunesse et la force'],correct:1,hint:'Un hadith rapporte par al-Bukhari sur deux benedictions gaspillees',quran:'Al-Asr 1-2'}
  },
  {
    ar:{q:'من أي شيء خُلق الإنسان كما ورد في القرآن؟',opts:['من نور','من نار','من طين','من ماء فقط'],correct:2,hint:'مادة من الأرض',quran:'المؤمنون ١٢'},
    en:{q:'From what was the human being created according to the Quran?',opts:['From light','From fire','From clay','From water only'],correct:2,hint:'A substance from the earth',quran:'Al-Mu\'minun 12'},
    fr:{q:'De quoi l\'homme a-t-il ete cree selon le Coran ?',opts:['De lumiere','De feu','D\'argile','D\'eau uniquement'],correct:2,hint:'Une substance de la terre',quran:'Al-Mu\'minun 12'}
  },
  {
    ar:{q:'ماذا أجاب الله تعالى عندما سُئل النبي عن الروح؟',opts:['هي من خلق الله','هي من أمر ربي','هي طاقة كونية','هي جزء من النور'],correct:1,hint:'الإجابة في سورة الإسراء',quran:'الإسراء ٨٥'},
    en:{q:'What did God answer when the Prophet was asked about the soul?',opts:['It is from God\'s creation','It is from the command of my Lord','It is cosmic energy','It is part of light'],correct:1,hint:'The answer is in Surah Al-Isra',quran:'Al-Isra 85'},
    fr:{q:'Que repondit Dieu quand le Prophete fut interroge sur l\'ame ?',opts:['Elle est de la creation de Dieu','Elle releve de l\'ordre de mon Seigneur','C\'est une energie cosmique','C\'est une partie de la lumiere'],correct:1,hint:'La reponse est dans la sourate Al-Isra',quran:'Al-Isra 85'}
  },
  {
    ar:{q:'أكمل الآية: "كل نفس ..."',opts:['ذائقة السعادة','ذائقة الموت','طالبة الحرية','باقية أبداً'],correct:1,hint:'حقيقة لا مفر منها',quran:'آل عمران ١٨٥'},
    en:{q:'Complete the verse: "Every soul shall taste ..."',opts:['Happiness','Death','Freedom','Eternity'],correct:1,hint:'An inescapable truth',quran:'Al Imran 185'},
    fr:{q:'Completez le verset : "Toute ame goutera ..."',opts:['Le bonheur','La mort','La liberte','L\'eternite'],correct:1,hint:'Une verite incontournable',quran:'Al Imran 185'}
  },
  {
    ar:{q:'ما الذي خُلق ليبلونا أينا أحسن عملاً؟',opts:['المال والبنون','السماوات والأرض','الموت والحياة','الجن والإنس'],correct:2,hint:'في سورة الملك',quran:'الملك ٢'},
    en:{q:'What was created to test which of us is best in deed?',opts:['Wealth and children','Heavens and earth','Death and life','Jinn and mankind'],correct:2,hint:'In Surah Al-Mulk',quran:'Al-Mulk 2'},
    fr:{q:'Qu\'est-ce qui a ete cree pour eprouver lequel d\'entre nous est le meilleur en oeuvres ?',opts:['La richesse et les enfants','Les cieux et la terre','La mort et la vie','Les djinns et les hommes'],correct:2,hint:'Dans la sourate Al-Mulk',quran:'Al-Mulk 2'}
  },
  {
    ar:{q:'ما معنى الفطرة في الإسلام؟',opts:['العادات المكتسبة','الميل الفطري نحو الحق','الثقافة الموروثة','التربية المدرسية'],correct:1,hint:'شيء يولد به كل إنسان',quran:'الروم ٣٠'},
    en:{q:'What does fitrah mean in Islam?',opts:['Acquired habits','Innate inclination toward truth','Inherited culture','School education'],correct:1,hint:'Something every person is born with',quran:'Ar-Rum 30'},
    fr:{q:'Que signifie la fitrah en Islam ?',opts:['Les habitudes acquises','L\'inclination innee vers la verite','La culture heritee','L\'education scolaire'],correct:1,hint:'Quelque chose avec lequel chaque personne nait',quran:'Ar-Rum 30'}
  },
  {
    ar:{q:'أكمل الحديث: "لله أفرح بتوبة عبده من أحدكم ..."',opts:['بماله الكثير','بضالته في أرض فلاة','بنجاحه في العمل','بزواجه'],correct:1,hint:'فقد شيئاً ثميناً ثم وجده',quran:'الزمر ٥٣'},
    en:{q:'Complete the hadith: "God rejoices more at the repentance of His servant than one of you ..."',opts:['Getting wealth','Finding a lost camel in the desert','Succeeding at work','Getting married'],correct:1,hint:'Lost something precious then found it',quran:'Az-Zumar 53'},
    fr:{q:'Completez le hadith : "Dieu se rejouit plus du repentir de Son serviteur que l\'un de vous ..."',opts:['Obtenant de la richesse','Retrouvant son chameau perdu dans le desert','Reussissant au travail','Se mariant'],correct:1,hint:'A perdu quelque chose de precieux puis l\'a retrouve',quran:'Az-Zumar 53'}
  },
  {
    ar:{q:'ما السورة التي تقسم بالعصر وتقول إن الإنسان لفي خسر؟',opts:['الفجر','العصر','الضحى','الليل'],correct:1,hint:'سورة قصيرة عن الزمن',quran:'العصر ١-٢'},
    en:{q:'Which surah swears by time and says mankind is in loss?',opts:['Al-Fajr','Al-Asr','Ad-Duha','Al-Layl'],correct:1,hint:'A short surah about time',quran:'Al-Asr 1-2'},
    fr:{q:'Quelle sourate jure par le temps et dit que l\'homme est en perdition ?',opts:['Al-Fajr','Al-Asr','Ad-Duha','Al-Layl'],correct:1,hint:'Une courte sourate sur le temps',quran:'Al-Asr 1-2'}
  },
  {
    ar:{q:'ما الآية التي تقول إن مع العسر يسراً؟',opts:['سورة البقرة','سورة الشرح','سورة يس','سورة الملك'],correct:1,hint:'سورة قصيرة فيها تكرار لهذا المعنى',quran:'الشرح ٥-٦'},
    en:{q:'Which surah states that with hardship comes ease?',opts:['Al-Baqarah','Ash-Sharh','Ya-Sin','Al-Mulk'],correct:1,hint:'A short surah that repeats this meaning',quran:'Ash-Sharh 5-6'},
    fr:{q:'Quelle sourate dit qu\'avec la difficulte vient la facilite ?',opts:['Al-Baqarah','Ash-Sharh','Ya-Sin','Al-Mulk'],correct:1,hint:'Une courte sourate qui repete ce sens',quran:'Ash-Sharh 5-6'}
  },
  {
    ar:{q:'ماذا يعني الاستخلاف في الأرض؟',opts:['الترفيه والمتعة','إعمار الأرض بالعدل','تدمير البيئة','الانعزال عن المجتمع'],correct:1,hint:'مسؤولية عمارة لا خراب',quran:'البقرة ٣٠'},
    en:{q:'What does stewardship of the earth mean?',opts:['Entertainment and pleasure','Building the earth with justice','Destroying the environment','Isolating from society'],correct:1,hint:'A responsibility to build not destroy',quran:'Al-Baqarah 30'},
    fr:{q:'Que signifie la gerance de la terre ?',opts:['Le divertissement et le plaisir','Construire la terre avec justice','Detruire l\'environnement','S\'isoler de la societe'],correct:1,hint:'Une responsabilite de construire pas de detruire',quran:'Al-Baqarah 30'}
  },
  {
    ar:{q:'أكمل الحديث: "تبسمك في وجه أخيك ..."',opts:['واجب','صدقة','سنة','مباح'],correct:1,hint:'عمل بسيط له أجر كبير',quran:'النحل ٩٧'},
    en:{q:'Complete the hadith: "Your smile in the face of your brother is ..."',opts:['An obligation','Charity','A sunnah','Permissible'],correct:1,hint:'A simple act with great reward',quran:'An-Nahl 97'},
    fr:{q:'Completez le hadith : "Ton sourire au visage de ton frere est ..."',opts:['Une obligation','Une charite','Une sunna','Permis'],correct:1,hint:'Un acte simple avec une grande recompense',quran:'An-Nahl 97'}
  },
  {
    ar:{q:'ما الذي حُفّت به الجنة وفق الحديث النبوي؟',opts:['الشهوات','المكاره','الزهور','الملائكة'],correct:1,hint:'أشياء صعبة على النفس',quran:'البقرة ٢٤'},
    en:{q:'What is Paradise surrounded by according to the hadith?',opts:['Desires','Hardships','Flowers','Angels'],correct:1,hint:'Things difficult for the soul',quran:'Al-Baqarah 24'},
    fr:{q:'De quoi le Paradis est-il entoure selon le hadith ?',opts:['Les desirs','Les difficultes','Les fleurs','Les anges'],correct:1,hint:'Des choses difficiles pour l\'ame',quran:'Al-Baqarah 24'}
  },
  {
    ar:{q:'ماذا يعني قوله تعالى: "ولا تزر وازرة وزر أخرى"؟',opts:['كل إنسان يتحمل ذنوب غيره','لا يُحاسب أحد على ذنب غيره','الجماعة تتحمل الذنب','الوالدان يتحملان ذنوب الأبناء'],correct:1,hint:'المسؤولية الفردية',quran:'الأنعام ١٦٤'},
    en:{q:'What does "no bearer of burdens shall bear the burden of another" mean?',opts:['Everyone carries others\' sins','No one is punished for another\'s sin','The group bears the sin','Parents bear children\'s sins'],correct:1,hint:'Individual responsibility',quran:'Al-An\'am 164'},
    fr:{q:'Que signifie "aucune ame ne portera le fardeau d\'une autre" ?',opts:['Chacun porte les peches des autres','Personne n\'est puni pour le peche d\'un autre','Le groupe porte le peche','Les parents portent les peches des enfants'],correct:1,hint:'La responsabilite individuelle',quran:'Al-An\'am 164'}
  },
  {
    ar:{q:'من مؤلف كتاب "الحياة الأولى"؟',opts:['سيد قطب','محمد الغزالي','يوسف القرضاوي','ابن كثير'],correct:1,hint:'عالم مصري لُقب بأديب الدعوة',quran:'المؤمنون ١١٥'},
    en:{q:'Who is the author of "The First Life"?',opts:['Sayyid Qutb','Mohammed al-Ghazali','Yusuf al-Qaradawi','Ibn Kathir'],correct:1,hint:'An Egyptian scholar nicknamed the Literary Preacher',quran:'Al-Mu\'minun 115'},
    fr:{q:'Qui est l\'auteur de "La Vie Premiere" ?',opts:['Sayyid Qutb','Mohammed al-Ghazali','Yusuf al-Qaradawi','Ibn Kathir'],correct:1,hint:'Un savant egyptien surnomme le Litteraire de la Predication',quran:'Al-Mu\'minun 115'}
  }
];

// ═══════════════ DUAS DATA (8 duas) ═══════════════
const DUAS = [
  {ar:{label:'دعاء التدبر والتفكر',text:'اللهم أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه',tr:'اللهم اهدنا لمعرفة الحق'},en:{label:'Dua for Reflection',text:'O God, show us truth as truth and grant us to follow it, and show us falsehood as falsehood and grant us to avoid it',tr:'O God, guide us to know the truth'},fr:{label:'Dua de Reflexion',text:'O Dieu, montre-nous la verite comme verite et accorde-nous de la suivre, et montre-nous le faux comme faux et accorde-nous de l\'eviter',tr:'O Dieu, guide-nous vers la verite'}},
  {ar:{label:'دعاء حسن الخاتمة',text:'اللهم أحسن عاقبتنا في الأمور كلها وأجرنا من خزي الدنيا وعذاب الآخرة',tr:'اللهم اختم لنا بخير'},en:{label:'Dua for Good Ending',text:'O God, grant us good outcomes in all matters and protect us from the disgrace of this world and the punishment of the hereafter',tr:'O God, grant us a good ending'},fr:{label:'Dua pour une Bonne Fin',text:'O Dieu, accorde-nous de bonnes fins dans toutes les affaires et protege-nous de la honte d\'ici-bas et du chatiment de l\'au-dela',tr:'O Dieu, accorde-nous une bonne fin'}},
  {ar:{label:'دعاء الهداية',text:'اللهم اهدنا فيمن هديت وعافنا فيمن عافيت وتولنا فيمن توليت',tr:'من دعاء القنوت'},en:{label:'Dua for Guidance',text:'O God, guide us among those You have guided, grant us health among those You have granted health, and take care of us among those You have taken care of',tr:'From the Qunut supplication'},fr:{label:'Dua de Guidance',text:'O Dieu, guide-nous parmi ceux que Tu as guides, accorde-nous la sante parmi ceux que Tu as accordes la sante',tr:'De l\'invocation du Qunut'}},
  {ar:{label:'دعاء الاستغفار',text:'أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه',tr:'سيد الاستغفار'},en:{label:'Dua for Forgiveness',text:'I seek forgiveness from God the Almighty, there is no god but Him, the Living, the Self-Sustaining, and I repent to Him',tr:'Master of seeking forgiveness'},fr:{label:'Dua de Pardon',text:'Je demande pardon a Dieu le Tout-Puissant, il n\'y a de dieu que Lui, le Vivant, le Subsistant, et je me repens a Lui',tr:'Maitre de la demande de pardon'}},
  {ar:{label:'دعاء العلم النافع',text:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',tr:'دعاء بعد صلاة الفجر'},en:{label:'Dua for Beneficial Knowledge',text:'O God, I ask You for beneficial knowledge, good provision, and accepted deeds',tr:'Supplication after Fajr prayer'},fr:{label:'Dua pour un Savoir Utile',text:'O Dieu, je Te demande un savoir utile, une bonne subsistance et des oeuvres acceptees',tr:'Invocation apres la priere du Fajr'}},
  {ar:{label:'دعاء الثبات',text:'يا مقلب القلوب ثبت قلبي على دينك',tr:'دعاء النبي ﷺ'},en:{label:'Dua for Steadfastness',text:'O Turner of hearts, keep my heart firm on Your religion',tr:'The Prophet\'s supplication'},fr:{label:'Dua de Fermete',text:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion',tr:'L\'invocation du Prophete'}},
  {ar:{label:'دعاء التوكل',text:'حسبنا الله ونعم الوكيل',tr:'قالها إبراهيم حين أُلقي في النار'},en:{label:'Dua of Reliance',text:'God is sufficient for us and He is the best Disposer of affairs',tr:'Said by Ibrahim when thrown into the fire'},fr:{label:'Dua de Confiance',text:'Dieu nous suffit et Il est le meilleur Garant',tr:'Dit par Ibrahim quand il fut jete dans le feu'}},
  {ar:{label:'دعاء الرضا',text:'رضيت بالله رباً وبالإسلام ديناً وبمحمد ﷺ نبياً ورسولاً',tr:'من أذكار الصباح والمساء'},en:{label:'Dua of Contentment',text:'I am pleased with God as Lord, Islam as religion, and Muhammad as Prophet and Messenger',tr:'From morning and evening remembrances'},fr:{label:'Dua de Contentement',text:'Je suis satisfait de Dieu comme Seigneur, de l\'Islam comme religion, et de Muhammad comme Prophete et Messager',tr:'Des invocations du matin et du soir'}}
];

// ═══════════════ BADGES ═══════════════
const BADGE_DEFS = [
  {id:'beginner', emoji:'🌱', xp:0,   ar:'مبتدئ', en:'Beginner', fr:'Debutant'},
  {id:'reader',   emoji:'📖', xp:50,  ar:'قارئ',  en:'Reader',   fr:'Lecteur'},
  {id:'scholar',  emoji:'🎓', xp:150, ar:'عالم',  en:'Scholar',  fr:'Savant'},
  {id:'persistent',emoji:'🔥',xp:300, ar:'مثابر', en:'Persistent',fr:'Perseverant'},
  {id:'expert',   emoji:'🏆', xp:500, ar:'خبير',  en:'Expert',   fr:'Expert'}
];

// ═══════════════ STORAGE KEYS ═══════════════
const STORE_PREFIX = 'hayat_ula_';
const READ_KEY = STORE_PREFIX + 'read';
const XP_KEY = STORE_PREFIX + 'xp';
const STREAK_KEY = STORE_PREFIX + 'streak';
const MODE_KEY = STORE_PREFIX + 'mode';
const QUIZ_BEST_KEY = STORE_PREFIX + 'quizBest';

// ═══════════════ XP & BADGES ═══════════════
function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(n) {
  const xp = getXP() + n;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
}
function getLevel(xp) { return Math.floor(xp / 100) + 1; }
function getEarnedBadges() { return BADGE_DEFS.filter(b => getXP() >= b.xp).map(b => b.id); }
function checkBadges(xp) {
  const newBadge = BADGE_DEFS.find(b => xp >= b.xp && xp - 10 < b.xp);
  if (newBadge) showToast(`${newBadge.emoji} ${newBadge[lang]}!`);
}

// ═══════════════ READ TRAITS ═══════════════
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabTraits'); if(_e) _e.textContent=t.tabTraits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=(document.getElementById('traitsTitle') || document.getElementById('cardsTitle')); if(_e) _e.textContent=t.traitsTitle; }
  { const _e=(document.getElementById('traitsDesc') || document.getElementById('cardsDesc')); if(_e) _e.textContent=t.traitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = (document.getElementById('traitsContainer') || document.getElementById('cardsContainer'));
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«الحياة الأولى» كتاب يتناول أسئلة الوجود الكبرى: لماذا خُلقنا؟ ما مصيرنا بعد الموت؟ كيف نعيش حياة ذات معنى؟ يربط الشيخ الغزالي بين التأمل في الخلق والعمل للآخرة بأسلوب عقلاني مؤثر.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الحياة الأولى" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأحمد'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at Emir Abdelkader University in Constantine, Algeria. King Faisal Award winner.',
      bookTitle: 'About the Book',
      bookDesc: '"The First Life" addresses the great questions of existence: Why were we created? What is our destiny after death? How do we live a meaningful life? Sheikh al-Ghazali links reflection on creation with working for the hereafter in a rational and impactful style.',
      sourcesTitle: 'Sources',
      sources: ['"The First Life" (Al-Hayat Al-Ula) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan al-Tirmidhi and Ahmad'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie).',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"La Vie Premiere" aborde les grandes questions de l\'existence : Pourquoi avons-nous ete crees ? Quel est notre destin apres la mort ? Comment vivre une vie significative ? Le Sheikh al-Ghazali lie la reflexion sur la creation au travail pour l\'au-dela.',
      sourcesTitle: 'Sources',
      sources: ['"La Vie Premiere" (Al-Hayat Al-Ula) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan al-Tirmidhi et Ahmad'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي عن الحياة الأولى بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الحياة الأولى" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/al-hayat-al-ula'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom on the first life interactively.'},
      {title:'📚 Sources',body:'"The First Life" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/al-hayat-al-ula'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"La Vie Premiere" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/al-hayat-al-ula'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء والتأمل','⭐ أكمل ٢٠ بطاقة لتصبح خبيراً'],
    en: ['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget duas and reflection','⭐ Complete all 20 cards to become an Expert'],
    fr: ['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas et la reflexion','⭐ Completez les 20 cartes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
