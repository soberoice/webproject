import { HStack, Input, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function ContactForm() {
  return (
    <form style={{ width: "100%" }}>
      <HStack justifyContent={"space-between"}>
        <Text color={"#484848"} fontSize={{ lg: "46px", base: "30px" }}>
          Contact
        </Text>
        <Text color={"#484848"}>
          Have an account?{" "}
          <Link color={"#1456FF"} href="/signup">
            Create Account
          </Link>
        </Text>
      </HStack>
      <Input height={"70px"} placeholder="Email Address" paddingX={5} />
    </form>
  );
}
