import React from "react";
import HomePageSideImage from "./HomePageSideImage";
import { Box, Button, Image, Stack } from "@chakra-ui/react";
import BrandLogos from "./BrandLogos";
import { useNavigate } from "react-router";

export default function HomePageBanner() {
  const nav = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box w={"100%"} marginBottom={50}>
      <Stack
        direction={"row"}
        w={"85%"}
        justifyContent={"center"}
        mx={"auto"}
        gap={10}
      >
        <HomePageSideImage image={"./image 2 28.png"} />
        <Stack
          height={"700px"}
          width={"426px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src="./images.png" />
          <Stack alignItems={"center"} gap={5}>
            <Image src="./ULTIMATE.png" width={{ lg: "395px", base: "100%" }} />
            <Image
              src="./sale.png"
              width={{ lg: "395px", base: "100%" }}
              height={{ lg: 185, base: 130 }}
            />
            <Image src="./NEW COLLECTION.png" width={"195px"} rounded={10} />
            <Button
              color={"white"}
              backgroundColor={"black"}
              w={207}
              h={50}
              rounded={10}
              boxShadow={"md"}
            >
              Shop Now
            </Button>
          </Stack>
          <Image src="./imagesbottom.png" height={150} />
        </Stack>
        <HomePageSideImage image={"./image 227.png"} />
      </Stack>
      <Stack
        direction={"row"}
        right={10}
        bottom={5}
        position={"fixed"}
        zIndex={100}
      >
        <Button
          backgroundColor={"black"}
          w={"56px"}
          h={"56px"}
          rounded={10}
          boxShadow={"md"}
          borderColor={"black"}
          borderWidth={"1px"}
          onClick={() => {
            nav("/cart");
          }}
        >
          <Image height={21} width={22} src="./iconcart.png" />
        </Button>
        <Button
          backgroundColor={"white"}
          w={50}
          h={50}
          rounded={50}
          borderWidth={2}
          borderColor={"black"}
          onClick={() => scrollToTop()}
        >
          <Image height={26} width={22} src="./VectorArrowUp.png" />
        </Button>
      </Stack>
    </Box>
  );
}
