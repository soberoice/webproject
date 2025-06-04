import {
  Box,
  For,
  HStack,
  IconButton,
  Image,
  NumberInput,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useProd } from "../Providers/ProductContext";

export default function Cartitem({ setSubTotal }) {
  const { cart, removeCart } = useProd();
  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.quantity * item.prod.price,
      0
    );
    setSubTotal(total);
  }, [cart]);
  return (
    <Box
      w={"100%"}
      overflowX={"scroll"}
      scrollbar={{ lg: "hidden", base: "visible" }}
    >
      <Table.Root mx={"auto"} size="sm" color={"black"} width={"80%"}>
        <Table.Header>
          <Table.Row bg={"transparent"}>
            <Table.ColumnHeader width={"30%"} color={"black"}>
              Product
            </Table.ColumnHeader>
            <Table.ColumnHeader width={"30%"} color={"black"} textAlign="start">
              Price
            </Table.ColumnHeader>
            <Table.ColumnHeader width={"30%"} color={"black"}>
              Quantity
            </Table.ColumnHeader>
            <Table.ColumnHeader width={"30%"} color={"black"} textAlign="end">
              Total
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cart?.map((item) => (
            <Table.Row
              key={item.prod.id}
              bg={"transparent"}
              height={{ lg: "200px", base: "auto" }}
            >
              <Table.Cell>
                <Stack
                  height={"200"}
                  direction={{ lg: "row", base: "column" }}
                  width={{ lg: "80%", base: "75px" }}
                >
                  <Image
                    w={{ lg: "150px", base: "100px" }}
                    h={{ lg: "200px", base: "105px" }}
                    src={`/${item.prod.image}`}
                  />
                  <Stack gap={{ lg: 4, base: 0 }}>
                    <Text
                      fontSize={{ lg: "18px", base: "14px" }}
                      fontFamily="'Volkhov', serif"
                    >
                      {item.prod.name}
                    </Text>
                    <Text
                      fontSize={{ lg: "18px", base: "14px" }}
                      fontFamily="'Poppins', sans-serif"
                      color={"#8A8A8A"}
                    >
                      Color: {item.prod.color}
                    </Text>

                    <Text
                      fontSize={{ lg: "18px", base: "14px" }}
                      fontFamily="'Poppins', sans-serif"
                      color={"#8A8A8A"}
                      textDecoration={"underline"}
                      onClick={() => removeCart(item)}
                      cursor={"pointer"}
                    >
                      Remove
                    </Text>
                  </Stack>
                </Stack>
              </Table.Cell>
              <Table.Cell>
                <Stack height={"100px"}>${item.prod.price.toFixed(2)}</Stack>
              </Table.Cell>
              <Table.Cell>
                <NumberInput.Root
                  height={"100px"}
                  unstyled
                  spinOnPress={false}
                  defaultValue={item.quantity}
                  value={item.quantity}
                >
                  <HStack borderWidth={"1px"} width={"115px"} rounded={5}>
                    <NumberInput.DecrementTrigger asChild>
                      <IconButton variant="outline" size="sm" border={"none"}>
                        <LuMinus color="black" />
                      </IconButton>
                    </NumberInput.DecrementTrigger>
                    <NumberInput.ValueText
                      textAlign="center"
                      fontSize="sm"
                      minW="3ch"
                      color={"black"}
                    />
                    <NumberInput.IncrementTrigger asChild>
                      <IconButton variant="outline" size="sm" border={"none"}>
                        <LuPlus color="black" />
                      </IconButton>
                    </NumberInput.IncrementTrigger>
                  </HStack>
                </NumberInput.Root>
              </Table.Cell>
              <Table.Cell textAlign="end">
                <Box height={"100px"}>
                  ${(item.prod.price * item.quantity).toFixed(2)}
                </Box>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
