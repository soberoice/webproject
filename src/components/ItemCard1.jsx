import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { IoStarSharp } from "react-icons/io5";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import { useNavigate } from "react-router";
import { useProd } from "../Providers/ProductContext";

export default function ItemCard1() {
  const { products } = useProd();
  const nav = useNavigate();
  return (
    <Stack
      cursor={"pointer"}
      direction={"row"}
      flexWrap={"wrap"}
      width={"100%"}
      justifyContent={"space-evenly"}
      gap={10}
    >
      {products.map((prod, index) => (
        <Stack
          onClick={() => nav(`/product/${prod.id}`)}
          key={index}
          boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
          fontFamily="'Poppins', sans-serif"
          shadowColor={"#ebe8e8"}
          alignItems={"center"}
          width={{ lg: 380, base: "100%", md: "45%", sm: "380px" }}
          style={{
            height: 440,
            backgroundColor: "white",
            borderRadius: 10,
            marginHorizontal: 2,
            padding: 15,
          }}
          justifyContent={"space-evenly"}
        >
          <Image
            borderRadius={15}
            src={prod.image}
            width={"335px"}
            height={"240px"}
          />
          <HStack
            justifyContent={"space-between"}
            w={{ lg: "335px", base: "100%" }}
          >
            <Stack gap={0}>
              <Text color={"#484848"} fontSize={"20px"} fontWeight={"500"}>
                {prod.name}
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
              ${prod.price.toFixed(2)}
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
