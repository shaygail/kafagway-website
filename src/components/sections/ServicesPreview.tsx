"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { homeCopy } from "@/content/copy";
import { services } from "@/content/services";

export function ServicesPreview() {
  const copy = homeCopy.services;
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((service) => service.id === activeId) ?? services[0];

  return (
    <section className="bg-neutral py-[clamp(4.5rem,11vw,9rem)]" aria-labelledby="services-heading">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-brown">{copy.eyebrow}</p>
          <h2 id="services-heading" className="display-md mt-5 max-w-[12ch]">
            {copy.headline}
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">{copy.intro}</p>
          <div className="relative mt-8 hidden aspect-[4/5] lg:block">
            <MediaFrame image={active.image} fill className="inset-0" sizes="40vw" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative mb-8 aspect-[16/10] lg:hidden">
            <MediaFrame image="serviceGeneral" fill className="inset-0" sizes="100vw" />
          </div>
          <ol>
            {services.map((service) => (
              <li key={service.id} className="border-t border-ink/15">
                <Link
                  href={`/services#${service.id}`}
                  className="group flex min-h-20 items-start gap-4 py-5 sm:gap-8"
                  onMouseEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                >
                  <span className="w-8 pt-1 font-display text-sm text-brown">{service.number}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl tracking-[-0.03em] sm:text-3xl">
                      {service.title}
                    </span>
                    <span className="mt-2 block max-w-lg text-sm text-ink-soft sm:text-base">{service.summary}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="mt-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
