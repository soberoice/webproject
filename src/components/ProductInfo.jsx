import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  NumberInput,
  RatingGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  IoEye,
  IoShareSocialOutline,
  IoStar,
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
import { useParams } from "react-router";
import { useProd } from "../Providers/ProductContext";

export default function ProductInfo() {
  const { id } = useParams();
  const { products, addToFavorite, inFavorite, favorite } = useProd();
  const [data, setData] = useState();
  const [mainImg, setMainImg] = useState("product.png");
  const [amount, setAmount] = useState(1);
  const [productImg, setProductImg] = useState();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState();
  useEffect(() => {
    console.log("favorite: ", favorite);
    console.log("prod id:", id);
    const info = products.filter((prod) => prod.id == id);
    setData(products.filter((prod) => prod.id == id)[0]);
    setMainImg(info[0].image);
    setSelectedColor(info[0].colors[0].name);
    setSelectedSize(info[0].sizes[0]);
    setProductImg([
      info[0].image,
      "product.png",
      "product4.png",
      "product2.png",
      "product.png",
      "product4.png",
      "product2.png",
    ]);
    console.log("info:", info);
  }, []);
  function handleClick(isMinus) {
    if (isMinus && amount >= 1) {
      setAmount(amount - 1);
    } else {
      setAmount(amount + 1);
    }
  }
  return (
    <Box width={"100%"} minHeight={"800px"}>
      {data && (
        <Box
          width={"80%"}
          display={"flex"}
          flexDirection={{ lg: "row", base: "column" }}
          justifyContent={"center"}
          gap={{ lg: 0, base: 5 }}
          marginX={"auto"}
        >
          {console.log("data: ", data)}
          <HStack
            height={{ sm: "600px", base: "350px" }}
            width={{ lg: "40%", base: "100%" }}
          >
            <VStack
              overflow={"scroll"}
              scrollbar={"hidden"}
              height={"100%"}
              width={"10%"}
              gap={5}
            >
              {productImg.map((img, index) => (
                <Image
                  src={`/${img}`}
                  key={index}
                  minWidth={"100%"}
                  cursor={"pointer"}
                  onClick={() => setMainImg(img)}
                />
              ))}
            </VStack>
            <Image
              src={`/${mainImg}`}
              maxH={"100%"}
              minHeight={"100%"}
              height={"100%"}
              minWidth={"80%"}
              maxWidth={"80%"}
            />
          </HStack>
          <Stack
            width={{ lg: "50%", base: "100%" }}
            height={"900px"}
            justifyContent={"space-between"}
          >
            <Text
              color={"#666666"}
              fontFamily="'Volkhov', serif"
              fontSize={"14px"}
            >
              FASCO
            </Text>
            <Box>
              <HStack width={"100%"} justifyContent={"space-between"}>
                <Text
                  color={"black"}
                  fontFamily="'Volkhov', serif"
                  fontSize={"30px"}
                >
                  {data?.name}
                </Text>
                {!inFavorite(data) ? (
                  <IoStarOutline
                    onClick={() => addToFavorite(data)}
                    cursor={"pointer"}
                    color="black"
                    size={"18"}
                  />
                ) : (
                  <IoStar
                    onClick={() => addToFavorite(data)}
                    cursor={"pointer"}
                    color="black"
                    size={"18"}
                  />
                )}
              </HStack>
              <HStack>
                <RatingGroup.Root
                  colorPalette={"red"}
                  readOnly
                  count={5}
                  defaultValue={data.rating}
                  size="sm"
                >
                  <RatingGroup.HiddenInput />
                  <RatingGroup.Control />
                </RatingGroup.Root>
              </HStack>
            </Box>
            <HStack width={"100%"}>
              <Text
                fontSize={"24px"}
                color={"black"}
                fontFamily="'Volkhov', serif"
              >
                ${data?.price.toFixed(2)}
              </Text>
              <Text
                color={"#666666"}
                textDecoration={"line-through"}
                fontFamily="'Volkhov', serif"
              >
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
              <Text color={"#FF706B"} fontSize={"15px"}>
                Hurry up! Sale ends in:
              </Text>
              <Text color={"#FF706B"} fontSize={"15px"}>
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
                Only <b>{data.itemsLeft}</b> item(s) left in stock!
              </Text>
              <Box
                rounded={5}
                width={"100"}
                height={"5px"}
                backgroundColor={"#DEDEDE"}
              >
                <Box
                  rounded={5}
                  width={`${data.itemsLeft}%`}
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
                {data.sizes.map((size) => (
                  <Button
                    key={size}
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
                Color: {selectedColor}
              </Text>
              <HStack flexWrap={"wrap"} gap={2}>
                {data.colors.map((color) => (
                  <Box
                    key={color.col}
                    borderWidth={selectedColor === color.name ? 2 : 0}
                    borderColor={"black"}
                    borderRadius={"20px"}
                    padding={1}
                  >
                    <Box
                      width={"30px"}
                      height={"30px"}
                      borderRadius={"15px"}
                      backgroundColor={color.col}
                      onClick={() => setSelectedColor(color.name)}
                    ></Box>
                  </Box>
                ))}
              </HStack>
            </Box>
            <Box width={"100%"}>
              <Text fontFamily="'Volkhov', serif" color={"#000"} width={"100%"}>
                Quantity
              </Text>
              <HStack width={"100%"} flexWrap={"wrap"}>
                <HStack width={"100%"}>
                  <NumberInput.Root
                    defaultValue="1"
                    unstyled
                    spinOnPress={false}
                    value={amount}
                  >
                    <HStack gap={2}>
                      <NumberInput.DecrementTrigger asChild>
                        <IconButton
                          variant="outline"
                          size="sm"
                          onClick={() => handleClick(true)}
                        >
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
                        <IconButton
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            handleClick(false);
                          }}
                        >
                          <LuPlus color="black" />
                        </IconButton>
                      </NumberInput.IncrementTrigger>
                    </HStack>
                  </NumberInput.Root>
                  <Box width={"60%"}>
                    <MiniCartModul
                      data={data}
                      quantity={amount}
                      color={selectedColor}
                    />
                  </Box>
                </HStack>
              </HStack>
            </Box>
            <HStack w="100%" flexWrap={"wrap"}>
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
              <Image src="/Cards.png" />
              <Text color={"black"} fontFamily="'Volkhov', serif">
                Guarantee safe & secure checkout
              </Text>
            </VStack>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
