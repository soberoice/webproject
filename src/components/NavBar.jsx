import { Box, Button, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/poppins/400.css";

export default function NavBar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Products", link: "/signin" },
    { name: "Pages", link: "/signin" },
    { name: "Sign in", link: "/signin" },
  ];
  return (
    <Box mx={"auto"} w={"80%"} pt={5} fontFamily="'Poppins', sans-serif">
      <HStack widows={"100%"} justify={"space-between"}>
        <Box>
          <Image src="../FASCO.png" />
        </Box>
        <HStack display={{ lg: "flex", base: "none" }} gap={10}>
          {navItems.map((item) => (
            <Link href={item.link} focusRing={"none"}>
              <Text color={"#484848"} fontSize={"16px"} fontWeight="400">
                {item.name}
              </Text>
            </Link>
          ))}
        </HStack>
        <Link href="/signup">
          <Button
            color={"white"}
            backgroundColor={"black"}
            w={150}
            h={50}
            rounded={10}
            boxShadow={"md"}
          >
            Sign Up
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
