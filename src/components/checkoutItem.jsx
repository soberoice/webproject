import {
  Box,
  Button,
  Circle,
  Float,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useProd } from "../Providers/ProductContext";

export default function CheckoutItem() {
  const { cart } = useProd();
  return (
    <Box
      width={{ lg: "70%", md: "80%", base: "100%" }}
      marginX={{ base: "auto", lg: 0 }}
    >
      {cart?.map((item) => (
        <HStack marginTop={5} w={"100%"}>
          <Box position="relative" w="137px" h="137px" bg="bg.emphasized">
            <Image
              src={`/${item.prod.image}`}
              height={"137px"}
              width={"137px"}
            />
            <Float>
              <Circle
                fontFamily="'Volkhov', serif"
                size="5"
                bg="#FF0606"
                color="white"
              >
                {item.quantity}
              </Circle>
            </Float>
          </Box>
          <Stack width={"100%"}>
            <Text
              color={"black"}
              fontSize={"18px"}
              fontFamily="'Volkhov', serif"
            >
              {item.prod.name}
            </Text>
            <HStack
              width={"100%"}
              justify={"space-between"}
              fontFamily="'Poppins', sans-serif"
            >
              <Text color={"#484848"}>{item.prod.color}</Text>
              <Text color={"#484848"}>${item.prod.price}</Text>
            </HStack>
          </Stack>
        </HStack>
      ))}
      <HStack w={"100%"} marginTop={5}>
        <Input
          placeholder="Discount code"
          backgroundColor={"white"}
          border={"none"}
          fontFamily="'Poppins', sans-serif"
          height={"70px"}
          color={"black"}
          fontSize={"18px"}
        />
        <Button
          color={"white"}
          backgroundColor={"black"}
          w={"160px"}
          h={"60px"}
          rounded={10}
          boxShadow={"md"}
          display={{ lg: "flex", base: "none" }}
          fontFamily="'Poppins', sans-serif"
        >
          Apply
        </Button>
      </HStack>
      <Box w={"100%"} fontFamily="'Poppins', sans-serif">
        <HStack w={"100%"} marginTop={5} justify={"space-between"}>
          <Text color={"#484848"} fontSize={"18px"}>
            Subtotal:{" "}
          </Text>
          <Text color={"#484848"} fontSize={"18px"}>
            $100.00
          </Text>
        </HStack>
        <HStack w={"100%"} marginTop={5} justify={"space-between"}>
          <Text color={"#484848"} fontSize={"18px"}>
            Shipping:{" "}
          </Text>
          <Text color={"#484848"} fontSize={"18px"}>
            $10.00
          </Text>
        </HStack>
        <HStack w={"100%"} marginTop={5} justify={"space-between"}>
          <Text color={"#484848"} fontSize={"18px"}>
            total:{" "}
          </Text>
          <Text color={"#484848"} fontSize={"18px"}>
            $110.00
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}
