import { ArrowButton } from "@/components/ui/ArrowButton";
import { FutureBooking } from "@/components/sections/FutureBooking";
import { PageHero } from "@/components/sections/PageHero";
import { clinic } from "@/content/clinic";
import { bookingCopy } from "@/content/copy";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Booking",
  description:
    "Request an appointment at Kafagway Dental Center through the clinic’s Facebook page, or call the clinic. No online calendar is connected.",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <>
      <PageHero id="booking-heading" eyebrow={bookingCopy.eyebrow} title={bookingCopy.headline} lede={bookingCopy.lede} />
      <section className="py-[clamp(3.5rem,8vw,6rem)]">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <ArrowButton href={clinic.bookingUrl} variant="red" external className="justify-between">
            {bookingCopy.primary}
          </ArrowButton>
          <ArrowButton href={`tel:${clinic.phone.tel}`} variant="ink" className="justify-between">
            {bookingCopy.secondary}
          </ArrowButton>
        </div>
        <p className="shell mt-8 text-ink-soft">
          {bookingCopy.emailLabel}:{" "}
          <a className="underline decoration-red underline-offset-4" href={`mailto:${clinic.email}`}>
            {clinic.email}
          </a>
        </p>
        <div className="shell mt-16">
          <FutureBooking />
        </div>
      </section>
    </>
  );
}
