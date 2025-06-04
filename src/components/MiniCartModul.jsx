import {
  Box,
  Button,
  Checkbox,
  CloseButton,
  Drawer,
  HStack,
  IconButton,
  Image,
  NumberInput,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useProd } from "../Providers/ProductContext";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useNavigate } from "react-router";

export default function MiniCartModul({ data, quantity, color }) {
  const { addToCart, cart } = useProd();
  const nav = useNavigate();
  return (
    <Drawer.Root size={"md"}>
      <Drawer.Trigger asChild>
        <Button
          w={"100%"}
          onClick={() =>
            addToCart({ prod: data, quantity: quantity, color: color })
          }
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
              <Box>
                <Text
                  flexDir={"column"}
                  color={"black"}
                  fontSize={"15"}
                  fontFamily="'Poppins', sans-serif"
                  fontWeight={400}
                >
                  Buy <b>$122.35</b> more and get <b>free shipping</b>
                </Text>
              </Box>
              <Box>
                {cart?.map((item) => (
                  <HStack marginTop={5} key={item.prod.id}>
                    <Image
                      width={"100px"}
                      height={"150px"}
                      src={`/${item.prod.image}`}
                    />
                    <Stack>
                      <Text color={"black"}>{item.prod.name}</Text>
                      <Text color={"black"}>color: {item.color}</Text>
                      <Text color={"black"}>${item.prod.price.toFixed(2)}</Text>
                      <NumberInput.Root
                        defaultValue={item.quatity}
                        unstyled
                        spinOnPress={false}
                        value={item.quantity}
                      >
                        <HStack gap={0}>
                          <NumberInput.DecrementTrigger asChild>
                            <IconButton variant="outline" size="sm">
                              <LuMinus color="black" />
                            </IconButton>
                          </NumberInput.DecrementTrigger>
                          <NumberInput.ValueText
                            textAlign="center"
                            fontSize="lg"
                            color={"black"}
                            w={"30px"}
                          />
                          <NumberInput.IncrementTrigger asChild>
                            <IconButton variant="outline" size="sm">
                              <LuPlus color="black" />
                            </IconButton>
                          </NumberInput.IncrementTrigger>
                        </HStack>
                      </NumberInput.Root>
                    </Stack>
                  </HStack>
                ))}
              </Box>
            </Drawer.Body>
            <Drawer.Footer justifyContent={"center"}>
              <Stack
                width={"85%"}
                height={150}
                justifyContent={"space-between"}
              >
                <Checkbox.Root
                  color={"black"}
                  variant={"solid"}
                  fontFamily="'Poppins', sans-serif"
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label fontSize={"15px"}>
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
                  onClick={() => nav("/cart")}
                >
                  Check Out
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
