import { clinic } from "@/content/clinic";

export function Hours({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const muted = tone === "paper" ? "text-paper-soft" : "text-brown";
  return (
    <div>
      <p className="eyebrow">Hours</p>
      <ul className="mt-4 space-y-2">
        {clinic.hours.entries.map((entry) => (
          <li key={entry.label} className="flex flex-wrap justify-between gap-x-6 gap-y-1">
            <span>{entry.label}</span>
            <span>{entry.hours}</span>
          </li>
        ))}
      </ul>
      <p className={`mt-4 max-w-sm text-sm leading-relaxed ${muted}`}>{clinic.hours.note}</p>
    </div>
  );
}
