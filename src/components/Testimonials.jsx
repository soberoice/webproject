import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/volkhov/400.css";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James K.",
      title: "Traveler",
      image: "./image (1).png", // replace with actual image path
      review:
        "You won’t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    },
    {
      name: "Sarah L.",
      title: "Designer",
      image: "./image (2).png",
      review:
        "Exactly what I was looking for. Thank you for making it so pleasant and hassle-free! All features are great.",
    },
    {
      name: "John W.",
      title: "Developer",
      image: "./image (1).png",
      review:
        "This is the best investment I've made. I will recommend it to everyone. It really saves time!",
    },
  ];
  return (
    <Box
      w="80%"
      pb={10}
      textAlign={"center"}
      marginTop={100}
      marginBottom={100}
    >
      <Text color={"#484848"} fontSize={"46px"} fontFamily="'Volkhov', serif">
        This Is What Our Customers Say
      </Text>
      <Text
        color={"#8A8A8A"}
        fontSize={"16px"}
        fontFamily="'Poppins', sans-serif"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis
      </Text>
      <HStack width={"100%"} justifyContent={"center"}>
        <Stack
          width={{ lg: "55%", base: "100%" }}
          height={{ lg: "350px", base: "175px" }}
          alignItems={"center"}
          direction={"row"}
          boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
          justifyContent={"center"}
          gap={10}
        >
          <Image src={testimonials[0].image} width={"240px"} height={"240px"} />
          <Box
            marginTop={50}
            width={"50%"}
            textAlign={"left"}
            display={"flex"}
            gap={5}
            flexDir={"column"}
            height={"240px"}
          >
            <Text
              color={"#484848"}
              fontSize={"16px"}
              fontFamily="'Poppins', sans-serif"
            >
              "{testimonials[0].review}"
            </Text>
            <HStack>
              {Array.from({ length: 5 }).map((_, index) => (
                <IoStarSharp key={index} color="#FCA120" size={20} />
              ))}
            </HStack>
            <Box width={"50%"}>
              <hr />
            </Box>
            <Text
              color={"#484848"}
              fontSize={"32px"}
              fontFamily="'Volkhov', serif"
            >
              {testimonials[0].name}
            </Text>
            <Text
              color={"#484848"}
              fontSize={"16px"}
              fontFamily="'Poppins', sans-serif"
            >
              {testimonials[0].title}
            </Text>
          </Box>
        </Stack>
      </HStack>
    </Box>
  );
}
