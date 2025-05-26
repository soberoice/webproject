import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router";

export default function EnterCode() {
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/signin/entercode");
  };
  return (
    <VStack
      width={"100%"}
      alignItems={"center"}
      height={"90%"}
      justifyContent={"space-between"}
    >
      <Box width={"80%"}>
        <Image src="../FASCO.png" />
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        width={"80%"}
        gap={5}
      >
        <Text
          fontFamily="'Volkhov', serif"
          fontSize={"30px"}
          color={"#000"}
          width={"100%"}
        >
          Forget Passward
        </Text>
        <form
          className="flex items-center w-full flex-col gap-10"
          onSubmit={() => handleSubmit}
        >
          <HStack width={"100%"} height={"50px"}>
            <Input
              width={"100%"}
              placeholder="First Name"
              fontFamily="'Poppins', sans-serif"
              height={"45px"}
              rounded={0}
              borderColor={"#9D9D9D"}
              color={"#000"}
              borderWidth={"0px 0px 1px 0px"}
              focusRing={"none"}
              fontSize={"16px"}
            />
          </HStack>
          <VStack width={"100%"} gap={5} textAlign={"right"}>
            <Button
              color={"white"}
              backgroundColor={"black"}
              w={"80%"}
              h={50}
              rounded={10}
              boxShadow={"md"}
              fontFamily="'Poppins', sans-serif"
              type="submite"
            >
              Recover Account
            </Button>
            <HStack>
              <Text color={"#000"} fontFamily="'Poppins', sans-serif">
                Didn’t receive Confirmation Code?
              </Text>
              <Link color={"#5B86E5"} to="/signin">
                Resend Now
              </Link>
            </HStack>
          </VStack>
        </form>
      </Box>
      <Box width={"80%"} textAlign={"right"}>
        <Link color={"#000000"} fontFamily="'Poppins', sans-serif">
          FASCO Terms & Codnitions
        </Link>
      </Box>
    </VStack>
  );
}
