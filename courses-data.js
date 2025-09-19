const courses = [
  {
    id: "quran-memorization",
    title: "دورة الحفظ السريع للقرآن الكريم",
    description: "احترف تقنيات الحفظ السريع وإتقان القرآن في وقت قياسي.",
    image: "images/quran.jpg",
    duration: "شهر واحد",
    price: "$100",
    instructors: [
      { name: "د. علي الربيعي", expertise: "خبير تدريبات عقلية" },
      { name: "الشيخ أحمد منصور", expertise: "مقرئ مجاز" }
    ],
    achievements: "حفظ صفحة في 50 ثانية.<br>إتمام القرآن في 10 أيام.<br>شهادة معتمدة من مؤسسة كن أنت."
  },
  {
    id: "tasbit-quran",
    title: "دورة تثبيت القرآن الكريم",
    description: "تقنيات متقدمة لتثبيت الحفظ وإتقانه بإشراف نخبة من العلماء.",
    image: "images/tasbit.jpg",
    duration: "شهر ونصف",
    price: "$120",
    instructors: [
      { name: "الشيخ محمود السيد", expertise: "مقرئ مجاز وخبير في التثبيت" },
      { name: "الشيخة خولة العرامي", expertise: "مقرئة مجيزة وخبيرة في التثبيت" },
      { name: "الأستاذة جليلة إسماعيل", expertise: "مقرئة مجيزة وخبيرة في التثبيت" },
      { name: "الشيخ محمد منصور", expertise: "مقرئ مجاز وخبير في التثبيت" }
    ],
    achievements: "إتقان التلاوة.<br>تثبيت الحفظ طويل المدى.<br>شهادة معتمدة."
  },
  {
    id: "thinking-skills",
    title: "مهارات التفكير الأساسية",
    description: "اكتشف أسرار التفكير النقدي والإبداعي لتطوير قدراتك الذهنية.",
    image: "images/thinking.jpg",
    duration: "3 أسابيع",
    price: "$80",
    instructors: [
      { name: "د. أمل زيدان", expertise: "خبيرة تنمية الموهوبين والإبداع" },
      { name: "د. سامر الشهابي", expertise: "خبير تدريب وتطوير عقلي" }
    ],
    achievements: "تطوير مهارات التفكير.<br>حل المشكلات واتخاذ القرار.<br>تعزيز التفكير النقدي والإبداعي.<br>شهادة مشاركة معتمدة."
  },
  {
    id: "speed-reading",
    title: "القراءة السريعة",
    description: "ضاعف سرعة قراءتك مع زيادة الاستيعاب والفهم.",
    image: "images/reading.jpg",
    duration: "أسبوعين",
    price: "$70",
    instructors: [
      { name: "د. خليل السامرائي", expertise: "خبير قراءة سريعة واستيعاب" }
    ],
    achievements: "قراءة 300 صفحة في 10 دقائق.<br>فهم عميق للنصوص.<br>شهادة معتمدة."
  },
  {
    id: "creative-writing",
    title: "الكتابة الإبداعية",
    description: "أطلق العنان لإبداعك في الكتابة الأدبية والقصصية.",
    image: "images/writing.jpg",
    duration: "شهر",
    price: "$90",
    instructors: [
      { name: "أ. هند الرواشدة", expertise: "أديبة وكاتبة محترفة" }
    ],
    achievements: "كتابة قصص قصيرة.<br>إتقان السرد والوصف.<br>شهادة معتمدة."
  },
  {
    id: "advanced-video",
    title: "تصوير ومونتاج الفيديو المتقدم",
    description: "تعلم فنون التصوير الاحترافية والمونتاج باستخدام أحدث البرامج.",
    image: "images/video.jpg",
    duration: "6 أسابيع",
    price: "$150",
    instructors: [
      { name: "م. زياد ناصر", expertise: "خبير تصوير ومونتاج" },
      { name: "أ. منى عبد الله", expertise: "محررة فيديو محترفة" }
    ],
    achievements: "إنتاج فيديوهات احترافية.<br>إتقان برامج المونتاج.<br>شهادة معتمدة."
  },
  {
    id: "quick-memorization",
    title: "الحفظ السريع للكتب",
    description: "تقنيات الحفظ السريع للكتب والمقررات الدراسية بإتقان.",
    image: "images/books.jpg",
    duration: "4 أسابيع",
    price: "$110",
    instructors: [
      { name: "د. عبد الله الشافعي", expertise: "خبير تدريبات الذاكرة" }
    ],
    achievements: "حفظ كتاب في وقت قياسي.<br>إتقان أساليب التذكر.<br>شهادة معتمدة."
  }
];
