/* الحياة الأولى — THE FIRST LIFE — app.js */
/* Based on "Al-Hayat Al-Ula" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الحياة الأولى',
    splashSub: 'تأملات في أصل الخلق وغاية الوجود',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة المؤمنون ٢٣: ١١٥',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabReflections: 'تأملات',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الحياة الأولى',
    cardsDesc: '٢٠ بطاقة من كتاب الحياة الأولى — كل بطاقة تأمل في أصل الخلق وغاية الوجود',
    reflectionsTitle: 'تأملات عميقة',
    reflectionsDesc: 'تأملات قرآنية في الروح والجسد والحياة والآخرة',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من الكتاب — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر فهمك',
    quizDesc: 'هل تفهم غاية وجودك؟ أجب بصدق',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ تأمل اليوم',
    quizAgain: 'أعد الاختبار',
    verse: 'الآية',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    evidence: '📖 الدليل',
    lesson: '💡 الدرس',
    splashFeatures: [
      '٢٠ بطاقة عن أصل الخلق والوجود',
      '٦ تأملات قرآنية عميقة',
      'عادات يومية مع تتبع مستمر',
      'اختبار ذاتي + أدعية'
    ],
  },
  en: {
    appTitle: 'The First Life',
    splashSub: 'Reflections on creation, purpose, and the hereafter',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Mu\'minun 23:115',
    tabHome: 'Home', tabCards: 'Cards', tabReflections: 'Reflect',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Cards of The First Life',
    cardsDesc: '20 cards from The First Life — each card is a reflection on creation and the purpose of existence',
    reflectionsTitle: 'Deep Reflections',
    reflectionsDesc: 'Quranic reflections on the soul, body, worldly life, and the hereafter',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the book — track your daily progress',
    quizTitle: 'Test Your Understanding',
    quizDesc: 'Do you understand your purpose of existence? Answer honestly',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Reflection',
    quizAgain: 'Retake Quiz',
    verse: 'Verse',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    evidence: '📖 Evidence',
    lesson: '💡 Lesson',
    splashFeatures: [
      '20 cards on creation and existence',
      '6 deep Quranic reflections',
      'Daily habits with streak tracking',
      'Self-quiz + duas'
    ],
  },
  fr: {
    appTitle: 'La Vie Premiere',
    splashSub: 'Reflexions sur la creation, le but et l\'au-dela',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Mu\'minun 23:115',
    tabHome: 'Accueil', tabCards: 'Cartes', tabReflections: 'Reflexion',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes de La Vie Premiere',
    cardsDesc: '20 cartes du livre La Vie Premiere — chaque carte est une reflexion sur la creation et le but de l\'existence',
    reflectionsTitle: 'Reflexions Profondes',
    reflectionsDesc: 'Reflexions coraniques sur l\'ame, le corps, la vie d\'ici-bas et l\'au-dela',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirees du livre — suivez vos progres',
    quizTitle: 'Testez Votre Comprehension',
    quizDesc: 'Comprenez-vous le but de votre existence ? Repondez honnetement',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reinitialiser',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Reflexion du Jour',
    quizAgain: 'Refaire le Quiz',
    verse: 'Verset',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    evidence: '📖 Preuve',
    lesson: '💡 Lecon',
    splashFeatures: [
      '20 cartes sur la creation et l\'existence',
      '6 reflexions coraniques profondes',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas quotidiennes'
    ],
  }
};

// ═══════════════ CARDS DATA (20 cards) ═══════════════
const CARDS = [
  {
    id:1, emoji:'🌍',
    ar:{title:'بداية الخلق',desc:'الله خلق السماوات والأرض في ستة أيام، وكل شيء في الكون مخلوق بحكمة وتدبير. الخلق ليس عبثاً بل لغاية عظيمة يدركها من تدبّر.',verse:'أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا',action:'تأمل في السماء الليلة وتفكر في عظمة الخالق'},
    en:{title:'The Beginning of Creation',desc:'God created the heavens and earth in six periods. Everything in the universe is created with wisdom and purpose. Creation is not in vain but for a great purpose that those who reflect can understand.',verse:'أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا',action:'Look at the sky tonight and reflect on the Creator\'s greatness'},
    fr:{title:'Le Debut de la Creation',desc:'Dieu a cree les cieux et la terre en six periodes. Tout dans l\'univers est cree avec sagesse et dessein. La creation n\'est pas vaine mais pour un grand but que ceux qui reflechissent peuvent comprendre.',verse:'أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا',action:'Regardez le ciel ce soir et reflechissez a la grandeur du Createur'}
  },
  {
    id:2, emoji:'👤',
    ar:{title:'خلق الإنسان',desc:'خُلق الإنسان من طين ثم نُفخت فيه الروح. هذا المزيج بين التراب والروح يجعل الإنسان مخلوقاً فريداً بين السماء والأرض.',verse:'وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن سُلَالَةٍ مِّن طِينٍ',action:'اشكر الله على نعمة الخلق — أنت مخلوق بعناية'},
    en:{title:'The Creation of Humanity',desc:'Humans were created from clay, then the soul was breathed into them. This blend of earth and spirit makes humanity a unique creation between heaven and earth.',verse:'وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن سُلَالَةٍ مِّن طِينٍ',action:'Thank God for the blessing of creation — you were crafted with care'},
    fr:{title:'La Creation de l\'Homme',desc:'L\'homme a ete cree d\'argile, puis l\'ame y a ete insufflee. Ce melange de terre et d\'esprit fait de l\'humanite une creation unique entre ciel et terre.',verse:'وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن سُلَالَةٍ مِّن طِينٍ',action:'Remerciez Dieu pour la benediction de la creation'}
  },
  {
    id:3, emoji:'✨',
    ar:{title:'الروح سر من أسرار الله',desc:'الروح من أمر الله وعلمها عنده. لا يستطيع العلم الحديث أن يكشف كنهها. هي التي تمنح الجسد الحياة والإدراك والإرادة.',verse:'وَيَسْأَلُونَكَ عَنِ الرُّوحِ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي',action:'تفكر في نعمة الروح التي تحييك — ما الذي يميزك عن الجماد؟'},
    en:{title:'The Soul: A Divine Secret',desc:'The soul is from God\'s command, and knowledge of it belongs to Him. Modern science cannot reveal its essence. It gives the body life, awareness, and will.',verse:'وَيَسْأَلُونَكَ عَنِ الرُّوحِ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي',action:'Reflect on the blessing of the soul that gives you life — what distinguishes you from inanimate objects?'},
    fr:{title:'L\'Ame : Un Secret Divin',desc:'L\'ame vient du commandement de Dieu, et sa connaissance Lui appartient. La science moderne ne peut reveler son essence. Elle donne au corps la vie, la conscience et la volonte.',verse:'وَيَسْأَلُونَكَ عَنِ الرُّوحِ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي',action:'Reflechissez a la benediction de l\'ame qui vous donne la vie'}
  },
  {
    id:4, emoji:'🏔️',
    ar:{title:'غاية الوجود',desc:'لم يُخلق الإنسان ليأكل ويشرب ويموت. خُلق ليعبد الله ويعمر الأرض. الحياة اختبار قصير والآخرة هي الدار الحقيقية.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',action:'اسأل نفسك: ما غايتي في الحياة؟ واكتب الإجابة'},
    en:{title:'The Purpose of Existence',desc:'Humans were not created just to eat, drink, and die. They were created to worship God and build the earth. Life is a short test, and the hereafter is the true abode.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',action:'Ask yourself: what is my purpose in life? Write down the answer'},
    fr:{title:'Le But de l\'Existence',desc:'L\'homme n\'a pas ete cree juste pour manger, boire et mourir. Il a ete cree pour adorer Dieu et construire la terre. La vie est un court test, et l\'au-dela est la vraie demeure.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',action:'Demandez-vous : quel est mon but dans la vie ? Ecrivez la reponse'}
  },
  {
    id:5, emoji:'⚖️',
    ar:{title:'الدنيا دار اختبار',desc:'الحياة الدنيا ليست دار إقامة بل دار عبور. كل ما فيها من نعم ومحن اختبار من الله ليرى من يشكر ومن يصبر.',verse:'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا',action:'تعامل مع كل موقف اليوم كاختبار — كيف ستنجح فيه؟'},
    en:{title:'This World Is a Test',desc:'This worldly life is not a permanent residence but a passage. Every blessing and hardship in it is a test from God to see who is grateful and who is patient.',verse:'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا',action:'Treat every situation today as a test — how will you pass it?'},
    fr:{title:'Ce Monde Est un Test',desc:'La vie d\'ici-bas n\'est pas une residence permanente mais un passage. Chaque benediction et epreuve est un test de Dieu pour voir qui est reconnaissant et qui est patient.',verse:'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا',action:'Traitez chaque situation aujourd\'hui comme un test — comment le reussirez-vous ?'}
  },
  {
    id:6, emoji:'💎',
    ar:{title:'الفطرة السليمة',desc:'كل إنسان يولد على الفطرة — ميل فطري نحو الحق والخير والتوحيد. البيئة والتربية قد تحرف هذه الفطرة لكنها لا تمحوها أبداً.',verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',action:'استمع لصوتك الداخلي اليوم — الفطرة تدلك على الحق'},
    en:{title:'The Sound Nature',desc:'Every person is born with fitrah — an innate inclination toward truth, goodness, and monotheism. Environment and upbringing may divert this nature but can never erase it.',verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',action:'Listen to your inner voice today — your fitrah guides you to truth'},
    fr:{title:'La Nature Saine',desc:'Chaque personne nait avec la fitrah — une inclination innee vers la verite, le bien et le monotheisme. L\'environnement peut devier cette nature mais ne peut jamais l\'effacer.',verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',action:'Ecoutez votre voix interieure aujourd\'hui — la fitrah vous guide vers la verite'}
  },
  {
    id:7, emoji:'🌙',
    ar:{title:'الجسد والروح',desc:'الإنسان ليس جسداً فقط ولا روحاً فقط. هو مزيج متوازن بينهما. من أهمل روحه مرض قلبه، ومن أهمل جسده عجز عن العبادة.',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',action:'وازن بين حاجات روحك وجسدك اليوم'},
    en:{title:'Body and Soul',desc:'A human is not just a body or just a soul. They are a balanced blend of both. Neglecting the soul sickens the heart, and neglecting the body prevents worship.',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',action:'Balance your soul\'s needs and your body\'s needs today'},
    fr:{title:'Corps et Ame',desc:'L\'humain n\'est pas seulement un corps ou seulement une ame. Il est un melange equilibre des deux. Negliger l\'ame rend le coeur malade, et negliger le corps empeche l\'adoration.',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',action:'Equilibrez les besoins de votre ame et de votre corps aujourd\'hui'}
  },
  {
    id:8, emoji:'🔑',
    ar:{title:'العقل نعمة وأمانة',desc:'العقل هبة الله للإنسان ليميز بين الحق والباطل. تعطيل العقل خيانة للأمانة. الإسلام دين يخاطب العقل ويحترمه.',verse:'إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ',action:'استخدم عقلك اليوم في التفكر — اقرأ شيئاً جديداً وتدبره'},
    en:{title:'The Mind: A Gift and Trust',desc:'The mind is God\'s gift to humans to distinguish truth from falsehood. Disabling the mind is a betrayal of this trust. Islam is a religion that addresses and respects the intellect.',verse:'إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ',action:'Use your mind today in reflection — read something new and contemplate it'},
    fr:{title:'L\'Esprit : Un Don et une Confiance',desc:'L\'esprit est le don de Dieu aux humains pour distinguer le vrai du faux. Desactiver l\'esprit est une trahison de cette confiance. L\'Islam est une religion qui s\'adresse a l\'intellect et le respecte.',verse:'إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَعْقِلُونَ',action:'Utilisez votre esprit aujourd\'hui pour la reflexion — lisez quelque chose de nouveau'}
  },
  {
    id:9, emoji:'🌱',
    ar:{title:'الحياة الدنيا متاع قليل',desc:'مهما طالت الحياة فهي قصيرة مقارنة بالآخرة. لا تتعلق بالدنيا كأنها الغاية — استمتع بها لكن اعمل للآخرة.',verse:'قُلْ مَتَاعُ الدُّنْيَا قَلِيلٌ وَالْآخِرَةُ خَيْرٌ لِّمَنِ اتَّقَىٰ',action:'تذكر أن هذه الحياة مؤقتة — ماذا قدمت لآخرتك اليوم؟'},
    en:{title:'Worldly Life Is Brief Enjoyment',desc:'No matter how long life is, it is short compared to the hereafter. Don\'t cling to this world as the ultimate goal — enjoy it but work for the hereafter.',verse:'قُلْ مَتَاعُ الدُّنْيَا قَلِيلٌ وَالْآخِرَةُ خَيْرٌ لِّمَنِ اتَّقَىٰ',action:'Remember this life is temporary — what have you prepared for the hereafter today?'},
    fr:{title:'La Vie d\'Ici-Bas Est une Breve Jouissance',desc:'Aussi longue soit la vie, elle est courte comparee a l\'au-dela. Ne vous accrochez pas a ce monde comme but ultime — profitez-en mais oeuvrez pour l\'au-dela.',verse:'قُلْ مَتَاعُ الدُّنْيَا قَلِيلٌ وَالْآخِرَةُ خَيْرٌ لِّمَنِ اتَّقَىٰ',action:'Rappelez-vous que cette vie est temporaire — qu\'avez-vous prepare pour l\'au-dela aujourd\'hui ?'}
  },
  {
    id:10, emoji:'💀',
    ar:{title:'الموت حق',desc:'الموت ليس نهاية بل بداية حقيقية. كل نفس ذائقة الموت. التفكر في الموت يزهّد في الدنيا ويحفز على العمل الصالح.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',action:'تذكر الموت اليوم — ليس للحزن بل لتحفيزك على الخير'},
    en:{title:'Death Is Certain',desc:'Death is not an ending but a true beginning. Every soul shall taste death. Reflecting on death helps detach from worldly life and motivates good deeds.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',action:'Remember death today — not for sadness but to motivate you toward goodness'},
    fr:{title:'La Mort Est Certaine',desc:'La mort n\'est pas une fin mais un vrai debut. Toute ame goutera la mort. Reflechir a la mort aide a se detacher de la vie mondaine et motive les bonnes actions.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',action:'Rappelez-vous la mort aujourd\'hui — non pour la tristesse mais pour vous motiver vers le bien'}
  },
  {
    id:11, emoji:'🌅',
    ar:{title:'البعث والنشور',desc:'كما يحيي الله الأرض بعد موتها، يبعث الإنسان بعد موته. البعث حقيقة يقينية أخبر عنها كل الأنبياء.',verse:'وَأَنَّ السَّاعَةَ آتِيَةٌ لَّا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ',action:'تأمل في الربيع وكيف تعود الحياة للأرض — هذا دليل على البعث'},
    en:{title:'Resurrection',desc:'Just as God revives the earth after its death, He resurrects humans after death. Resurrection is a certain truth reported by all prophets.',verse:'وَأَنَّ السَّاعَةَ آتِيَةٌ لَّا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ',action:'Reflect on spring and how life returns to the earth — this is evidence of resurrection'},
    fr:{title:'La Resurrection',desc:'Tout comme Dieu revivifie la terre apres sa mort, Il ressuscite les humains apres la mort. La resurrection est une verite certaine rapportee par tous les prophetes.',verse:'وَأَنَّ السَّاعَةَ آتِيَةٌ لَّا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ',action:'Reflechissez au printemps et au retour de la vie — c\'est une preuve de la resurrection'}
  },
  {
    id:12, emoji:'⚡',
    ar:{title:'الحساب والجزاء',desc:'يوم القيامة يُحاسب كل إنسان على أعماله — صغيرها وكبيرها. لا ظلم في حساب الله. من عمل خيراً يره ومن عمل شراً يره.',verse:'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',action:'حاسب نفسك قبل أن تُحاسب — ماذا في صحيفة أعمالك اليوم؟'},
    en:{title:'Accountability and Reward',desc:'On the Day of Judgment, every person will be held accountable for their deeds — small and large. There is no injustice in God\'s accounting. Whoever does good will see it, and whoever does evil will see it.',verse:'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',action:'Hold yourself accountable before you are held accountable — what is in your record today?'},
    fr:{title:'La Reddition des Comptes',desc:'Le Jour du Jugement, chaque personne sera jugee pour ses actes — petits et grands. Il n\'y a pas d\'injustice dans le jugement de Dieu.',verse:'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',action:'Jugez-vous avant d\'etre juge — qu\'y a-t-il dans votre registre aujourd\'hui ?'}
  },
  {
    id:13, emoji:'🏡',
    ar:{title:'الآخرة خير وأبقى',desc:'الآخرة هي الحياة الحقيقية الدائمة. الدنيا مزرعة والآخرة حصاد. من زرع خيراً حصد خيراً.',verse:'وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ',action:'ازرع بذرة خير اليوم — صدقة أو كلمة طيبة أو ابتسامة'},
    en:{title:'The Hereafter Is Better and Everlasting',desc:'The hereafter is the true, everlasting life. This world is a farm and the hereafter is the harvest. Whoever plants good reaps good.',verse:'وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ',action:'Plant a seed of goodness today — charity, a kind word, or a smile'},
    fr:{title:'L\'Au-Dela Est Meilleur et Eternel',desc:'L\'au-dela est la vraie vie eternelle. Ce monde est une ferme et l\'au-dela est la recolte. Celui qui plante le bien recolte le bien.',verse:'وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ',action:'Plantez une graine de bien aujourd\'hui — charite, bonne parole ou sourire'}
  },
  {
    id:14, emoji:'🤲',
    ar:{title:'التوحيد أساس الحياة',desc:'الإيمان بالله الواحد هو أساس كل شيء في الحياة. التوحيد يحرر الإنسان من عبودية المخلوقات ويربطه بالخالق وحده.',verse:'قُلْ هُوَ اللَّهُ أَحَدٌ',action:'جدد توحيدك اليوم — لا تعلق قلبك إلا بالله'},
    en:{title:'Monotheism: The Foundation of Life',desc:'Belief in the One God is the foundation of everything in life. Monotheism frees humans from the slavery of creation and connects them to the Creator alone.',verse:'قُلْ هُوَ اللَّهُ أَحَدٌ',action:'Renew your monotheism today — attach your heart only to God'},
    fr:{title:'Le Monotheisme : Fondement de la Vie',desc:'La croyance en Dieu Unique est le fondement de tout dans la vie. Le monotheisme libere l\'homme de la servitude des creatures et le relie au Createur seul.',verse:'قُلْ هُوَ اللَّهُ أَحَدٌ',action:'Renouvelez votre monotheisme aujourd\'hui — n\'attachez votre coeur qu\'a Dieu'}
  },
  {
    id:15, emoji:'📖',
    ar:{title:'القرآن منهج حياة',desc:'القرآن ليس كتاباً للتبرك فقط بل منهج حياة كامل. فيه إجابات على كل أسئلة الوجود والحياة والموت.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',action:'اقرأ صفحة من القرآن بتدبر وتأمل في معانيها'},
    en:{title:'The Quran: A Complete Life Guide',desc:'The Quran is not just a book for blessings but a complete life methodology. It contains answers to every question about existence, life, and death.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',action:'Read a page of the Quran with reflection and contemplate its meanings'},
    fr:{title:'Le Coran : Guide de Vie Complet',desc:'Le Coran n\'est pas seulement un livre de benedictions mais une methodologie de vie complete. Il contient les reponses a chaque question sur l\'existence, la vie et la mort.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',action:'Lisez une page du Coran avec reflexion et contemplez ses sens'}
  },
  {
    id:16, emoji:'🕊️',
    ar:{title:'النبوة والرسالة',desc:'أرسل الله الأنبياء ليبينوا للناس غاية وجودهم وكيف يعيشون. خاتمهم محمد ﷺ الذي جاء رحمة للعالمين.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',action:'اقتدِ بسنة من سنن النبي ﷺ اليوم'},
    en:{title:'Prophethood and Message',desc:'God sent prophets to show people their purpose of existence and how to live. The last of them is Muhammad (peace be upon him), who came as a mercy to all worlds.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',action:'Follow one of the Prophet\'s practices today'},
    fr:{title:'La Prophetie et le Message',desc:'Dieu a envoye des prophetes pour montrer aux gens leur but d\'existence et comment vivre. Le dernier est Muhammad (paix sur lui), venu comme misericorde pour les mondes.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',action:'Suivez une pratique du Prophete aujourd\'hui'}
  },
  {
    id:17, emoji:'🛡️',
    ar:{title:'الإنسان بين الخير والشر',desc:'الإنسان قادر على الخير والشر معاً. الله أعطاه حرية الاختيار وعقلاً يميز به. من اختار الخير فاز، ومن اختار الشر خسر.',verse:'وَهَدَيْنَاهُ النَّجْدَيْنِ',action:'اختر الخير اليوم في كل موقف — حتى لو كان صعباً'},
    en:{title:'Humanity Between Good and Evil',desc:'Humans are capable of both good and evil. God gave them freedom of choice and a mind to distinguish. Whoever chooses good wins, and whoever chooses evil loses.',verse:'وَهَدَيْنَاهُ النَّجْدَيْنِ',action:'Choose good today in every situation — even if it is difficult'},
    fr:{title:'L\'Homme entre le Bien et le Mal',desc:'L\'homme est capable du bien et du mal. Dieu lui a donne la liberte de choix et un esprit pour distinguer. Celui qui choisit le bien gagne, et celui qui choisit le mal perd.',verse:'وَهَدَيْنَاهُ النَّجْدَيْنِ',action:'Choisissez le bien aujourd\'hui dans chaque situation — meme si c\'est difficile'}
  },
  {
    id:18, emoji:'🌟',
    ar:{title:'الاستخلاف في الأرض',desc:'الله جعل الإنسان خليفة في الأرض ليعمرها لا ليفسدها. الاستخلاف مسؤولية عظيمة تقتضي العدل والإحسان.',verse:'إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً',action:'اعمل شيئاً يعمر الأرض اليوم — ازرع شجرة أو ساعد جارك'},
    en:{title:'Stewardship of the Earth',desc:'God made humans stewards of the earth to build it, not to corrupt it. Stewardship is a great responsibility that requires justice and excellence.',verse:'إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً',action:'Do something to build the earth today — plant a tree or help your neighbor'},
    fr:{title:'La Gerance de la Terre',desc:'Dieu a fait de l\'homme un gerant de la terre pour la construire, non pour la corrompre. La gerance est une grande responsabilite qui exige justice et excellence.',verse:'إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً',action:'Faites quelque chose pour construire la terre aujourd\'hui — plantez un arbre ou aidez votre voisin'}
  },
  {
    id:19, emoji:'🙏',
    ar:{title:'العبادة أوسع من الصلاة',desc:'العبادة في الإسلام ليست محصورة في الصلاة والصوم. كل عمل صالح بنية خالصة عبادة. العمل عبادة، والعلم عبادة، وحسن الخلق عبادة.',verse:'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',action:'حوّل عملاً يومياً إلى عبادة بتصحيح نيتك'},
    en:{title:'Worship Is Broader Than Prayer',desc:'Worship in Islam is not limited to prayer and fasting. Every good deed with pure intention is worship. Work is worship, learning is worship, and good character is worship.',verse:'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',action:'Turn a daily act into worship by correcting your intention'},
    fr:{title:'L\'Adoration Est Plus Large que la Priere',desc:'L\'adoration en Islam ne se limite pas a la priere et au jeune. Toute bonne action avec une intention pure est adoration. Le travail est adoration, apprendre est adoration.',verse:'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',action:'Transformez un acte quotidien en adoration en corrigeant votre intention'}
  },
  {
    id:20, emoji:'🕌',
    ar:{title:'خاتمة: استعد للحياة الأبدية',desc:'الحياة الأولى قصيرة والثانية أبدية. العاقل من استعد للأبدية ولم يغتر بالفانية. اجعل كل يوم خطوة نحو رضا الله.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ',action:'اختر درساً واحداً من هذه البطاقات وطبقه الآن — ليس غداً، الآن'},
    en:{title:'Conclusion: Prepare for Eternal Life',desc:'The first life is short and the second is eternal. The wise person prepares for eternity and is not deceived by the temporary. Make every day a step toward God\'s pleasure.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ',action:'Choose one lesson from these cards and apply it now — not tomorrow, now'},
    fr:{title:'Conclusion : Preparez-Vous pour la Vie Eternelle',desc:'La premiere vie est courte et la seconde est eternelle. Le sage se prepare pour l\'eternite et ne se laisse pas tromper par le temporaire. Faites de chaque jour un pas vers l\'agrement de Dieu.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ',action:'Choisissez une lecon de ces cartes et appliquez-la maintenant — pas demain, maintenant'}
  }
];

// ═══════════════ REFLECTIONS DATA ═══════════════
const REFLECTIONS = [
  {
    emoji:'🌌',
    ar:{title:'لماذا خلقنا الله؟',question:'سؤال يطرحه كل إنسان في لحظة من حياته — لماذا أنا هنا؟',answer:'الله خلقنا لنعبده ونعرفه ونعمر الأرض. العبادة ليست طقوساً فحسب بل هي أن تعيش كل لحظة لله.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',verseRef:'الذاريات ٥١: ٥٦'},
    en:{title:'Why Did God Create Us?',question:'A question every person asks at some point — why am I here?',answer:'God created us to worship Him, know Him, and build the earth. Worship is not just rituals but living every moment for God.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',verseRef:'Adh-Dhariyat 51:56'},
    fr:{title:'Pourquoi Dieu Nous a-t-Il Crees ?',question:'Une question que chaque personne se pose un jour — pourquoi suis-je ici ?',answer:'Dieu nous a crees pour L\'adorer, Le connaitre et construire la terre. L\'adoration n\'est pas que des rituels mais vivre chaque instant pour Dieu.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',verseRef:'Adh-Dhariyat 51:56'}
  },
  {
    emoji:'💫',
    ar:{title:'ما مصير الإنسان بعد الموت؟',question:'هل الموت نهاية أم بداية؟ هل هناك حياة أخرى؟',answer:'الموت انتقال وليس فناء. الحياة الأخرى حقيقة أكدها القرآن وكل الأنبياء. هناك بعث وحساب وجزاء.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ثُمَّ إِلَيْنَا تُرْجَعُونَ',verseRef:'العنكبوت ٢٩: ٥٧'},
    en:{title:'What Happens After Death?',question:'Is death an ending or a beginning? Is there another life?',answer:'Death is a transition, not annihilation. The afterlife is a reality confirmed by the Quran and all prophets. There is resurrection, accounting, and reward.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ثُمَّ إِلَيْنَا تُرْجَعُونَ',verseRef:'Al-Ankabut 29:57'},
    fr:{title:'Que Se Passe-t-Il Apres la Mort ?',question:'La mort est-elle une fin ou un debut ? Y a-t-il une autre vie ?',answer:'La mort est une transition, pas un aneantissement. L\'au-dela est une realite confirmee par le Coran et tous les prophetes.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ثُمَّ إِلَيْنَا تُرْجَعُونَ',verseRef:'Al-Ankabut 29:57'}
  },
  {
    emoji:'🔮',
    ar:{title:'ما حقيقة الروح؟',question:'ما هي الروح؟ ولماذا لا يستطيع العلم تفسيرها؟',answer:'الروح من أمر الله — سر إلهي لا يدركه البشر. هي مصدر الحياة والوعي. العلم يعرف تأثيرها لكن لا يعرف كنهها.',verse:'وَيَسْأَلُونَكَ عَنِ الرُّوحِ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي',verseRef:'الإسراء ١٧: ٨٥'},
    en:{title:'What Is the Soul?',question:'What is the soul? And why can\'t science explain it?',answer:'The soul is from God\'s command — a divine secret beyond human comprehension. It is the source of life and consciousness. Science knows its effects but not its essence.',verse:'وَيَسْأَلُونَكَ عَنِ الرُّوحِ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي',verseRef:'Al-Isra 17:85'},
    fr:{title:'Qu\'est-ce que l\'Ame ?',question:'Qu\'est-ce que l\'ame ? Et pourquoi la science ne peut-elle pas l\'expliquer ?',answer:'L\'ame vient du commandement de Dieu — un secret divin au-dela de la comprehension humaine. Elle est la source de la vie et de la conscience.',verse:'وَيَسْأَلُونَكَ عَنِ الرُّوحِ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي',verseRef:'Al-Isra 17:85'}
  },
  {
    emoji:'🌍',
    ar:{title:'لماذا يوجد الشر في العالم؟',question:'إذا كان الله رحيماً فلماذا يوجد الألم والظلم؟',answer:'الشر والألم جزء من الاختبار. الله أعطى الإنسان حرية الاختيار. المصائب ترفع الدرجات وتكفر الذنوب. والظلم سيُحاسب عليه أهله.',verse:'وَنَبْلُوكُم بِالشَّرِّ وَالْخَيْرِ فِتْنَةً',verseRef:'الأنبياء ٢١: ٣٥'},
    en:{title:'Why Does Evil Exist?',question:'If God is merciful, why is there pain and injustice?',answer:'Evil and pain are part of the test. God gave humans freedom of choice. Hardships elevate ranks and expiate sins. And oppressors will be held accountable.',verse:'وَنَبْلُوكُم بِالشَّرِّ وَالْخَيْرِ فِتْنَةً',verseRef:'Al-Anbiya 21:35'},
    fr:{title:'Pourquoi le Mal Existe-t-Il ?',question:'Si Dieu est misericordieux, pourquoi y a-t-il douleur et injustice ?',answer:'Le mal et la douleur font partie du test. Dieu a donne aux humains la liberte de choix. Les epreuves elevent les rangs et expient les peches.',verse:'وَنَبْلُوكُم بِالشَّرِّ وَالْخَيْرِ فِتْنَةً',verseRef:'Al-Anbiya 21:35'}
  },
  {
    emoji:'⏳',
    ar:{title:'كيف نوازن بين الدنيا والآخرة؟',question:'هل علينا ترك الدنيا تماماً أم الاستمتاع بها؟',answer:'الإسلام يدعو للتوازن — لا رهبانية ولا انغماس. اعمل لدنياك كأنك تعيش أبداً واعمل لآخرتك كأنك تموت غداً.',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',verseRef:'القصص ٢٨: ٧٧'},
    en:{title:'How to Balance This World and the Hereafter?',question:'Should we abandon this world completely or enjoy it?',answer:'Islam calls for balance — neither monasticism nor indulgence. Work for your worldly life as if you will live forever and for your hereafter as if you will die tomorrow.',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',verseRef:'Al-Qasas 28:77'},
    fr:{title:'Comment Equilibrer ce Monde et l\'Au-Dela ?',question:'Doit-on abandonner ce monde completement ou en profiter ?',answer:'L\'Islam appelle a l\'equilibre — ni monachisme ni exces. Travaillez pour votre vie comme si vous viviez eternellement et pour votre au-dela comme si vous mouriez demain.',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',verseRef:'Al-Qasas 28:77'}
  },
  {
    emoji:'🌈',
    ar:{title:'ما معنى السعادة الحقيقية؟',question:'هل السعادة في المال والشهرة أم في شيء آخر؟',answer:'السعادة الحقيقية في القرب من الله وراحة الضمير. المال والشهرة راحة مؤقتة. من عرف الله عرف السعادة الأبدية.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'الرعد ١٣: ٢٨'},
    en:{title:'What Is True Happiness?',question:'Is happiness in wealth and fame or in something else?',answer:'True happiness is in closeness to God and a clear conscience. Wealth and fame are temporary comfort. Whoever knows God knows eternal happiness.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'Ar-Ra\'d 13:28'},
    fr:{title:'Qu\'est-ce que le Vrai Bonheur ?',question:'Le bonheur est-il dans la richesse et la renommee ou dans autre chose ?',answer:'Le vrai bonheur est dans la proximite de Dieu et une conscience tranquille. La richesse et la renommee sont un confort temporaire.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'Ar-Ra\'d 13:28'}
  }
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'🌅',ar:{label:'صلاة الفجر في وقتها',source:'أقرب وقت لله'},en:{label:'Fajr prayer on time',source:'Closest time to God'},fr:{label:'Priere du Fajr a l\'heure',source:'Le moment le plus proche de Dieu'}},
  {emoji:'📖',ar:{label:'قراءة صفحة من القرآن بتدبر',source:'تدبر القرآن'},en:{label:'Read a page of Quran with reflection',source:'Quran reflection'},fr:{label:'Lire une page du Coran avec reflexion',source:'Reflexion coranique'}},
  {emoji:'🤲',ar:{label:'دعاء الصباح والمساء',source:'حصن المسلم'},en:{label:'Morning and evening duas',source:'Muslim\'s fortress'},fr:{label:'Invocations du matin et du soir',source:'Forteresse du musulman'}},
  {emoji:'💭',ar:{label:'تأمل في خلق الله ٥ دقائق',source:'التفكر في الخلق'},en:{label:'Contemplate God\'s creation for 5 min',source:'Reflection on creation'},fr:{label:'Contempler la creation de Dieu 5 min',source:'Reflexion sur la creation'}},
  {emoji:'😊',ar:{label:'إسعاد شخص واحد',source:'إعمار الأرض'},en:{label:'Make one person happy',source:'Building the earth'},fr:{label:'Rendre une personne heureuse',source:'Construire la terre'}},
  {emoji:'📝',ar:{label:'محاسبة النفس قبل النوم',source:'لتنظر نفس ما قدمت لغد'},en:{label:'Self-reflection before sleep',source:'Let every soul see what it prepared'},fr:{label:'Auto-reflexion avant de dormir',source:'Que chaque ame voie ce qu\'elle a prepare'}},
  {emoji:'🤝',ar:{label:'صلة رحم أو مساعدة جار',source:'الاستخلاف في الأرض'},en:{label:'Connect with family or help a neighbor',source:'Stewardship of earth'},fr:{label:'Lien familial ou aide au voisin',source:'Gerance de la terre'}},
  {emoji:'🌿',ar:{label:'عمل صالح بنية خالصة',source:'العبادة أوسع من الصلاة'},en:{label:'A good deed with pure intention',source:'Worship is broader than prayer'},fr:{label:'Bonne action avec intention pure',source:'L\'adoration est plus large que la priere'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تتفكر في غاية وجودك بانتظام؟',en:'Do you regularly reflect on your purpose of existence?',fr:'Reflechissez-vous regulierement au but de votre existence ?'},
  {ar:'هل تنشغل بالدنيا عن التفكر في الآخرة؟',en:'Are you too busy with worldly life to think about the hereafter?',fr:'Etes-vous trop occupe par la vie mondaine pour penser a l\'au-dela ?'},
  {ar:'هل تشعر أن حياتك لها معنى وهدف واضح؟',en:'Do you feel your life has clear meaning and purpose?',fr:'Sentez-vous que votre vie a un sens et un but clair ?'},
  {ar:'هل تخاف من الموت دون أن تستعد له؟',en:'Do you fear death without preparing for it?',fr:'Craignez-vous la mort sans vous y preparer ?'},
  {ar:'هل توازن بين حاجات روحك وجسدك؟',en:'Do you balance your soul\'s and body\'s needs?',fr:'Equilibrez-vous les besoins de votre ame et de votre corps ?'},
  {ar:'هل تقرأ القرآن بتدبر وتأمل في معانيه؟',en:'Do you read the Quran with contemplation?',fr:'Lisez-vous le Coran avec contemplation ?'},
  {ar:'هل تحاسب نفسك على أعمالك يومياً؟',en:'Do you hold yourself accountable for your deeds daily?',fr:'Vous tenez-vous responsable de vos actes quotidiennement ?'},
  {ar:'هل تشعر بالسعادة الحقيقية في قربك من الله؟',en:'Do you feel true happiness in your closeness to God?',fr:'Ressentez-vous le vrai bonheur dans votre proximite de Dieu ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء الصباح',text:'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',tr:'بك نبدأ يومنا وبك ننهيه'},en:{label:'Morning Dua',text:'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',tr:'O God, by You we enter morning and evening, by You we live and die'},fr:{label:'Dua du Matin',text:'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',tr:'O Dieu, c\'est par Toi que nous entrons dans le matin et le soir'}},
  {ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'الله يكفيني وعليه أتوكل'},en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'God is sufficient for me; there is no deity except Him. On Him I rely'},fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Dieu me suffit; il n\'y a de divinite que Lui. C\'est en Lui que je place ma confiance'}},
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'ربي اهدني ووفقني'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O God, guide me and make me steadfast'},fr:{label:'Dua de Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Dieu, guide-moi et rends-moi ferme'}},
  {ar:{label:'دعاء التفكر',text:'رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ',tr:'ربنا ما خلقت هذا الكون عبثاً'},en:{label:'Dua of Reflection',text:'رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ',tr:'Our Lord, You did not create this in vain. Glory be to You'},fr:{label:'Dua de Reflexion',text:'رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ',tr:'Notre Seigneur, Tu n\'as pas cree cela en vain. Gloire a Toi'}},
  {ar:{label:'دعاء حسن الخاتمة',text:'اللَّهُمَّ اجْعَلْ خَيْرَ أَعْمَالِي خَوَاتِمَهَا وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ',tr:'اللهم أحسن خاتمتي'},en:{label:'Dua for a Good End',text:'اللَّهُمَّ اجْعَلْ خَيْرَ أَعْمَالِي خَوَاتِمَهَا وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ',tr:'O God, make the best of my deeds my last ones and the best of my days the day I meet You'},fr:{label:'Dua pour une Bonne Fin',text:'اللَّهُمَّ اجْعَلْ خَيْرَ أَعْمَالِي خَوَاتِمَهَا وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ',tr:'O Dieu, fais que les meilleures de mes actions soient les dernieres et le meilleur de mes jours le jour ou je Te rencontre'}},
  {ar:{label:'دعاء العلم النافع',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'ربي ارزقني علماً نافعاً'},en:{label:'Dua for Beneficial Knowledge',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O God, I ask You for beneficial knowledge, good provision, and accepted deeds'},fr:{label:'Dua pour un Savoir Utile',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Dieu, je Te demande un savoir utile, une bonne subsistance et des actes agrees'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('hayat-lang') || 'ar';
let theme = localStorage.getItem('hayat-theme') || 'ocean';
const themes = ['ocean', 'night', 'sky'];
const themeIcons = ['🌊', '🌙', '☁️'];
const themeNames = {ocean:'Ocean / محيط',night:'Night / ليل',sky:'Sky / سماء'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderReflections();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('hayat-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabReflections', t.tabReflections);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('reflectionsTitle', t.reflectionsTitle); set('reflectionsDesc', t.reflectionsDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderReflections(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('hayat-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'🃏',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة عن الخلق والوجود':lang==='fr'?'20 cartes sur la creation':'20 cards on creation'},
    {icon:'💭',tab:'reflections',title:t.tabReflections,desc:lang==='ar'?'تأملات قرآنية عميقة':lang==='fr'?'Reflexions coraniques':'Quranic reflections'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر فهمك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.action}\n\n— الحياة الأولى | The First Life`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: REFLECTIONS ═══════════════
function renderReflections() {
  const t = T[lang];
  document.getElementById('reflectionsContainer').innerHTML = REFLECTIONS.map(r => {
    const d = r[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${r.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">❓ ${lang==='ar'?'السؤال':lang==='fr'?'La Question':'The Question'}</span>
        ${d.question}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">💡 ${lang==='ar'?'الإجابة':lang==='fr'?'La Reponse':'The Answer'}</span>
        ${d.answer}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('hayat-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('hayat-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  document.getElementById('habitsContainer').innerHTML = HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div><div class="habit-label">${d.label}</div><div class="habit-source">${d.source}</div></div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('hayat-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('hayat-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}

function resetHabits() {
  localStorage.setItem('hayat-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length, total = HABITS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('hayat-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) { streakData.count++; }
    else if (prevState.date !== new Date().toDateString()) { streakData.count = prevState.done.length === HABITS.length ? 1 : 0; }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('hayat-streak', JSON.stringify(streakData));
}

function getStreak() {
  return JSON.parse(localStorage.getItem('hayat-streak') || '{"count":0}').count;
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#1565C0','#42A5F5','#90CAF9','#FFD54F','#66BB6A','#E57373','#B388FF'];
  for (let i = 0; i < 120; i++) {
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10});
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

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Repondez a toutes les questions' : 'Answer all questions');
    return;
  }
  const invertedQs = [1, 3];
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji='🌟'; title=lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc=lang==='ar'?'فهمك لغاية الوجود عميق. استمر على هذا الطريق!':lang==='fr'?'Votre comprehension du but de l\'existence est profonde !':'Your understanding of existence\'s purpose is deep. Keep going!';
  } else if (pct >= 50) {
    emoji='🌅'; title=lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc=lang==='ar'?'أنت على الطريق الصحيح لكن هناك مجال للتعمق أكثر.':lang==='fr'?'Vous etes sur la bonne voie mais il y a place pour approfondir.':'You\'re on the right track but there\'s room to go deeper.';
  } else {
    emoji='📖'; title=lang==='ar'?'اقرأ المزيد':lang==='fr'?'Lisez plus':'Read More';
    desc=lang==='ar'?'حان وقت التأمل العميق. ابدأ ببطاقة واحدة يومياً.':lang==='fr'?'Il est temps de reflexions profondes. Commencez par une carte par jour.':'Time for deep reflection. Start with one card per day.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦',
      authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle:'عن الكتاب', bookDesc:'كتاب "الحياة الأولى" يتناول أصول الخلق وغاية الوجود الإنساني. يبحث في حقيقة الروح والجسد، والفرق بين الحياة الدنيا والآخرة، ويدعو القارئ للتأمل في معنى حياته وغايتها الحقيقية.',
      sourcesTitle:'المصادر', sources:['كتاب "الحياة الأولى" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'],
      contact:'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996',
      authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle:'About the Book', bookDesc:'"The First Life" explores the origins of creation and the purpose of human existence. It examines the reality of the soul and body, the difference between worldly life and the hereafter, and invites the reader to reflect on the meaning and true purpose of their life.',
      sourcesTitle:'Sources', sources:['"The First Life" (Al-Hayat Al-Ula) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact:'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996',
      authorBio:'Savant et penseur islamique egyptien, surnomme le Litteraire de la Predication. Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie).',
      bookTitle:'A Propos du Livre', bookDesc:'La Vie Premiere explore les origines de la creation et le but de l\'existence humaine. Il examine la realite de l\'ame et du corps, la difference entre la vie d\'ici-bas et l\'au-dela, et invite le lecteur a reflechir au sens et au vrai but de sa vie.',
      sourcesTitle:'Sources', sources:['La Vie Premiere (Al-Hayat Al-Ula) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact:'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي.'},{title:'📚 المصادر',body:'كتاب "الحياة الأولى" للشيخ محمد الغزالي، القرآن الكريم.'},{title:'✨ المميزات',body:'٣ لغات، ٣ أنماط، ٢٠ بطاقة، ٦ تأملات، تتبع عادات، اختبار، أدعية.'},{title:'⌨️ اختصارات',body:'الأسهم للتنقل بين البطاقات. Escape لإغلاق اللوحات.'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom.'},{title:'📚 Sources',body:'"The First Life" by Sheikh Mohammed al-Ghazali, the Holy Quran.'},{title:'✨ Features',body:'3 languages, 3 themes, 20 cards, 6 reflections, habit tracker, quiz, duas.'},{title:'⌨️ Shortcuts',body:'Arrow keys to navigate cards. Escape to close panels.'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh.'},{title:'📚 Sources',body:'La Vie Premiere par Sheikh Mohammed al-Ghazali, le Saint Coran.'},{title:'✨ Fonctionnalites',body:'3 langues, 3 themes, 20 cartes, 6 reflexions, suivi habitudes, quiz, duas.'},{title:'⌨️ Raccourcis',body:'Fleches pour naviguer. Echap pour fermer les panneaux.'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

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
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}
