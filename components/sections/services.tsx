import React from "react";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import ServiceCard from "@/components/serviceCard";
import { services } from "@/config/services";

export default function Services() {
  return (
    <section
      className="lg:py-40 flex flex-col gap-4 py-8 md:py-10 bg-white dark:bg-obsidian-black"
      id="services"
    >
      <div className=" max-w-8xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <span className={clsx(title({ size: "lg" }))}>Services</span>
          <span className={clsx(subtitle())}>
            We deliver strategic solutions that blend creative design with
            advanced technology. Our services are crafted to support founders
            and businesses in reaching new levels of success through impactful
            branding, innovative development, and comprehensive digital
            strategy.
          </span>
        </div>
        <div className="lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:gap-10 max-w-8xl mx-auto">
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
