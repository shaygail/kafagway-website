import type { AssetKey } from "@/content/assets";

export const homeCopy = {
  hero: {
    eyebrow: "Baguio City",
    headline: "Because every smile deserves thoughtful care.",
    supporting: "Personalised dental care, thoughtfully delivered in Baguio City.",
    originalHeadline: "Having an amazing smile is just a click away!",
    primaryCta: "Book a Consultation",
    secondaryCta: "Explore Our Services",
  },
  introduction: {
    eyebrow: "The practice",
    headline: "More than dentistry. Care built around you.",
    body: "Kafagway Dental Center plans treatment around the person in the chair, with the aim of improving and maintaining oral health. The clinic also tries to keep care within reach for patients of different economic backgrounds — and to make the visit feel like more than a procedure.",
  },
  services: {
    eyebrow: "Treatment",
    headline: "What the clinic offers.",
    intro:
      "These are the treatments published on the current clinic website. A consultation is the place to ask whether one of them is right for you.",
  },
  why: {
    eyebrow: "Why Kafagway",
    headline: "Three things the clinic stands by.",
    pillars: [
      {
        number: "01",
        title: "Personalised care",
        body: "You are treated with dedication, through an individualised plan shaped to improve and maintain oral health.",
      },
      {
        number: "02",
        title: "Accessible treatment",
        body: "Dental treatment need not be out of reach. The clinic tries to welcome patients regardless of economic background.",
      },
      {
        number: "03",
        title: "Beyond dentistry",
        body: "The hope is a visit that feels different from the usual treatment experience.",
      },
    ],
  },
  about: {
    eyebrow: "The clinic",
    headline: "Your smile is personal. Your care should be too.",
    body: "Kafagway Dental Center is a dental clinic on Kisad Road in Baguio City. What the clinic has published is straightforward: plans made for the individual, fees that aim to stay approachable, and care that tries to go beyond the procedure. A longer history has not been provided for this page.",
    cta: "About the clinic",
  },
  journey: {
    eyebrow: "A visit",
    headline: "How a first conversation begins.",
    note: "A general outline only. It is not a description of a clinical workflow.",
    steps: [
      {
        number: "01",
        title: "Get in touch",
        body: "Call, email, or message the clinic on Facebook and say you would like to be seen.",
      },
      {
        number: "02",
        title: "Discuss your needs",
        body: "A consultation is the clinic’s starting point: a conversation about what you need, before treatment is planned.",
      },
      {
        number: "03",
        title: "Receive personalised care",
        body: "If you go ahead, the plan is individual. The detail of any treatment is agreed with the clinic.",
      },
    ],
  },
  location: {
    eyebrow: "Visit",
    headline: "On Kisad Road, in Baguio.",
    cta: "Contact the clinic",
    directions: "Get directions",
  },
  closing: {
    eyebrow: "Appointments",
    headline: "Your next smile starts here.",
    body: "Request a visit through the clinic’s Facebook page, or call the clinic directly.",
    cta: "Book Your Visit",
  },
} as const;

export const team = [
  {
    name: "Dr. Joshua Rae Marcelo Bantic",
    qualifications: "",
    bio: "",
  },
  {
    name: "Dr. Jennifer Elaine Capiral Diaz",
    qualifications: "",
    bio: "",
  },
  {
    name: "Dr. Caren Joy Alipio Bugtong",
    qualifications: "",
    bio: "",
  },
] as const;

export const aboutCopy = {
  eyebrow: "About",
  headline: "Your smile is personal. Your care should be too.",
  lede: "A Baguio clinic built around individual plans, approachable fees, and a visit that tries to feel like more than dentistry.",
  philosophyTitle: "How the clinic talks about care",
  philosophy: [
    "Treatment is individual. The published promise is dedication to improving and maintaining oral health through a plan that fits the patient.",
    "Cost is part of that conversation. The clinic says dental treatment need not be expensive, and that it tries to reach patients regardless of economic background.",
    "The third promise is experiential: a difference beyond the usual treatment visit. Nothing more specific has been published, so nothing more specific is claimed here.",
  ],
  environmentTitle: "The rooms",
  environmentBody:
    "Photographs of the clinic have not been supplied for this redesign. The frames below are placeholders, ready to be replaced.",
  teamTitle: "The people you may meet",
  teamBody:
    "These names are published on the current clinic website, under Our Team. Qualifications, portraits, and biographies have not been provided. Please treat the list as needing the clinic’s confirmation.",
  teamEmpty: "Biography and qualifications to be added.",
  ctaTitle: "When you are ready",
  ctaBody: "A consultation is the clinic’s invitation to ask questions before anything is planned.",
} as const;

export const gallery: { image: AssetKey; caption: string }[] = [
  { image: "clinicInterior", caption: "Clinic interior — photograph to follow" },
  { image: "aboutClinic", caption: "The practice — photograph to follow" },
  { image: "clinicTeam", caption: "The team — photograph to follow" },
];

export const servicesPageCopy = {
  eyebrow: "Services",
  headline: "Care, named plainly.",
  lede: "Seven treatments are published on the current Kafagway website. They are listed here without prices, and without a promise that each one is available on the day you call.",
  note: "Confirm availability with the clinic. This page does not replace a consultation.",
  enquire: "Enquire about this",
  book: "Book a consultation",
} as const;

export const contactCopy = {
  eyebrow: "Contact",
  headline: "Speak with the clinic.",
  lede: "Call, email, or send a general note. For an appointment, Facebook is the route the clinic publishes today.",
  formTitle: "A general enquiry",
  formNote:
    "Please do not include detailed medical or health information. This form is for practical questions only.",
} as const;

export const faqs = [
  {
    question: "How do I request an appointment?",
    answer:
      "The current website sends appointment requests to the clinic’s Facebook page. You can also call or email using the details on this site.",
  },
  {
    question: "Where is the clinic?",
    answer:
      "Third Floor, BSP Building, Kisad Road, Burnham Legarda Barangay, Baguio City, Benguet 2600. That address is taken from the current contact page.",
  },
  {
    question: "Are fees listed here?",
    answer:
      "No. The clinic says treatment need not be expensive, and that plans are individual. Ask the clinic directly for fees. Nothing on this website is a quotation.",
  },
  {
    question: "What are the opening hours?",
    answer:
      "The current website lists Sunday to Friday, 9:00 am to 5:00 pm, and Saturday, 9:00 am to 4:00 pm. Confirm the hours when you book — they are marked here as unverified for the redesign.",
  },
] as const;

export const bookingCopy = {
  eyebrow: "Booking",
  headline: "Request a visit.",
  lede: "Appointments are arranged through the clinic’s Facebook page. There is no calendar on this website, and no availability is shown.",
  primary: "Book via Facebook",
  secondary: "Call the Clinic",
  emailLabel: "Email the clinic",
  futureEyebrow: "Reserved",
  futureTitle: "Online scheduling",
  futureBody:
    "Nothing is connected here yet. When the clinic chooses a booking system, it will sit in this space. This module does not show open times, and it cannot confirm a visit.",
} as const;

export const privacyCopy = {
  eyebrow: "Privacy",
  headline: "A notice, not yet a policy.",
  paragraphs: [
    "Kafagway Dental Center has not supplied a privacy policy for this redesign. What follows is a plain description of this website only. It is not legal advice, and it should be replaced before launch.",
    "The enquiry form asks for your name, email address, an optional phone number, and a general message. It also asks you to acknowledge this notice. Do not send detailed medical or health information through the form.",
    "Until a form service is connected, this website does not store or deliver those messages. A failed or unconfigured submission is shown as such. It is not treated as received by the clinic.",
    "The site does not include analytics, advertising cookies, or a patient portal. External links to Facebook, Instagram, email, phone, and maps leave this website.",
    "Questions about personal information can be sent to the clinic email published on the contact page.",
  ],
} as const;

export const notFoundCopy = {
  eyebrow: "404",
  headline: "This page is not on the site.",
  body: "The link may be old. The clinic’s pages are home, services, about, contact, and booking.",
  cta: "Back to the clinic",
} as const;
