import React from "react";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import ServiceCard from "@/components/service-card";
import { services } from "@/config/services";

export default function Services() {
  return (
    <section
      className="lg:py-40 flex flex-col gap-4 py-20 bg-white dark:bg-obsidian-black px-4"
      id="services"
    >
      <div className="max-w-8xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-3 md:*:gap-6">
          <span className={clsx(title({ size: "lg" }))}>Services</span>
          <span className={clsx(subtitle())}>
            We deliver strategic solutions that blend creative design with
            advanced technology. Our services are crafted to support founders
            and businesses in reaching new levels of success through impactful
            branding, innovative development, and comprehensive digital
            strategy.
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 max-w-8xl mx-auto">
          {services.map((service, i) => {
            const { name, details, image } = service;
            return (
              <ServiceCard
                name={name}
                details={details}
                image={image}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
