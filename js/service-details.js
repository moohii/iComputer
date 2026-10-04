const services = {
  pc: {
    title: "دعم الحاسوب والبرامج",
    summary: "مساعدة في مشكلات البرامج وأنظمة التشغيل وإعداد الحاسوب للاستخدام، دون صيانة المكونات المادية.",
    description: [
      "نراجع المشكلة البرمجية أو إعدادات النظام ونوضح خطوات المعالجة المناسبة، مثل تثبيت البرامج أو تهيئة إعدادات نظام التشغيل.",
      "لا تشمل هذه الخدمة إصلاح أو استبدال قطع الحاسوب."
    ],
    features: ["حل مشكلات البرامج", "تثبيت وتهيئة أنظمة التشغيل", "إعداد البرامج للاستخدام", "إرشاد المستخدم إلى خطوات المعالجة"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "مساعدة تقنية في استخدام الحاسوب"
  },
  network: {
    title: "تركيب الشبكات",
    summary: "إعداد شبكات سلكية ولاسلكية للمنازل والشركات مع ضبط الاتصال والأجهزة المتصلة.",
    description: [
      "تُهيأ الشبكة وفق مساحة المكان وعدد الأجهزة وطريقة الاستخدام، مع تنظيم إعدادات الاتصال وتوصيل المعدات اللازمة.",
      "تشمل الخدمة فحص التغطية والاتصال والتأكد من عمل الأجهزة المتصلة بالشبكة."
    ],
    features: ["إعداد الشبكات السلكية واللاسلكية", "توصيل أجهزة الشبكة وضبطها", "تنظيم الاتصال للأجهزة المستخدمة", "اختبار الشبكة بعد الإعداد"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    imageAlt: "معدات شبكة حاسوب"
  },
  cv: {
    title: "إنشاء سيرة ذاتية احترافية",
    summary: "تنسيق خبراتك ومهاراتك في سيرة ذاتية واضحة وجاهزة للتقديم إلى الوظائف.",
    description: [
      "تُرتب المعلومات التي تقدمها ضمن أقسام واضحة، مع تنسيق يسهل على مسؤولي التوظيف قراءة مؤهلاتك وخبراتك.",
      "يُجهز الملف بصيغة مناسبة للمشاركة والطباعة."
    ],
    features: ["تنظيم المعلومات المهنية والتعليمية", "تنسيق واضح ومتناسق", "إبراز المهارات والخبرات", "تسليم السيرة الذاتية بصيغة رقمية"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "إعداد سيرة ذاتية باستخدام الحاسوب"
  },
  ppt: {
    title: "تصميم عروض PowerPoint",
    summary: "إعداد عروض تقديمية منظمة للطلاب والشركات، بتصميم يساعد على عرض الأفكار بوضوح.",
    description: [
      "يُرتب محتوى العرض بحسب الهدف والجمهور، ثم يُوزع على شرائح سهلة القراءة ومتناسقة بصريًا.",
      "يمكن استخدام العرض للأغراض الدراسية أو المهنية وفق المواد التي يزودنا بها العميل."
    ],
    features: ["تنظيم المحتوى على شرائح", "تنسيق النصوص والعناوين", "إضافة الصور والعناصر المناسبة للمحتوى", "تسليم ملف قابل للتعديل"],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "تصميم عرض تقديمي على الحاسوب"
  },
  reports: {
    title: "كتابة التقارير والمشاريع الدراسية",
    summary: "إعداد التقارير والمشاريع الأكاديمية أو العلمية بتنسيق منظم وواضح.",
    description: [
      "تُنظم المادة المقدمة ضمن بنية مناسبة للموضوع، مع تنسيق العناوين والفقرات والمراجع التي يزودنا بها العميل.",
      "تُراجع بنية الملف وتنسيق صفحاته قبل التسليم."
    ],
    features: ["تنظيم أقسام التقرير أو المشروع", "تنسيق العناوين والفقرات", "إعداد المستند للطباعة أو المشاركة", "تسليم نسخة رقمية مرتبة"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    imageAlt: "إعداد تقرير أو مشروع دراسي"
  },
  excel: {
    title: "إعداد جداول Excel",
    summary: "إنشاء جداول إلكترونية لتنظيم البيانات المالية والإدارية ومتابعة العمل.",
    description: [
      "تُبنى الجداول وفق البيانات وطريقة العمل المطلوبة، مع ترتيب الحقول وتنسيقها لتسهيل إدخال المعلومات ومراجعتها.",
      "تُضاف الصيغ والحسابات المناسبة عند الحاجة وبحسب نطاق العمل المتفق عليه."
    ],
    features: ["تنظيم البيانات في جداول واضحة", "تنسيق الحقول والخلايا", "إعداد الصيغ والحسابات المطلوبة", "تجهيز الملف للاستخدام والتحديث"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "جدول بيانات لتنظيم الحسابات"
  },
  phones: {
    title: "تصليح الهواتف والبرامج",
    summary: "معالجة مشكلات البرامج وتحسين أداء الهواتف، مع دعم أجهزة TV Box.",
    description: [
      "تُفحص إعدادات الهاتف والبرامج لتحديد سبب المشكلة، ثم تُنفذ خطوات المعالجة المناسبة بعد مراجعتها مع العميل.",
      "قد تشمل الخدمة تحسين الأداء أو إعادة ضبط البرامج بحسب حالة الجهاز."
    ],
    features: ["تشخيص مشكلات البرامج", "معالجة بطء أداء الهاتف", "إعدادات النظام والبرامج", "دعم أجهزة TV Box"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "هاتف ذكي ضمن خدمات دعم الهواتف"
  },
  games: {
    title: "تحميل الألعاب وفلش الأجهزة",
    summary: "إعداد ألعاب Retro وArcade وتهيئة أجهزة الألعاب المتوافقة مثل R36S.",
    description: [
      "تتضمن الخدمة تهيئة الجهاز وإعداد البرامج أو الأنظمة المتوافقة معه، بما في ذلك أجهزة الألعاب المحمولة المدعومة.",
      "يُحدد نطاق الإعداد بحسب طراز الجهاز وحالته والمواد التي يطلبها العميل."
    ],
    features: ["إعداد ألعاب Retro وArcade", "تهيئة أجهزة الألعاب المتوافقة", "دعم أجهزة مثل R36S", "فحص التشغيل بعد الإعداد"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    imageAlt: "أجهزة وألعاب فيديو"
  },
  security: {
    title: "الأمن السيبراني وحماية البيانات",
    summary: "حماية الأجهزة والملفات من المخاطر الرقمية وتقليل احتمال فقدان البيانات.",
    description: [
      "تُراجع احتياجات الجهاز أو بيئة العمل لتحديد إجراءات الحماية المناسبة، مثل ضبط إعدادات الأمان وتنظيم النسخ الاحتياطي.",
      "عند فقدان الملفات أو حدوث عطل، تُفحص الحالة لتحديد خيارات الاسترجاع الممكنة."
    ],
    features: ["مراجعة إعدادات حماية الأجهزة", "تنظيم النسخ الاحتياطي للبيانات", "إرشادات للحد من مخاطر البرمجيات الضارة", "فحص إمكان استرجاع الملفات"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "حماية البيانات والأمن الرقمي"
  },
  os: {
    title: "تثبيت أنظمة التشغيل",
    summary: "تثبيت وتهيئة أنظمة التشغيل المناسبة لجهازك وإعداده للاستخدام.",
    description: [
      "يُفحص توافق الجهاز ومتطلبات الاستخدام قبل تثبيت النظام، ثم تُجهز إعداداته الأساسية لتناسب احتياجات العميل.",
      "تُراجع خيارات حفظ الملفات الموجودة قبل البدء، ويُختبر تشغيل النظام بعد اكتمال التثبيت."
    ],
    features: ["فحص الجهاز والتوافق قبل التثبيت", "تثبيت نظام التشغيل المناسب", "إعداد التعريفات والتهيئة الأساسية بحسب التوافق", "اختبار تشغيل الجهاز بعد الإعداد"],
    image: "images/systems-install.jpg",
    imageAlt: "أنظمة تشغيل مختلفة على أجهزة الحاسوب"
  }
};

const serviceKey = new URLSearchParams(window.location.search).get("service");
const service = serviceKey ? services[serviceKey] : undefined;
const details = document.getElementById("serviceDetails");
const notFound = document.getElementById("serviceNotFound");

if (!service) {
  details.hidden = true;
  notFound.hidden = false;
} else {
  const title = document.getElementById("serviceTitle");
  const summary = document.getElementById("serviceSummary");
  const description = document.getElementById("serviceDescription");
  const featureList = document.getElementById("serviceFeatures");
  const image = document.getElementById("serviceImage");

  title.textContent = service.title;
  summary.textContent = service.summary;
  document.getElementById("serviceBreadcrumb").textContent = service.title;
  document.title = `${service.title} | iComputer Urban Tech DZ`;

  service.description.forEach(text => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    description.append(paragraph);
  });

  service.features.forEach(text => {
    const item = document.createElement("li");
    item.textContent = text;
    featureList.append(item);
  });

  image.src = service.image;
  image.alt = service.imageAlt;
}
