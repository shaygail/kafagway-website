/**
 * Replace a photograph by swapping the file at `src` and setting `placeholder` to false.
 * Components read this manifest only — they do not hard-code image paths.
 * Every image shipped with the redesign is a generated placeholder, not a clinic photograph.
 */
export type Asset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholder: boolean;
};

export const assets = {
  heroDental: {
    src: "/images/hero-dental.webp",
    alt: "Placeholder portrait for the homepage. A clinic photograph has not been supplied.",
    width: 1400,
    height: 1800,
    placeholder: true,
  },
  clinicInterior: {
    src: "/images/clinic-interior.webp",
    alt: "Placeholder for the clinic interior. A photograph of the practice has not been supplied.",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
  clinicTeam: {
    src: "/images/clinic-team.webp",
    alt: "Placeholder for the clinic team. Portraits have not been supplied.",
    width: 1400,
    height: 1600,
    placeholder: true,
  },
  aboutClinic: {
    src: "/images/about-clinic.webp",
    alt: "Placeholder for the about page. A photograph of the clinic has not been supplied.",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
  serviceGeneral: {
    src: "/images/service-general.webp",
    alt: "Placeholder photograph for a general treatment section. Not a clinical image.",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
  serviceRestorative: {
    src: "/images/service-restorative.webp",
    alt: "Placeholder photograph for restorative treatment. Not a clinical image.",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
  /**
   * Filename kept from the redesign brief. Implant treatment is not published on the
   * current website, so this frame is used as a neutral placeholder beside root canal care.
   */
  serviceImplant: {
    src: "/images/service-implant.webp",
    alt: "Placeholder photograph beside root canal treatment. A clinic image has not been supplied.",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
  serviceCosmetic: {
    src: "/images/service-cosmetic.webp",
    alt: "Placeholder photograph for cosmetic treatment. Not a before-and-after image.",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
  patientExperience: {
    src: "/images/patient-experience.webp",
    alt: "Placeholder photograph beside the patient journey. Not a picture of a patient.",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
  logo: {
    src: "/images/kafagway-logo.svg",
    alt: "",
    width: 64,
    height: 64,
    placeholder: true,
  },
} as const satisfies Record<string, Asset>;

export type AssetKey = keyof typeof assets;
