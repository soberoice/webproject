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
import "@fontsource/poppins/400.css";
import "@fontsource/volkhov/400.css";
import "@fontsource/poppins/700.css";
import { useNavigate } from "react-router";

export default function SignUp() {
  const nav = useNavigate();
  return (
    <Box width={"100%"} height={"100vh"}>
      <Stack
        mx={"auto"}
        width={"90%"}
        direction={"row"}
        alignItems={"center"}
        h={"full"}
      >
        <Image width={"45%"} src="./signupimg.png" />
        <VStack width={"50%"} height={"80%"} justifyContent={"space-between"}>
          <Box width={"80%"}>
            <Image src="./FASCO.png" />
          </Box>
          <Box
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            width={"80%"}
          >
            <Text
              fontFamily="'Volkhov', serif"
              fontSize={"30px"}
              color={"#000"}
              width={"100%"}
            >
              Create Account
            </Text>
            <HStack
              width={"100%"}
              justifyContent={"space-between"}
              overflow={"hidden"}
            >
              <Button
                fontFamily="'Poppins', sans-serif"
                width={"270px"}
                h={"50px"}
                borderWidth={"1px"}
                borderColor={"#5B86E5"}
                rounded={10}
              >
                <Image src="./google.png" height={"30px"} w={"30px"} /> Sign up
                with Google
              </Button>
              <Button
                fontFamily="'Poppins', sans-serif"
                width={"270px"}
                h={"50px"}
                borderWidth={"1px"}
                borderColor={"#5B86E5"}
                rounded={10}
              >
                <Image src="./email.png" height={"30px"} w={"30px"} /> Sign up
                with Email
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
          <Box w={"80%"} mx={"auto"}>
            <form className="flex items-center w-full flex-col gap-10">
              <HStack width={"100%"} height={"50px"}>
                <Input
                  width={"49%"}
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
                  width={"49%"}
                  placeholder="First Name"
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
              <HStack width={"100%"} height={"50px"}>
                <Input
                  width={"49%"}
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
                  width={"49%"}
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
              <HStack width={"100%"} height={"50px"}>
                <Input
                  width={"49%"}
                  placeholder="Password"
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
                  width={"49%"}
                  placeholder="Confirm Password"
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
              <Button
                color={"white"}
                backgroundColor={"black"}
                w={"70%"}
                h={50}
                rounded={10}
                boxShadow={"md"}
                fontFamily="'Poppins', sans-serif"
                type="submite"
                onClick={() => nav("/")}
              >
                Create Account
              </Button>
            </form>
          </Box>
          <HStack>
            <Text color={"#000"} fontFamily="'Poppins', sans-serif">
              Already have an account?
            </Text>
            <Link color={"#5B86E5"} href="/signin">
              Login
            </Link>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}
