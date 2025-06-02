import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Stack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Cartitem from "../components/Cartitem";
import CheckoutBlock from "../components/ChackoutBlock";

export default function Cart() {
  const [subTotal, setSubTotal] = useState();
  return (
    <Stack alignItems={"center"} w={"100%"} overflow={"hidden"}>
      <NavBar />
      <Stack marginTop={10} alignItems={"center"} w={"100%"} gap={"auto"}>
        <Cartitem subTotal={subTotal} setSubTotal={setSubTotal} />
        <CheckoutBlock subTotal={subTotal} />
        <Footer />
      </Stack>
    </Stack>
  );
}
