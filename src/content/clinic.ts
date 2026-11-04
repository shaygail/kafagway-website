/**
 * Contact details shown on the site are taken from the current clinic website
 * (kafagwaydentalcenter.com/contact-us), fetched for this redesign.
 * Conflicting numbers from the project brief and third-party directories are
 * stored in `pendingConfirmation` and are not displayed.
 */
export const clinic = {
  name: "Kafagway Dental Center",
  address: {
    line1: "Third Floor, BSP Building",
    line2: "Kisad Road, Burnham Legarda Barangay",
    city: "Baguio City",
    region: "Benguet",
    postalCode: "2600",
    country: "Philippines",
    countryCode: "PH",
  },
  phone: {
    display: "0945-241-2990",
    tel: "+639452412990",
    source: "https://kafagwaydentalcenter.com/contact-us",
  },
  email: "kafagwaydental@gmail.com",
  facebook: {
    url: "https://www.facebook.com/kafagwaydentalcenter/",
    label: "Facebook",
  },
  /**
   * The current homepage button “Book appointment via facebook”
   * links here. No separate Facebook appointment URL was published.
   */
  bookingUrl: "https://www.facebook.com/kafagwaydentalcenter/",
  instagram: {
    url: "https://www.instagram.com/kafagwaydental",
    label: "Instagram",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Kafagway+Dental+Center%2C+Third+Floor%2C+BSP+Building%2C+Kisad+Road%2C+Baguio+City",
  /**
   * Coordinates published in the current site’s JSON-LD.
   * The same schema only listed the street as “Third Floor”, so treat the pin as unconfirmed.
   */
  geo: {
    latitude: 16.4083557,
    longitude: 120.5942845,
    confirmed: false,
  },
  hours: {
    confirmed: false,
    source: "https://kafagwaydentalcenter.com/contact-us",
    note: "Hours are as published on the current clinic website. Please confirm when you book.",
    entries: [
      {
        label: "Sunday – Friday",
        hours: "9:00 am – 5:00 pm",
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        label: "Saturday",
        hours: "9:00 am – 4:00 pm",
        days: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
  },
  parkingNote:
    "Parking and step-free access are not described on the current website. Ask the clinic when you get in touch.",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavigation = [
  ...navigation,
  { href: "/booking", label: "Booking" },
  { href: "/privacy", label: "Privacy" },
] as const;

/**
 * Not rendered. Resolve these with the clinic before launch.
 */
export const pendingConfirmation = {
  alternatePhoneFromBrief: "0926 624 1684",
  alternateEmailFromBrief: "kdcappointments@gmail.com",
  landlineSeenOnThirdPartyDirectory: "(074) 422-1311",
  facebookNumericUrl: "https://www.facebook.com/104115247829755",
  currentWebsiteTitleTypo: "Kafagwa Dental Center",
  addressVariants: ["Burnham Legarda Barangay", "Burnham–Legarda Barangay", "Burnham/Legarda Barangay"],
  provisionalServiceLabelsNotUsed: [
    "General Dentistry",
    "Dental Implants",
    "Prosthetic Dentistry",
  ],
  brandColoursAreProposed: true,
} as const;

export function addressLines() {
  return [
    clinic.address.line1,
    clinic.address.line2,
    `${clinic.address.city}, ${clinic.address.region} ${clinic.address.postalCode}`,
  ];
}

export function addressOneLine() {
  return `${clinic.address.line1}, ${clinic.address.line2}, ${clinic.address.city}, ${clinic.address.region}, ${clinic.address.postalCode}`;
}
