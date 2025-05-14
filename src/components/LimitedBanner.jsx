import { Box, Image, Stack } from "@chakra-ui/react";
import React from "react";

export default function LimitedBanner() {
  return (
    <Box
      display={"flex"}
      direction={"row"}
      width={"100%"}
      padding={0}
      margin={0}
      height={"570px"}
    >
      <Image width={"50%"} src="./image (4).png" />
      <Box width={"70%"} height={"full"} overflow={"hidden"}>
        <Box
          backgroundColor={"#DADADA"}
          width={"100%"}
          height={"570px"}
          transform="skewX(-15deg)"
        ></Box>
      </Box>
    </Box>
  );
}
