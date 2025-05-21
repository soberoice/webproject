import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import ContactForm from "./ContactForm";
import DeliveryInfoForm from "./DeliveryInfoForm";
import PaymentInfoForm from "./PaymentInfoForm";
import CheckoutItem from "./checkoutItem";

export default function CheckoutPage() {
  return (
    <Stack
      width={"100%"}
      direction={{ lg: "row", base: "column-reverse" }}
      gap={0}
    >
      <Stack
        width={{ lg: "40%", base: "100%" }}
        padding={10}
        marginLeft={{ lg: "auto", base: "0" }}
        gap={10}
      >
        <ContactForm />
        <DeliveryInfoForm />
        <PaymentInfoForm />
      </Stack>
      <Box
        height={"900px"}
        padding={10}
        width={{ lg: "50%", base: "100%" }}
        backgroundColor={"#F5F5F5"}
      >
        <CheckoutItem />
      </Box>
    </Stack>
  );
}
