import { bookingCopy } from "@/content/copy";

/**
 * Future booking integration slot.
 * Replace the contents of this component when a real scheduler is chosen.
 * Do not render invented times or a fake calendar.
 */
export function FutureBooking() {
  const copy = bookingCopy;
  return (
    <section aria-labelledby="future-booking" className="border border-ink/15 p-6 sm:p-10">
      <p className="eyebrow text-brown">{copy.futureEyebrow}</p>
      <h2 id="future-booking" className="mt-4 font-display text-3xl tracking-[-0.03em]">
        {copy.futureTitle}
      </h2>
      <p className="mt-4 max-w-xl text-ink-soft">{copy.futureBody}</p>
    </section>
  );
}
