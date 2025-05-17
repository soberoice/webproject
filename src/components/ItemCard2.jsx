import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import PaginationList from "./Pagination";
import { useNavigate } from "react-router";

export default function ItemCard2() {
  const nav = useNavigate();
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
          cursor={"pointer"}
          onClick={() => nav("/product")}
          fontFamily="'Poppins', sans-serif"
          shadowColor={"#ebe8e8"}
          alignItems={"center"}
          style={{
            height: 530,
            width: "30%",
            backgroundColor: "white",
            borderRadius: 10,
            marginHorizontal: 2,
            padding: 15,
          }}
          justifyContent={"space-evenly"}
          marginBottom={50}
        >
          <Image src="./item2.png" minWidth={"300px"} />
          <VStack
            justifyContent={"space-between"}
            w={"300px"}
            alignItems={"start"}
          >
            <Stack gap={2}>
              <Text color={"#000000"} fontSize={"20px"} fontWeight={"500"}>
                Long Dress
              </Text>
              <Text color={"#000000"} fontSize={"16px"}>
                $8.00
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
