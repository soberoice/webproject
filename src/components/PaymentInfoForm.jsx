import {
  Box,
  Button,
  Checkbox,
  Field,
  HStack,
  Image,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuCreditCard } from "react-icons/lu";
import { usePaymentInputs } from "react-payment-inputs";

export default function PaymentInfoForm() {
  const [toggleCard, setToggleCard] = useState(false);
  const payment = usePaymentInputs();
  return (
    <form>
      <Text
        color={"#484848"}
        fontSize={{ lg: "46px", base: "30px" }}
        fontFamily="'Volkhov', serif"
      >
        Payment
      </Text>
      <Stack
        direction={"row"}
        width={"100%"}
        height={"70px"}
        backgroundColor={"white"}
        borderWidth={"1px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingX={5}
        cursor={"pointer"}
        onClick={() => setToggleCard(!toggleCard)}
        fontFamily="'Poppins', sans-serif"
      >
        <Text color={"#484848"}>Card</Text>
        <HStack>
          <Image src="card.png" />
          {toggleCard ? (
            <IoIosArrowDown color="black" />
          ) : (
            <IoIosArrowUp color="black" />
          )}
        </HStack>
      </Stack>
      <Box
        width={"100%"}
        height={toggleCard ? "320px" : "0px"}
        backgroundColor={"#F5F5F5"}
        display={toggleCard ? "block" : "none"}
        padding={5}
        overflow={"hidden"}
        paddingTop={toggleCard ? 5 : 0}
        fontFamily="'Poppins', sans-serif"
      >
        <InputGroup endElement={<LuCreditCard />}>
          <Input
            color={"black"}
            height={"65px"}
            {...payment.getCardNumberProps()}
          />
        </InputGroup>
        <HStack my={5}>
          <Field.Root required>
            <Input
              height={"65px"}
              color={"black"}
              paddingX={5}
              {...payment.getExpiryDateProps()}
            />
          </Field.Root>
          <Field.Root required>
            <Input
              height={"65px"}
              color={"black"}
              paddingX={5}
              {...payment.getCVCProps()}
            />
          </Field.Root>
        </HStack>

        <Field.Root required>
          <Input
            height={"65px"}
            placeholder="Card Holder Name"
            color={"black"}
            paddingX={5}
          />
        </Field.Root>
        <Checkbox.Root
          marginTop={5}
          colorPalette={"grey"}
          color={"#8A8A8A"}
          variant={"subtle"}
          fontFamily="'Poppins', sans-serif"
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label fontSize={"18px"}>
            Save This Info for future
          </Checkbox.Label>
        </Checkbox.Root>
      </Box>

      <Button
        type="submit"
        marginTop={5}
        color={"white"}
        backgroundColor={"black"}
        w={"100%"}
        h={50}
        rounded={10}
        boxShadow={"md"}
        fontFamily="'Poppins', sans-serif"
      >
        Pay Now
      </Button>
    </form>
  );
}
