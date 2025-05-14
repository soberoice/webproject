import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ItemCard1 from "./ItemCard1";
import "@fontsource/volkhov/400.css";
import "@fontsource/poppins/400.css";
export default function NewArrivals() {
  const buttons = [
    "Men’s Fashion",
    "Women’s Fashion",
    "Women Accessories",
    "Men Accessories",
    "Discount Deals",
  ];
  const [active, setActive] = useState("Men’s Fashion");
  return (
    <Stack width={"80%"} alignItems={"center"} marginTop={70}>
      <Stack width={"50%"} alignItems={"center"} marginBottom={50}>
        <Text
          color={"#484848"}
          fontWeight={"400"}
          fontSize={"46px"}
          fontFamily="'Volkhov', serif"
        >
          New Arrivals
        </Text>
        <Text
          color={"#8A8A8A"}
          fontWeight={"400"}
          textAlign={"center"}
          fontFamily="'Poppins', sans-serif"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae
          modi ullam minus dolorem explicabo saepe, fugiat, iste corrupti nemo
        </Text>
      </Stack>
      <HStack
        justifyContent={"space-evenly"}
        w={"100%"}
        marginBottom={50}
        fontFamily="'Poppins', sans-serif"
      >
        {buttons.map((btn) => (
          <Button
            h={55}
            w={200}
            rounded={10}
            color={active === btn ? "white" : "black"}
            backgroundColor={active === btn ? "black" : "white"}
            boxShadow={active === btn ? "md" : ""}
            onClick={() => setActive(btn)}
          >
            {btn}
          </Button>
        ))}
      </HStack>
      <ItemCard1 />
      <Button
        color={"white"}
        backgroundColor={"black"}
        w={200}
        h={50}
        rounded={10}
        boxShadow={"md"}
        fontFamily="'Poppins', sans-serif"
        marginTop={50}
      >
        View More
      </Button>
    </Stack>
  );
}
