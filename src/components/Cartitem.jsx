import {
  Box,
  HStack,
  IconButton,
  Image,
  NumberInput,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

export default function Cartitem() {
  const items = [
    {
      id: 1,
      name: "Mini dress with ruffled straps",
      price: 79.99,
      total: 79.99,
      image: "product.png",
      color: "red",
    },
  ];
  return (
    <Table.Root size="sm" color={"black"} width={"80%"}>
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
        {items.map((item) => (
          <Table.Row key={item.id} bg={"transparent"} height={"250px"}>
            <Table.Cell>
              <Stack direction={"row"} width={"80%"}>
                <Image maxWidth={"150px"} maxH={"200px"} src={item.image} />
                <Stack gap={4}>
                  <Text fontSize={"18px"} fontFamily="'Volkhov', serif">
                    {item.name}
                  </Text>
                  <Text
                    fontSize={"18px"}
                    fontFamily="'Poppins', sans-serif"
                    color={"#8A8A8A"}
                  >
                    Color: {item.color}
                  </Text>

                  <Text
                    fontSize={"18px"}
                    fontFamily="'Poppins', sans-serif"
                    color={"#8A8A8A"}
                    textDecoration={"underline"}
                  >
                    Remove
                  </Text>
                </Stack>
              </Stack>
            </Table.Cell>
            <Table.Cell>
              <Stack height={"200px"}>${item.price}</Stack>
            </Table.Cell>
            <Table.Cell>
              <NumberInput.Root
                height={"200px"}
                defaultValue="1"
                unstyled
                spinOnPress={false}
              >
                <HStack gap="2" borderWidth={"1px"} width={"125px"} rounded={5}>
                  <NumberInput.DecrementTrigger asChild>
                    <IconButton variant="outline" size="sm" border={"none"}>
                      <LuMinus color="black" />
                    </IconButton>
                  </NumberInput.DecrementTrigger>
                  <NumberInput.ValueText
                    textAlign="center"
                    fontSize="lg"
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
              <Box height={"200px"}>${item.total}</Box>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
