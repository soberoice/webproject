import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function LimitedBanner() {
  const items = [
    {
      name: "High Quality",
      image: "/quality.png",
      info: "crafted from top materials",
    },
    {
      name: "Warrany Protection",
      image: "/warranty.png",
      info: "Over 2 years",
    },
    {
      name: "Free Shipping",
      image: "/shipping.png",
      info: "Order over 150 $",
    },
    {
      name: "24 / 7 Support",
      image: "/support.png",
      info: "Dedicated support",
    },
  ];
  return (
    <Box width={"100%"} marginTop={100} marginBottom={100}>
      <Box
        display={{ lg: "flex", md: "block" }}
        direction={"row"}
        width={"100%"}
        padding={0}
        height={{ lg: "479px", md: "1100px", base: "800px" }}
        backgroundColor={"#DADADA"}
        alignItems={{ lg: "center" }}
        overflow={"hidden"}
        position={"relative"}
      >
        <Image
          height={{ md: "700px", sm: "600px", base: "320px", lg: "479px" }}
          src="/image (4).png"
        />
        {/* <Box
          height={{ lg: "100%", base: "2px" }}
          backgroundColor={"black"}
          width={{ lg: "2px", base: "100%" }}
          transform={{ lg: "skewX(-18deg)" }}
          position={"absolute"}
          right={{ lg: "50%" }}
          left={{ lg: "50%" }}
          display={{ lg: "block", base: "none" }}
        ></Box> */}
        <Stack height={"90%"} marginTop={{ base: 30 }} alignItems={"center"}>
          <Stack width={{ lg: "70%", base: "90%" }}>
            <Text color={"#767676"} fontFamily="'Poppins', sans-serif">
              Women Collection
            </Text>
            <Text
              color={"#484848"}
              fontSize={"46px"}
              fontFamily="'Volkhov', serif"
            >
              Peaky Blinders
            </Text>
            <Text
              textDecoration={"underline"}
              color={"#000000"}
              fontSize={"16px"}
              fontFamily="'Poppins', sans-serif"
            >
              DESCRIPTION
            </Text>
            <Text
              color={"#767676"}
              fontSize={"16px"}
              fontFamily="'Poppins', sans-serif"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </Text>
            <HStack>
              <Text
                color={"#767676"}
                fontSize={"16px"}
                fontFamily="'Poppins', sans-serif"
              >
                Size:{" "}
              </Text>
              <Text
                color={"white"}
                backgroundColor={"black"}
                width={"50px"}
                height={"25px"}
                textAlign={"center"}
                rounded={5}
              >
                M
              </Text>
            </HStack>
            <Text
              color={"#000"}
              fontSize={"24px"}
              fontFamily="'Poppins', sans-serif"
            >
              $100.00
            </Text>
            <Button
              color={"white"}
              backgroundColor={"black"}
              w={200}
              h={50}
              rounded={10}
              boxShadow={"md"}
              fontFamily="'Poppins', sans-serif"
            >
              Buy Now
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Stack
        justifyContent={"center"}
        width={"100%"}
        height={{ lg: "150px", base: "300px" }}
        boxShadow="0px 5px 20px rgba(0, 0, 0, 0.1)"
      >
        <HStack
          justifyContent={{ lg: "space-evenly", base: "flex-start" }}
          flexWrap={"wrap"}
          width={"80%"}
          mx={"auto"}
        >
          {items.map((item) => (
            <HStack key={item.name} gap={5}>
              <Image w={"46px"} src={item.image} />
              <Box>
                <Text
                  color={"#484848"}
                  fontSize={"20px"}
                  fontFamily="'Poppins', sans-serif"
                  fontWeight={500}
                >
                  {item.name}
                </Text>
                <Text
                  color={"#484848"}
                  fontSize={"16px"}
                  fontFamily="'Poppins', sans-serif"
                >
                  {item.info}
                </Text>
              </Box>
            </HStack>
          ))}
        </HStack>
      </Stack>
    </Box>
  );
}
