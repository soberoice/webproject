import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  NumberInput,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  IoEye,
  IoShareSocialOutline,
  IoStarOutline,
  IoStarSharp,
} from "react-icons/io5";
import { LuMinus, LuPlus } from "react-icons/lu";
import MiniCartModul from "./MiniCartModul";
import { FaArrowDownUpAcrossLine, FaArrowDownUpLock } from "react-icons/fa6";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { GrCircleQuestion } from "react-icons/gr";
import { BsBox2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

export default function ProductInfo() {
  const [mainImg, setMainImg] = useState("product.png");
  const productImg = [
    "product.png",
    "product4.png",
    "product2.png",
    "product.png",
    "product4.png",
    "product2.png",
  ];
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const colors = ["#FF6C6C", "#FF7629", "#FFF06C"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <Box width={"80%"} display={"flex"} justifyContent={"center"}>
      <HStack height={"600px"} width={"50%"}>
        <VStack
          overflow={"scroll"}
          scrollbar={"hidden"}
          height={"100%"}
          width={"10%"}
          gap={5}
        >
          {productImg.map((img) => (
            <Image
              src={img}
              minWidth={"100%"}
              cursor={"pointer"}
              onClick={() => setMainImg(img)}
            />
          ))}
        </VStack>
        <Image src={mainImg} maxH={"100%"} minWidth={"70%"} />
      </HStack>
      <Stack width={"50%"} height={"900px"} justifyContent={"space-between"}>
        <Text color={"#666666"} fontFamily="'Volkhov', serif" fontSize={"14px"}>
          FASCO
        </Text>
        <Box>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Text
              color={"black"}
              fontFamily="'Volkhov', serif"
              fontSize={"30px"}
            >
              Denim Jacket
            </Text>
            <IoStarOutline cursor={"pointer"} color="black" size={"18"} />
          </HStack>
          <HStack>
            {Array.from({ length: 5 }).map((_, index) => (
              <IoStarSharp key={index} color="black" size={15} />
            ))}
            <Text color={"black"}>(3)</Text>
          </HStack>
        </Box>
        <HStack width={"100%"}>
          <Text fontSize={"24px"} color={"black"} fontFamily="'Volkhov', serif">
            $39.00
          </Text>
          <Text color={"#666666"} fontFamily="'Volkhov', serif">
            $55.00
          </Text>
          <Stack
            color={"#fff"}
            backgroundColor={"#DA3F3F"}
            fontFamily="'Poppins', sans-serif"
            fontSize={"11px"}
            rounded={100}
            w={"72px"}
            height={"21px"}
            justify={"center"}
          >
            <Text padding={"auto"} textAlign={"center"}>
              save 33%
            </Text>
          </Stack>
        </HStack>
        <HStack>
          <IoEye color="black" size={15} />
          <Text
            color={"#8A8A8A"}
            fontSize={"16px"}
            fontFamily="'Poppins', sans-serif"
          >
            24 people are viewing this right now
          </Text>
        </HStack>
        <HStack
          width={"100%"}
          borderWidth={"1px"}
          borderColor={"#F8CCCC"}
          backgroundColor={"#FDEFEE"}
          height={"50px"}
          justifyContent={"space-between"}
          paddingX={5}
          fontFamily="'Volkhov', serif"
        >
          <Text color={"#FF706B"} fontSize={"18px"}>
            Hurry up! Sale ends in:
          </Text>
          <Text color={"#FF706B"} fontSize={"18px"}>
            00 : 05 : 56 : 40
          </Text>
        </HStack>
        <Stack width={"100%"}>
          <Text
            color={"#666666"}
            textAlign={"left"}
            fontSize={"16px"}
            fontFamily="'Poppins', sans-serif"
          >
            Only <b>9</b> item(s) left in stock!
          </Text>
          <Box
            rounded={5}
            width={"100"}
            height={"5px"}
            backgroundColor={"#DEDEDE"}
          >
            <Box
              rounded={5}
              width={"9%"}
              height={"5px"}
              backgroundColor={"#EF2D2D"}
            ></Box>
          </Box>
        </Stack>
        <Stack width={"100%"}>
          <Text color={"black"} fontFamily="'Volkhov', serif">
            Size: {selectedSize}
          </Text>
          <HStack>
            {sizes.map((size) => (
              <Button
                color={selectedSize === size ? "#fff" : "#8A8A8A"}
                borderWidth={"1px"}
                borderColor={selectedSize !== size && "#8A8A8A"}
                width={"40px"}
                height={"40px"}
                backgroundColor={selectedSize === size && "black"}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </HStack>
        </Stack>
        <Box width={"100%"}>
          <Text fontFamily="'Volkhov', serif" color={"#000"} width={"100%"}>
            Color
          </Text>
          <HStack flexWrap={"wrap"} gap={2}>
            {colors.map((col) => (
              <Box
                borderWidth={selectedColor === col ? 2 : 0}
                borderColor={"black"}
                borderRadius={"20px"}
                padding={1}
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
        <Box width={"100%"}>
          <Text fontFamily="'Volkhov', serif" color={"#000"} width={"100%"}>
            Quantity
          </Text>
          <HStack width={"100%"}>
            <NumberInput.Root defaultValue="3" unstyled spinOnPress={false}>
              <HStack gap="2">
                <NumberInput.DecrementTrigger asChild>
                  <IconButton variant="outline" size="sm">
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
                  <IconButton variant="outline" size="sm">
                    <LuPlus color="black" />
                  </IconButton>
                </NumberInput.IncrementTrigger>
                <MiniCartModul />
              </HStack>
            </NumberInput.Root>
          </HStack>
        </Box>
        <HStack w="100%">
          <Button width={"auto"} color={"black"} fontSize={"16px"}>
            <HiOutlineSwitchVertical size={25} />
            Compare
          </Button>
          <Button width={"auto"} color={"black"} fontSize={"16px"}>
            <GrCircleQuestion size={25} />
            Ask a question
          </Button>
          <Button width={"auto"} color={"black"} fontSize={"16px"}>
            <IoShareSocialOutline size={25} />
            Share
          </Button>
        </HStack>
        <Box>
          <Box display={"flex"} alignItems={"center"} gap={5}>
            <CiDeliveryTruck color={"black"} size={25} />
            <Text color={"black"} fontFamily="'Volkhov', serif">
              <b>Estimated Delivery: </b>Jul 30 - Aug 03
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} size={25} gap={5}>
            <BsBox2 color={"black"} />
            <Text color={"black"} fontFamily="'Volkhov', serif">
              <b>Free Shipping & Returns: </b>On all orders over $75
            </Text>
          </Box>
        </Box>
        <VStack width={"100%"}>
          <Image src="Cards.png" />
          <Text color={"black"} fontFamily="'Volkhov', serif">
            Guarantee safe & secure checkout
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
}
