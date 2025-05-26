import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins/400.css";
import "@fontsource/volkhov/400.css";

export default function FollowInstagram() {
  const images = [
    "image.png",
    "image-2.png",
    "image-5.png",
    "image-3.png",
    "image-6.png",
    "image-4.png",
    "image-1.png",
  ];
  return (
    <Stack alignItems={"center"} marginTop={100} marginBottom={100} gap={10}>
      <VStack
        width={{ lg: "45%", base: "100%" }}
        textAlign={"center"}
        marginBottom={50}
      >
        <Text fontFamily="'Volkhov', serif" color={"#484848"} fontSize={"46px"}>
          Follow Us On Instagram
        </Text>
        <Text fontFamily="'Volkhov', serif" color={"#8A8A8A"} fontSize={"16px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </Text>
      </VStack>
      <HStack gap={0}>
        {images.map((img, index) => (
          <Image key={index} maxW={"14.3%"} minHeight={"280px"} src={img} />
        ))}
      </HStack>
    </Stack>
  );
}
