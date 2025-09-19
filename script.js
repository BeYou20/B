
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



function getCourseIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Function to find course data by ID
function findCourseById(id) {
  return courses.find(course => course.id === id);
}

// Function to populate the page with course data
function populatePage(course) {
  // Update the page title
  document.getElementById('page-title').textContent = course.title.replace(/<[^>]*>?/gm, '');

  // Update Hero section
  document.getElementById('hero-title').innerHTML = course.title;
  document.getElementById('hero-description').textContent = course.description;
  
  // Update Marquee
  document.getElementById('marquee-text').textContent = course.marquee;

  // Update Course About
  document.getElementById('course-about').textContent = course.description;

  // Update Objectives list
  const objectivesList = document.getElementById('objectives-list');
  objectivesList.innerHTML = ''; // Clear previous content
  course.objectives.forEach(obj => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-bullseye"></i> ${obj}`;
    objectivesList.appendChild(li);
  });

  // Update Axes list
  const axesList = document.getElementById('axes-list');
  axesList.innerHTML = ''; // Clear previous content
  course.axes.forEach(axis => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-calendar-alt"></i> ${axis}`;
    axesList.appendChild(li);
  });
  
  // Update Achievements text
  document.getElementById('achievements-text').innerHTML = course.achievements;

  // Update hidden form field
  const courseNameInput = document.getElementById('course-name-input');
  if (courseNameInput) {
    courseNameInput.value = course.title.replace(/<[^>]*>?/gm, '').trim();
  }

  // Populate Instructors Slider
  const instructorsSlider = document.getElementById('instructors-slider');
  const instructorDotsContainer = instructorsSlider.querySelector('.instructor-dots');
  instructorsSlider.querySelectorAll('.instructor-slide').forEach(slide => slide.remove());
  
  course.instructors.forEach((instructor, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.classList.add('instructor-slide');
      if (index === 0) slideDiv.classList.add('active');
      slideDiv.innerHTML = `
          <div class="instructor-card">
              <img src="https://i.ibb.co/L519VjL/certificate.png" alt="صورة المدرب">
              <h4>${instructor.name}</h4>
              <p>${instructor.expertise}</p>
          </div>
      `;
      instructorsSlider.insertBefore(slideDiv, instructorDotsContainer);
  });

  // Populate Testimonials Slider
  const testimonialsSlider = document.getElementById('testimonials-slider');
  const testimonialDotsContainer = testimonialsSlider.querySelector('.testimonial-dots');
  testimonialsSlider.querySelectorAll('.testimonial-slide').forEach(slide => slide.remove());

  course.testimonials.forEach((testimonial, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('testimonial-slide');
    if (index === 0) slideDiv.classList.add('active');
    slideDiv.innerHTML = `
      <p class="testimonial-text">"${testimonial.text}"</p>
      <p>– ${testimonial.name}</p>
    `;
    testimonialsSlider.insertBefore(slideDiv, testimonialDotsContainer);
  });
  
  // Populate FAQ section
  const faqContainer = document.getElementById('faq-container');
  faqContainer.innerHTML = ''; // Clear previous content
  course.faq.forEach(item => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');
    faqItem.innerHTML = `
      <div class="faq-question">${item.question} <i class="fas fa-chevron-down"></i></div>
      <div class="faq-answer">${item.answer}</div>
    `;
    faqContainer.appendChild(faqItem);
  });
  
  // Re-initialize dynamic scripts
  AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  initSliders();
  initFaqToggle();
}

// Sliders and FAQ functions (from previous code, updated for dynamic content)
function initSliders() {
    const testimonialSlides = document.querySelectorAll('#testimonials-slider .testimonial-slide');
    const testimonialDotsContainer = document.querySelector('#testimonials-slider .testimonial-dots');
    let currentTestimonial = 0;
    
    // Clear previous interval if it exists
    if (window.testimonialInterval) clearInterval(window.testimonialInterval);

    function nextTestimonial() {
      testimonialSlides[currentTestimonial].classList.remove('active');
      currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
      testimonialSlides[currentTestimonial].classList.add('active');
      updateTestimonialDots();
    }
    
    function updateTestimonialDots() {
      testimonialDotsContainer.innerHTML = '';
      testimonialSlides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentTestimonial) dot.classList.add('active');
        dot.addEventListener('click', () => {
          clearInterval(window.testimonialInterval);
          testimonialSlides[currentTestimonial].classList.remove('active');
          currentTestimonial = i;
          testimonialSlides[currentTestimonial].classList.add('active');
          updateTestimonialDots();
          window.testimonialInterval = setInterval(nextTestimonial, 4000);
        });
        testimonialDotsContainer.appendChild(dot);
      });
    }
    if (testimonialSlides.length > 0) {
        updateTestimonialDots();
        window.testimonialInterval = setInterval(nextTestimonial, 4000);
    }
  
    const instructorSlides = document.querySelectorAll('#instructors-slider .instructor-slide');
    const instructorDotsContainer = document.querySelector('#instructors-slider .instructor-dots');
    let currentInstructor = 0;
    if (window.instructorInterval) clearInterval(window.instructorInterval);
    
    function nextInstructor() {
        instructorSlides[currentInstructor].classList.remove('active');
        currentInstructor = (currentInstructor + 1) % instructorSlides.length;
        instructorSlides[currentInstructor].classList.add('active');
        updateInstructorDots();
    }
    
    function updateInstructorDots() {
      instructorDotsContainer.innerHTML = '';
      instructorSlides.forEach((_, i) => {
          const dot = document.createElement('span');
          dot.classList.add('dot');
          if (i === currentInstructor) dot.classList.add('active');
          dot.addEventListener('click', () => {
              clearInterval(window.instructorInterval);
              instructorSlides[currentInstructor].classList.remove('active');
              currentInstructor = i;
              instructorSlides[currentInstructor].classList.add('active');
              updateInstructorDots();
              window.instructorInterval = setInterval(nextInstructor, 5000);
          });
          instructorDotsContainer.appendChild(dot);
      });
    }
    if (instructorSlides.length > 0) {
        updateInstructorDots();
        window.instructorInterval = setInterval(nextInstructor, 5000);
    }
}

function initFaqToggle() {
    document.querySelectorAll('.faq-question').forEach(q => q.addEventListener('click', ()=>{
        const parentItem = q.closest('.faq-item');
        const answer = parentItem.querySelector('.faq-answer');
        const isVisible = answer.style.display === 'block';
    
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.style.display = 'none';
            ans.closest('.faq-item').querySelector('.faq-question').classList.remove('active');
        });
    
        if (!isVisible) {
          answer.style.display = 'block';
          q.classList.add('active');
        }
      }));
}

// Main function to run on page load
document.addEventListener('DOMContentLoaded', () => {
  const courseId = getCourseIdFromUrl();
  const courseData = findCourseById(courseId);

  if (courseData) {
    populatePage(courseData);
  } else {
    // Handle case where course is not found
    document.body.innerHTML = '<h1>عفواً، لم يتم العثور على الدورة المطلوبة.</h1><p>يرجى التأكد من الرابط والمحاولة مرة أخرى.</p>';
  }

  // Form submission and sticky button logic
  const stickyRegisterBtn = document.querySelector('.sticky-register-btn');
  const stickyWhatsappBtn = document.querySelector('.sticky-whatsapp-btn');
  const footer = document.querySelector('footer');

  window.addEventListener('scroll', ()=>{ 
    const isAtBottom = window.innerHeight + window.scrollY >= footer.offsetTop - 50;
    if (window.scrollY > 300 && !isAtBottom) {
        stickyRegisterBtn.classList.remove('hidden');
        stickyWhatsappBtn.classList.remove('hidden');
        stickyRegisterBtn.style.display = 'block';
    } else {
        stickyRegisterBtn.classList.add('hidden');
        stickyWhatsappBtn.classList.add('hidden');
    }
  });

  
  const form = document.forms['form'];
  const submitButton = form.querySelector('button[type="submit"]');
  let formDataStored = {};

  window.submitForm = function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const phoneInput = form.querySelector('input[name="phone"]');
    formData.set('phone', phoneInput.value.replace(/\s/g, ''));
    
    for (let [key, value] of formData.entries()) {
        formDataStored[key] = value;
    }
    
    submitButton.disabled = true;
    submitButton.textContent = 'جاري الإرسال...';
    
    fetch(scriptURL, { method: 'POST', body: formData})
      .then(response => {
        const message = generateWhatsAppMessage(formDataStored);
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/967778185189?text=${encodedMessage}`;
        window.location.href = whatsappLink;
      })
      .catch(error => {
        alert('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'إرسال البيانات';
      });
  }

  function generateWhatsAppMessage(data) {
    const courseTitle = document.getElementById('page-title').textContent;
    return `السلام عليكم، تم التسجيل في دورة "${courseTitle}".
الاسم: ${data.name}
الجنس: ${data.gender}
العمر: ${data.age}
البلد: ${data.country}
رقم الهاتف: ${data.phone}
رابط التيليجرام: ${data.Telegram}
أرجو إتمام التسجيل في الدورة.`;
  }
});




/*
هذه قائمة بجميع معرفات (IDs) الدورات وأسمائها العربية.
يمكنك استخدام هذه القائمة عند إضافة دورات جديدة إلى الكود.
تأكد من أن المعرف الذي تضيفه في الكود يطابق أحد المعرفات هنا.

"hifz-quran": "حفظ القرآن الكريم",
"tasbit-quran": "تثبيت القرآن الكريم",
"tajweed": "التجويد والقراءات",
"ijazah": "إجازة القرآن",
"tafsir": "التفسير وعلوم القرآن",
"specific-groups": "دورات لفئات معينة",
"hadith-sciences": "علوم الحديث الشريف",
"advanced-tajweed": "علوم التجويد المتقدم",
"quick-memorization": "الحفظ السريع للقرآن الكريم",
"diploma-business": "دبلوم إدارة الأعمال",
"diploma-accounting": "دبلوم المحاسبة المالية",
"diploma-graphic": "دبلوم الجرافيك ديزاين",
"diploma-marketing": "دبلوم التسويق الرقمي",
"diploma-cybersecurity": "دبلوم الأمن السيبراني",
"diploma-development": "دبلوم تطوير الأعمال",
"diploma-english": "دبلوم اللغة الإنجليزية",
"diploma-ai": "دبلوم الذكاء الاصطناعي",
"data-analysis": "دبلوم تحليل البيانات",
"ai-marketing": "دبلوم التسويق عبر الذكاء الاصطناعي",
"diploma-entrepreneurship": "دبلوم ريادة الأعمال الرقمية",
"advanced-cybersecurity": "دبلوم الأمن السيبراني المتقدم",
"diploma-genius": "دبلوم صناعة العباقرة",
"human-development": "تنمية بشرية",
"personality-building": "بناء الشخصية",
"team-building": "بناء الفريق",
"become-trainer": "كيف تصبح مدربًا",
"thinking-skills": "مهارات التفكير الأساسية",
"thinking-integration": "دمج مهارات التفكير",
"talented": "اكتشاف ورعاية الموهوبين",
"communication": "مهارات الاتصال والتواصل",
"training-methods": "أساليب التدريب",
"management-art": "فن الإدارة",
"emotional-intelligence": "الذكاء العاطفي وإدارة المشاعر",
"modern-leadership": "القيادة والإدارة الحديثة",
"negotiation": "مهارات التفاوض والإقناع",
"time-management": "إدارة الوقت وزيادة الإنتاجية",
"creative-thinking": "التفكير الإبداعي وحل المشكلات",
"programming-basics": "أساسيات البرمجة",
"computer-courses": "دورات الحاسوب",
"icdl": "الرخصة الدولية لقيادة الحاسوب",
"advanced-python": "البرمجة المتقدمة",
"mobile-development": "تطوير تطبيقات الموبايل",
"game-development": "تطوير الألعاب",
"ui-ux": "تصميم واجهات (UX/UI)",
"ethical-hacking": "الاختراق الأخلاقي",
"drawing": "الرسم",
"photography": "التصوير",
"video-editing": "المونتاج",
"graphics": "الجرافيكس",
"candles": "صناعة الشموع",
"incense": "صناعة البخور",
"sewing": "الخياطة والتصميم",
"resin-making": "فن صناعة الريزن",
"digital-content": "صناعة المحتوى الرقمي",
"ai-design": "التصميم عبر الذكاء الاصطناعي",
"creative-writing": "فنون الكتابة الإبداعية الحديثة",
"advanced-video": "تصوير ومونتاج الفيديو المتقدم",
"marketing-strategy": "استراتيجية التسويق",
"digital-ads": "تصميم الإعلانات الرقمية",
"pharmacy": "الصيدلية الرقمية",
"customer-service": "خدمة العملاء وإدارة المبيعات",
"etiquette": "الإتيكيت (الأنثى السعيدة)",
"first-aid": "دورة الإسعافات الأولية",
"cooking": "دورة الطبخ",
"online-earning": "دورة الربح من الإنترنت",
"leadership": "التدريب القيادي وتطوير الذات",
"reading-approach": "نهج القراءة",
"active-learning": "التعلم النشط",
"planning": "التخطيط الفصلي واليومي",
"classroom-assessment": "التقويم الصفي",
"specifications": "جدول المواصفات",
"question-building": "أسلوب بناء الأسئلة الاختبارية",
"class-management": "إدارة الصف",
"problem-solving": "حل المشكلات الصفية",
"supervision": "أساليب الإشراف التربوي",
"math-teaching": "مهارات تدريس الرياضيات",
"math-strategies": "استراتيجيات تعلم الرياضيات",
"primary-teaching": "أساليب تدريس الصفوف الأولية",
"digital-learning": "أساليب التعليم الرقمي",
"curriculum-design": "تصميم المناهج",
"gamification": "التعليم التفاعلي",
"e-assessment": "التقييم والتقويم الإلكتروني",
"strengthening": "دورات تقوية",
"strategic-planning": "التخطيط الاستراتيجي",
"swot": "رباعية سوات في التخطيط",
"networking": "أساليب التشبيك",
"civil-society-roles": "أدوار منظمات المجتمع المدني",
"hendra": "الهندرة",
"feasibility-study": "دراسة جدوى المشاريع",
"commercial-correspondence": "المراسلات التجارية (ar-E)",
"social-campaigns": "إدارة الحملات الاجتماعية",
"community-leadership": "القيادة المجتمعية",
"strategic-planning-advanced": "التخطيط الاستراتيجي",
"anti-corruption": "الحوكمة ومكافحة الفساد",
"pmp": "المشاريع الاحترافية (PMP)",
"advanced-accounting": "المحاسبة الإدارية المتقدمة",
"entrepreneurship-innovation": "ريادة الأعمال والابتكار",
"trading": "التداول والاستثمار الرقمي",
"startup-feasibility": "دراسة جدوى المشاريع الناشئة"
*/



// This file contains all the functions and logic for the page


// Function to get the course ID from the URL
