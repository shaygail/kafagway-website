# Kafagway Dental Center

Premium editorial website for Kafagway Dental Center, Baguio City. Next.js App Router, TypeScript, and Tailwind CSS. The site is not deployed.

The visual direction follows the written redesign brief for a calm, high-contrast clinic site. Behance blocked automated access to the White Dental reference, so unseen sections of that gallery were not guessed. Nothing here copies another clinic’s name, logo, photography, or words.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home: framed hero, introduction, services index, three promises, clinic note, visit outline, location, closing |
| `/services` | The seven treatments published on the current clinic website |
| `/about` | Philosophy, placeholder gallery, team names with empty biographies |
| `/contact` | Phone, email, address, hours, directions, general enquiry form |
| `/booking` | Facebook booking, phone, and an empty slot for a future scheduler |
| `/privacy` | Placeholder notice. Not a legal policy |

## Run locally

```bash
npm install
npm run dev
```

Production check: `npm run build` then `npm run start`.

Canonical links use `NEXT_PUBLIC_SITE_URL` (see `.env.example`). The default is `https://kafagwaydentalcenter.com`. Change it when the domain for this redesign is confirmed.

## Update the words

Edit the typed files. Layout components read them; they do not hard-code clinic facts.

| File | What it holds |
| --- | --- |
| `src/content/clinic.ts` | Address, phone, email, Facebook, Instagram, hours, map link, navigation |
| `src/content/copy.ts` | Headlines, about text, team names, FAQs, booking and privacy copy |
| `src/content/services.ts` | Treatment list |
| `src/content/assets.ts` | Image paths, alt text, and the placeholder flag |
| `src/config/site.ts` | Site name and public URL |
| `src/styles/tokens.css` | Colour tokens |

`src/content/clinic.ts` also keeps `pendingConfirmation`. Those values are **not shown** on the site. They are conflicts that still need a decision.

## Replace photographs and the logo

Every photograph shipped here is a generated placeholder. Each frame is labelled “Photograph to follow”.

1. Put the new file at the path in `src/content/assets.ts`, or change `src` to the new path.
2. Write a real `alt` description.
3. Set `placeholder` to `false`. The on-image label disappears.

Files:

- `public/images/hero-dental.webp`
- `public/images/clinic-interior.webp`
- `public/images/clinic-team.webp`
- `public/images/about-clinic.webp`
- `public/images/service-general.webp`
- `public/images/service-restorative.webp`
- `public/images/service-implant.webp`
- `public/images/service-cosmetic.webp`
- `public/images/patient-experience.webp`

`service-implant.webp` is only a filename reserved by the brief. Implant treatment is **not** published on the current website, so the file is used as a neutral frame beside root canal treatment. Do not label it as implants unless the clinic confirms that service. Regenerate the abstract frames with `npm run placeholders` if you need the originals back.

The header and footer use the clinic’s supplied mark at `public/images/kafagway-logo.png`. The file arrived as a full lockup on a black field. The word “KAFAGWAY” in that file is black, so it disappears on the background. The site uses the circular red-and-tooth emblem only, with the name set in type beside it. Do not invert the PNG. Swap the file and the `logo` entry in `src/content/assets.ts` if a version with a readable wordmark is supplied.

## Enquiry form

`/contact` validates name, email, optional phone, a general message, and a privacy acknowledgement. It does not ask for medical detail.

`POST /api/enquiry` returns success only when a webhook accepts the message.

- Leave `ENQUIRY_WEBHOOK_URL` unset and the form says the message was **not** sent (HTTP 503).
- Set `ENQUIRY_WEBHOOK_URL` to a form service that accepts JSON (`name`, `email`, `phone`, `message`, `source`, `submittedAt`). HTTP 200 from that service is the only success state.

The delivery function is `deliverEnquiry` in `src/lib/enquiry.ts`.

## Booking

There is no calendar and no invented availability.

The primary action, “Book via Facebook”, uses the URL on the current homepage button “Book appointment via facebook”:

https://www.facebook.com/kafagwaydentalcenter/

No separate Facebook appointment plugin URL was published. The footer also links the same page. Instagram, from the current site, is https://www.instagram.com/kafagwaydental.

`src/components/sections/FutureBooking.tsx` is the empty module for a later scheduler. Replace its contents when a system is chosen. Do not render fake times.

## What still needs the clinic

Do not launch until these are confirmed. The site prefers the current website over third-party directories when they disagree, and it does not display the conflicting numbers.

**Contact**

- Phone on the current contact page, and the number shown here: `0945-241-2990`
- Phone in the project brief and some directories, not shown: `0926 624 1684`
- Landline seen only on a third-party directory, not shown: `(074) 422-1311`
- Email on the current contact page, and the address shown here: `kafagwaydental@gmail.com`
- Email in the project brief, not shown: `kdcappointments@gmail.com`
- Address punctuation: the contact page says “Burnham Legarda Barangay”. The brief uses “Burnham–Legarda”. A directory uses a slash. The site uses the contact-page wording.
- Full address used: Third Floor, BSP Building, Kisad Road, Burnham Legarda Barangay, Baguio City, Benguet, 2600
- Map link is a Google search for that address, not a verified pin
- Coordinates in the current site’s JSON-LD (`16.4083557`, `120.5942845`) are in the structured data only. That same schema listed the street as “Third Floor”, so the pin is unconfirmed
- Facebook numeric URL also on the current site, not used as the booking link: https://www.facebook.com/104115247829755

**Hours** — copied from the current contact page and marked unconfirmed on the site:

- Sunday–Friday, 9:00 am–5:00 pm
- Saturday, 9:00 am–4:00 pm

Sunday opening is unusual. Confirm it before launch.

**Not published, so not claimed**

- Parking and step-free access
- Prices, quotations, or a fee list
- Years in practice, awards, accreditations, or clinical outcomes
- Patient testimonials. The current site has a Reviews heading and no review text
- Dentist qualifications, portraits, and biographies
- A founding story

**Team names, as published under “Our Team” on the current services page.** Confirm they are current and spelled correctly. Bios are empty on purpose.

- Dr. Joshua Rae Marcelo Bantic
- Dr. Jennifer Elaine Capiral Diaz
- Dr. Caren Joy Alipio Bugtong

**Services** are the seven on https://kafagwaydentalcenter.com/services : Consultation; Periodontics and Preventive Dentistry; Restoration and Cosmetic Dentistry; Root Canal Treatment; Oral Surgery; Dentures and Bridges; Orthodontics.

The brief’s provisional labels “General Dentistry”, “Dental Implants”, and “Prosthetic Dentistry” are not used as offerings. Implants are not named on the current site. Dentures and bridges cover the prosthetic work that is named. Availability is still marked unconfirmed.

Two lines from the current service copy were kept as the clinic’s own wording, not as new guarantees: root canal treatment is described by the clinic as painless, and oral surgery is described as handled with care. Ask the clinic if they want that wording softened before launch.

**Brand**

- Colours in `src/styles/tokens.css` are proposed: black `#171717`, paper `#FAFAF8`, red `#A52B32`, brown `#554039`, neutral `#EEE9E4`, muted `#777573`. They are not confirmed brand hex values.
- The current website’s `<title>` is “Kafagwa Dental Center” (missing a y). The visible name and schema say “Kafagway”. This site uses Kafagway.
- Photography is still placeholder. The circular emblem is from the supplied logo file. A lockup with a readable wordmark has not been supplied. The name beside the emblem is set in the site typeface.

**Still to connect**

- Enquiry webhook
- Real scheduler, if they want one besides Facebook
- Privacy policy reviewed for the clinic
- Production domain, then set `NEXT_PUBLIC_SITE_URL`
- Analytics, if wanted. None is installed

The old “Explore Dentistry” page had no posts and was not rebuilt. The old newsletter signup and cookie banner were not carried over.
