import React from "react";
import NavBar from "../components/NavBar";
import { Box, Stack } from "@chakra-ui/react";
import HomePageSideImage from "../components/HomePageSideImage";
import HomePageBanner from "../components/HomePageBanner";
import BrandLogos from "../components/BrandLogos";
import MonthDeals from "../components/MonthDeals";
import NewArrivals from "../components/NewArrivals";
import LimitedBanner from "../components/LimitedBanner";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FollowInstagram from "../components/FollowInstagram";

export default function HomePage() {
  return (
    <Stack alignItems={"center"} w={"100%"} overflow={"hidden"}>
      <NavBar />
      <Stack marginTop={10} alignItems={"center"} w={"100%"} gap={"auto"}>
        <HomePageBanner />
        <BrandLogos />
        <MonthDeals />
        <NewArrivals />
        <LimitedBanner />
        <FollowInstagram />
        <Testimonials />
        <Footer />
      </Stack>
    </Stack>
  );
}
