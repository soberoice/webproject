import { Box, Button, Checkbox, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";

export default function ChackoutBlock({ subTotal }) {
  const nav = useNavigate();
  return (
    <Box width={"80%"} marginTop={10}>
      <Stack
        width={{ lg: "30%", base: "100%" }}
        marginLeft={"auto"}
        height={200}
        gap={5}
      >
        <Checkbox.Root
          colorPalette={"grey"}
          color={"#8A8A8A"}
          variant={"subtle"}
          fontFamily="'Poppins', sans-serif"
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label fontSize={"15px"}>
            For <b>$10.00</b> please wrap the product
          </Checkbox.Label>
        </Checkbox.Root>

        <hr />
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text
            color={"black"}
            fontSize={"22px"}
            fontFamily="'Volkhov', serif"
            fontWeight={400}
          >
            Subtotal
          </Text>
          <Text
            color={"black"}
            fontSize={"22px"}
            fontFamily="'Volkhov', serif"
            fontWeight={400}
          >
            ${subTotal}
          </Text>
        </HStack>
        <Button
          color={"white"}
          backgroundColor={"black"}
          w={"100%"}
          h={50}
          rounded={10}
          boxShadow={"md"}
          onClick={() => nav("/checkout")}
        >
          Checkout
        </Button>
        <Button
          color={"black"}
          backgroundColor={"transparent"}
          w={"100%"}
          h={50}
          textDecoration={"underline"}
          fontFamily="'Volkhov', serif"
        >
          View More
        </Button>
      </Stack>
    </Box>
  );
}
