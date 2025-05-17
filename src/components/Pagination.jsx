import React from "react";
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function PaginationList() {
  return (
    <Pagination.Root count={20} pageSize={2} siblingCount={0} defaultPage={1}>
      <ButtonGroup variant="ghost" size="sm">
        <Pagination.PrevTrigger
          borderRadius={100}
          _hover={{ backgroundColor: "#F3F3F3" }}
          asChild
        >
          <IconButton>
            <LuChevronLeft color="black" />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton
              borderRadius={100}
              _hover={{ backgroundColor: "#F3F3F3" }}
              backgroundColor={{ _selected: "#F3F3F3" }}
              border={"none"}
              color={"black"}
              variant={{ base: "ghost", _selected: "outline" }}
            >
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger
          borderRadius={100}
          _hover={{ backgroundColor: "#F3F3F3" }}
          asChild
        >
          <IconButton>
            <LuChevronRight color="black" />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
}
