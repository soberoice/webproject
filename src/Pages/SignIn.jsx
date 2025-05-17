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
import React from "react";
import { Outlet } from "react-router";
import "@fontsource/poppins/400.css";
import "@fontsource/volkhov/400.css";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
    <Box width={"100%"} height={"100vh"}>
      <Stack
        mx={"auto"}
        width={"90%"}
        direction={"row"}
        alignItems={"center"}
        h={"full"}
        gap={0}
      >
        <Image width={"45%"} src="../signin.png" />
        <VStack
          width={"50%"}
          height={"90%"}
          justifyContent={"center"}
          alignItems={"center"}
          borderWidth={"1px"}
          borderColor={"#DBDBDB"}
        >
          <Outlet />
        </VStack>
      </Stack>
    </Box>
  );
}
