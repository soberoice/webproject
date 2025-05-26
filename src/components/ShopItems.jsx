import {
  Accordion,
  Box,
  Button,
  HStack,
  Span,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ItemCard2 from "./ItemCard2";

export default function ShopItems() {
  const colors = [
    "#FF6C6C",
    "#FF7629",
    "#FFF06C",
    "#9BFF6C",
    "#6CFF9E",
    "#6CFFDC",
    "#6CB9FF",
    "#6CF6FF",
    "#6CA7FF",
  ];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [collection, setCollection] = useState("Best Selling");
  const sizes = ["S", "M", "L", "XL"];

  const items = [
    {
      value: "a",
      name: "Brands",
      items: ["Minimog", "Retrolie", "Brook", "Learts", "Vagabond", "Abby"],
    },
    {
      value: "b",
      name: "Collections",
      items: ["All products", "Best sellers", "New arrivals", "Accessories"],
    },
    {
      value: "c",
      name: "Tags",
      items: [
        "Fashion",
        "Hats",
        "Sandal",
        "Belt",
        "Bags",
        "Snacker",
        "Denim",
        "Minimog",
        "Vagabond",
        "Sunglasses",
      ],
    },
  ];
  const prices = ["$0-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"];
  function handleClick(type, item) {
    if (type === "Collections") {
      setCollection(item);
    } else return;
  }
  return (
    <Box width={"80%"} marginBottom={50}>
      <Box width={"100%"} textAlign={"center"} my={50}>
        <Text color={"black"} fontSize={"42px"} fontFamily="'Volkhov', serif">
          Shop
        </Text>
      </Box>
      <Stack width={"100%"} flexDir={"row"} justifyContent={"center"} gap={10}>
        <Box
          width={"320px"}
          height={"1100"}
          gap={10}
          display={{ lg: "flex", base: "none" }}
          flexDir={"column"}
        >
          <Box>
            <Text
              fontFamily="'Volkhov', serif"
              fontSize={"30px"}
              color={"#000"}
              width={"100%"}
            >
              Filter
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily="'Volkhov', serif"
              fontSize={"18px"}
              color={"#000"}
              width={"100%"}
            >
              size
            </Text>
            <HStack>
              {sizes.map((size) => (
                <Button
                  color={"#8A8A8A"}
                  borderWidth={"1px"}
                  borderColor={"#8A8A8A"}
                  width={"40px"}
                  key={size}
                  height={"40px"}
                >
                  {size}
                </Button>
              ))}
            </HStack>
          </Box>
          <Box>
            <Text
              fontFamily="'Volkhov', serif"
              fontSize={"18px"}
              color={"#000"}
              width={"100%"}
            >
              Color
            </Text>
            <HStack flexWrap={"wrap"} gap={2}>
              {colors.map((col) => (
                <Box
                  borderWidth={selectedColor === col ? 2 : 0}
                  borderColor={"black"}
                  borderRadius={"20px"}
                  padding={1}
                  key={col}
                >
                  <Box
                    width={"30px"}
                    height={"30px"}
                    borderRadius={"15px"}
                    backgroundColor={col}
                    onClick={() => setSelectedColor(col)}
                  ></Box>
                </Box>
              ))}
            </HStack>
          </Box>
          <Box w={"100%"}>
            <Text
              fontFamily="'Volkhov', serif"
              fontSize={"18px"}
              color={"#000"}
              width={"100%"}
            >
              Price
            </Text>
            <VStack flexWrap={"wrap"} gap={2} w={"100%"}>
              {prices.map((price, index) => (
                <Text
                  textAlign={"left"}
                  color={"#8A8A8A"}
                  fontSize={"16px"}
                  fontFamily="'Poppins', sans-serif"
                  w={"100%"}
                  key={index}
                >
                  {price}
                </Text>
              ))}
            </VStack>
          </Box>
          <Accordion.Root
            defaultValue={["a", "b", "c"]}
            variant={"plain"}
            multiple
          >
            {items.map((item) => (
              <Accordion.Item value={item.value} key={item.value}>
                <Accordion.ItemTrigger>
                  <Span
                    fontFamily="'Volkhov', serif"
                    flex="1"
                    color={"black"}
                    fontSize={"18px"}
                  >
                    {item.name}
                  </Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>
                    <Stack
                      flexDir={item.name === "Collections" ? "column" : "row"}
                      flexWrap={"wrap"}
                    >
                      {item.items.map((i, index) => (
                        <Text
                          onClick={() => handleClick(item.name, i)}
                          cursor={"pointer"}
                          color={"#8A8A8A"}
                          fontFamily="'Poppins', sans-serif"
                          key={index}
                        >
                          {i}
                        </Text>
                      ))}
                    </Stack>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Box>
        <Box width={{ lg: "70%", base: "100%" }}>
          <Text
            fontFamily="'Volkhov', serif"
            fontSize={"18px"}
            color={"#000"}
            width={"100%"}
          >
            {collection}
          </Text>
          <ItemCard2 />
        </Box>
      </Stack>
    </Box>
  );
}
