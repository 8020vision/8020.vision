import React from "react";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function Contact() {
  return (
    <section className="px-4 py-20 lg:py-40 flex flex-col gap-4" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4 z-10">
          <span className={clsx(title({ size: "lg" }))}>Contact</span>
          <span className={clsx(subtitle())}>
            Thank you for reaching out to 80/20 Vision. We’re here to answer
            your questions, discuss your project needs, or explore potential
            collaborations. Please fill out the form below, and we’ll get back
            to you promptly.
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:grid-cols-[320px_1fr] gap-10">
          <div className="w-full flex flex-col gap-10">
            <Input type="text" label="Name" isRequired />
            <Input type="email" label="Email" isRequired />
          </div>
          <Textarea label="How can we help you?" isRequired minRows={8} />
        </div>
        <Button
          size={"lg"}
          className="w-full md:max-w-[320px] mx-auto"
          // onPress={() => scrollToSection("contact")}
        >
          Submit
        </Button>
      </div>
    </section>
  );
}
