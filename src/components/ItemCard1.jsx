import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";

export default function ItemCard1() {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      width={"100%"}
      justifyContent={"space-evenly"}
      gap={10}
    >
      {Array.from({ length: 6 }).map(() => (
        <Stack
          boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
          fontFamily="'Poppins', sans-serif"
          shadowColor={"#ebe8e8"}
          alignItems={"center"}
          width={{ lg: 380, base: "100%" }}
          style={{
            height: 440,
            backgroundColor: "white",
            borderRadius: 10,
            marginHorizontal: 2,
            padding: 15,
          }}
          justifyContent={"space-evenly"}
        >
          <Image src="./Images (2).png" width={"335px"} />
          <HStack
            justifyContent={"space-between"}
            w={{ lg: "335px", base: "100%" }}
          >
            <Stack gap={0}>
              <Text color={"#484848"} fontSize={"20px"} fontWeight={"500"}>
                Long Dress
              </Text>
              <Text color={"#8A8A8A"} fontSize={"12px"}>
                Al Karam
              </Text>
            </Stack>
            <HStack>
              <IoStarSharp color="#FCA120" size={20} />
              <IoStarSharp color="#FCA120" size={20} />
              <IoStarSharp color="#FCA120" size={20} />
              <IoStarSharp color="#FCA120" size={20} />
              <IoStarSharp color="#FCA120" size={20} />
            </HStack>
          </HStack>
          <Text
            color={"#484848"}
            fontSize={"12px"}
            w={{ lg: "335px", base: "100%" }}
            fontWeight={"500"}
          >
            (4.1k) Customer Reviews
          </Text>
          <HStack
            justifyContent={"space-between"}
            w={{ lg: "335px", base: "100%" }}
          >
            <Text color={"#484848"} fontSize={"24px"} fontWeight={"500"}>
              $95.50
            </Text>
            <Text color={"#FF4646"} fontSize={"12px"}>
              Almost Sold Out
            </Text>
          </HStack>
        </Stack>
      ))}
    </Stack>
  );
}
