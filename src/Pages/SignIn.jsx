import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Outlet } from "react-router";
import "@fontsource/poppins/400.css";
import "@fontsource/volkhov/400.css";

export default function SignIn() {
  return (
    <Box width={"100%"} paddingY={50} minH={"100vh"} backgroundColor={"white"}>
      <Stack
        mx={"auto"}
        width={"90%"}
        direction={"row"}
        alignItems={"center"}
        h={"full"}
        gap={0}
      >
        <Image width={{ lg: "45%", base: 0 }} src="/signin.png" />
        <VStack
          width={{ lg: "50%", base: "100%" }}
          height={"90%"}
          justifyContent={"center"}
          alignItems={"center"}
          borderWidth={"1px"}
          borderColor={"#DBDBDB"}
          backgroundColor={"white"}
        >
          <Outlet />
        </VStack>
      </Stack>
    </Box>
  );
}
