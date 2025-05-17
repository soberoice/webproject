import React from "react";
import NavBar from "../components/NavBar";
import { Stack } from "@chakra-ui/react";
import ShopItems from "../components/ShopItems";
import LimitedBanner from "../components/LimitedBanner";
import MonthDeals from "../components/MonthDeals";
import FollowInstagram from "../components/FollowInstagram";
import Footer from "../components/Footer";
import ProductInfo from "../components/ProductInfo";

export default function ProductPage() {
  return (
    <Stack alignItems={"center"} overflowX={"hidden"}>
      <NavBar />
      <Stack marginTop={10} alignItems={"center"} gap={"auto"}>
        <ProductInfo />
        <LimitedBanner />
        <MonthDeals />
        <Footer />
      </Stack>
    </Stack>
  );
}
