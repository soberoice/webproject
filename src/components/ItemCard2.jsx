import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import PaginationList from "./Pagination";
import { useNavigate } from "react-router";
import { useProd } from "../Providers/ProductContext";

//ITEM CARD FOR ITEMS IN THE SHOP PAGE
export default function ItemCard2() {
  const nav = useNavigate();
  const { products } = useProd();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      width={"100%"}
      justifyContent={"space-evenly"}
      gap={10}
    >
      {products.map((item, index) => (
        <Stack
          key={index}
          cursor={"pointer"}
          fontFamily="'Poppins', sans-serif"
          shadowColor={"#ebe8e8"}
          alignItems={"center"}
          height={530}
          width={{ lg: "30%", md: "45%", base: "100%" }}
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            marginHorizontal: 2,
            padding: 15,
          }}
          justifyContent={"space-evenly"}
          position={"relative"}
        >
          <Image
            onClick={() => nav(`/product/${item.id}`)}
            src={`/${item.image}`}
            minWidth={"300px"}
            maxWidth={"300px"}
            minH={"400px"}
            maxH={"400px"}
          />
          {item.isSoldout && (
            <Stack
              width={54}
              height={54}
              backgroundColor={"#B1B1B1"}
              borderRadius={100}
              position={"absolute"}
              bottom={"55%"}
              justifyContent={"center"}
              fontSize={"12px"}
              fontWeight={"800"}
              textAlign={"center"}
              lineHeight={"12px"}
            >
              SOLD OUT
            </Stack>
          )}
          <VStack
            justifyContent={"space-between"}
            w={"300px"}
            alignItems={"start"}
          >
            <Stack gap={2}>
              <Text color={"#000000"} fontSize={"20px"} fontWeight={"500"}>
                {item.name}
              </Text>
              <Text color={"#000000"} fontSize={"16px"}>
                ${item.price.toFixed(2)}
              </Text>
            </Stack>
            <HStack>
              <Box
                borderWidth={2}
                borderColor={"black"}
                borderRadius={"20px"}
                padding={0.5}
              >
                <Box
                  width={"26px"}
                  height={"26px"}
                  borderRadius={"15px"}
                  backgroundColor={"#FFD700"}
                ></Box>
              </Box>
              <Box
                // borderWidth={2}
                // borderColor={"black"}
                borderRadius={"20px"}
                padding={1}
              >
                <Box
                  width={"26px"}
                  height={"26px"}
                  borderRadius={"15px"}
                  backgroundColor={"#000"}
                ></Box>
              </Box>
            </HStack>
          </VStack>
        </Stack>
      ))}
      <PaginationList />
    </Stack>
  );
}
