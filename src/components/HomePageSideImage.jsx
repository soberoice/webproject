import { Box, Image, Stack } from "@chakra-ui/react";
import React from "react";

export default function HomePageSideImage({ image }) {
  return (
    <Stack
      height={"700px"}
      backgroundColor={"gray.200"}
      width={390}
      alignItems={"center"}
      rounded={10}
    >
      <Image height={"570px"} src={image} mx={"auto"} marginTop={"auto"} />
    </Stack>
  );
}
