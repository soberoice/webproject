import {
  Box,
  Button,
  Checkbox,
  CloseButton,
  Drawer,
  HStack,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function MiniCartModul() {
  return (
    <Drawer.Root size={"lg"}>
      <Drawer.Trigger asChild>
        <Button
          w={"100%"}
          variant="outline"
          size="sm"
          color={"black"}
          _hover={{ backgroundColor: "transparent" }}
          _active={{ backgroundColor: "transparent" }}
          fontFamily="'Volkhov', serif"
        >
          Order Now
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content backgroundColor={"white"}>
            <Drawer.Header>
              <Drawer.Title
                color={"black"}
                fontSize={"42px"}
                fontFamily="'Volkhov', serif"
                fontWeight={400}
              >
                Shopping Cart
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body justifyContent={"center"}>
              <Box w={"85%"}>
                <Text
                  flexDir={"column"}
                  color={"black"}
                  fontSize={"26px"}
                  fontFamily="'Poppins', sans-serif"
                  fontWeight={400}
                >
                  Buy <b>$122.35</b> more and get <b>free shipping</b>
                </Text>
              </Box>
            </Drawer.Body>
            <Drawer.Footer justifyContent={"center"}>
              <Stack
                width={"85%"}
                height={150}
                justifyContent={"space-between"}
              >
                <Checkbox.Root
                  colorPalette={"grey"}
                  color={"black"}
                  variant={"subtle"}
                  fontFamily="'Poppins', sans-serif"
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label fontSize={"22px"}>
                    For $10.00 please wrap the product
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
                    $100.00
                  </Text>
                </HStack>
                <Button
                  color={"white"}
                  backgroundColor={"black"}
                  w={"100%"}
                  h={50}
                  rounded={10}
                  boxShadow={"md"}
                >
                  Sign Up
                </Button>
              </Stack>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton
                color={"black"}
                _hover={{ backgroundColor: "transparent", color: "black" }}
                size="xl"
              />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
