// Fuente única de verdad para todos los datos de la clínica.
// Cambia aquí y se actualiza en todo el sitio (nav, footer, formulario, mapa, etc.)

export const SITE = {
  name: "Corona Hands-On Therapy",
  shortName: "Corona Hands-On",
  city: "Elmhurst, NY",
  phoneDisplay: " +1 (347) 229-9167",
  phoneHref: "+13472299167", // formato E.164 para tel:
  whatsappNumber: "13472299167", // sin '+' para wa.me
  fax: "(347) 502-2998",
  email: "coronahealthcare90@gmail.com",
  address: {
    line1: "90-46 Corona Ave",
    line2: "Elmhurst, NY 11373",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=90-46+Corona+Ave,+Elmhurst,+NY+11373&output=embed",
} as const;

export const HOURS = [
  { day: "Monday", time: "10:00 AM – 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
  { day: "Thursday", time: "10:00 AM – 7:00 PM" },
  { day: "Friday", time: "10:00 AM – 5:00 PM" },
  { day: "Saturday", time: "10:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
] as const;

// Tipos de caso/accidente que atendemos.

export const CASE_TYPES = [
  { value: "auto", label: "Auto Accident" },
  { value: "work", label: "Work Injury" },
  { value: "home", label: "Home Accident" },
  { value: "personal-injury", label: "Personal Injury" },
  { value: "other", label: "Other / Not sure" },
] as const;

export const SERVICES = [
  {
    id: "physical-therapy",
    name: "Physical Therapy",
    provider: "Seong Moon, DPT",
    description:
      "Guided, hands-on rehabilitation for injuries from auto accidents, work incidents, and home accidents — restoring strength, mobility, and function through a personalized plan.",
    icon: "stretch",
  },
  {
    id: "chiropractic",
    name: "Chiropractic Care",
    provider: "Amram Weiner, DC",
    description:
      "Spinal and joint adjustments to relieve back, neck, and whiplash-related pain common after auto accidents, workplace strain, and other personal injuries.",
    icon: "spine",
  },
  {
    id: "acupuncture",
    name: "Acupuncture",
    provider: "Peter Yom",
    description:
      "Drug-free, targeted pain management that complements physical therapy and chiropractic treatment for a well-rounded recovery.",
    icon: "target",
  },
] as const;

export const TEAM = [
  {
    id: "moon",
    name: "Seong Moon, DPT",
    role: "Physical Therapist",
    note: "Leads individualized rehabilitation plans for accident and injury recovery.",
    initials: "SM",
    photo: null as string | null,
  },
  {
    id: "weiner",
    name: "Amram Weiner, DC",
    role: "Chiropractor",
    note: "Focuses on spinal and joint care for whiplash and injury-related pain.",
    initials: "AW",
    photo: null as string | null,
  },
  {
    id: "yom",
    name: "Peter Yom",
    role: "Acupuncturist",
    note: "Provides complementary pain management as part of a coordinated care plan.",
    initials: "PY",
    photo: null as string | null,
  },
  {
    id: "cindy-rodriguez",
    name: "Cindy Rodriguez",
    role: "Manager",
    note: "Oversees daily clinic operations to ensure exceptional care and service delivery.",
    initials: "CR",
    photo: null as string | null,
  },
   {
    id: "daniela-suarez",
    name: "Daniela Suarez",
    role: "Front Desk",
    note: "Welcomes patients, coordinates schedules, and assists with check-in procedures.",
    initials: "DS",
    photo: null as string | null,
  },
  {
    id: "maria-hanna",
    name: "Maria Hanna",
    role: "Human Resources",
    note: "Coordinates internal operations and supports team development.",
    initials: "MH",
    photo: null as string | null,
  },
  {
    id: "erick-hannah",
    name: "Erick Hannah",
    role: "Billing Department Coordinator",
    note: "Manages billing processes and coordinates with medical insurance providers.",
    initials: "EH",
    photo: null as string | null,
  },
  {
    id: "maite-pardo",
    name: "Maite Pardo",
    role: "Billing Department Coordinator",
    note: "Ensures accurate account processing and supports provider billing workflows.",
    initials: "MP",
    photo: null as string | null,
  },
  {
    id: "george-billing",
    name: "George",
    role: "Billing Department",
    note: "Handles account claims, verification, and payment processing.",
    initials: "G",
    photo: "/images/Team/George.jpeg",
  },
  {
    id: "karen-billing",
    name: "Karen",
    role: "Billing Department",
    note: "Assists with daily invoice processing and financial documentation.",
    initials: "K",
    photo: null as string | null,
  },
  {
    id: "arnold-pt",
    name: "Arnold",
    role: "Physical Therapist",
    note: "Provides dedicated physical therapy sessions to restore patient strength and mobility.",
    initials: "A",
    photo: null as string | null,
  },
  {
    id: "alexandra-pt",
    name: "Alexandra",
    role: "Physical Therapist",
    note: "Implements personalized treatment and recovery exercises for targeted rehabilitation.",
    initials: "A",
    photo: null as string | null,
  },
  
] as const;
// =========================================================================
// REVIEWS: Reemplazadas por reseñas reales extraídas de Google Maps.
// Se incluye estructura para Avatares Cuadrados con iniciales y color.
// =========================================================================
export const Reviews = [
  {
    id: 1,
    name: "Yuliana Contreras",
    quote: "Excelente servicio De verdad muy amables y Atentos los recomiendo al 100%",
    date: "Hace 9 meses",
    stars: 5,
    avatar: null as string | null,
    initials: "YC",
    avatarBg: "#E04F3D", // Color naranja/rojizo de tu captura image_7.png
  },
  {
    id: 2,
    name: "Jackelyn Silva",
    quote: "Great place for therapy, staff is very friendly. Thank you very much.",
    date: "Hace 3 años",
    stars: 5,
    avatar: null as string | null, 
    initials: "JS",
    avatarBg: "#218C4F", // Color verde oscuro de tu captura image_7.png
  },
  {
    id: 3,
    name: "M Reiche",
    quote: "Very nice place, clean and organized. Staff is super friendly and help you out right away. Doctors take care of you very well. Highly recommended.",
    date: "Local Guide",
    stars: 5,
    avatar: null as string | null,
    initials: "MR",
    avatarBg: "#7B3FBC", // Color morado
  },
   {
    id: 4,
    name: "Patient Name 4", // Placeholder para carrusel infinito
    quote: "Another professional review extracted from Google. The staff and doctors were exceptional in coordinating my care.",
    date: "A year ago",
    stars: 5,
    avatar: null as string | null,
    initials: "PN",
    avatarBg: "#3D85E0", 
  },
] as const;

export const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#Reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
] as const;

export const TEAM_INTRO =
  "Corona Hands-On Therapy brings physical therapy, chiropractic care, and acupuncture together under one roof. Meet the providers who build your recovery plan and coordinate your care from your first visit to your last. Our multidisciplinary team combines decades of clinical experience with a deeply compassionate approach to healing. By collaborating daily, we ensure that every adjustment, therapeutic exercise, and treatment session works in perfect harmony. We don't just treat symptoms; we listen to your goals and tailor our techniques to fit your unique lifestyle. Together, we are fully dedicated to helping you regain your strength, move without pain, and achieve long-term wellness.";

// Áreas de dolor que tratamos, usadas en la sección "get back on track" del home
export const PAIN_AREAS = [
  { label: "Back Pain", image: "/images/BackPain.png" },
  { label: "Neck Pain", image: "/images/NeckPain.png" },
  { label: "Shoulder Pain", image: "/images/ShoulderPain.png" },
  { label: "Hip Pain", image: "/images/HipPain.png" }, // Cambiar si creas HipPain.png
  { label: "Knee Pain", image: "/images/KneePain.png" }, // Cambiar si creas KneePain.png
  { label: "Elbow Pain", image: "/images/ElbowPain.png" },
  { label: "Wrist Pain", image: "/images/WristPain.png" },
  { label: "Hand Pain", image: "/images/HandPain.png" },  // Cambiar si creas HandPain.png
  { label: "Foot Pain", image: "/images/FootPain.png" }, // Cambiar si creas FootPain.png
  { label: "Ankle Pain", image: "/images/AnklePain.png" }, // Cambiar si creas AnklePain.png
] as const;
export const CAREERS_INTRO =
  "Corona Hands-On Therapy is always glad to hear from physical therapists, chiropractors, acupuncturists, and front-desk staff who want to join a small, patient-focused practice in Elmhurst. Tell us a bit about yourself below.";

export const CAREER_ROLES = [
  { value: "physical-therapist", label: "Physical Therapist" },
  { value: "chiropractor", label: "Chiropractor" },
  { value: "acupuncturist", label: "Acupuncturist" },
  { value: "front-desk", label: "Front Desk / Billing" },
  { value: "other", label: "Other" },
] as const;