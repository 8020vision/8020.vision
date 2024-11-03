import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { title, subtitle } from "./primitives";
import Image from "next/image";

export default function ServiceCard({
  name,
  details,
  image,
}: {
  name: string;
  details: string[];
  image: string;
}) {
  return (
    <Card
      isBlurred
      className="border-none bg-cool-mist-gray dark:bg-default-100/50 max-w-[610px] py-5"
      shadow="sm"
    >
      {/* <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://nextui.org/images/hero-card-complete.jpeg"
        width={270}
      /> */}
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <span className={title({ size: "sm" })}>{name}</span>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {details.map((detail, i) => {
          return (
            <p className={subtitle()} key={i}>
              {detail}
            </p>
          );
        })}
      </CardBody>
    </Card>
  );
}
