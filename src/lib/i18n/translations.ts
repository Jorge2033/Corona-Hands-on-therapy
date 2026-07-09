// Diccionario de traducción EN/ES.
// Cubre el chrome global (header, footer, home) y las cabeceras/labels
// compartidas de las páginas internas. El contenido largo específico de
// cada condición, del equipo, y de careers/patient-info todavía vive
// solo en inglés en sus propios archivos — si no hay traducción para un
// texto, la página simplemente sigue mostrando el inglés (no se rompe nada).

export type Language = "en" | "es";

const en = {
  nav: {
    services: "Services",
    about: "About",
    team: "Team",
    ourTeam: "Our Team",
    joinOurTeam: "Join Our Team",
    conditions: "Conditions",
    viewAllConditions: "View All Conditions",
    patientInfo: "Patient Info",
    patientInfoForms: "Patient Info / Forms",
    insurancePlans: "Insurance Plans",
    faqs: "FAQs",
    referAFriend: "Refer a Friend",
    reviews: "Reviews",
    contact: "Contact",
    bookAppointment: "Book Appointment",
    call: "Call",
    messageWhatsapp: "Message on WhatsApp",
    sendSms: "Send a text (SMS)",
    whatsappChat: "WhatsApp Chat",
    langToggleLabel: "Español",
  },
  breadcrumb: {
    home: "Home",
    conditionsWeTreat: "Conditions We Treat",
    patientInformation: "Patient Information",
    ourTeam: "Our Team",
    joinOurTeam: "Join Our Team",
  },
  hero: {
    eyebrow: "Auto · Work · Home · Personal Injury Recovery",
    titleStart: "Your recovery, in",
    titleEm: "expert hands.",
    subhead:
      "Corona Hands-On Therapy provides physical therapy, chiropractic care, and acupuncture for patients recovering from auto accidents, work injuries, home accidents, and other personal injuries — all under one roof in Elmhurst, NY.",
    requestAppointment: "Request an Appointment",
    badges: [
      "Auto accident recovery",
      "Work & home injury care",
      "Se habla Español",
      "Chiropractic & Acupuncture",
      "Chronic pain management",
      "Sports injury rehab",
      "Personalized care plans",
      "Most insurance plans accepted",
      "Evening & weekend hours",
      "Same-day appointments available",
    ],
  },
  trustStrip: {
    item1: "Auto, work, home & personal injury cases welcome",
    item2: "Same-week appointments available",
    item3: "Located in Elmhurst, Queens",
  },
  painAreas: {
    title: "How Corona Hands-On Therapy can get you",
    titleEm: "back on track",
    lead:
      "Pain that lingers usually gets worse the longer it's ignored. Our providers start by pinpointing exactly where an injury is coming from, then build a plan across physical therapy, chiropractic care, and acupuncture to treat it — not just manage the symptoms.",
    labels: {
      "Back Pain": "Back Pain",
      "Neck Pain": "Neck Pain",
      "Shoulder Pain": "Shoulder Pain",
      "Hip Pain": "Hip Pain",
      "Knee Pain": "Knee Pain",
      "Elbow Pain": "Elbow Pain",
      "Wrist Pain": "Wrist Pain",
      "Hand Pain": "Hand Pain",
      "Foot Pain": "Foot Pain",
      "Ankle Pain": "Ankle Pain",
    } as Record<string, string>,
  },
  services: {
    eyebrow: "What we treat",
    title: "Three disciplines, one recovery plan.",
    lead:
      "Whether your injury happened in a car accident, at work, at home, or another way, our providers work from a shared plan so your care stays coordinated from your first visit to your last.",
    items: {
      "physical-therapy": {
        name: "Physical Therapy",
        description:
          "Guided, hands-on rehabilitation for injuries from auto accidents, work incidents, and home accidents — restoring strength, mobility, and function through a personalized plan.",
        highlights: [
          "Manual therapy & guided therapeutic exercise",
          "Post-accident and post-surgical rehabilitation",
          "Personalized home exercise programs",
          "Progress reassessed and adjusted every visit",
        ],
      },
      chiropractic: {
        name: "Chiropractic Care",
        description:
          "Spinal and joint adjustments to relieve back, neck, and whiplash-related pain common after auto accidents, workplace strain, and other personal injuries.",
        highlights: [
          "Spinal and joint adjustments",
          "Whiplash and post-accident care",
          "Posture and alignment correction",
          "Soft-tissue and muscle release techniques",
        ],
      },
      acupuncture: {
        name: "Acupuncture",
        description:
          "Drug-free, targeted pain management that complements physical therapy and chiropractic treatment for a well-rounded recovery.",
        highlights: [
          "Drug-free pain management",
          "Complements physical therapy & chiropractic care",
          "Helps reduce inflammation and muscle tension",
          "Supports faster, more complete recovery",
        ],
      },
    } as Record<string, { name: string; description: string; highlights: string[] }>,
  },
  about: {
    eyebrow: "About Corona Hands-On Therapy",
    title: "Recovery-focused care for accident and injury patients.",
    lead: "Based in Elmhurst, NY, Corona Hands-On Therapy combines physical therapy, chiropractic care and acupuncture under one roof. We provide coordinated treatment plans designed for patients recovering from auto accidents, work injuries, home accidents and other personal injuries.",
    points: [
      "Auto accident, work injury, home accident & personal injury cases welcome",
      "Physical therapy, chiropractic, and acupuncture under one roof",
      "Spanish-speaking staff available",
      "Personalized treatment plans for every patient",
    ],
    meetProviders: "Meet our providers →",
    steps: [
      {
        title: "Personalized Evaluation",
        text: "Every patient begins with a comprehensive assessment to identify the root cause of pain before treatment starts.",
      },
      {
        title: "Coordinated Treatment",
        text: "Physical therapy, chiropractic care and acupuncture work together to maximize your recovery.",
      },
      {
        title: "Recovery Monitoring",
        text: "We measure your progress every visit and adapt your treatment plan as your body heals.",
      },
    ],
    ctaButton: "Request Appointment",
  },
  reviews: {
    eyebrow: "Patient Experiences",
    title: "What patients say about their recovery.",
  },
  contact: {
    eyebrow: "Find us",
    title: "Visit or reach out — we're in Elmhurst.",
    address: "Address",
    phone: "Phone",
    formTitle: "Request an Appointment",
    formLead: "Fill out the form and our team will call to confirm your visit.",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    email: "Email Address",
    caseType: "Case Type",
    serviceNeeded: "Service Needed",
    notes: "Notes (optional)",
    notesPlaceholder: "Briefly describe your injury or preferred appointment time...",
    selectOne: "Select one",
    notSureYet: "Not sure yet",
    successTitle: "Request received",
    successText:
      "Thank you — we've received your appointment request and will call you shortly to confirm.",
    submit: "Submit Appointment Request",
    sending: "Sending...",
    privacyNote: "By submitting, you agree to our",
    privacyPolicy: "Privacy Policy",
    neverShared: "Your information is never shared or sold.",
    days: {
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",
      Sunday: "Sunday",
    } as Record<string, string>,
    caseTypes: {
      auto: "Auto Accident",
      work: "Work Injury",
      home: "Home Accident",
      "personal-injury": "Personal Injury",
      other: "Other / Not sure",
    } as Record<string, string>,
  },
  floatingActions: {
    contactUs: "Contact Us",
    requestAppointment: "Request Appointment",
    webChat: "Web Chat",
  },
  sidebar: {
    painFreeTitle: "Are You Ready To Live Pain-Free?",
  },
  conditionsIndex: {
    eyebrow: "Conditions We Treat",
    title: "Find relief for your specific pain.",
    intro:
      "Every condition below can have a range of causes — from an auto accident to repetitive strain at work. Select a condition to learn more about causes, symptoms, and how our team approaches treatment.",
    learnMore: "Learn more",
    conditionSingular: "condition",
    conditionPlural: "conditions",
    categories: {
      "Joint & Muscle Pain": "Joint & Muscle Pain",
      "Nerve Pain": "Nerve Pain",
      "Chronic Conditions": "Chronic Conditions",
      "Injury Recovery": "Injury Recovery",
    } as Record<string, string>,
  },
  patientFaqs: {
    title: "Frequently asked questions.",
    introPrefix: "New to physical therapy, chiropractic care, or acupuncture? Here are answers to the questions we hear most from patients before their first visit. Don't see your question here? Call us at",
  },
  generalFaqs: [
    {
      question: "Do I need a doctor's referral to start physical therapy?",
      answer:
        "In New York, patients can typically be evaluated by a physical therapist directly. That said, some insurance plans — including certain auto and work-injury claims — may require a referral or authorization, so we recommend confirming with our front desk before your first visit.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring a photo ID, your insurance card, any relevant paperwork related to your accident or injury (such as a claim number), and comfortable clothing that allows easy movement of the area being treated.",
    },
    {
      question: "How long does a typical appointment take?",
      answer:
        "Your first evaluation visit usually runs longer, around 45–60 minutes, so we can fully assess your condition. Follow-up visits are typically 30–45 minutes depending on your treatment plan.",
    },
    {
      question: "How many visits will I need?",
      answer:
        "It depends entirely on your condition, how long you've had it, and how your body responds to treatment. Some patients see meaningful improvement in a few visits, while more complex injuries take longer. We'll discuss an expected timeline after your evaluation.",
    },
    {
      question: "Is physical therapy painful?",
      answer:
        "Most physical therapy is not painful, though some techniques may cause mild, temporary discomfort — especially if you're working through stiffness or scar tissue. We always work within a level you're comfortable with and adjust as needed.",
    },
    {
      question: "Can I go to physical therapy and chiropractic care at the same clinic?",
      answer:
        "Yes — that's one of the advantages of Corona Hands-On Therapy. Our physical therapy, chiropractic, and acupuncture providers coordinate care together, so you don't need to repeat your history at multiple locations.",
    },
    {
      question: "What's the difference between physical therapy and chiropractic care?",
      answer:
        "Physical therapy focuses on rebuilding strength, flexibility, and function through targeted exercise and movement retraining. Chiropractic care focuses on joint alignment and mobility through manual adjustments. Many patients benefit from both as part of one coordinated plan.",
    },
    {
      question: "Do you treat injuries from auto accidents?",
      answer:
        "Yes, auto accident recovery is one of our main areas of focus, including whiplash, back and neck injuries, and soft tissue damage from a collision.",
    },
    {
      question: "Do you treat work-related injuries?",
      answer:
        "Yes, we regularly treat patients recovering from injuries that happened on the job, including strains, sprains, and repetitive stress injuries.",
    },
    {
      question: "What should I wear to my appointment?",
      answer:
        "Comfortable, loose-fitting clothing that allows easy access to the area being treated is best — for example, shorts for a knee or hip issue, or a t-shirt for a shoulder or neck issue.",
    },
    {
      question: "Will insurance cover my treatment?",
      answer:
        "Coverage depends on your specific plan and the reason for treatment. Our front desk can help verify your benefits before your first visit — see our Insurance Plans page for the types of coverage we commonly work with.",
    },
    {
      question: "What if I've already had surgery — can physical therapy still help?",
      answer:
        "Yes, post-surgical rehabilitation is a common and important part of recovery. We coordinate with your surgeon's recommendations to build a safe, progressive recovery plan.",
    },
    {
      question: "Can acupuncture be combined with physical therapy?",
      answer:
        "Yes, many patients use acupuncture alongside physical therapy and chiropractic care as a complementary, drug-free way to manage pain during recovery.",
    },
    {
      question: "What happens if I miss an appointment?",
      answer:
        "Please call us as soon as possible if you need to reschedule. Consistent attendance is one of the biggest factors in a successful recovery, so we'll always work with you to find a time that fits your schedule.",
    },
    {
      question: "Do you offer evening or weekend appointments?",
      answer:
        "We offer evening hours on select days and Saturday appointments — check our Contact page for our current hours, or call us directly to find a time that works for you.",
    },
    {
      question: "Is Corona Hands-On Therapy accessible for Spanish-speaking patients?",
      answer:
        "Yes, we have Spanish-speaking staff available to make sure language is never a barrier to understanding your care.",
    },
    {
      question: "What if my pain isn't from an accident or injury I can identify?",
      answer:
        "That's very common. Many conditions build up gradually from posture, repetitive strain, or general wear over time. Our evaluation will help identify what's driving your symptoms even without a single specific incident.",
    },
  ],
  referral: {
    breadcrumbLabel: "Refer a Friend",
    title: "Refer a friend or family member.",
    intro1:
      "If someone you know is dealing with pain, recovering from an accident, or putting off treatment for a condition that's holding them back physically, a referral from someone they trust often makes the difference in whether they actually seek help. Many people wait far too long to treat pain or injury, which usually makes recovery slower and more difficult.",
    intro2:
      "If you know someone in pain or recovering from an injury who could benefit from our care, let us know below and our team will reach out to them directly.",
    formTitle: "Referral Form",
    yourInfo: "Your Information",
    yourName: "Your Name",
    yourPhone: "Your Phone",
    yourEmail: "Your Email (optional)",
    whoReferring: "Who You're Referring",
    theirName: "Their Name",
    theirPhone: "Their Phone (if known)",
    notes: "Notes (optional)",
    notesPlaceholder: "Anything that would help us reach out, like what they're dealing with or the best time to contact them...",
    send: "Send Referral",
    sending: "Sending...",
    receivedTitle: "Referral received",
    receivedText: "Thank you — our team will reach out to your friend directly.",
  },
  careers: {
    heroTitle: "Join Our Team",
    breadcrumbHome: "Home",
    breadcrumbJoinTeam: "Join Our Team",
    growTitle: "Grow your career at Corona Hands-On Therapy.",
    whoAreWeTitle: "Who are we?",
    whoAreWe1Title: "Forward-Thinking and Progressive:",
    whoAreWe1Text:
      "Our group of physical therapy offices is dedicated to enhancing patient well-being through manual therapy and advanced techniques.",
    whoAreWe2Title: "Advanced Diagnostic Testing:",
    whoAreWe2Text:
      "We offer cutting-edge diagnostic testing opportunities that allow our staff to stay at the forefront of physical therapy innovations.",
    whoAreWe3Title: "Career Growth:",
    whoAreWe3Text:
      "We provide significant career growth opportunities, including professional development, continuous education, and leadership training programs.",
    whyWorkTitle: "Why Work with Us?:",
    whyWork1: "Join a team committed to innovative patient care.",
    whyWork2: "Access to the latest advancements in diagnostic testing.",
    whyWork3: "Grow your career with our extensive development programs.",
    whyWork4: "Be part of a supportive and dynamic work environment.",
    vacanciesTitle: "Looking for a career at Corona Hands-On Therapy?",
    vacancy1: "Physical Therapist – Elmhurst Clinic",
    vacancy2: "Chiropractor – Full Time",
    vacancy3: "Physical Therapy Assistant",
    openPosition: "Open Position",
    formHeading: "Contact us today or submit the form below",
    formSubtitle:
      "Advance your PT career by joining our team and training under the leaders in Diagnostic Testing. Gain expertise in EMG, NCV and MSK Ultrasound.",
    firstName: "First Name *",
    lastName: "Last Name *",
    phone: "Phone *",
    email: "Email *",
    positionApplyingFor: "Position Applying For *",
    selectPosition: "Select a position",
    roles: {
      "physical-therapist": "Physical Therapist",
      chiropractor: "Chiropractor",
      acupuncturist: "Acupuncturist",
      "front-desk": "Front Desk / Billing",
      other: "Other",
    } as Record<string, string>,
    uploadResume: "Upload Resume *",
    fileHelpText: "Accepted file types: pdf, doc, docx. Max file size: 7 MB.",
    fileTooLarge: "The resume file is too large. Please upload a file under 7 MB.",
    coverLetter: "Cover Letter",
    coverLetterPlaceholder: "Tell us more about your clinical experience...",
    sending: "Sending...",
    submitApplication: "Submit Application",
    receivedTitle: "Application Received Successfully!",
    receivedText: "Thank you for applying. Our recruitment team will review your profile shortly.",
  },
  patientForms: {
    breadcrumbLabel: "Patient Info / Forms",
    welcomeTitle: "Welcome to Hands-On Physical Therapy",
    welcomeIntroPrefix: "We are here to help you enjoy your life, pain-free! To make a convenient appointment, simply call us today at",
    welcomeIntroSuffix:
      "Our practice is dedicated to helping our patients identify the cause of their pain and creating a custom treatment program that will allow them to return to normal activities pain-free.",
    formsHeading: "Patient Forms",
    formsSubtitle:
      "At Hands-On Physical Therapy, we want to maximize your time with us. Therefore, we offer our paperwork online, so you can complete it in the privacy of your own home. Prior to your first visit, please download the Patient Intake Forms and bring them with you to your first visit, along with your insurance information and photo ID.",
    intakeFormsTitle: "Patient Intake Forms",
    intakeFormsText:
      "Save time at your first visit by downloading and completing your intake paperwork at home. Please bring the completed forms, your insurance card, and a photo ID to your appointment.",
    downloadBtn: "Download & Print Forms",
    prepareTitle: "Please prepare the following for your first visit:",
    prepare1: "Arrive 15 minutes early for your first appointment.",
    prepare2: "Bring with you a copy of your insurance card and a photo ID.",
    prepare3: "Please call our office to verify your insurance benefits beforehand.",
    faqsTitle: "Frequently Asked Questions (FAQs)",
    faq1Q: "Do I need a prescription from a doctor?",
    faq1A: "New York is a Direct Access state, meaning you can see a physical therapist for up to 30 days or 10 visits without a referral.",
    faq2Q: "What should I wear to my first appointment?",
    faq2A: "Wear loose, comfortable clothing that allows easy access to your area of pain or injury.",
    firstVisitTitle: "What to expect at your first visit & Conditions We Treat",
    firstVisit1: "A full evaluation to identify the cause of your pain, not just the symptoms.",
    firstVisit2: "A conversation about your goals and daily activities so your plan fits your life.",
    firstVisit3: "A personalized treatment plan across physical therapy, chiropractic care, and acupuncture as needed.",
    firstVisit4: "Clear next steps and a realistic timeline for your recovery.",
    disclaimerLabel: "PLEASE NOTE:",
    disclaimer:
      "Remember consistency of your visits and physical therapy treatment are very important in reaching your goals and help return you to a healthy lifestyle.",
  },
  insurance: {
    breadcrumbLabel: "Insurance Plans",
    title: "Insurance we commonly work with.",
    intro:
      "Understanding your insurance coverage shouldn't be complicated. Below is a list of insurance types and carriers we commonly work with for auto accident, work injury, home accident, and general health insurance cases in the Elmhurst area.",
    disclaimerLabel: "Please note:",
    disclaimer:
      "insurance networks and coverage change often. This list reflects plans we commonly work with in our area — it doesn't guarantee coverage for every policy under a given carrier. Please call our front desk at least once before your visit so we can verify your specific plan and benefits.",
    card1Title: "Why verifying your insurance matters",
    card1Text:
      "Every plan is different — even two people with the same insurance company can have different deductibles, copays, or authorization requirements. Verifying your specific policy before treatment helps avoid surprise bills and lets us build a treatment plan around what your plan actually covers.",
    card2Title: "Auto accident & work injury claims",
    card2Text:
      "Auto accident and work injury cases are usually billed directly to the insurance carrier or claims adjuster handling your case rather than through a standard health insurance copay. Bring your claim number and adjuster information if you have it, and our billing team will handle the rest.",
    card3Title: "What to bring",
    card3Text:
      "Your insurance card, a photo ID, and — for accident or injury cases — any paperwork you've received related to your claim, such as a claim number or adjuster contact information.",
    card4Title: "What if I don't have insurance?",
    card4Text:
      "Don't worry! We offer affordable self-pay rates and flexible payment options so you can focus on your recovery without barriers. Contact our front desk to discuss custom packages or pricing tailored to your needs.",
    plansTitle: "Plans & Carriers We Commonly Work With",
    footNotePrefix: "Don't see your plan listed? Call us at",
    footNoteSuffix: "— we work with many plans not listed here and can quickly confirm whether we're in-network for you.",
    categories: {
      "Major Medical & Health Insurance Plans": "Major Medical & Health Insurance Plans",
      "Auto Insurance Carriers": "Auto Insurance Carriers",
      "Work-Related Injury Insurance Carriers": "Work-Related Injury Insurance Carriers",
    } as Record<string, string>,
  },
  teamMembers: {
    moon: { role: "Physical Therapist", note: "Leads individualized rehabilitation plans for accident and injury recovery." },
    weiner: { role: "Chiropractor", note: "Focuses on spinal and joint care for whiplash and injury-related pain." },
    yom: { role: "Acupuncturist", note: "Provides complementary pain management as part of a coordinated care plan." },
    "cindy-rodriguez": { role: "Manager", note: "Oversees daily clinic operations to ensure exceptional care and service delivery." },
    "daniela-suarez": { role: "Front Desk", note: "Welcomes patients, coordinates schedules, and assists with check-in procedures." },
    "maria-hanna": { role: "Human Resources", note: "Coordinates internal operations and supports team development." },
    "erick-hannah": { role: "Billing Department Coordinator", note: "Manages billing processes and coordinates with medical insurance providers." },
    "maite-pardo": { role: "Billing Department Coordinator", note: "Ensures accurate account processing and supports provider billing workflows." },
    "george-billing": { role: "Billing Department", note: "Handles account claims, verification, and payment processing." },
    "karen-billing": { role: "Billing Department", note: "Assists with daily invoice processing and financial documentation." },
    "arnold-pt": { role: "Physical Therapist", note: "Provides dedicated physical therapy sessions to restore patient strength and mobility." },
    "alexandra-pt": { role: "Physical Therapist", note: "Implements personalized treatment and recovery exercises for targeted rehabilitation." },
  } as Record<string, { role: string; note: string }>,
  team: {
    title: "The specialists behind your recovery.",
    intro:
      "Corona Hands-On Therapy brings physical therapy, chiropractic care, and acupuncture together under one roof. Meet the providers who build your recovery plan and coordinate your care from your first visit to your last. Our multidisciplinary team combines decades of clinical experience with a deeply compassionate approach to healing. By collaborating daily, we ensure that every adjustment, therapeutic exercise, and treatment session works in perfect harmony. We don't just treat symptoms; we listen to your goals and tailor our techniques to fit your unique lifestyle. Together, we are fully dedicated to helping you regain your strength, move without pain, and achieve long-term wellness.",
    memberSingular: "member",
    memberPlural: "members",
    departments: {
      "Clinical Care": "Clinical Care",
      "Patient Support & Administration": "Patient Support & Administration",
    } as Record<string, string>,
  },
  conditionDetail: {
    reliefWith: "Relief with Physical Therapy",
    requestAnAppointment: "Request an Appointment",
    allConditions: "← All Conditions",
    scheduleAppointment: "Schedule an Appointment →",
    commonSymptoms: "Common Symptoms",
    whatCanCauseIt: "What Can Cause It",
    ifTreatedEarly: "If Treated Early",
    ifLeftUntreated: "If Left Untreated",
    howWeTreat: "How Corona Hands-On Therapy Treats",
    commonQuestionsAbout: "Common Questions About",
    relatedConditions: "Related Conditions",
    ctaReady: "Ready to start treating your",
    ctaLead: "Request an appointment and our team will call to confirm your visit.",
  },
  modals: {
    name: "Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    messagePlaceholder: "Type your message here",
    sendMessage: "Send Message",
    close: "Close",
    messageSentTitle: "Message sent",
    messageSentText: "Thanks for reaching out — we'll get back to you shortly.",
    requestAppointmentTitle: "Request Appointment",
    appointmentReceivedTitle: "Request received",
    appointmentReceivedText: "We'll call you shortly to confirm your appointment.",
    preferredDate: "Preferred Date",
    preferredTime: "Preferred Time",
    caseType: "Case Type",
    additionalComments: "Additional Comments",
    additionalCommentsPlaceholder: "Anything else we should know?",
    selectOne: "Select one",
    requestAppointmentBtn: "Request Appointment",
  },
  webchat: {
    virtualAssistant: "Virtual Assistant",
    greeting1Prefix: "Hi! I'm Vika, the virtual assistant for",
    greeting2: "Please select an option below, or type your own question.",
    optionAppointment: "Request an appointment",
    optionHours: "Office hours",
    optionInsurance: "Insurance",
    optionLocation: "Location",
    optionServices: "Services offered",
    backToMenu: "Back to main menu",
    appointmentInfoPrefix: "You can request an appointment using the form at the bottom of our homepage, or call us directly at",
    insuranceInfo:
      "We work with most major insurance plans, including coverage for auto accident, work injury, home accident, and personal injury cases. Call us and we can check your specific plan.",
    locationPrefix: "We're located at",
    servicesPrefix: "We offer:",
    fallbackPrefix: "I'm a simple assistant so I can't answer everything, but you can call us at",
    fallbackMiddle: "or email",
    fallbackSuffix: "and our team will help right away.",
    inputPlaceholder: "Type your message",
    send: "Send",
    typingLabel: "Vika is typing",
  },
  footer: {
    quickLinks: "Quick Links",
    contact: "Contact",
    emergency: "In a medical emergency, call",
    emergencyRest: "or go to your nearest emergency room.",
    rightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    accessibility: "Accessibility",
  },
  // Nombres cortos/largos de las 15 condiciones, usados en el menú de escritorio
  // y en el cajón móvil (el contenido completo de cada página de condición
  // todavía vive solo en inglés en conditionsData.ts).
  conditionsNav: {
    "back-pain": { name: "Back Pain Relief", shortName: "Back Pain" },
    "neck-pain": { name: "Neck Pain Relief", shortName: "Neck Pain" },
    "shoulder-pain": { name: "Shoulder Pain Relief", shortName: "Shoulder Pain" },
    "hip-pain": { name: "Hip Pain Relief", shortName: "Hip Pain" },
    "knee-pain": { name: "Knee Pain Relief", shortName: "Knee Pain" },
    "elbow-pain": { name: "Elbow Pain Relief", shortName: "Elbow Pain" },
    "wrist-pain": { name: "Wrist Pain Relief", shortName: "Wrist Pain" },
    "hand-pain": { name: "Hand Pain Relief", shortName: "Hand Pain" },
    "foot-pain": { name: "Foot Pain Relief", shortName: "Foot Pain" },
    "ankle-pain": { name: "Ankle Pain Relief", shortName: "Ankle Pain" },
    sciatica: { name: "Sciatica Relief", shortName: "Sciatica" },
    arthritis: { name: "Arthritis Pain Relief", shortName: "Arthritis" },
    "whiplash-auto-injury": { name: "Whiplash & Auto Injury Recovery", shortName: "Whiplash & Auto Injuries" },
    "sports-injuries": { name: "Sports Injuries", shortName: "Sports Injuries" },
    "post-surgical-rehab": { name: "Post-Surgical Rehabilitation", shortName: "Post-Surgical Rehab" },
  } as Record<string, { name: string; shortName: string }>,
} satisfies Record<string, unknown>;

export type TranslationDict = typeof en;

const es: TranslationDict = {
  nav: {
    services: "Servicios",
    about: "Nosotros",
    team: "Equipo",
    ourTeam: "Nuestro Equipo",
    joinOurTeam: "Únete al Equipo",
    conditions: "Condiciones",
    viewAllConditions: "Ver Todas las Condiciones",
    patientInfo: "Info al Paciente",
    patientInfoForms: "Info al Paciente / Formularios",
    insurancePlans: "Planes de Seguro",
    faqs: "Preguntas Frecuentes",
    referAFriend: "Refiere a un Amigo",
    reviews: "Reseñas",
    contact: "Contacto",
    bookAppointment: "Agendar Cita",
    call: "Llamar",
    messageWhatsapp: "Escribir por WhatsApp",
    sendSms: "Enviar mensaje de texto (SMS)",
    whatsappChat: "Chat de WhatsApp",
    langToggleLabel: "English",
  },
  breadcrumb: {
    home: "Inicio",
    conditionsWeTreat: "Condiciones que Tratamos",
    patientInformation: "Información al Paciente",
    ourTeam: "Nuestro Equipo",
    joinOurTeam: "Únete al Equipo",
  },
  hero: {
    eyebrow: "Auto · Trabajo · Hogar · Recuperación de Lesiones Personales",
    titleStart: "Tu recuperación, en",
    titleEm: "manos expertas.",
    subhead:
      "Corona Hands-On Therapy ofrece terapia física, atención quiropráctica y acupuntura para pacientes que se recuperan de accidentes automovilísticos, lesiones laborales, accidentes en el hogar y otras lesiones personales — todo bajo un mismo techo en Elmhurst, NY.",
    requestAppointment: "Solicitar una Cita",
    badges: [
      "Recuperación de accidentes automovilísticos",
      "Atención de lesiones laborales y del hogar",
      "Se habla Español",
      "Quiropráctica y Acupuntura",
      "Manejo del dolor crónico",
      "Rehabilitación de lesiones deportivas",
      "Planes de cuidado personalizados",
      "La mayoría de los seguros aceptados",
      "Horario vespertino y de fin de semana",
      "Citas el mismo día disponibles",
    ],
  },
  trustStrip: {
    item1: "Casos de auto, trabajo, hogar y lesiones personales bienvenidos",
    item2: "Citas disponibles la misma semana",
    item3: "Ubicados en Elmhurst, Queens",
  },
  painAreas: {
    title: "Cómo Corona Hands-On Therapy puede ayudarte a",
    titleEm: "recuperar tu ritmo",
    lead:
      "El dolor que persiste suele empeorar cuanto más se ignora. Nuestros proveedores comienzan por identificar exactamente de dónde viene la lesión y luego crean un plan entre terapia física, quiropráctica y acupuntura para tratarla — no solo manejar los síntomas.",
    labels: {
      "Back Pain": "Dolor de Espalda",
      "Neck Pain": "Dolor de Cuello",
      "Shoulder Pain": "Dolor de Hombro",
      "Hip Pain": "Dolor de Cadera",
      "Knee Pain": "Dolor de Rodilla",
      "Elbow Pain": "Dolor de Codo",
      "Wrist Pain": "Dolor de Muñeca",
      "Hand Pain": "Dolor de Mano",
      "Foot Pain": "Dolor de Pie",
      "Ankle Pain": "Dolor de Tobillo",
    },
  },
  services: {
    eyebrow: "Qué tratamos",
    title: "Tres disciplinas, un solo plan de recuperación.",
    lead:
      "Ya sea que tu lesión haya ocurrido en un accidente automovilístico, en el trabajo, en casa o de otra forma, nuestros proveedores trabajan con un plan compartido para que tu atención se mantenga coordinada desde tu primera hasta tu última visita.",
    items: {
      "physical-therapy": {
        name: "Terapia Física",
        description:
          "Rehabilitación práctica y guiada para lesiones de accidentes automovilísticos, incidentes laborales y accidentes en el hogar — restaurando fuerza, movilidad y función a través de un plan personalizado.",
        highlights: [
          "Terapia manual y ejercicio terapéutico guiado",
          "Rehabilitación post-accidente y post-quirúrgica",
          "Programas de ejercicio personalizados para el hogar",
          "Progreso reevaluado y ajustado en cada visita",
        ],
      },
      chiropractic: {
        name: "Atención Quiropráctica",
        description:
          "Ajustes espinales y articulares para aliviar el dolor de espalda, cuello y latigazo cervical comunes después de accidentes automovilísticos, tensión laboral y otras lesiones personales.",
        highlights: [
          "Ajustes espinales y articulares",
          "Atención de latigazo cervical y post-accidente",
          "Corrección de postura y alineación",
          "Técnicas de liberación de tejido blando y muscular",
        ],
      },
      acupuncture: {
        name: "Acupuntura",
        description:
          "Manejo del dolor específico y libre de medicamentos que complementa la terapia física y el tratamiento quiropráctico para una recuperación integral.",
        highlights: [
          "Manejo del dolor sin medicamentos",
          "Complementa la terapia física y quiropráctica",
          "Ayuda a reducir la inflamación y la tensión muscular",
          "Apoya una recuperación más rápida y completa",
        ],
      },
    },
  },
  about: {
    eyebrow: "Sobre Corona Hands-On Therapy",
    title: "Atención enfocada en la recuperación para pacientes de accidentes y lesiones.",
    lead: "Con sede en Elmhurst, NY, Corona Hands-On Therapy combina terapia física, atención quiropráctica y acupuntura bajo un mismo techo. Ofrecemos planes de tratamiento coordinados diseñados para pacientes que se recuperan de accidentes automovilísticos, lesiones laborales, accidentes en el hogar y otras lesiones personales.",
    points: [
      "Casos de accidentes automovilísticos, laborales, del hogar y lesiones personales bienvenidos",
      "Terapia física, quiropráctica y acupuntura bajo un mismo techo",
      "Personal que habla español disponible",
      "Planes de tratamiento personalizados para cada paciente",
    ],
    meetProviders: "Conoce a nuestros proveedores →",
    steps: [
      {
        title: "Evaluación Personalizada",
        text: "Cada paciente comienza con una evaluación integral para identificar la causa raíz del dolor antes de iniciar el tratamiento.",
      },
      {
        title: "Tratamiento Coordinado",
        text: "Terapia física, atención quiropráctica y acupuntura trabajan juntas para maximizar tu recuperación.",
      },
      {
        title: "Monitoreo de la Recuperación",
        text: "Medimos tu progreso en cada visita y adaptamos tu plan de tratamiento a medida que tu cuerpo sana.",
      },
    ],
    ctaButton: "Solicitar Cita",
  },
  reviews: {
    eyebrow: "Experiencias de Pacientes",
    title: "Lo que dicen los pacientes sobre su recuperación.",
  },
  contact: {
    eyebrow: "Encuéntranos",
    title: "Visítanos o contáctanos — estamos en Elmhurst.",
    address: "Dirección",
    phone: "Teléfono",
    formTitle: "Solicitar una Cita",
    formLead: "Completa el formulario y nuestro equipo te llamará para confirmar tu visita.",
    fullName: "Nombre Completo",
    phoneNumber: "Número de Teléfono",
    email: "Correo Electrónico",
    caseType: "Tipo de Caso",
    serviceNeeded: "Servicio Necesitado",
    notes: "Notas (opcional)",
    notesPlaceholder: "Describe brevemente tu lesión o el horario de cita preferido...",
    selectOne: "Selecciona una opción",
    notSureYet: "Aún no estoy seguro",
    successTitle: "Solicitud recibida",
    successText:
      "Gracias — hemos recibido tu solicitud de cita y te llamaremos pronto para confirmarla.",
    submit: "Enviar Solicitud de Cita",
    sending: "Enviando...",
    privacyNote: "Al enviar, aceptas nuestra",
    privacyPolicy: "Política de Privacidad",
    neverShared: "Tu información nunca se comparte ni se vende.",
    days: {
      Monday: "Lunes",
      Tuesday: "Martes",
      Wednesday: "Miércoles",
      Thursday: "Jueves",
      Friday: "Viernes",
      Saturday: "Sábado",
      Sunday: "Domingo",
    },
    caseTypes: {
      auto: "Accidente Automovilístico",
      work: "Lesión Laboral",
      home: "Accidente en el Hogar",
      "personal-injury": "Lesión Personal",
      other: "Otro / No estoy seguro",
    },
  },
  floatingActions: {
    contactUs: "Contáctanos",
    requestAppointment: "Solicitar Cita",
    webChat: "Chat en Vivo",
  },
  sidebar: {
    painFreeTitle: "¿Listo Para Vivir Sin Dolor?",
  },
  conditionsIndex: {
    eyebrow: "Condiciones que Tratamos",
    title: "Encuentra alivio para tu dolor específico.",
    intro:
      "Cada condición a continuación puede tener diversas causas — desde un accidente automovilístico hasta tensión repetitiva en el trabajo. Selecciona una condición para conocer más sobre sus causas, síntomas y cómo nuestro equipo aborda el tratamiento.",
    learnMore: "Aprende más",
    conditionSingular: "condición",
    conditionPlural: "condiciones",
    categories: {
      "Joint & Muscle Pain": "Dolor Articular y Muscular",
      "Nerve Pain": "Dolor Nervioso",
      "Chronic Conditions": "Condiciones Crónicas",
      "Injury Recovery": "Recuperación de Lesiones",
    },
  },
  patientFaqs: {
    title: "Preguntas frecuentes.",
    introPrefix: "¿Nuevo en terapia física, atención quiropráctica o acupuntura? Aquí tienes respuestas a las preguntas que más escuchamos de los pacientes antes de su primera visita. ¿No ves tu pregunta aquí? Llámanos al",
  },
  generalFaqs: [
    {
      question: "¿Necesito una remisión médica para comenzar terapia física?",
      answer:
        "En Nueva York, los pacientes generalmente pueden ser evaluados directamente por un terapeuta físico. Sin embargo, algunos planes de seguro — incluyendo ciertos reclamos de auto y lesiones laborales — pueden requerir una remisión o autorización, así que recomendamos confirmar con nuestra recepción antes de tu primera visita.",
    },
    {
      question: "¿Qué debo traer a mi primera cita?",
      answer:
        "Por favor trae una identificación con foto, tu tarjeta de seguro, cualquier papeleo relevante relacionado con tu accidente o lesión (como un número de reclamo), y ropa cómoda que permita fácil movimiento del área a tratar.",
    },
    {
      question: "¿Cuánto dura una cita típica?",
      answer:
        "Tu primera visita de evaluación generalmente dura más, alrededor de 45–60 minutos, para poder evaluar completamente tu condición. Las visitas de seguimiento suelen ser de 30–45 minutos dependiendo de tu plan de tratamiento.",
    },
    {
      question: "¿Cuántas visitas necesitaré?",
      answer:
        "Depende completamente de tu condición, cuánto tiempo la has tenido, y cómo responde tu cuerpo al tratamiento. Algunos pacientes ven una mejora significativa en pocas visitas, mientras que las lesiones más complejas toman más tiempo. Discutiremos un cronograma esperado después de tu evaluación.",
    },
    {
      question: "¿Es dolorosa la terapia física?",
      answer:
        "La mayoría de la terapia física no es dolorosa, aunque algunas técnicas pueden causar molestias leves y temporales — especialmente si estás trabajando con rigidez o tejido cicatricial. Siempre trabajamos dentro de un nivel con el que te sientas cómodo y ajustamos según sea necesario.",
    },
    {
      question: "¿Puedo ir a terapia física y atención quiropráctica en la misma clínica?",
      answer:
        "Sí — esa es una de las ventajas de Corona Hands-On Therapy. Nuestros proveedores de terapia física, quiropráctica y acupuntura coordinan la atención juntos, así que no necesitas repetir tu historial en múltiples lugares.",
    },
    {
      question: "¿Cuál es la diferencia entre terapia física y atención quiropráctica?",
      answer:
        "La terapia física se enfoca en reconstruir fuerza, flexibilidad y función a través de ejercicio específico y reentrenamiento de movimiento. La atención quiropráctica se enfoca en la alineación y movilidad articular a través de ajustes manuales. Muchos pacientes se benefician de ambos como parte de un plan coordinado.",
    },
    {
      question: "¿Tratan lesiones de accidentes automovilísticos?",
      answer:
        "Sí, la recuperación de accidentes automovilísticos es una de nuestras áreas principales de enfoque, incluyendo latigazo cervical, lesiones de espalda y cuello, y daño de tejido blando por una colisión.",
    },
    {
      question: "¿Tratan lesiones relacionadas con el trabajo?",
      answer:
        "Sí, regularmente tratamos a pacientes que se recuperan de lesiones ocurridas en el trabajo, incluyendo esguinces, torceduras y lesiones por estrés repetitivo.",
    },
    {
      question: "¿Qué debo usar en mi cita?",
      answer:
        "Lo mejor es ropa cómoda y holgada que permita fácil acceso al área a tratar — por ejemplo, pantalones cortos para un problema de rodilla o cadera, o una camiseta para un problema de hombro o cuello.",
    },
    {
      question: "¿Mi seguro cubrirá mi tratamiento?",
      answer:
        "La cobertura depende de tu plan específico y la razón del tratamiento. Nuestra recepción puede ayudarte a verificar tus beneficios antes de tu primera visita — consulta nuestra página de Planes de Seguro para ver los tipos de cobertura con los que solemos trabajar.",
    },
    {
      question: "¿Y si ya tuve una cirugía — puede la terapia física ayudar de todas formas?",
      answer:
        "Sí, la rehabilitación post-quirúrgica es una parte común e importante de la recuperación. Coordinamos con las recomendaciones de tu cirujano para construir un plan de recuperación seguro y progresivo.",
    },
    {
      question: "¿Se puede combinar la acupuntura con la terapia física?",
      answer:
        "Sí, muchos pacientes usan la acupuntura junto con la terapia física y la atención quiropráctica como una forma complementaria y libre de medicamentos de manejar el dolor durante la recuperación.",
    },
    {
      question: "¿Qué pasa si falto a una cita?",
      answer:
        "Por favor llámanos lo antes posible si necesitas reprogramar. La asistencia constante es uno de los factores más importantes para una recuperación exitosa, así que siempre trabajaremos contigo para encontrar un horario que se ajuste a tu agenda.",
    },
    {
      question: "¿Ofrecen citas por la tarde o los fines de semana?",
      answer:
        "Ofrecemos horario vespertino en días seleccionados y citas los sábados — consulta nuestra página de Contacto para ver nuestro horario actual, o llámanos directamente para encontrar un horario que te convenga.",
    },
    {
      question: "¿Corona Hands-On Therapy es accesible para pacientes de habla hispana?",
      answer:
        "Sí, contamos con personal que habla español disponible para asegurar que el idioma nunca sea una barrera para entender tu atención.",
    },
    {
      question: "¿Y si mi dolor no proviene de un accidente o lesión que pueda identificar?",
      answer:
        "Eso es muy común. Muchas condiciones se desarrollan gradualmente por la postura, tensión repetitiva, o desgaste general con el tiempo. Nuestra evaluación ayudará a identificar qué está causando tus síntomas incluso sin un incidente específico.",
    },
  ],
  referral: {
    breadcrumbLabel: "Refiere a un Amigo",
    title: "Refiere a un amigo o familiar.",
    intro1:
      "Si alguien que conoces está lidiando con dolor, recuperándose de un accidente, o posponiendo el tratamiento de una condición que lo limita físicamente, una referencia de alguien en quien confía a menudo marca la diferencia en si realmente busca ayuda. Muchas personas esperan demasiado para tratar el dolor o una lesión, lo que generalmente hace que la recuperación sea más lenta y difícil.",
    intro2:
      "Si conoces a alguien con dolor o recuperándose de una lesión que podría beneficiarse de nuestra atención, cuéntanos abajo y nuestro equipo se pondrá en contacto directamente con esa persona.",
    formTitle: "Formulario de Referencia",
    yourInfo: "Tu Información",
    yourName: "Tu Nombre",
    yourPhone: "Tu Teléfono",
    yourEmail: "Tu Correo (opcional)",
    whoReferring: "A Quién Estás Refiriendo",
    theirName: "Su Nombre",
    theirPhone: "Su Teléfono (si lo sabes)",
    notes: "Notas (opcional)",
    notesPlaceholder: "Cualquier cosa que nos ayude a contactarlo, como qué le está pasando o el mejor horario para llamarlo...",
    send: "Enviar Referencia",
    sending: "Enviando...",
    receivedTitle: "Referencia recibida",
    receivedText: "Gracias — nuestro equipo se pondrá en contacto directamente con tu amigo.",
  },
  careers: {
    heroTitle: "Únete a Nuestro Equipo",
    breadcrumbHome: "Inicio",
    breadcrumbJoinTeam: "Únete a Nuestro Equipo",
    growTitle: "Haz crecer tu carrera en Corona Hands-On Therapy.",
    whoAreWeTitle: "¿Quiénes somos?",
    whoAreWe1Title: "Innovadores y progresistas:",
    whoAreWe1Text:
      "Nuestro grupo de clínicas de terapia física está dedicado a mejorar el bienestar de los pacientes mediante terapia manual y técnicas avanzadas.",
    whoAreWe2Title: "Pruebas diagnósticas avanzadas:",
    whoAreWe2Text:
      "Ofrecemos oportunidades de pruebas diagnósticas de vanguardia que permiten a nuestro personal mantenerse a la vanguardia de las innovaciones en terapia física.",
    whoAreWe3Title: "Crecimiento profesional:",
    whoAreWe3Text:
      "Brindamos importantes oportunidades de crecimiento profesional, incluyendo desarrollo profesional, educación continua y programas de capacitación en liderazgo.",
    whyWorkTitle: "¿Por qué trabajar con nosotros?:",
    whyWork1: "Únete a un equipo comprometido con la atención innovadora al paciente.",
    whyWork2: "Acceso a los últimos avances en pruebas diagnósticas.",
    whyWork3: "Haz crecer tu carrera con nuestros amplios programas de desarrollo.",
    whyWork4: "Sé parte de un ambiente de trabajo dinámico y de apoyo.",
    vacanciesTitle: "¿Buscas una carrera en Corona Hands-On Therapy?",
    vacancy1: "Terapeuta Físico – Clínica de Elmhurst",
    vacancy2: "Quiropráctico – Tiempo Completo",
    vacancy3: "Asistente de Terapia Física",
    openPosition: "Posición Disponible",
    formHeading: "Contáctanos hoy o envía el formulario a continuación",
    formSubtitle:
      "Impulsa tu carrera en terapia física uniéndote a nuestro equipo y capacitándote con los líderes en pruebas diagnósticas. Adquiere experiencia en EMG, NCV y ultrasonido musculoesquelético.",
    firstName: "Nombre *",
    lastName: "Apellido *",
    phone: "Teléfono *",
    email: "Correo Electrónico *",
    positionApplyingFor: "Puesto al que Aplicas *",
    selectPosition: "Selecciona un puesto",
    roles: {
      "physical-therapist": "Terapeuta Físico",
      chiropractor: "Quiropráctico",
      acupuncturist: "Acupunturista",
      "front-desk": "Recepción / Facturación",
      other: "Otro",
    } as Record<string, string>,
    uploadResume: "Sube tu Currículum *",
    fileHelpText: "Tipos de archivo aceptados: pdf, doc, docx. Tamaño máximo: 7 MB.",
    fileTooLarge: "El archivo del currículum es demasiado grande. Sube un archivo de menos de 7 MB.",
    coverLetter: "Carta de Presentación",
    coverLetterPlaceholder: "Cuéntanos más sobre tu experiencia clínica...",
    sending: "Enviando...",
    submitApplication: "Enviar Solicitud",
    receivedTitle: "¡Solicitud Recibida con Éxito!",
    receivedText: "Gracias por aplicar. Nuestro equipo de reclutamiento revisará tu perfil pronto.",
  },
  patientForms: {
    breadcrumbLabel: "Info al Paciente / Formularios",
    welcomeTitle: "Bienvenido a Hands-On Physical Therapy",
    welcomeIntroPrefix: "¡Estamos aquí para ayudarte a disfrutar tu vida, sin dolor! Para agendar una cita conveniente, simplemente llámanos hoy al",
    welcomeIntroSuffix:
      "Nuestra práctica está dedicada a ayudar a nuestros pacientes a identificar la causa de su dolor y crear un programa de tratamiento personalizado que les permita volver a sus actividades normales sin dolor.",
    formsHeading: "Formularios para Pacientes",
    formsSubtitle:
      "En Hands-On Physical Therapy, queremos maximizar tu tiempo con nosotros. Por eso, ofrecemos nuestro papeleo en línea, para que puedas completarlo en la privacidad de tu hogar. Antes de tu primera visita, por favor descarga los Formularios de Admisión del Paciente y tráelos contigo a tu primera visita, junto con tu información de seguro e identificación con foto.",
    intakeFormsTitle: "Formularios de Admisión del Paciente",
    intakeFormsText:
      "Ahorra tiempo en tu primera visita descargando y completando tu papeleo de admisión en casa. Por favor trae los formularios completados, tu tarjeta de seguro y una identificación con foto a tu cita.",
    downloadBtn: "Descargar e Imprimir Formularios",
    prepareTitle: "Por favor prepara lo siguiente para tu primera visita:",
    prepare1: "Llega 15 minutos antes para tu primera cita.",
    prepare2: "Trae contigo una copia de tu tarjeta de seguro y una identificación con foto.",
    prepare3: "Por favor llama a nuestra oficina para verificar tus beneficios de seguro de antemano.",
    faqsTitle: "Preguntas Frecuentes (FAQs)",
    faq1Q: "¿Necesito una receta de un médico?",
    faq1A: "Nueva York es un estado de Acceso Directo, lo que significa que puedes ver a un terapeuta físico por hasta 30 días o 10 visitas sin una remisión.",
    faq2Q: "¿Qué debo usar en mi primera cita?",
    faq2A: "Usa ropa holgada y cómoda que permita fácil acceso a tu área de dolor o lesión.",
    firstVisitTitle: "Qué esperar en tu primera visita y Condiciones que Tratamos",
    firstVisit1: "Una evaluación completa para identificar la causa de tu dolor, no solo los síntomas.",
    firstVisit2: "Una conversación sobre tus objetivos y actividades diarias para que tu plan se ajuste a tu vida.",
    firstVisit3: "Un plan de tratamiento personalizado entre terapia física, atención quiropráctica y acupuntura según sea necesario.",
    firstVisit4: "Próximos pasos claros y un cronograma realista para tu recuperación.",
    disclaimerLabel: "TEN EN CUENTA:",
    disclaimer:
      "Recuerda que la consistencia de tus visitas y del tratamiento de terapia física es muy importante para alcanzar tus objetivos y ayudarte a volver a un estilo de vida saludable.",
  },
  insurance: {
    breadcrumbLabel: "Planes de Seguro",
    title: "Seguros con los que solemos trabajar.",
    intro:
      "Entender tu cobertura de seguro no debería ser complicado. Abajo hay una lista de tipos de seguro y aseguradoras con las que solemos trabajar para casos de accidentes automovilísticos, lesiones laborales, accidentes en el hogar y seguro médico general en el área de Elmhurst.",
    disclaimerLabel: "Ten en cuenta:",
    disclaimer:
      "las redes de seguros y la cobertura cambian con frecuencia. Esta lista refleja los planes con los que solemos trabajar en nuestra área — no garantiza cobertura para cada póliza de una aseguradora en particular. Llama a nuestra recepción al menos una vez antes de tu visita para que podamos verificar tu plan y beneficios específicos.",
    card1Title: "Por qué es importante verificar tu seguro",
    card1Text:
      "Cada plan es diferente — incluso dos personas con la misma compañía de seguros pueden tener diferentes deducibles, copagos o requisitos de autorización. Verificar tu póliza específica antes del tratamiento ayuda a evitar facturas sorpresa y nos permite construir un plan de tratamiento en base a lo que tu plan realmente cubre.",
    card2Title: "Reclamos por accidente automovilístico y lesión laboral",
    card2Text:
      "Los casos de accidentes automovilísticos y lesiones laborales generalmente se facturan directamente a la aseguradora o al ajustador de reclamos a cargo de tu caso, en vez de a través de un copago de seguro médico estándar. Trae tu número de reclamo e información del ajustador si los tienes, y nuestro equipo de facturación se encargará del resto.",
    card3Title: "Qué traer",
    card3Text:
      "Tu tarjeta de seguro, una identificación con foto, y — para casos de accidente o lesión — cualquier papeleo que hayas recibido relacionado con tu reclamo, como un número de reclamo o información de contacto del ajustador.",
    card4Title: "¿Qué pasa si no tengo seguro?",
    card4Text:
      "¡No te preocupes! Ofrecemos tarifas de pago directo accesibles y opciones de pago flexibles para que puedas concentrarte en tu recuperación sin barreras. Contacta a nuestra recepción para hablar sobre paquetes personalizados o precios adaptados a tus necesidades.",
    plansTitle: "Planes y Aseguradoras con las que Solemos Trabajar",
    footNotePrefix: "¿No ves tu plan en la lista? Llámanos al",
    footNoteSuffix: "— trabajamos con muchos planes que no están listados aquí y podemos confirmar rápidamente si estamos dentro de tu red.",
    categories: {
      "Major Medical & Health Insurance Plans": "Planes de Seguro Médico Mayor",
      "Auto Insurance Carriers": "Aseguradoras de Auto",
      "Work-Related Injury Insurance Carriers": "Aseguradoras de Lesiones Laborales",
    },
  },
  teamMembers: {
    moon: { role: "Terapeuta Física", note: "Lidera planes de rehabilitación individualizados para la recuperación de accidentes y lesiones." },
    weiner: { role: "Quiropráctico", note: "Se enfoca en el cuidado espinal y articular para el latigazo cervical y el dolor relacionado con lesiones." },
    yom: { role: "Acupunturista", note: "Brinda manejo del dolor complementario como parte de un plan de atención coordinado." },
    "cindy-rodriguez": { role: "Gerente", note: "Supervisa las operaciones diarias de la clínica para asegurar una atención y servicio excepcionales." },
    "daniela-suarez": { role: "Recepción", note: "Recibe a los pacientes, coordina horarios y asiste con los procedimientos de registro." },
    "maria-hanna": { role: "Recursos Humanos", note: "Coordina las operaciones internas y apoya el desarrollo del equipo." },
    "erick-hannah": { role: "Coordinador del Departamento de Facturación", note: "Gestiona los procesos de facturación y coordina con las aseguradoras médicas." },
    "maite-pardo": { role: "Coordinadora del Departamento de Facturación", note: "Asegura el procesamiento preciso de cuentas y apoya los flujos de facturación de los proveedores." },
    "george-billing": { role: "Departamento de Facturación", note: "Maneja reclamos de cuentas, verificación y procesamiento de pagos." },
    "karen-billing": { role: "Departamento de Facturación", note: "Ayuda con el procesamiento diario de facturas y documentación financiera." },
    "arnold-pt": { role: "Terapeuta Físico", note: "Brinda sesiones dedicadas de terapia física para restaurar la fuerza y movilidad del paciente." },
    "alexandra-pt": { role: "Terapeuta Física", note: "Implementa tratamiento personalizado y ejercicios de recuperación para rehabilitación específica." },
  },
  team: {
    title: "Los especialistas detrás de tu recuperación.",
    intro:
      "Corona Hands-On Therapy reúne terapia física, atención quiropráctica y acupuntura bajo un mismo techo. Conoce a los proveedores que construyen tu plan de recuperación y coordinan tu atención desde tu primera hasta tu última visita. Nuestro equipo multidisciplinario combina décadas de experiencia clínica con un enfoque profundamente compasivo hacia la sanación. Al colaborar diariamente, aseguramos que cada ajuste, ejercicio terapéutico y sesión de tratamiento funcionen en perfecta armonía. No solo tratamos síntomas; escuchamos tus objetivos y adaptamos nuestras técnicas a tu estilo de vida único. Juntos, estamos completamente dedicados a ayudarte a recuperar tu fuerza, moverte sin dolor y lograr un bienestar duradero.",
    memberSingular: "miembro",
    memberPlural: "miembros",
    departments: {
      "Clinical Care": "Atención Clínica",
      "Patient Support & Administration": "Soporte al Paciente y Administración",
    },
  },
  conditionDetail: {
    reliefWith: "Alivio con Terapia Física",
    requestAnAppointment: "Solicitar una Cita",
    allConditions: "← Todas las Condiciones",
    scheduleAppointment: "Agendar una Cita →",
    commonSymptoms: "Síntomas Comunes",
    whatCanCauseIt: "Qué Puede Causarlo",
    ifTreatedEarly: "Si se Trata a Tiempo",
    ifLeftUntreated: "Si No se Trata",
    howWeTreat: "Cómo Corona Hands-On Therapy Trata",
    commonQuestionsAbout: "Preguntas Frecuentes Sobre",
    relatedConditions: "Condiciones Relacionadas",
    ctaReady: "¿Listo para empezar a tratar tu",
    ctaLead: "Solicita una cita y nuestro equipo te llamará para confirmar tu visita.",
  },
  modals: {
    name: "Nombre",
    phone: "Teléfono",
    email: "Correo Electrónico",
    message: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí",
    sendMessage: "Enviar Mensaje",
    close: "Cerrar",
    messageSentTitle: "Mensaje enviado",
    messageSentText: "Gracias por contactarnos — te responderemos pronto.",
    requestAppointmentTitle: "Solicitar Cita",
    appointmentReceivedTitle: "Solicitud recibida",
    appointmentReceivedText: "Te llamaremos pronto para confirmar tu cita.",
    preferredDate: "Fecha Preferida",
    preferredTime: "Hora Preferida",
    caseType: "Tipo de Caso",
    additionalComments: "Comentarios Adicionales",
    additionalCommentsPlaceholder: "¿Algo más que debamos saber?",
    selectOne: "Selecciona una opción",
    requestAppointmentBtn: "Solicitar Cita",
  },
  webchat: {
    virtualAssistant: "Asistente Virtual",
    greeting1Prefix: "¡Hola! Soy Vika, la asistente virtual de",
    greeting2: "Selecciona una opción abajo, o escribe tu propia pregunta.",
    optionAppointment: "Solicitar una cita",
    optionHours: "Horario de atención",
    optionInsurance: "Seguro",
    optionLocation: "Ubicación",
    optionServices: "Servicios ofrecidos",
    backToMenu: "Volver al menú principal",
    appointmentInfoPrefix: "Puedes solicitar una cita usando el formulario al final de nuestra página de inicio, o llamarnos directamente al",
    insuranceInfo:
      "Trabajamos con la mayoría de los planes de seguro principales, incluyendo cobertura para accidentes automovilísticos, lesiones laborales, accidentes en el hogar y lesiones personales. Llámanos y podemos verificar tu plan específico.",
    locationPrefix: "Estamos ubicados en",
    servicesPrefix: "Ofrecemos:",
    fallbackPrefix: "Soy una asistente simple así que no puedo responder todo, pero puedes llamarnos al",
    fallbackMiddle: "o escribir a",
    fallbackSuffix: "y nuestro equipo te ayudará de inmediato.",
    inputPlaceholder: "Escribe tu mensaje",
    send: "Enviar",
    typingLabel: "Vika está escribiendo",
  },
  footer: {
    quickLinks: "Enlaces Rápidos",
    contact: "Contacto",
    emergency: "En caso de emergencia médica, llama al",
    emergencyRest: "o dirígete a la sala de emergencias más cercana.",
    rightsReserved: "Todos los derechos reservados.",
    privacyPolicy: "Política de Privacidad",
    termsOfUse: "Términos de Uso",
    accessibility: "Accesibilidad",
  },
  conditionsNav: {
    "back-pain": { name: "Alivio del Dolor de Espalda", shortName: "Dolor de Espalda" },
    "neck-pain": { name: "Alivio del Dolor de Cuello", shortName: "Dolor de Cuello" },
    "shoulder-pain": { name: "Alivio del Dolor de Hombro", shortName: "Dolor de Hombro" },
    "hip-pain": { name: "Alivio del Dolor de Cadera", shortName: "Dolor de Cadera" },
    "knee-pain": { name: "Alivio del Dolor de Rodilla", shortName: "Dolor de Rodilla" },
    "elbow-pain": { name: "Alivio del Dolor de Codo", shortName: "Dolor de Codo" },
    "wrist-pain": { name: "Alivio del Dolor de Muñeca", shortName: "Dolor de Muñeca" },
    "hand-pain": { name: "Alivio del Dolor de Mano", shortName: "Dolor de Mano" },
    "foot-pain": { name: "Alivio del Dolor de Pie", shortName: "Dolor de Pie" },
    "ankle-pain": { name: "Alivio del Dolor de Tobillo", shortName: "Dolor de Tobillo" },
    sciatica: { name: "Alivio de la Ciática", shortName: "Ciática" },
    arthritis: { name: "Alivio del Dolor de Artritis", shortName: "Artritis" },
    "whiplash-auto-injury": { name: "Recuperación de Latigazo Cervical y Accidentes", shortName: "Latigazo Cervical y Accidentes" },
    "sports-injuries": { name: "Lesiones Deportivas", shortName: "Lesiones Deportivas" },
    "post-surgical-rehab": { name: "Rehabilitación Post-Quirúrgica", shortName: "Rehabilitación Post-Quirúrgica" },
  },
};

export const translations: Record<Language, TranslationDict> = { en, es };
