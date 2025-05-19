import { Stack } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckoutPage from "../components/CheckoutPage";

export default function Checkout() {
  return (
    <Stack alignItems={"center"} w={"100%"} overflowX={"hidden"}>
      <NavBar />
      <Stack marginTop={10} alignItems={"center"} w={"100%"} gap={"auto"}>
        <CheckoutPage />
        <Footer />
      </Stack>
    </Stack>
  );
}
