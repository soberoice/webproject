import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";

export default function UpdatePassward() {
  const nav = useNavigate();
  return (
    <VStack
      width={"100%"}
      height={"90%"}
      paddingY={0}
      justifyContent={"space-between"}
    >
      <Box width={"70%"}>
        <Image src="../FASCO.png" />
      </Box>
      <Box w={"80%"} mx={"auto"}></Box>
      <form
        className="flex items-center w-full flex-col gap-10"
        onSubmit={() => nav("/")}
      >
        <Text
          fontFamily="'Volkhov', serif"
          fontSize={"30px"}
          color={"#000"}
          width={"80%"}
        >
          Enter Your New Passward
        </Text>
        <Input
          width={"80%"}
          placeholder="Passward"
          fontFamily="'Poppins', sans-serif"
          height={"45px"}
          rounded={0}
          borderColor={"#9D9D9D"}
          color={"#000"}
          borderWidth={"0px 0px 1px 0px"}
          focusRing={"none"}
          fontSize={"16px"}
          type="email"
        />
        <Input
          width={"80%"}
          placeholder="Confirm Passward"
          fontFamily="'Poppins', sans-serif"
          height={"45px"}
          rounded={0}
          borderColor={"#9D9D9D"}
          borderWidth={"0px 0px 1px 0px"}
          color={"#000"}
          focusRing={"none"}
          fontSize={"16px"}
          type="passward"
        />
        <VStack width={"100%"} gap={5} textAlign={"right"}>
          <Button
            color={"white"}
            backgroundColor={"#5B86E5"}
            w={"70%"}
            h={50}
            rounded={10}
            boxShadow={"md"}
            fontFamily="'Poppins', sans-serif"
            type="submite"
          >
            Submit
          </Button>
        </VStack>
      </form>
      <Box width={"80%"} textAlign={"right"}>
        <Link color={"#000000"} fontFamily="'Poppins', sans-serif">
          FASCO Terms & Codnitions
        </Link>
      </Box>
    </VStack>
  );
}
