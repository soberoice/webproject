import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins/400.css";
import "@fontsource/volkhov/400.css";
import { Link } from "react-router";

export default function Footer() {
  const navItems = [
    "Support Center",
    "Invoicing",
    "Contract",
    "Careers",
    "Blog",
    "FAQ,s",
  ];
  return (
    <Box width={"90%"} marginTop={100}>
      <HStack w={"100%"} marginBottom={50}>
        <Image
          display={{ base: "none", lg: "block" }}
          height={"745px"}
          src="/image 2.png"
        />
        <Stack
          width={{ lg: "60%", base: "100%" }}
          textAlign={"center"}
          height={{ lg: "330px", base: "auto" }}
          gap={5}
          alignItems={"center"}
        >
          <Text
            color={"#484848"}
            fontSize={"46px"}
            fontFamily="'Volkhov', serif"
          >
            Subscribe To Our Newsletter
          </Text>
          <Text color={"#8A8A8A"} fontFamily="'Poppins', sans-serif">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </Text>
          <Input
            border={"none"}
            boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
            height={"85px"}
            minH={"85px"}
            rounded={10}
            placeholder="michael@ymail.com"
            color={"#8A8A8A"}
            fontSize={"22px"}
            fontFamily="'Poppins', sans-serif"
            paddingX={10}
          />
          <Button
            color={"white"}
            backgroundColor={"black"}
            w={200}
            h={50}
            rounded={10}
            boxShadow={"md"}
            fontFamily="'Poppins', sans-serif"
          >
            Subscribe Now
          </Button>
        </Stack>
        <Image
          display={{ base: "none", lg: "block" }}
          height={"745px"}
          src="/image 3.png"
        />
      </HStack>
      <hr />
      <Stack justifyContent={"space-between"}>
        <HStack
          height={{ lg: 100, base: "auto" }}
          justifyContent={"space-between"}
        >
          <Image src="../FASCO.png" />
          <Stack
            direction={{ lg: "row", base: "column" }}
            fontFamily="'Poppins', sans-serif"
            gap={{ lg: 10, base: 0 }}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(/ /g, "-")}`}
              >
                <Text color={"#484848"} fontSize={"16px"} fontWeight="400">
                  {item}
                </Text>
              </Link>
            ))}
          </Stack>
        </HStack>
        <Text
          fontFamily="'Poppins', sans-serif"
          textAlign={"center"}
          color={"#484848"}
          height={50}
        >
          Copyright © 2022 Xpro . All Rights Reseved.
        </Text>
      </Stack>
    </Box>
  );
}
