// Datos de las páginas de /conditions/[slug].
// Cada condición corresponde a una de las 10 áreas de dolor mostradas en el home.
// El contenido es informativo general (no diagnóstico médico individual) y sirve
// como base de copy — revísalo y ajústalo con tu equipo clínico si algo debe matizarse.

export interface ConditionData {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  heroSubtitle: string;
  // Ruta de imagen de fondo para el hero (ej. "/images/conditions/back-pain.jpg").
  // Déjalo sin definir (undefined) hasta tener la foto real: el hero usa un
  // degradado de marca de respaldo automáticamente mientras tanto.
  heroImage?: string;
  overview: string[];
  commonCauses: string[];
  symptoms: string[];
  ifTreatedEarly: string;
  ifLeftUntreated: string;
  howWeTreatIt: string[];
  faqs: { question: string; answer: string }[];
}

export const CONDITIONS: ConditionData[] = [
  {
    slug: "back-pain",
    name: "Back Pain Relief",
    shortName: "Back Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "From a dull ache to sharp, limiting pain, our team helps you find and treat the real source of back pain.",
    overview: [
      "Back pain is one of the most common reasons people put off daily activities, work, and exercise. It can show up suddenly after an accident or build slowly over months of poor posture and repetitive strain.",
      "At Corona Hands-On Therapy, we don't just treat the area that hurts — we look at how your spine, hips, and core work together, since problems in one area often show up as pain in another.",
    ],
    commonCauses: [
      "Auto accidents and sudden impact injuries",
      "Work injuries from lifting, bending, or repetitive strain",
      "Herniated or bulging discs",
      "Muscle strain or ligament sprain",
      "Poor posture from long hours sitting or standing",
      "Degenerative changes like osteoarthritis",
      "Weak core muscles that leave the spine unsupported",
      "Falls or home accidents",
    ],
    symptoms: [
      "Dull, aching pain in the lower or upper back",
      "Sharp pain that limits bending or twisting",
      "Stiffness, especially first thing in the morning",
      "Pain that radiates into the hips or legs",
      "Muscle spasms along the spine",
      "Reduced range of motion",
    ],
    ifTreatedEarly:
      "Most back pain responds well to early, targeted treatment. Patients who start physical therapy and chiropractic care soon after symptoms begin typically regain full mobility faster, avoid compensating with other parts of the body, and lower their risk of the pain becoming chronic.",
    ifLeftUntreated:
      "Ignored back pain tends to change how you move without you realizing it — you start avoiding certain positions, which puts extra strain on the hips, knees, and neck. Over time, untreated back pain can become chronic, harder to treat, and can limit basic daily activities like sitting, driving, or sleeping comfortably.",
    howWeTreatIt: [
      "A full evaluation to identify whether the pain is coming from muscle, joint, disc, or nerve irritation",
      "A personalized physical therapy plan focused on core stability, flexibility, and safe movement patterns",
      "Chiropractic adjustments to restore proper alignment and reduce nerve irritation",
      "Acupuncture as a complementary, drug-free option for pain management",
      "Education on posture, lifting technique, and daily habits that protect your back going forward",
    ],
    faqs: [
      {
        question: "How long does it take for back pain to improve with therapy?",
        answer:
          "It depends on the cause and how long you've had the pain, but many patients notice meaningful improvement within a few weeks of consistent treatment.",
      },
      {
        question: "Can I keep working while treating back pain?",
        answer:
          "In most cases, yes. We build treatment plans around your daily responsibilities and adjust as your pain improves.",
      },
      {
        question: "Do I need imaging before starting treatment?",
        answer:
          "Not always. Our evaluation often identifies the likely cause without imaging, though we'll refer you for imaging if something suggests it's needed.",
      },
    ],
  },
  {
    slug: "neck-pain",
    name: "Neck Pain Relief",
    shortName: "Neck Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "Whiplash, tech neck, or an old injury — we help identify what's really causing your neck pain and treat it at the source.",
    overview: [
      "Neck pain is extremely common, but that doesn't mean you have to live with it. Whether it started after a car accident, a workplace injury, or gradually from looking down at a phone or screen all day, neck pain almost always has a treatable underlying cause.",
      "Our providers work together — physical therapy, chiropractic care, and acupuncture — to relieve pain and address the root movement or alignment issue behind it.",
    ],
    commonCauses: [
      "Whiplash from auto accidents",
      "Work injuries and repetitive strain",
      "Poor posture from phone or computer use",
      "Sleeping in an awkward position",
      "Herniated or degenerated discs in the cervical spine",
      "Muscle tension from stress",
      "Falls or sports injuries",
      "Arthritis in the cervical spine",
    ],
    symptoms: [
      "Stiffness or reduced range of motion turning the head",
      "Sharp or aching pain in the neck and shoulders",
      "Headaches that start at the base of the skull",
      "Numbness or tingling radiating into the arms",
      "Muscle spasms in the neck and upper back",
      "Pain that worsens with prolonged sitting",
    ],
    ifTreatedEarly:
      "Neck pain that's addressed early usually responds quickly to a combination of manual therapy, targeted exercise, and posture correction. Early treatment also reduces the chance of compensatory pain developing in the shoulders or upper back.",
    ifLeftUntreated:
      "Left untreated, neck pain can lead to chronic tension headaches, reduced range of motion that becomes permanent, and nerve irritation that causes numbness or weakness down the arm. Because the neck supports and protects the spinal cord, ongoing untreated strain can also affect posture and mobility throughout the whole upper body.",
    howWeTreatIt: [
      "A hands-on evaluation to pinpoint whether pain is muscular, joint-related, or nerve-related",
      "Physical therapy exercises to restore strength and range of motion",
      "Chiropractic adjustments to relieve joint restriction and improve alignment",
      "Acupuncture for drug-free pain and tension relief",
      "Ergonomic and posture guidance for work and daily life",
    ],
    faqs: [
      {
        question: "Is it safe to get chiropractic care for neck pain after an accident?",
        answer:
          "Yes — after an initial evaluation to rule out anything requiring urgent medical attention, chiropractic care is a common and effective part of whiplash and neck injury recovery.",
      },
      {
        question: "Why do I get headaches with my neck pain?",
        answer:
          "Tight muscles at the base of the skull and restricted joints in the upper neck are a very common source of tension-type headaches.",
      },
      {
        question: "Can neck pain cause arm numbness?",
        answer:
          "Yes, if a nerve in the neck is irritated or compressed, it can cause numbness, tingling, or weakness that travels down the arm.",
      },
    ],
  },
  {
    slug: "shoulder-pain",
    name: "Shoulder Pain Relief",
    shortName: "Shoulder Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "From rotator cuff strain to post-accident injuries, we help restore shoulder strength and motion without surgery.",
    overview: [
      "The shoulder is one of the most mobile joints in the body, which also makes it one of the easiest to injure. Shoulder pain can come from a single traumatic event, like an accident, or build gradually from repetitive overhead movement at work.",
      "Our approach combines physical therapy and chiropractic care to restore strength, stability, and pain-free range of motion.",
    ],
    commonCauses: [
      "Auto accidents and impact injuries",
      "Rotator cuff strain or tears",
      "Work injuries from repetitive lifting or overhead reaching",
      "Frozen shoulder (adhesive capsulitis)",
      "Shoulder impingement",
      "Falls onto an outstretched arm",
      "Poor posture affecting shoulder mechanics",
      "Sports injuries",
    ],
    symptoms: [
      "Pain when lifting the arm overhead",
      "Weakness when reaching or carrying objects",
      "Clicking or catching sensations in the joint",
      "Pain that disrupts sleep, especially lying on that side",
      "Stiffness that limits reaching behind the back",
      "Swelling around the shoulder joint",
    ],
    ifTreatedEarly:
      "Shoulder injuries treated early with targeted physical therapy often avoid the need for more invasive intervention. Restoring proper movement patterns quickly also helps prevent the surrounding neck and upper back muscles from compensating and developing secondary pain.",
    ifLeftUntreated:
      "An untreated shoulder injury tends to get stiffer over time as the body protects the area by limiting motion — this can progress into a frozen shoulder that's much harder to treat. Continuing to use an injured shoulder without proper rehabilitation also raises the risk of a small strain becoming a full tear.",
    howWeTreatIt: [
      "Evaluation of shoulder strength, stability, and range of motion",
      "Physical therapy focused on rotator cuff strengthening and scapular control",
      "Chiropractic care to address related restrictions in the neck and upper back",
      "Acupuncture for pain relief during the rehabilitation process",
      "A gradual return-to-activity plan so you don't re-injure the joint",
    ],
    faqs: [
      {
        question: "Do I need surgery for a rotator cuff injury?",
        answer:
          "Many rotator cuff strains and partial tears improve significantly with physical therapy alone. Surgery is typically reserved for more severe tears or cases that don't respond to conservative care.",
      },
      {
        question: "Why does my shoulder hurt more at night?",
        answer:
          "Lying on the affected shoulder increases pressure on inflamed tissue, and reduced movement during sleep can also let stiffness settle in.",
      },
      {
        question: "How long does frozen shoulder take to resolve?",
        answer:
          "It varies widely, but consistent physical therapy can meaningfully speed up recovery and reduce how long the stiff phase lasts.",
      },
    ],
  },
  {
    slug: "hip-pain",
    name: "Hip Pain Relief",
    shortName: "Hip Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "Hip pain affects how you walk, sit, and sleep — we help identify the cause and get you moving comfortably again.",
    overview: [
      "Hip pain can come from the joint itself, the surrounding muscles, or even be referred from the lower back. Because the hip is central to almost every movement — walking, sitting, standing, climbing stairs — pain here affects daily life quickly.",
      "We evaluate the hip in the context of the whole lower body, since hip pain is often connected to how the low back, knees, and feet are working together.",
    ],
    commonCauses: [
      "Auto accidents and impact injuries",
      "Work injuries from lifting or repetitive strain",
      "Hip bursitis",
      "Muscle strain in the hip flexors or glutes",
      "Arthritis in the hip joint",
      "Sciatica referring pain from the lower back",
      "Falls or home accidents",
      "Poor movement mechanics during exercise or sports",
    ],
    symptoms: [
      "Pain in the groin, outer hip, or buttock",
      "Stiffness getting up from sitting",
      "A limp or altered walking pattern",
      "Pain that worsens with stairs or inclines",
      "Reduced range of motion rotating the hip",
      "Pain radiating down the thigh",
    ],
    ifTreatedEarly:
      "Hip pain addressed early is often resolved with targeted strengthening and mobility work before it changes the way you walk. Early treatment helps avoid the knee and lower back compensating for a hip that isn't moving properly.",
    ifLeftUntreated:
      "An untreated hip issue commonly leads to a change in gait, which places extra stress on the knees and lower back. Over time this can create a cycle of pain in multiple joints, and stiff hip muscles can become significantly harder to lengthen and strengthen the longer they're left untreated.",
    howWeTreatIt: [
      "A movement-based evaluation of the hip, low back, and surrounding muscles",
      "Physical therapy to restore hip strength, flexibility, and stability",
      "Chiropractic care to address related lower back or pelvic alignment issues",
      "Acupuncture for pain management alongside rehabilitation",
      "Gait and movement retraining to correct compensations",
    ],
    faqs: [
      {
        question: "Why does my hip pain get worse going up stairs?",
        answer:
          "Stairs demand more strength and stability from the hip muscles than flat walking, so weakness or irritation there tends to show up most on inclines and stairs.",
      },
      {
        question: "Can lower back problems cause hip pain?",
        answer:
          "Yes — nerve irritation in the lower back can refer pain into the hip and thigh, which is why we evaluate the low back as part of any hip pain assessment.",
      },
      {
        question: "Is walking okay while my hip heals?",
        answer:
          "Generally yes, in moderation — we'll guide you on how much activity is appropriate as your treatment plan progresses.",
      },
    ],
  },
  {
    slug: "knee-pain",
    name: "Knee Pain Relief",
    shortName: "Knee Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "Whether it's an old injury or a new one, we help you rebuild knee strength and stability without unnecessary surgery.",
    overview: [
      "The knee absorbs enormous force with every step, so it's especially vulnerable to both sudden injuries and gradual wear. Knee pain can come from the joint itself, the surrounding ligaments, or from mechanical issues higher up in the hip or lower down in the foot.",
      "Our physical therapy approach focuses on restoring strength and proper movement mechanics so the knee is properly supported going forward.",
    ],
    commonCauses: [
      "Auto accidents and direct impact injuries",
      "Work injuries from kneeling, lifting, or repetitive strain",
      "Ligament sprains, including ACL and MCL injuries",
      "Meniscus tears",
      "Patellar tracking issues",
      "Osteoarthritis of the knee",
      "Falls or home accidents",
      "Overuse from sports or repetitive activity",
    ],
    symptoms: [
      "Swelling around the knee joint",
      "Instability or a feeling the knee might give way",
      "Pain going up or down stairs",
      "Clicking, popping, or catching sensations",
      "Stiffness after sitting for a long time",
      "Pain with squatting or kneeling",
    ],
    ifTreatedEarly:
      "Knee injuries treated early with proper rehabilitation often heal well and regain full function, especially when strengthening starts before the surrounding muscles have a chance to weaken further from disuse.",
    ifLeftUntreated:
      "An untreated knee injury can lead to ongoing instability, which increases the risk of re-injury with everyday movement. Muscle weakness around an unrehabilitated knee tends to worsen over time, and altered walking patterns can eventually create pain in the hip or lower back as well.",
    howWeTreatIt: [
      "A thorough evaluation of knee stability, alignment, and strength",
      "Physical therapy focused on quadriceps, hamstring, and hip strengthening",
      "Chiropractic care to address alignment issues affecting the knee from above",
      "Acupuncture to help manage pain during active rehabilitation",
      "A structured return-to-activity plan to safely regain full function",
    ],
    faqs: [
      {
        question: "Do I need an MRI before starting physical therapy for knee pain?",
        answer:
          "Not always — many knee conditions can be evaluated clinically, though we'll recommend imaging if your symptoms suggest a more significant structural issue.",
      },
      {
        question: "Can physical therapy help after a meniscus tear?",
        answer:
          "Yes, physical therapy is a core part of recovery both before and after any surgical treatment, and many minor tears improve with therapy alone.",
      },
      {
        question: "Why does my knee hurt more going downstairs than up?",
        answer:
          "Descending stairs places more load on the front of the knee and the muscles that control deceleration, which is a very common area of weakness.",
      },
    ],
  },
  {
    slug: "elbow-pain",
    name: "Elbow Pain Relief",
    shortName: "Elbow Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "From tennis elbow to work-related strain, we help resolve elbow pain so you can grip, lift, and work without discomfort.",
    overview: [
      "Elbow pain often develops from repetitive gripping, lifting, or twisting motions — common in both manual labor jobs and everyday tasks. It can also result from a direct injury, such as a fall or impact during an accident.",
      "We treat elbow pain by addressing both the local tissue irritation and the forearm and shoulder mechanics that often contribute to it.",
    ],
    commonCauses: [
      "Work injuries from repetitive lifting or gripping",
      "Auto accidents and impact injuries",
      "Tennis elbow (lateral epicondylitis)",
      "Golfer's elbow (medial epicondylitis)",
      "Nerve irritation at the elbow",
      "Falls onto an outstretched arm",
      "Overuse from sports or manual labor",
      "Poor ergonomics at a desk or workstation",
    ],
    symptoms: [
      "Pain on the outside or inside of the elbow",
      "Weak grip strength",
      "Pain that worsens with gripping or lifting",
      "Tenderness to the touch near the elbow joint",
      "Stiffness with full arm extension",
      "Numbness or tingling into the forearm or hand",
    ],
    ifTreatedEarly:
      "Elbow pain treated early with activity modification and targeted therapy usually resolves well, since much of it comes from overloaded tendons that respond to a structured strengthening and rest cycle.",
    ifLeftUntreated:
      "Continuing to use an injured elbow without treatment can turn a mild strain into a chronic tendon issue that's much slower to heal. Grip weakness left unaddressed can also affect the wrist and hand over time.",
    howWeTreatIt: [
      "Assessment of grip strength, forearm flexibility, and elbow mechanics",
      "Physical therapy including eccentric strengthening exercises for the forearm tendons",
      "Chiropractic and soft-tissue techniques to relieve tension in the forearm and upper arm",
      "Acupuncture for pain relief during the healing process",
      "Ergonomic guidance for work tasks that involve repetitive gripping or lifting",
    ],
    faqs: [
      {
        question: "Do I have to stop working with tennis elbow?",
        answer:
          "Usually not entirely — we typically modify specific tasks that aggravate the tendon while keeping you as active as possible elsewhere.",
      },
      {
        question: "How long does tennis elbow take to heal?",
        answer:
          "It varies, but consistent treatment and activity modification often show improvement within several weeks.",
      },
      {
        question: "Is a brace helpful for elbow pain?",
        answer:
          "A counterforce brace can help some patients reduce strain on the tendon during activity, and we can advise whether it's a good fit for your case.",
      },
    ],
  },
  {
    slug: "wrist-pain",
    name: "Wrist Pain Relief",
    shortName: "Wrist Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "Whether it's from a fall, repetitive strain, or an old injury, we help restore wrist strength and pain-free motion.",
    overview: [
      "Wrist pain is common after a fall onto an outstretched hand, a workplace injury, or from repetitive motion like typing or manual tasks. Because the wrist is a complex joint with many small bones and ligaments, pinpointing the exact cause matters for effective treatment.",
      "Our team evaluates grip strength, range of motion, and any nerve involvement to build a plan that targets the actual source of your pain.",
    ],
    commonCauses: [
      "Falls onto an outstretched hand",
      "Auto accidents and impact injuries",
      "Work injuries from repetitive motion",
      "Carpal tunnel syndrome",
      "Wrist sprains and ligament strain",
      "Tendinitis from repetitive gripping or typing",
      "Arthritis in the wrist joint",
      "Poor ergonomics at a desk or workstation",
    ],
    symptoms: [
      "Pain with bending or extending the wrist",
      "Swelling around the wrist joint",
      "Numbness or tingling in the fingers",
      "Weak grip strength",
      "Clicking or catching sensations",
      "Pain that worsens with typing or repetitive motion",
    ],
    ifTreatedEarly:
      "Wrist injuries treated early with proper support and targeted therapy generally heal well and avoid long-term stiffness. Addressing nerve-related symptoms like numbness early also helps prevent them from becoming more persistent.",
    ifLeftUntreated:
      "An untreated wrist injury can lead to chronic weakness and stiffness that makes everyday tasks like gripping, typing, or lifting increasingly difficult. Nerve compression left unaddressed, as with carpal tunnel syndrome, can also worsen and become harder to reverse.",
    howWeTreatIt: [
      "Evaluation of wrist mobility, grip strength, and nerve function",
      "Physical therapy to restore strength and flexibility",
      "Manual therapy techniques to address joint and soft tissue restriction",
      "Acupuncture for pain and nerve-related symptom relief",
      "Ergonomic guidance for typing, lifting, and repetitive work tasks",
    ],
    faqs: [
      {
        question: "Is carpal tunnel syndrome treatable without surgery?",
        answer:
          "Many cases improve significantly with physical therapy, activity modification, and splinting, especially when addressed early.",
      },
      {
        question: "How do I know if my wrist pain is from a sprain or something more serious?",
        answer:
          "A proper evaluation can usually distinguish between a soft tissue sprain and something that may need imaging, such as a suspected fracture.",
      },
      {
        question: "Can typing all day cause wrist pain?",
        answer:
          "Yes, repetitive typing without proper wrist positioning and breaks is a very common contributor to wrist and forearm pain.",
      },
    ],
  },
  {
    slug: "hand-pain",
    name: "Hand Pain Relief",
    shortName: "Hand Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "Hand pain affects everything from typing to gripping a steering wheel — we help you regain full, pain-free function.",
    overview: [
      "Hand pain can come from an acute injury, like a fall or an accident, or develop gradually from repetitive fine-motor tasks. Because the hand is essential to nearly every daily activity, even mild pain here can have an outsized impact on daily life.",
      "We assess grip and pinch strength, finger mobility, and nerve function to determine the most effective treatment approach.",
    ],
    commonCauses: [
      "Auto accidents and impact injuries",
      "Work injuries from repetitive gripping or fine motor tasks",
      "Trigger finger",
      "Arthritis in the hand joints",
      "Carpal tunnel syndrome affecting hand and finger sensation",
      "Falls or home accidents",
      "Tendinitis from repetitive use",
      "Sports-related finger or hand injuries",
    ],
    symptoms: [
      "Pain or stiffness in the fingers or palm",
      "Swelling in the hand or fingers",
      "Numbness or tingling in the fingertips",
      "Weak grip or pinch strength",
      "A finger that catches or locks when bending",
      "Pain that worsens with repetitive tasks",
    ],
    ifTreatedEarly:
      "Hand conditions treated early with targeted therapy and activity modification usually respond well, preserving fine motor function and grip strength before compensatory patterns develop in the wrist or forearm.",
    ifLeftUntreated:
      "Left untreated, hand pain can progressively limit grip strength and fine motor coordination, making everyday tasks like writing, cooking, or driving more difficult. Nerve-related hand symptoms can also worsen over time if the underlying compression isn't addressed.",
    howWeTreatIt: [
      "Evaluation of grip strength, finger mobility, and nerve sensation",
      "Physical and hand therapy exercises to restore strength and dexterity",
      "Manual therapy to address stiffness in the joints and soft tissue",
      "Acupuncture for pain and nerve-related symptom management",
      "Guidance on activity modification for repetitive hand-intensive tasks",
    ],
    faqs: [
      {
        question: "What is trigger finger and can therapy help?",
        answer:
          "Trigger finger happens when a tendon in the finger catches as it glides through its sheath. Therapy, splinting, and activity modification can help many mild to moderate cases.",
      },
      {
        question: "Why are my fingers numb along with my hand pain?",
        answer:
          "Numbness is often a sign of nerve involvement, which we evaluate carefully since it changes the treatment approach.",
      },
      {
        question: "Can hand arthritis be managed without medication?",
        answer:
          "Movement-based therapy, joint protection techniques, and complementary approaches like acupuncture can meaningfully reduce arthritis symptoms alongside any medical management.",
      },
    ],
  },
  {
    slug: "foot-pain",
    name: "Foot Pain Relief",
    shortName: "Foot Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "From plantar fasciitis to post-injury pain, we help get you back on your feet comfortably.",
    overview: [
      "Foot pain affects every step you take, which makes it one of the most disruptive types of pain to live with. It can stem from an acute injury, from footwear and biomechanics, or from repetitive strain at work.",
      "Our evaluation looks at foot structure, gait, and how the whole lower body moves together, since foot pain is often connected to the ankle, knee, and hip above it.",
    ],
    commonCauses: [
      "Auto accidents and impact injuries",
      "Work injuries from standing or walking for long periods",
      "Plantar fasciitis",
      "Stress fractures",
      "Poor footwear or foot mechanics",
      "Nerve irritation, such as tarsal tunnel syndrome",
      "Falls or home accidents",
      "Overuse from walking, running, or standing occupations",
    ],
    symptoms: [
      "Sharp heel pain, especially first thing in the morning",
      "Swelling on the top or bottom of the foot",
      "Pain that worsens with prolonged standing or walking",
      "Numbness or tingling in the toes",
      "Tenderness along the arch",
      "Pain that changes your walking pattern",
    ],
    ifTreatedEarly:
      "Foot pain addressed early with proper stretching, strengthening, and footwear guidance often resolves well before it changes the way you walk or stand — which is important, since compensations elsewhere in the leg can create secondary problems.",
    ifLeftUntreated:
      "An untreated foot condition like plantar fasciitis can become chronic and significantly harder to resolve. Altered walking patterns from ongoing foot pain frequently lead to secondary pain in the knees, hips, or lower back over time.",
    howWeTreatIt: [
      "A gait and foot structure evaluation",
      "Physical therapy focused on stretching, strengthening, and mobility of the foot and ankle",
      "Manual therapy to address tissue tightness contributing to pain",
      "Acupuncture for pain relief during the rehabilitation process",
      "Footwear and activity guidance to prevent recurrence",
    ],
    faqs: [
      {
        question: "Why is my heel pain worse in the morning?",
        answer:
          "Plantar fascia tissue tightens overnight, so the first steps after waking often stretch it suddenly, causing a sharp pain that typically eases as you move.",
      },
      {
        question: "Do I need custom orthotics for foot pain?",
        answer:
          "Not always — many cases improve with stretching, strengthening, and proper footwear, though orthotics can help specific structural issues when needed.",
      },
      {
        question: "Can I keep exercising with plantar fasciitis?",
        answer:
          "Often yes, with modifications — we'll help you adjust activity so you can stay active while the tissue heals.",
      },
    ],
  },
  {
    slug: "ankle-pain",
    name: "Ankle Pain Relief",
    shortName: "Ankle Pain",
    category: "Joint & Muscle Pain",
    heroSubtitle:
      "From sprains to post-accident instability, we help rebuild ankle strength so you can move confidently again.",
    overview: [
      "The ankle is one of the most frequently injured joints, whether from a sudden twist, a fall, or an accident. Because the ankle supports your entire body weight with every step, even a seemingly minor sprain deserves proper rehabilitation.",
      "We focus on restoring strength, balance, and stability so the ankle doesn't stay vulnerable to repeat injury.",
    ],
    commonCauses: [
      "Ankle sprains from twisting or rolling the ankle",
      "Auto accidents and impact injuries",
      "Work injuries from uneven surfaces or falls",
      "Achilles tendon strain",
      "Chronic ankle instability from a prior, undertreated sprain",
      "Fractures from falls or direct trauma",
      "Overuse from sports or standing occupations",
      "Poor footwear or walking surfaces",
    ],
    symptoms: [
      "Swelling and bruising around the ankle",
      "Pain with weight-bearing",
      "A feeling of instability or the ankle giving way",
      "Stiffness after periods of rest",
      "Pain along the Achilles tendon",
      "Reduced range of motion",
    ],
    ifTreatedEarly:
      "Ankle sprains treated early with proper rehabilitation heal well and regain full strength and balance, significantly lowering the risk of re-injury or long-term instability.",
    ifLeftUntreated:
      "Ankle sprains that aren't properly rehabilitated are one of the most common causes of chronic ankle instability — meaning the joint stays prone to rolling again and again. This ongoing instability can also affect the knee and hip over time as the body compensates.",
    howWeTreatIt: [
      "Evaluation of ankle stability, strength, and balance",
      "Physical therapy including balance and proprioception training",
      "Manual therapy to restore proper joint mobility",
      "Acupuncture for pain relief during recovery",
      "A structured return-to-activity plan to prevent repeat sprains",
    ],
    faqs: [
      {
        question: "Do I need to keep weight off a sprained ankle?",
        answer:
          "It depends on the severity — we'll guide you on safe weight-bearing and movement based on your specific injury.",
      },
      {
        question: "Why does my ankle keep rolling even after it healed?",
        answer:
          "This is often a sign of incomplete rehabilitation of balance and strength after the original sprain, which is exactly what a proper physical therapy plan addresses.",
      },
      {
        question: "How long does an ankle sprain take to heal?",
        answer:
          "Mild sprains often improve within a few weeks with proper treatment, while more significant sprains can take longer — consistent rehab is the biggest factor in a full recovery.",
      },
    ],
  },
  {
    slug: "sciatica",
    name: "Sciatica Relief",
    shortName: "Sciatica",
    category: "Nerve Pain",
    heroSubtitle:
      "Sharp, shooting pain down the leg isn't something to push through — we treat the nerve irritation at its source.",
    overview: [
      "Sciatica is pain that travels along the sciatic nerve, usually starting in the lower back or buttock and radiating down one leg. It's a symptom of an underlying issue — most often a disc or muscle putting pressure on the nerve — rather than a condition on its own.",
      "Because sciatica can come from several different sources, an accurate evaluation is the first step. From there, we build a plan that relieves pressure on the nerve and restores normal movement in the low back and hips.",
    ],
    commonCauses: [
      "Herniated or bulging discs in the lower spine",
      "Auto accidents and sudden impact injuries",
      "Piriformis syndrome (muscle irritation of the nerve in the buttock)",
      "Spinal stenosis narrowing the space around the nerve",
      "Work injuries from heavy lifting or prolonged sitting",
      "Degenerative disc disease",
      "Pregnancy-related pelvic and lower back changes",
      "Prolonged sitting with poor posture",
    ],
    symptoms: [
      "Sharp, shooting, or burning pain from the low back into the leg",
      "Numbness or tingling in the leg or foot",
      "Pain that worsens with sitting or coughing",
      "Weakness in the leg or foot",
      "A dull ache in the buttock that radiates downward",
      "Pain typically affecting only one side of the body",
    ],
    ifTreatedEarly:
      "Sciatica addressed early with the right combination of manual therapy and targeted exercise usually improves significantly within weeks, since reducing pressure on the nerve early prevents symptoms from becoming more entrenched.",
    ifLeftUntreated:
      "Untreated sciatica can lead to worsening numbness and weakness in the leg, and in more severe cases can affect balance and the ability to walk normally. The longer a nerve stays irritated, the longer it can take to fully recover once treatment begins.",
    howWeTreatIt: [
      "A thorough evaluation to identify exactly where the nerve is being irritated",
      "Physical therapy focused on relieving pressure on the nerve and building core support",
      "Chiropractic adjustments to reduce disc or joint pressure on the sciatic nerve",
      "Acupuncture for nerve-related pain relief",
      "Movement and posture guidance to prevent the pain from returning",
    ],
    faqs: [
      {
        question: "Is sciatica the same as a herniated disc?",
        answer:
          "Not exactly — a herniated disc is one common cause of sciatica, but sciatica itself refers to the nerve pain, which can also come from muscle irritation or spinal narrowing.",
      },
      {
        question: "Should I rest completely with sciatica?",
        answer:
          "Usually not — gentle, guided movement tends to help more than complete rest, which can allow supporting muscles to weaken further.",
      },
      {
        question: "When does sciatica need imaging or a specialist referral?",
        answer:
          "If there's significant weakness, loss of bladder or bowel control, or no improvement with conservative care, we'll refer you promptly for further evaluation.",
      },
    ],
  },
  {
    slug: "arthritis",
    name: "Arthritis Pain Relief",
    shortName: "Arthritis",
    category: "Chronic Conditions",
    heroSubtitle:
      "Joint stiffness and pain don't have to limit your daily life — we help you stay strong, mobile, and active.",
    overview: [
      "Arthritis causes inflammation, stiffness, and pain in one or more joints, and tends to worsen over time without proper management. While it can't always be reversed, the right combination of movement, manual therapy, and pain management can dramatically improve how you feel day to day.",
      "Our approach focuses on keeping the affected joints as mobile and well-supported as possible, so arthritis interferes with your life as little as possible.",
    ],
    commonCauses: [
      "Osteoarthritis from joint wear over time",
      "Rheumatoid arthritis and other autoimmune conditions",
      "Past joint injuries that develop into post-traumatic arthritis",
      "Genetics and family history",
      "Excess joint stress from repetitive work or activity",
      "Reduced muscle support around an aging joint",
    ],
    symptoms: [
      "Joint stiffness, especially in the morning or after rest",
      "Swelling around one or more joints",
      "Pain that worsens with activity or weather changes",
      "Reduced range of motion",
      "A grinding or clicking sensation in the joint",
      "Muscle weakness around the affected joint",
    ],
    ifTreatedEarly:
      "Managing arthritis early with movement-based therapy helps preserve joint function and muscle strength for much longer, and can meaningfully slow how quickly symptoms progress.",
    ifLeftUntreated:
      "Unmanaged arthritis symptoms tend to lead to increasing stiffness and muscle weakness around the joint, which can accelerate the loss of mobility and make basic daily tasks progressively more difficult.",
    howWeTreatIt: [
      "A joint-by-joint evaluation of mobility, strength, and pain patterns",
      "Physical therapy to maintain range of motion and build supportive muscle strength",
      "Chiropractic and manual therapy to ease stiffness in surrounding joints",
      "Acupuncture as a drug-free option for ongoing pain management",
      "Guidance on activity pacing and joint protection for daily life",
    ],
    faqs: [
      {
        question: "Can physical therapy help arthritis even though it can't be cured?",
        answer:
          "Yes — while therapy can't reverse joint changes, it can significantly reduce pain and preserve function by keeping the muscles around the joint strong and the joint itself mobile.",
      },
      {
        question: "Is exercise safe with arthritis?",
        answer:
          "Generally yes, and it's often recommended — we guide you toward movement that supports the joint without aggravating it.",
      },
      {
        question: "Will weather really affect my arthritis pain?",
        answer:
          "Many patients do notice more stiffness with cold or damp weather, though the exact reason isn't fully understood — staying active tends to help regardless.",
      },
    ],
  },
  {
    slug: "whiplash-auto-injury",
    name: "Whiplash & Auto Injury Recovery",
    shortName: "Whiplash & Auto Injuries",
    category: "Injury Recovery",
    heroSubtitle:
      "Even a low-speed collision can cause real injury — we evaluate and treat auto accident injuries from day one.",
    overview: [
      "Auto accidents can cause injuries that aren't obvious right away, since adrenaline and shock often mask pain in the first hours or days. Whiplash, the sudden back-and-forth motion of the neck, is one of the most common auto accident injuries, but impacts can also affect the back, shoulders, and joints.",
      "We evaluate the full body after an accident, document findings for any related claims, and build a recovery plan across physical therapy, chiropractic care, and acupuncture.",
    ],
    commonCauses: [
      "Rear-end and side-impact car accidents",
      "Sudden braking or low-speed collisions",
      "Motorcycle and pedestrian accidents",
      "Workplace vehicle incidents",
      "Falls that occur as a result of an accident",
    ],
    symptoms: [
      "Neck pain and stiffness, often appearing a day or two after the accident",
      "Headaches starting at the base of the skull",
      "Back pain or muscle spasms",
      "Dizziness or difficulty concentrating",
      "Shoulder or arm pain",
      "Fatigue in the days following the accident",
    ],
    ifTreatedEarly:
      "Getting evaluated within the first days after an accident — even if pain feels mild — allows us to catch and treat injuries before they progress, and creates a clear medical record connected to the incident.",
    ifLeftUntreated:
      "Auto accident injuries left untreated often become chronic pain conditions, since soft tissue damage that isn't properly rehabilitated tends to heal with scar tissue and lasting stiffness rather than full function.",
    howWeTreatIt: [
      "A full-body evaluation to identify all injuries related to the accident, not just the most obvious one",
      "Physical therapy to restore strength, motion, and function",
      "Chiropractic care to address whiplash and spinal alignment issues",
      "Acupuncture for pain management throughout recovery",
      "Documentation to support any auto insurance or personal injury claim",
    ],
    faqs: [
      {
        question: "I feel fine after my accident — do I still need to get checked?",
        answer:
          "Yes, we recommend it — many soft tissue and whiplash injuries don't cause noticeable pain until a day or two after the accident.",
      },
      {
        question: "Do you work with auto insurance and personal injury cases?",
        answer:
          "Yes, we regularly treat patients recovering from auto accidents and can provide documentation to support your claim.",
      },
      {
        question: "How soon after an accident should I start treatment?",
        answer:
          "As soon as possible — early evaluation and treatment generally leads to a faster, fuller recovery.",
      },
    ],
  },
  {
    slug: "sports-injuries",
    name: "Sports Injuries",
    shortName: "Sports Injuries",
    category: "Injury Recovery",
    heroSubtitle:
      "Whether it's a weekend game or competitive training, we help athletes recover fully and get back in the game safely.",
    overview: [
      "Sports injuries range from sudden sprains and strains to overuse injuries that build up over a season of training. Recovering properly — not just resting until pain fades — is what prevents the same injury from coming back once you return to activity.",
      "Our team builds sport-specific rehabilitation plans that restore strength and movement patterns, so you return to your sport with confidence, not hesitation.",
    ],
    commonCauses: [
      "Sprains and strains from sudden changes in direction",
      "Overuse injuries from repetitive training",
      "Direct contact or collision injuries",
      "Poor warm-up or recovery habits",
      "Muscle imbalances or weakness",
      "Returning to activity too soon after a prior injury",
    ],
    symptoms: [
      "Pain that appears during or after specific movements or activities",
      "Swelling or bruising around the injured area",
      "Reduced strength or power in the affected limb",
      "Instability or a feeling the joint might give way",
      "Stiffness that limits your normal range of motion",
      "Pain that returns whenever you try to resume the sport",
    ],
    ifTreatedEarly:
      "Sports injuries treated with a proper rehabilitation plan — rather than just rest — heal stronger and are far less likely to recur once you return to your sport.",
    ifLeftUntreated:
      "Returning to sport before an injury is fully rehabilitated is one of the most common causes of repeat injury, often to the same area, and can turn a short recovery into a recurring, nagging problem.",
    howWeTreatIt: [
      "A movement and strength assessment specific to your sport and injury",
      "Physical therapy focused on strength, stability, and safe return-to-play progressions",
      "Chiropractic care to keep the whole kinetic chain moving well",
      "Acupuncture for pain relief during active training or competition seasons",
      "A structured, criteria-based return-to-sport plan",
    ],
    faqs: [
      {
        question: "When is it safe to return to my sport?",
        answer:
          "We use specific strength and movement benchmarks, not just how you feel, to determine when it's safe to return — this significantly lowers your risk of re-injury.",
      },
      {
        question: "Can I keep training while recovering from a sports injury?",
        answer:
          "Often yes, with modifications — we'll guide you on what to adjust so you can stay conditioned while the injury heals.",
      },
      {
        question: "Do you treat both acute injuries and overuse injuries?",
        answer:
          "Yes, we treat both sudden sports injuries and gradual overuse conditions like tendinitis or stress reactions.",
      },
    ],
  },
  {
    slug: "post-surgical-rehab",
    name: "Post-Surgical Rehabilitation",
    shortName: "Post-Surgical Rehab",
    category: "Chronic Conditions",
    heroSubtitle:
      "Surgery is only part of the recovery — proper rehab is what restores your strength, motion, and confidence.",
    overview: [
      "Recovering from surgery — whether it's a joint replacement, ligament repair, or spinal procedure — depends heavily on the rehabilitation that follows. Without a structured plan, muscles around the surgical site can stay weak and stiff long after the incision has healed.",
      "We work closely with your surgeon's protocol to guide you safely through each phase of recovery, from early mobility work to a full return to normal activity.",
    ],
    commonCauses: [
      "Joint replacement surgery (hip, knee, shoulder)",
      "Ligament repair, such as ACL reconstruction",
      "Spinal surgery",
      "Rotator cuff or tendon repair surgery",
      "Fracture repair with surgical fixation",
    ],
    symptoms: [
      "Stiffness and limited range of motion around the surgical site",
      "Muscle weakness from a period of reduced activity",
      "Swelling that lingers longer than expected",
      "Difficulty with normal walking or movement patterns",
      "Apprehension about moving or loading the area normally",
    ],
    ifTreatedEarly:
      "Starting guided rehabilitation as soon as your surgeon clears you generally leads to a faster return of strength and motion, and helps prevent stiffness or muscle loss from setting in.",
    ifLeftUntreated:
      "Skipping structured post-surgical rehab often leads to lasting stiffness, weakness, and altered movement patterns — sometimes requiring more intensive treatment later to recover the function that early rehab would have preserved.",
    howWeTreatIt: [
      "Coordination with your surgeon's post-operative protocol and timeline",
      "Phase-based physical therapy progressing from gentle mobility to full strengthening",
      "Manual therapy to address scar tissue and surrounding joint stiffness",
      "Acupuncture to help manage post-surgical pain",
      "A gradual, criteria-based return to daily activities, work, or sport",
    ],
    faqs: [
      {
        question: "How soon after surgery can I start physical therapy?",
        answer:
          "It depends on your procedure and surgeon's protocol, but many patients begin some form of guided movement within days to a couple of weeks after surgery.",
      },
      {
        question: "Will therapy be painful after surgery?",
        answer:
          "Some discomfort during early mobility work is normal, but we pace your program carefully to stay within safe, appropriate limits for your recovery stage.",
      },
      {
        question: "How long does post-surgical rehab typically take?",
        answer:
          "It varies by procedure, ranging from several weeks to a few months, with your progress guiding how the plan is adjusted along the way.",
      },
    ],
  },
];

export function getConditionBySlug(slug: string): ConditionData | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}
