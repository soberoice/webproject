import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemCard1 from "./ItemCard1";
import "@fontsource/volkhov/400.css";
import "@fontsource/poppins/400.css";
import { useNavigate } from "react-router";
export default function NewArrivals() {
  const navigate = useNavigate();
  const buttons = [
    "Men’s Fashion",
    "Women’s Fashion",
    "Women's Accessories",
    "Men Accessories",
    "Discount Deals",
  ];
  const [active, setActive] = useState("Men’s Fashion");
  const [img, setImg] = useState("Images (2).png");
  useEffect(() => {
    if (active === "Men’s Fashion") {
      setImg("2image.png");
    } else if (active === "Women's Accessories") {
      setImg("2image.png");
    } else if (active === "Discount Deals") {
      setImg("2image.png");
    } else {
      setImg("../Images (2).png");
    }
  }, [active]);
  return (
    <Stack width={"80%"} alignItems={"center"} marginY={100}>
      <Stack
        width={{ lg: "50%", base: "100%" }}
        alignItems={"center"}
        marginBottom={50}
      >
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
        overflowX={"scroll"}
        height={70}
        px={10}
        scrollbar={"hidden"}
      >
        {buttons.map((btn) => (
          <Button
            key={btn}
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
      <ItemCard1 img={img} />
      <Button
        color={"white"}
        backgroundColor={"black"}
        w={200}
        h={50}
        rounded={10}
        boxShadow={"md"}
        fontFamily="'Poppins', sans-serif"
        marginTop={50}
        onClick={() => navigate("/shop")}
      >
        View More
      </Button>
    </Stack>
  );
}
