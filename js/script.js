const translations = {
  ar: {
    "nav.home": "الرئيسية", "nav.services": "الخدمات", "nav.about": "من نحن",
    "nav.pricing": "الأسعار", "nav.portfolio": "أعمالنا", "nav.faq": "أسئلة", "nav.contact": "تواصل", "nav.booking": "احجز موعد",
    "wa.message": "مرحبًا، أريد الاستفسار عن خدمات iComputer.",
    "reviews.title": "آراء العملاء", "reviews.write": "اترك رأيك", "reviews.empty": "لا توجد آراء بعد.",
    "booking.title": "احجز موعدك", "booking.subtitle": "اختر الخدمة المناسبة لك وسنقوم بالتواصل معك قريبًا.",
    "booking.name": "الاسم", "booking.phone": "الهاتف / WhatsApp", "booking.service": "الخدمة",
    "booking.date": "اليوم", "booking.period": "الفترة", "booking.description": "وصف المشكلة (اختياري)", "booking.submit": "إرسال الطلب",
    "booking.success": "تم إرسال طلب الحجز بنجاح.", "booking.serviceOption": "اختر الخدمة",
    "booking.periodOption": "اختر الفترة",
    "review.title": "اترك رأيك", "review.name": "الاسم", "review.service": "الخدمة", "review.rating": "التقييم من 1 إلى 5",
    "review.text": "نص الرأي", "review.submit": "إرسال الرأي", "review.success": "تم إرسال رأيك بنجاح.",
    "thanks.title": "تم إرسال طلبك بنجاح", "thanks.message": "شكرًا لك. تم استلام طلبك بنجاح وسيتم التواصل معك قريبًا.",
    "thanks.back": "العودة إلى الصفحة الرئيسية", "thanks.whatsapp": "تواصل عبر WhatsApp",
    "hero.chip": "الدعم التقني والبرمجي",
    "hero.title1": "دعم تقني وبرمجي",
    "hero.title2": "للأفراد والشركات",
    "hero.sub": "مساعدة في البرامج وأنظمة التشغيل، إعداد الشبكات، حماية البيانات، وتجهيز الملفات الرقمية.",
    "hero.imageAlt": "مساعدة مستخدم في التعامل مع الحاسوب",
    "hero.imageLabel": "دعم البرامج والأنظمة",
    "hero.imageTitle": "مساعدة تقنية تناسب احتياجك",
    "hero.imageText": "إعداد البرامج، حل مشكلات النظام، ومساندتك في الاستخدام.",
    "hero.cta1": "اطلب عبر واتساب", "hero.cta2": "اكتشف خدماتنا",
    "hero.badge1.title": "استجابة سريعة", "hero.badge1.desc": "دعم فني متواصل",
    "hero.badge2.title": "الطلب عبر واتساب", "hero.badge2.desc": "لا يوجد محل استقبال",
    "backup.chip": "🛡️ أمان البيانات والنسخ الاحتياطي",
    "backup.title": "هل بيانات شركتك في أمان؟",
    "backup.sub": "إذا تعطل الكمبيوتر أو تعرض لفيروسات، هل تستطيع استرجاع ملفاتك؟",
    "backup.f1": "نسخ احتياطي تلقائي.", "backup.f1.sub": "حفظ دوري ومنتظم لجميع ملفات النظام والمعاملات.",
    "backup.f2": "استرجاع سريع للملفات.", "backup.f2.sub": "استعادة سريعة للبيانات بدون توقف العمليات.",
    "backup.f3": "حماية من فقدان البيانات.", "backup.f3.sub": "درع حماية ضد الفيروسات وبرمجيات الخبايا.",
    "backup.f4": "إعداد احترافي دون تغيير طريقة عملك.", "backup.f4.sub": "تهيئة غير ملموسة تحافظ على سلاسة نشاطك.",
    "backup.cta": "تواصل معنا للحصول على تقييم مجاني.",
    "backup.whatsapp": "تواصل عبر الواتساب",
    "backup.locationLabel": "نطاق الخدمة:", "backup.location": "الجزائر الوسطى",
    "backup.note": "للتواصل والاستفسار عبر الواتساب فقط",
    "sub.chip": "💼 حلول موجهة للشركات والمؤسسات",
    "sub.slogan": "توقف العمل بسبب عطل في الكمبيوتر يكلف أكثر من الوقاية.",
    "sub.sub": "اشتراك شهري متكامل يناسب الشركات الصغيرة والمتوسطة لضمان استمرارية نشاطك بدون توقف.",
    "sub.p1.title": "النسخ الاحتياطي.", "sub.p1.desc": "Reliable Data Preservation.",
    "sub.p2.title": "حماية البيانات.", "sub.p2.desc": "Enhanced Cyber Security.",
    "sub.p3.title": "دعم البرامج والأنظمة.", "sub.p3.desc": "إعداد البرامج وحل مشكلات النظام.",
    "sub.p4.title": "مراقبة الأجهزة.", "sub.p4.desc": "Proactive Network Vigilance.",
    "sub.p5.title": "دعم فني.", "sub.p5.desc": "Immediate Problem Resolution.",
    "sub.cta": "احصل على عرض مجاني",
    "stats.repairs": "عملية إصلاح", "stats.support": "دعم متواصل",
    "supportIntro.chip": "خدمات تقنية للأفراد والشركات",
    "supportIntro.title": "تقنية تعمل كما تحتاجها",
    "supportIntro.p1": "حل مشكلات البرامج وأنظمة التشغيل، دون صيانة قطع الحاسوب.",
    "supportIntro.p2": "تثبيت البرامج والأنظمة وتهيئتها للاستخدام.",
    "supportIntro.p3": "إعداد الشبكات والاتصال، وحماية البيانات والنسخ الاحتياطي.",
    "supportIntro.p4": "إنشاء السير الذاتية والعروض والملفات الرقمية.",
    "supportIntro.p5": "أرسل طلبك عبر واتساب. لا يوجد محل استقبال.",
    "services.title": "خدماتنا", "services.sub": "حلول شاملة متخصصة لتلبية كل احتياجاتك التقنية.",
    "services.s1.title": "دعم الحاسوب والبرامج", "services.s1.desc": "حل مشكلات البرامج وأنظمة التشغيل وإعدادها، دون صيانة المكونات المادية.",
    "services.s2.title": "تركيب الشبكات", "services.s2.desc": "إعداد وتأمين شبكات سلكية ولاسلكية عالية الأداء للمنازل والشركات.",
    "services.s4.title": "الأمن السيبراني", "services.s4.desc": "حماية البيانات، النسخ الاحتياطي، واسترجاع الملفات بعد الأعطال.",
    "about.title": "من أنا",
    "about.lead": "محمد الأمين — 30 سنة، تقني سامي في إعلام آلي (Senior IT Technician).",
    "about.p1": "أقدم الدعم في إعداد البرامج وأنظمة التشغيل، تركيب الشبكات، وحماية البيانات واسترجاعها للأفراد والشركات بالجزائر الوسطى.",
    "about.p2": "هدفي تقديم حلول تقنية واضحة وعملية تساعدك على استخدام أجهزتك وخدماتك الرقمية.",
    "about.vision": "المؤهل والخبرة", "about.visionDesc": "تقني سامي في إعلام آلي — خبرة ميدانية، سرعة استجابة، والتزام تام بجودة الخدمة.",
    "about.exp": "سنة — تقني سامي إعلام آلي",
    "pricing.title": "باقات الأسعار", "pricing.popular": "الأكثر طلبًا", "pricing.custom": "حسب الطلب", "pricing.cta": "اطلب الآن",
    "pricing.p1.name": "مبتدئ", "pricing.p1.f1": "دعم تقني أساسي", "pricing.p1.f2": "دعم عبر الهاتف", "pricing.p1.f3": "زيارة واحدة شهريًا",
    "pricing.p2.name": "أعمال", "pricing.p2.f1": "دعم تقني شامل", "pricing.p2.f2": "دعم 24/7", "pricing.p2.f3": "إدارة الشبكة",
    "pricing.p3.name": "مؤسسات", "pricing.p3.f1": "حلول مخصصة", "pricing.p3.f2": "مدير حساب مخصص", "pricing.p3.f3": "SLA مضمون",
    "portfolio.title": "أعمالنا", "portfolio.i1": "شبكة شركة", "portfolio.i2": "منصة ويب", "portfolio.i3": "حل أمني",
    "portfolio.tag1": "شبكات", "portfolio.tag2": "برمجيات", "portfolio.tag3": "أمن سيبراني",
    "faq.title": "أسئلة شائعة",
    "faq.q1": "كيف أطلب خدمة؟", "faq.a1": "تُستقبل الطلبات عبر واتساب. لا يوجد محل استقبال، ويتم تنسيق طريقة تقديم الخدمة حسب الطلب.",
    "faq.q2": "ما هي مدة الضمان؟", "faq.a2": "ضمان يمتد من 3 إلى 12 شهرًا حسب الخدمة.",
    "faq.q3": "كيف أتواصل لتحديد الخدمة؟", "faq.a3": "أرسل طلبك عبر واتساب، وسننسق معك الخطوات المناسبة. لا يوجد محل استقبال.",
    "contact.title": "تواصل معنا", "contact.sub": "أرسل طلبك عبر واتساب. لا يوجد محل لاستقبال الزبائن.",
    "contact.addr": "الجزائر الوسطى (عرض الموقع على الخريطة) 🗺️",
    "contact.workType": "الطلبات عبر واتساب، لا يوجد محل لاستقبال الزبائن",
    "contact.whatsapp": "اطلب الخدمة عبر واتساب",
    "contact.name": "الاسم", "contact.email": "البريد الإلكتروني", "contact.msg": "رسالتك", "contact.send": "إرسال",
    "contact.success": "تم إرسال رسالتك بنجاح!",
    "footer.rights": "جميع الحقوق محفوظة"
  },
  fr: {
    "nav.home": "Accueil", "nav.services": "Services", "nav.about": "À propos",
    "nav.pricing": "Tarifs", "nav.portfolio": "Projets", "nav.faq": "FAQ", "nav.contact": "Contact", "nav.booking": "Réserver",
    "wa.message": "Bonjour, je souhaite obtenir des informations sur les services iComputer.",
    "reviews.title": "Avis clients", "reviews.write": "Laissez votre avis", "reviews.empty": "Aucun avis pour le moment.",
    "booking.title": "Réservez votre rendez-vous", "booking.subtitle": "Choisissez le service souhaité et nous vous répondrons rapidement.",
    "booking.name": "Nom", "booking.phone": "Téléphone / WhatsApp", "booking.service": "Service",
    "booking.date": "Date", "booking.period": "Période", "booking.description": "Description du problème (facultatif)", "booking.submit": "Envoyer la demande",
    "booking.success": "Votre demande de rendez-vous a bien été envoyée.", "booking.serviceOption": "Choisir un service",
    "booking.periodOption": "Choisir une période",
    "review.title": "Laissez votre avis", "review.name": "Nom", "review.service": "Service", "review.rating": "Note de 1 à 5",
    "review.text": "Votre avis", "review.submit": "Envoyer l’avis", "review.success": "Votre avis a bien été envoyé.",
    "thanks.title": "Votre demande a bien été envoyée", "thanks.message": "Merci. Nous avons bien reçu votre demande et vous répondrons prochainement.",
    "thanks.back": "Retour à l'accueil", "thanks.whatsapp": "Contact par WhatsApp",
    "hero.chip": "Assistance informatique et logicielle",
    "hero.title1": "Assistance informatique",
    "hero.title2": "pour vos logiciels",
    "hero.sub": "Aide sur les logiciels et systèmes, configuration réseau, protection des données et documents numériques.",
    "hero.imageAlt": "Aide apportée à un utilisateur sur un ordinateur",
    "hero.imageLabel": "Logiciels et systèmes",
    "hero.imageTitle": "Une aide adaptée à vos besoins",
    "hero.imageText": "Installation de logiciels, résolution de problèmes système et accompagnement.",
    "hero.cta1": "Commander sur WhatsApp", "hero.cta2": "Nos services",
    "hero.badge1.title": "Réponse rapide", "hero.badge1.desc": "Support continu 24/7",
    "hero.badge2.title": "Commande par WhatsApp", "hero.badge2.desc": "Pas de boutique d’accueil",
    "backup.chip": "🛡️ Sécurité des données & Sauvegarde",
    "backup.title": "Les données de votre entreprise sont-elles en sécurité ?",
    "backup.sub": "En cas de panne ou de virus, pouvez-vous récupérer vos fichiers ?",
    "backup.f1": "Sauvegarde automatique.", "backup.f1.sub": "Sauvegarde régulière de tous les fichiers du système.",
    "backup.f2": "Restauration rapide.", "backup.f2.sub": "Récupération rapide sans interruption d'activité.",
    "backup.f3": "Protection contre les pannes.", "backup.f3.sub": "Protection contre les virus et ransomwares.",
    "backup.f4": "Installation professionnelle.", "backup.f4.sub": "Mise en place transparente sans changer votre travail.",
    "backup.cta": "Contactez-nous pour une évaluation gratuite.",
    "backup.whatsapp": "Contactez-nous sur WhatsApp",
    "backup.locationLabel": "Zone d'intervention :", "backup.location": "Alger Centre",
    "backup.note": "Contact et demandes via WhatsApp uniquement",
    "sub.chip": "💼 Solutions pour PME & Entreprises",
    "sub.slogan": "L'interruption de travail coûte plus cher que la prévention.",
    "sub.sub": "Abonnement mensuel tout-en-un adapté aux PME pour assurer la continuité de votre activité.",
    "sub.p1.title": "Sauvegarde.", "sub.p1.desc": "Reliable Data Preservation.",
    "sub.p2.title": "Sécurité des données.", "sub.p2.desc": "Enhanced Cyber Security.",
    "sub.p3.title": "Logiciels et systèmes.", "sub.p3.desc": "Installation et dépannage logiciel.",
    "sub.p4.title": "Supervision.", "sub.p4.desc": "Proactive Network Vigilance.",
    "sub.p5.title": "Support technique.", "sub.p5.desc": "Immediate Problem Resolution.",
    "sub.cta": "Obtenir un devis gratuit",
    "stats.repairs": "Réparations", "stats.support": "Support 24/7",
    "supportIntro.chip": "Services pour particuliers et entreprises",
    "supportIntro.title": "Une technologie adaptée à vos besoins",
    "supportIntro.p1": "Résolution des problèmes logiciels et systèmes, sans réparation des composants matériels.",
    "supportIntro.p2": "Installation et configuration des logiciels et systèmes d’exploitation.",
    "supportIntro.p3": "Configuration réseau, protection des données et sauvegarde.",
    "supportIntro.p4": "Création de CV, présentations et documents numériques.",
    "supportIntro.p5": "Envoyez votre demande sur WhatsApp. Pas de boutique d’accueil.",
    "services.title": "Nos services", "services.sub": "Des solutions informatiques spécialisées pour vos besoins.",
    "services.s1.title": "Assistance informatique et logicielle", "services.s1.desc": "Résolution des problèmes logiciels et systèmes, sans réparation matérielle.",
    "services.s2.title": "Installation réseau", "services.s2.desc": "Réseaux filaires et sans fil sécurisés pour entreprises et particuliers.",
    "services.s4.title": "Cybersécurité & Données", "services.s4.desc": "Protection, sauvegarde automatique et récupération de données.",
    "about.title": "À propos de moi",
    "about.lead": "Mohamed El Amine — 30 ans, Technicien Supérieur en Informatique.",
    "about.p1": "J’accompagne les particuliers et les entreprises d’Alger Centre dans l’installation des logiciels et systèmes, les réseaux et la protection des données.",
    "about.p2": "Mon objectif est de proposer une assistance claire et pratique pour vos outils et services numériques.",
    "about.vision": "Qualifications", "about.visionDesc": "Technicien Supérieur en Informatique — réactivité, précision et fiabilité.",
    "about.exp": "ans — Technicien Supérieur Informatique",
    "pricing.title": "Nos tarifs", "pricing.popular": "Populaire", "pricing.custom": "Sur devis", "pricing.cta": "Commander",
    "pricing.p1.name": "Débutant", "pricing.p1.f1": "Assistance technique de base", "pricing.p1.f2": "Support téléphonique", "pricing.p1.f3": "1 visite / mois",
    "pricing.p2.name": "Business", "pricing.p2.f1": "Assistance technique complète", "pricing.p2.f2": "Support 24/7", "pricing.p2.f3": "Gestion réseau",
    "pricing.p3.name": "Entreprise", "pricing.p3.f1": "Solutions sur mesure", "pricing.p3.f2": "Account manager", "pricing.p3.f3": "SLA garanti",
    "portfolio.title": "Nos projets", "portfolio.i1": "Réseau d'entreprise", "portfolio.i2": "Plateforme Web", "portfolio.i3": "Solution sécurité",
    "portfolio.tag1": "Réseaux", "portfolio.tag2": "Développement", "portfolio.tag3": "Cybersécurité",
    "faq.title": "Questions fréquentes",
    "faq.q1": "Comment demander un service ?", "faq.a1": "Les demandes se font par WhatsApp. Il n’y a pas de boutique d’accueil, et le mode d’intervention est convenu selon la demande.",
    "faq.q2": "Quelle est la durée de garantie ?", "faq.a2": "De 3 à 12 mois selon le service.",
    "faq.q3": "Comment convenir du service ?", "faq.a3": "Envoyez votre demande sur WhatsApp. Nous conviendrons des étapes adaptées. Il n’y a pas de boutique d’accueil.",
    "contact.title": "Contactez-nous", "contact.sub": "Envoyez votre demande sur WhatsApp. Il n’y a pas de boutique pour recevoir les clients.",
    "contact.addr": "Alger Centre (Voir sur Google Maps) 🗺️",
    "contact.workType": "Demandes par WhatsApp, sans boutique pour recevoir les clients",
    "contact.whatsapp": "Demander un service sur WhatsApp",
    "contact.name": "Nom", "contact.email": "Email", "contact.msg": "Message", "contact.send": "Envoyer",
    "contact.success": "Message envoyé avec succès !",
    "footer.rights": "Tous droits réservés"
  },
  en: {
    "nav.home": "Home", "nav.services": "Services", "nav.about": "About",
    "nav.pricing": "Pricing", "nav.portfolio": "Portfolio", "nav.faq": "FAQ", "nav.contact": "Contact", "nav.booking": "Book now",
    "wa.message": "Hello, I would like to ask about iComputer services.",
    "reviews.title": "Customer reviews", "reviews.write": "Leave a review", "reviews.empty": "No reviews yet.",
    "booking.title": "Book your appointment", "booking.subtitle": "Choose the right service and we'll contact you soon.",
    "booking.name": "Name", "booking.phone": "Phone / WhatsApp", "booking.service": "Service",
    "booking.date": "Date", "booking.period": "Time slot", "booking.description": "Problem description (optional)", "booking.submit": "Send request",
    "booking.success": "Your booking request has been sent successfully.", "booking.serviceOption": "Select a service",
    "booking.periodOption": "Select a time slot",
    "review.title": "Leave a review", "review.name": "Name", "review.service": "Service", "review.rating": "Rating from 1 to 5",
    "review.text": "Your review", "review.submit": "Send review", "review.success": "Your review has been sent successfully.",
    "thanks.title": "Your request was received", "thanks.message": "Thank you. Your request has been submitted successfully and we will contact you soon.",
    "thanks.back": "Back to home", "thanks.whatsapp": "Contact via WhatsApp",
    "hero.chip": "IT and software support",
    "hero.title1": "Software support",
    "hero.title2": "for work and home",
    "hero.sub": "Help with software and operating systems, network setup, data protection, and digital documents.",
    "hero.imageAlt": "Helping a user work with a computer",
    "hero.imageLabel": "Software and systems support",
    "hero.imageTitle": "Technical help for your needs",
    "hero.imageText": "Software setup, system troubleshooting, and practical guidance.",
    "hero.cta1": "Request on WhatsApp", "hero.cta2": "Our services",
    "hero.badge1.title": "Fast Response", "hero.badge1.desc": "24/7 Technical Support",
    "hero.badge2.title": "Order on WhatsApp", "hero.badge2.desc": "No walk-in shop",
    "backup.chip": "🛡️ Data Security & Backup",
    "backup.title": "Is Your Company Data Safe?",
    "backup.sub": "If your computer crashes or gets infected by a virus, can you recover your files?",
    "backup.f1": "Automated Backup.", "backup.f1.sub": "Regular scheduled backup of all system files.",
    "backup.f2": "Fast File Recovery.", "backup.f2.sub": "Quick data recovery without business downtime.",
    "backup.f3": "Data Loss Protection.", "backup.f3.sub": "Shield against malware and ransomware threats.",
    "backup.f4": "Professional Setup.", "backup.f4.sub": "Seamless integration without altering your workflow.",
    "backup.cta": "Contact us for a free assessment.",
    "backup.whatsapp": "Chat with us on WhatsApp",
    "backup.locationLabel": "Service Area:", "backup.location": "Central Algiers",
    "backup.note": "Contact via WhatsApp only",
    "sub.chip": "💼 SMB & Corporate Solutions",
    "sub.slogan": "IT Downtime Costs More than Proactive Protection.",
    "sub.sub": "Integrated monthly subscription tailored for SMBs to ensure continuous business uptime.",
    "sub.p1.title": "Data Backup.", "sub.p1.desc": "Reliable Data Preservation.",
    "sub.p2.title": "Data Protection.", "sub.p2.desc": "Enhanced Cyber Security.",
    "sub.p3.title": "Software and Systems.", "sub.p3.desc": "Software setup and troubleshooting.",
    "sub.p4.title": "Monitoring.", "sub.p4.desc": "Proactive Network Vigilance.",
    "sub.p5.title": "Tech Support.", "sub.p5.desc": "Immediate Problem Resolution.",
    "sub.cta": "Get a Free Quote",
    "stats.repairs": "Repairs", "stats.support": "24/7 Support",
    "supportIntro.chip": "IT services for homes and businesses",
    "supportIntro.title": "Technology that works for you",
    "supportIntro.p1": "Troubleshooting software and operating systems, without hardware repairs.",
    "supportIntro.p2": "Installing and configuring software and operating systems.",
    "supportIntro.p3": "Network setup, data protection, and backups.",
    "supportIntro.p4": "Creating CVs, presentations, and digital documents.",
    "supportIntro.p5": "Send your request on WhatsApp. There is no walk-in shop.",
    "services.title": "Our Services", "services.sub": "Specialized IT solutions for all your tech needs.",
    "services.s1.title": "Computer and software support", "services.s1.desc": "Software and operating system troubleshooting, without hardware repairs.",
    "services.s2.title": "Network Setup", "services.s2.desc": "Secure, high-performance wired and wireless networks.",
    "services.s4.title": "Cybersecurity & Data", "services.s4.desc": "Data protection, automated backup, and disaster file recovery.",
    "about.title": "About Me",
    "about.lead": "Mohamed El Amine — 30 years old, Senior IT Technician.",
    "about.p1": "I help individuals and businesses in Central Algiers with software and operating system setup, networks, and data protection.",
    "about.p2": "My goal is to provide clear, practical support for your digital tools and services.",
    "about.vision": "Qualifications", "about.visionDesc": "Senior IT Technician — committed to fast response, precision, and quality service.",
    "about.exp": "Years Old — Senior IT Technician",
    "pricing.title": "Pricing Plans", "pricing.popular": "Most Popular", "pricing.custom": "Custom", "pricing.cta": "Order Now",
    "pricing.p1.name": "Starter", "pricing.p1.f1": "Basic tech support", "pricing.p1.f2": "Phone support", "pricing.p1.f3": "1 visit/month",
    "pricing.p2.name": "Business", "pricing.p2.f1": "Full tech support", "pricing.p2.f2": "24/7 support", "pricing.p2.f3": "Network management",
    "pricing.p3.name": "Enterprise", "pricing.p3.f1": "Custom solutions", "pricing.p3.f2": "Dedicated manager", "pricing.p3.f3": "Guaranteed SLA",
    "portfolio.title": "Our Work", "portfolio.i1": "Corporate Network", "portfolio.i2": "Web Platform", "portfolio.i3": "Security Solution",
    "portfolio.tag1": "Networks", "portfolio.tag2": "Software", "portfolio.tag3": "Cybersecurity",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How do I request a service?", "faq.a1": "Requests are handled through WhatsApp. There is no walk-in shop, and the service method is arranged based on your request.",
    "faq.q2": "What is the warranty period?", "faq.a2": "3 to 12 months depending on the service.",
    "faq.q3": "How do I arrange a service?", "faq.a3": "Send your request on WhatsApp. We will coordinate the next steps with you. There is no walk-in shop.",
    "contact.title": "Contact Us", "contact.sub": "Send your request on WhatsApp. There is no shop for walk-in customers.",
    "contact.addr": "Central Algiers (View location on Google Maps) 🗺️",
    "contact.workType": "Requests via WhatsApp. No shop for walk-in customers.",
    "contact.whatsapp": "Request a service on WhatsApp",
    "contact.name": "Name", "contact.email": "Email", "contact.msg": "Your Message", "contact.send": "Send",
    "contact.success": "Message sent successfully!",
    "footer.rights": "All rights reserved"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.alt = dict[key];
  });
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  const message = encodeURIComponent(dict["wa.message"] || "Hello");
  document.querySelectorAll("a[data-whatsapp-link]").forEach(link => {
    link.href = `https://wa.me/rai.med.elamine?text=${message}`;
  });
  try { localStorage.setItem("lang", lang); } catch(e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language
  let savedLang = "ar";
  try { savedLang = localStorage.getItem("lang") || "ar"; } catch(e) {}
  setLanguage(savedLang);

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    const setMenuOpen = (open) => {
      navLinks.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
    };

    menuBtn.addEventListener("click", () => {
      setMenuOpen(!navLinks.classList.contains("open"));
    });
    navLinks.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => setMenuOpen(false))
    );
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && navLinks.classList.contains("open")) {
        setMenuOpen(false);
        menuBtn.focus();
      }
    });
  }

  // Contact form
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = document.documentElement.lang || "ar";
      status.textContent = translations[lang]["contact.success"];
      form.reset();
      setTimeout(() => { status.textContent = ""; }, 5000);
    });
  }

  const bookingDate = document.getElementById("bookingDate");
  if (bookingDate) {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const localNow = new Date(now.getTime() - offset * 60 * 1000);
    bookingDate.min = localNow.toISOString().split("T")[0];
  }

  const testimonialsSection = document.getElementById("testimonialsSection");
  const testimonialsList = document.getElementById("testimonialsList");
  if (testimonialsSection && testimonialsList) {
    fetch("testimonials.json")
      .then(response => response.ok ? response.json() : [])
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          testimonialsSection.remove();
          return;
        }

        const validReviews = data.filter((item) => {
          const name = typeof item?.name === "string" ? item.name.trim() : "";
          const service = typeof item?.service === "string" ? item.service.trim() : "";
          const text = typeof item?.text === "string" ? item.text.trim() : "";
          const rating = Number(item?.rating);
          return name && service && text && Number.isFinite(rating) && rating >= 1 && rating <= 5;
        });

        if (!validReviews.length) {
          testimonialsSection.remove();
          return;
        }

        validReviews.forEach((item) => {
          const article = document.createElement("article");
          article.className = "testimonial-item glass";

          const header = document.createElement("div");
          header.className = "testimonial-header";

          const name = document.createElement("h3");
          name.textContent = item.name.trim();

          const service = document.createElement("span");
          service.textContent = item.service.trim();

          const rating = document.createElement("div");
          rating.className = "testimonial-rating";
          rating.setAttribute("aria-label", `Rating ${item.rating} out of 5`);
          rating.textContent = "★".repeat(Math.round(Number(item.rating))) + "☆".repeat(5 - Math.round(Number(item.rating)));

          header.append(name, service, rating);

          const body = document.createElement("p");
          body.textContent = item.text.trim();

          article.append(header, body);
          testimonialsList.appendChild(article);
        });
      })
      .catch(() => {
        testimonialsSection.remove();
      });
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    let backdropFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    window.addEventListener("pointermove", event => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (backdropFrame) return;

      backdropFrame = window.requestAnimationFrame(() => {
        const offsetX = (pointerX / window.innerWidth - 0.5) * 24;
        const offsetY = (pointerY / window.innerHeight - 0.5) * 18;
        document.documentElement.style.setProperty("--backdrop-x", `${offsetX.toFixed(1)}px`);
        document.documentElement.style.setProperty("--backdrop-y", `${offsetY.toFixed(1)}px`);
        backdropFrame = 0;
      });
    }, { passive: true });

    const resetBackdrop = () => {
      if (backdropFrame) window.cancelAnimationFrame(backdropFrame);
      backdropFrame = 0;
      document.documentElement.style.setProperty("--backdrop-x", "0px");
      document.documentElement.style.setProperty("--backdrop-y", "0px");
    };

    window.addEventListener("blur", resetBackdrop);
    window.addEventListener("pointerout", event => {
      if (!event.relatedTarget) resetBackdrop();
    });
  }

  const revealItems = document.querySelectorAll(
    ".card, .stat, .faq-list details, .portfolio-item, .service-detail-card, " +
    ".pillar-card, .hero-image-card, .support-card, .visual-card"
  );

  if (reduceMotion) {
    revealItems.forEach(el => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealItems.forEach(el => {
      el.classList.add("scroll-reveal");
      io.observe(el);
    });
  }

  const tiltItems = document.querySelectorAll(
    ".card, .stat, .faq-list details, .portfolio-item, .service-detail-card, " +
    ".pillar-card, .hero-image-card, .support-card, .visual-card"
  );

  tiltItems.forEach(el => {
    el.classList.add("tilt-card");
    if (reduceMotion) return;

    const resetTilt = () => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
      el.classList.remove("is-tilting");
    };

    const setTilt = event => {
      const bounds = el.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      el.style.setProperty("--tilt-x", `${((0.5 - y) * 7).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${((x - 0.5) * 7).toFixed(2)}deg`);
      el.classList.add("is-tilting");
    };

    el.addEventListener("pointermove", event => {
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        setTilt(event);
      }
    });
    el.addEventListener("pointerdown", event => {
      if (event.pointerType === "touch") setTilt(event);
    });
    el.addEventListener("pointerup", resetTilt);
    el.addEventListener("pointercancel", resetTilt);
    el.addEventListener("pointerleave", resetTilt);
  });
});
