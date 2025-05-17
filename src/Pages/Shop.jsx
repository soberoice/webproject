import React from "react";
import NavBar from "../components/NavBar";
import FollowInstagram from "../components/FollowInstagram";
import Footer from "../components/Footer";
import { Stack } from "@chakra-ui/react";
import ShopItems from "../components/ShopItems";
import LimitedBanner from "../components/LimitedBanner";

export default function Shop() {
  return (
    <Stack alignItems={"center"} overflowX={"hidden"}>
      <NavBar />
      <Stack marginTop={10} w={"100%"} alignItems={"center"} gap={"auto"}>
        <ShopItems />
        <LimitedBanner />
        <FollowInstagram />
        <Footer />
      </Stack>
    </Stack>
  );
}
