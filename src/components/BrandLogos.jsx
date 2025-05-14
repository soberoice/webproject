import { HStack, Image } from "@chakra-ui/react";
import React from "react";

export default function BrandLogos() {
  const logos = [
    "./Chanel.png",
    "./Louis.png",
    "./Prada.png",
    "./CalvinKlein.png",
    "./Denim.png",
  ];
  return (
    <HStack
      justifyContent={"space-evenly"}
      alignItems={"center"}
      width={"85%"}
      height={"200px"}
      flexWrap={"wrap"}
    >
      {logos.map((logo) => (
        <Image src={logo} />
      ))}
    </HStack>
  );
}
