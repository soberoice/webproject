import {
  Box,
  Circle,
  CloseButton,
  Drawer,
  Float,
  HStack,
  IconButton,
  Image,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import { FaRegStar } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosStarOutline } from "react-icons/io";
import {
  IoBagHandleOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import SearchDialog from "./SearchDialog";
import { Link, useNavigate } from "react-router";
import { useProd } from "../Providers/ProductContext";

export default function NavBar() {
  const { cart } = useProd();
  const nav = useNavigate();
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
        <Box onClick={() => nav("/")} cursor={"pointer"}>
          <Image src="../FASCO.png" />
        </Box>
        <HStack display={{ lg: "flex", base: "none" }} gap={10}>
          {navItems.map((item) => (
            <Link to={`${item.link}`} key={item.name}>
              <Text color={"#484848"} fontSize={"16px"} fontWeight="400">
                {item.name}
              </Text>
            </Link>
          ))}
        </HStack>
        {/* <Button
          color={"white"}
          backgroundColor={"black"}
          w={150}
          h={50}
          rounded={10}
          boxShadow={"md"}
          display={{ lg: "flex", base: "none" }}
        >
          Sign Up
        </Button> */}
        <Box display={{ lg: "none", base: "flex" }}>
          <SearchDialog />
        </Box>
        <HStack
          color={"#484848"}
          fontSize={22}
          gap={6}
          display={{ lg: "flex", base: "none" }}
        >
          <SearchDialog />
          <IoPersonOutline cursor={"pointer"} />
          <IoIosStarOutline cursor={"pointer"} />

          <Box position="relative">
            <IoBagHandleOutline
              onClick={() => nav("/cart")}
              cursor={"pointer"}
            />
            <Float>
              <Circle
                fontFamily="'Volkhov', serif"
                size="5"
                bg="red"
                color="white"
                fontSize={15}
              >
                {cart.length}
              </Circle>
            </Float>
          </Box>
        </HStack>
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <IconButton
              size="xl"
              fontSize={40}
              display={{ lg: "none", base: "flex" }}
            >
              <GiHamburgerMenu />
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content
                fontFamily="'Poppins', sans-serif"
                backgroundColor={"white"}
              >
                <Drawer.Header></Drawer.Header>
                <Drawer.Body>
                  <Stack gap={10}>
                    {navItems.map((item, index) => (
                      <Link key={index} to={`${item.link}`}>
                        <Text
                          color={"#484848"}
                          fontSize={"16px"}
                          fontWeight="400"
                        >
                          {item.name}
                        </Text>
                      </Link>
                    ))}
                  </Stack>
                </Drawer.Body>
                <Drawer.Footer>
                  {/* <Button
                    color={"white"}
                    backgroundColor={"black"}
                    w={150}
                    h={50}
                    rounded={10}
                    boxShadow={"md"}
                  >
                    Sign Up
                  </Button> */}
                  <HStack color={"#484848"} fontSize={22} gap={5}>
                    <IoPersonOutline cursor={"pointer"} />
                    <IoIosStarOutline cursor={"pointer"} />

                    <Box position="relative">
                      <IoBagHandleOutline
                        onClick={() => nav("/cart")}
                        cursor={"pointer"}
                      />
                      <Float>
                        <Circle size="4" bg="red" color="white" fontSize={15}>
                          {cart.length}
                        </Circle>
                      </Float>
                    </Box>
                  </HStack>
                </Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="lg" color={"black"} />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </HStack>
    </Box>
  );
}
