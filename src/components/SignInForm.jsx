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

export default function SignInForm() {
  const nav = useNavigate();
  return (
    <VStack width={"100%"} height={"90%"} justifyContent={"space-between"}>
      <Box width={"70%"}>
        <Image src="FASCO.png" />
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
          width={"90%"}
        >
          Sign In To FASCO
        </Text>
        <HStack
          width={"90%"}
          justifyContent={"space-between"}
          overflow={"hidden"}
        >
          <Button
            fontFamily="'Poppins', sans-serif"
            width={"250px"}
            h={"50px"}
            borderWidth={"1px"}
            borderColor={"#5B86E5"}
            rounded={10}
          >
            <Image src="./google.png" height={"30px"} w={"30px"} /> Sign up with
            Google
          </Button>
          <Button
            fontFamily="'Poppins', sans-serif"
            width={"250px"}
            h={"50px"}
            borderWidth={"1px"}
            borderColor={"#5B86E5"}
            rounded={10}
          >
            <Image src="./email.png" height={"30px"} w={"30px"} /> Sign up with
            Email
          </Button>
        </HStack>
      </Box>
      <Text
        fontFamily="'Poppins', sans-serif"
        color={"#838383"}
        fontWeight={"700"}
        fontSize={"30px"}
      >
        OR
      </Text>
      <Box w={"80%"} mx={"auto"}></Box>
      <form
        className="flex items-center w-full flex-col gap-10"
        onSubmit={() => nav("/")}
      >
        <Input
          width={"80%"}
          placeholder="Email"
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
          placeholder="Passward"
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
            backgroundColor={"black"}
            w={"70%"}
            h={50}
            rounded={10}
            boxShadow={"md"}
            fontFamily="'Poppins', sans-serif"
            type="submite"
          >
            Create Account
          </Button>
          <Button
            color={"#5B86E5"}
            w={"70%"}
            h={50}
            rounded={10}
            fontFamily="'Poppins', sans-serif"
            borderWidth={"1px"}
            borderColor={"#5B86E5"}
            onClick={() => nav("/signup")}
          >
            Register Now
          </Button>
          <Box width={"80%"}>
            <Link href={"/signin/forgotpassword"}>
              <Text
                fontFamily="'Poppins', sans-serif"
                color={"#5B86E5"}
                fontWeight={"700"}
              >
                Forget Password?
              </Text>
            </Link>
          </Box>
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
