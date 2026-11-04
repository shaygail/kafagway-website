import { ArrowButton } from "@/components/ui/ArrowButton";
import { notFoundCopy } from "@/content/copy";

export default function NotFound() {
  return (
    <section className="shell py-24">
      <p className="eyebrow text-brown">{notFoundCopy.eyebrow}</p>
      <h1 className="display-md mt-5 max-w-[12ch]">{notFoundCopy.headline}</h1>
      <p className="measure mt-6 text-ink-soft">{notFoundCopy.body}</p>
      <div className="mt-8">
        <ArrowButton href="/" variant="ink">
          {notFoundCopy.cta}
        </ArrowButton>
      </div>
    </section>
  );
}
