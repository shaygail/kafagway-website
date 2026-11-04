import type { AssetKey } from "@/content/assets";

/**
 * Services published on https://kafagwaydentalcenter.com/services.
 * Copy is rewritten for clarity. It does not add procedures, prices, or outcomes.
 * `confirmed` stays false until the clinic reviews the list.
 */
export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  body: string[];
  image: AssetKey;
  confirmed: false;
  source: string;
};

const source = "https://kafagwaydentalcenter.com/services";

export const services: Service[] = [
  {
    id: "consultation",
    number: "01",
    title: "Consultation",
    summary: "A first visit to understand what you need, before a plan is made.",
    body: [
      "The clinic asks patients to book a consultation so a treatment plan can be shaped around their specific needs.",
      "It is also the time to ask about your oral health. The dentists explain and answer those questions with you.",
    ],
    image: "serviceGeneral",
    confirmed: false,
    source,
  },
  {
    id: "preventive",
    number: "02",
    title: "Periodontics and Preventive Dentistry",
    summary: "Cleaning and assessment of the gums, bone, and teeth.",
    body: [
      "The clinic recommends a cleaning about every six months.",
      "Preventive visits include oral prophylaxis, a periodic look at the gums, bone, and teeth, and oral hygiene instruction from licensed oral healthcare professionals.",
    ],
    image: "patientExperience",
    confirmed: false,
    source,
  },
  {
    id: "restorative",
    number: "03",
    title: "Restoration and Cosmetic Dentistry",
    summary: "Tooth-coloured restorations, whitening, crowns, and veneers.",
    body: [
      "Patients come for sensitivity to cold, sweet, or sour food, for discoloration of teeth or older restorations, or because they want a smile that feels more pleasing.",
      "The clinic offers tooth-coloured restorations and aesthetic care ranging from teeth whitening to crowns and veneers.",
    ],
    image: "serviceRestorative",
    confirmed: false,
    source,
  },
  {
    id: "root-canal",
    number: "04",
    title: "Root Canal Treatment",
    summary: "Endodontic care aimed at keeping a tooth rather than removing it.",
    body: [
      "Saving a tooth from extraction is possible with endodontic treatment. The canals are explored and treated, and biocompatible materials are placed so the tooth may stay longer.",
      "The clinic tells patients not to worry, and describes this treatment as painless.",
    ],
    image: "serviceImplant",
    confirmed: false,
    source,
  },
  {
    id: "oral-surgery",
    number: "05",
    title: "Oral Surgery",
    summary: "From a minor extraction to impacted wisdom-tooth surgery.",
    body: [
      "Surgical care ranges from a minor extraction to impacted wisdom-tooth surgery. The clinic describes this as a procedure it handles with care.",
      "Partner laboratories support diagnosis of oral lesions after surgery. Patients are monitored and recalled for follow-up.",
    ],
    image: "clinicInterior",
    confirmed: false,
    source,
  },
  {
    id: "dentures",
    number: "06",
    title: "Dentures and Bridges",
    summary: "Removable dentures and fixed bridges, in a range of materials.",
    body: [
      "Missing teeth can be replaced with removable dentures or fixed bridges.",
      "Materials include acrylic, porcelain, and zirconia. The clinic presents these as options to be fitted to what a patient needs.",
    ],
    image: "serviceCosmetic",
    confirmed: false,
    source,
  },
  {
    id: "orthodontics",
    number: "07",
    title: "Orthodontics",
    summary: "Braces and orthodontic therapy, beginning with diagnosis and a plan.",
    body: [
      "The clinic’s position is that fees are not set by compromising the quality of the work.",
      "Braces and orthodontic therapy start with diagnosis and treatment planning. The aim is a clearer understanding of why orthodontics is being considered, not brackets on their own.",
    ],
    image: "aboutClinic",
    confirmed: false,
    source,
  },
];

export function getService(id: string) {
  return services.find((service) => service.id === id);
}
