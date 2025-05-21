import {
  Button,
  CloseButton,
  Dialog,
  IconButton,
  Input,
  Portal,
} from "@chakra-ui/react";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button width={"22px"} padding={0} margin={0} fontSize={22}>
          <IoSearchOutline cursor={"pointer"} />
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            fontFamily="'Poppins', sans-serif"
            height={"70px"}
            backgroundColor={"white"}
          >
            <Dialog.Body color={"black"}>
              <Input
                placeholder="Search Something"
                width={"90%"}
                height={"50px"}
              />
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="lg"
                _hover={{ backgroundColor: "transparent", color: "black" }}
                color={"black"}
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
