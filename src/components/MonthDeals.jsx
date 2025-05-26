import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "@fontsource/poppins/400.css";
import "@fontsource/volkhov/400.css";
import { motion, AnimatePresence } from "framer-motion";

export default function MonthDeals() {
  const MotionImage = motion.create(Image);
  const images = ["./image (2).png", "./image (1).png", "./image (2).png"];
  const [active, setActive] = useState(0);

  function handleForward() {
    if (active === 2) {
      return;
    } else {
      setActive(active + 1);
    }
    return false;
  }
  function handleBack() {
    if (active === 0) {
      return;
    } else {
      setActive(active - 1);
    }
  }

  return (
    <Stack
      direction={{ lg: "row", base: "column" }}
      width={"100%"}
      paddingLeft={{ lg: 100, base: "auto" }}
      marginY={100}
      gap={10}
      alignItems={"center"}
    >
      <Stack
        width={{ lg: "35%", base: "80%" }}
        justifyContent={"space-between"}
      >
        <Stack height={"250px"} justifyContent={"space-between"}>
          <Text
            color={"#484848"}
            fontSize={"45px"}
            fontFamily="'Volkhov', serif"
          >
            Deals Of The Month
          </Text>
          <Text color={"#8A8A8A"} fontFamily="'Poppins', sans-serif">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur vero eligendi ipsam voluptates ratione voluptatibus
            molestiae
          </Text>
          <Button
            color={"white"}
            backgroundColor={"black"}
            w={200}
            h={50}
            rounded={10}
            boxShadow={"md"}
            fontFamily="'Poppins', sans-serif"
          >
            Buy Now
          </Button>
        </Stack>
        <HStack ml={"auto"}>
          <Button
            width={"45px"}
            height={"45px"}
            backgroundColor={"white"}
            rounded={50}
            boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
            opacity={active === 0 ? 0.5 : 1}
            onClick={() => handleBack()}
          >
            <IoIosArrowBack />
          </Button>
          <Button
            width={"45px"}
            height={"45px"}
            backgroundColor={"white"}
            rounded={50}
            boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
            opacity={active === 2 ? 0.5 : 1}
            onClick={() => handleForward()}
          >
            <IoIosArrowForward />
          </Button>
        </HStack>
      </Stack>

      <HStack
        width={{ lg: "100%", base: "80%" }}
        overflow={"hidden"}
        gap={5}
        justifyContent={"center"}
      >
        <AnimatePresence mode="wait">
          <MotionImage
            key={images[active]}
            src={images[active]}
            h="580px"
            maxW="400px"
            alignSelf="start"
            initial={{ opacity: 1, x: 1 }}
            animate={{ opacity: 1, x: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        <Stack
          height="580px"
          display={{ lg: "flex", base: "none" }}
          justifyContent="space-between"
        >
          <Stack direction="row" gap={5}>
            {images.map(
              (image, index) =>
                active !== index && (
                  <Box key={index} w="370px" h="480px">
                    <MotionImage
                      key={image}
                      onClick={() => setActive(index)}
                      src={image}
                      h="480px"
                      minW="370px"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 1, x: 50 }}
                      animate={{ opacity: 1, x: 1 }}
                      exit={{ opacity: 0, x: -50 }}
                    />
                  </Box>
                )
            )}
          </Stack>
          <HStack>
            {Array.from({ length: 3 }).map((_, index) => (
              <Box
                onClick={() => setActive(index)}
                key={index}
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: "black",
                  borderRadius: 10,
                  marginHorizontal: 2,
                  opacity: index == active ? 1 : 0.3,
                  borderWidth: index == active ? "1px" : "0px",
                  padding: 2,
                  borderColor: index == active ? "black" : "transparent",
                }}
              ></Box>
            ))}
          </HStack>
        </Stack>
      </HStack>
    </Stack>
  );
}
