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

export default function ForgotPassward() {
  const nav = useNavigate();
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
        height={"70%"}
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
          className="flex items-center w-full flex-col gap-10 h-full"
          onSubmit={() => nav("/signin/entercode")}
        >
          <HStack
            width={"100%"}
            height={{ lg: "50px", base: "70px" }}
            flexWrap={"wrap"}
          >
            <Input
              width={{ lg: "49%", base: "90%" }}
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
            <Input
              width={{ lg: "49%", base: "90%" }}
              placeholder="Last  Name"
              fontFamily="'Poppins', sans-serif"
              height={"45px"}
              rounded={0}
              borderColor={"#9D9D9D"}
              borderWidth={"0px 0px 1px 0px"}
              color={"#000"}
              focusRing={"none"}
              fontSize={"16px"}
            />
          </HStack>
          <HStack
            width={"100%"}
            height={{ lg: "50px", base: "70px" }}
            flexWrap={"wrap"}
          >
            <Input
              width={{ lg: "49%", base: "90%" }}
              placeholder="Email Address"
              fontFamily="'Poppins', sans-serif"
              height={"45px"}
              rounded={0}
              borderColor={"#9D9D9D"}
              color={"#000"}
              borderWidth={"0px 0px 1px 0px"}
              focusRing={"none"}
              fontSize={"16px"}
            />
            <Input
              width={{ lg: "49%", base: "90%" }}
              placeholder="Phone Number"
              fontFamily="'Poppins', sans-serif"
              height={"45px"}
              rounded={0}
              borderColor={"#9D9D9D"}
              borderWidth={"0px 0px 1px 0px"}
              color={"#000"}
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
              onClick={() => nav("/signin/entercode")}
            >
              Send Confirmation Code
            </Button>
            <HStack>
              <Text color={"#000"} fontFamily="'Poppins', sans-serif">
                Already have an account?
              </Text>
              <Link color={"#5B86E5"} to="/signin">
                Login
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
