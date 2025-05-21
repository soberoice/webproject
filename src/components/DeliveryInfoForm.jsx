import {
  Combobox,
  Field,
  HStack,
  Input,
  Portal,
  Text,
  useFilter,
  useListCollection,
} from "@chakra-ui/react";
import React from "react";

export default function DeliveryInfoForm() {
  const frameworks = [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Preact", value: "preact" },
    { label: "Qwik", value: "qwik" },
    { label: "Lit", value: "lit" },
    { label: "Alpine.js", value: "alpinejs" },
    { label: "Ember", value: "ember" },
    { label: "Next.js", value: "nextjs" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  return (
    <form>
      <Text
        color={"#484848"}
        fontSize={{ lg: "46px", base: "30px" }}
        fontFamily="'Volkhov', serif"
      >
        Delivery
      </Text>
      <Field.Root required>
        <Combobox.Root
          collection={collection}
          onInputValueChange={(e) => filter(e.inputValue)}
          fontFamily="'Poppins', sans-serif"
        >
          <Combobox.Label fontFamily="'Poppins', sans-serif">
            Country / Region
          </Combobox.Label>
          <Combobox.Control>
            <Combobox.Input
              color={"black"}
              height={"70px"}
              placeholder="Country / Region"
            />
            <Combobox.IndicatorGroup>
              <Combobox.ClearTrigger />
              <Combobox.Trigger color={"black"} />
            </Combobox.IndicatorGroup>
          </Combobox.Control>
          <Portal backgroundColor="white">
            <Combobox.Positioner>
              <Combobox.Content backgroundColor="white" boxShadow={"none"}>
                <Combobox.Empty>No items found</Combobox.Empty>
                {collection.items.map((item) => (
                  <Combobox.Item color={"black"} item={item} key={item.value}>
                    {item.label}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox.Root>
      </Field.Root>
      <HStack color={"black"} my={5} fontFamily="'Poppins', sans-serif">
        <Field.Root required>
          <Input
            color={"black"}
            height={"70px"}
            placeholder="First Name"
            paddingX={5}
          />
        </Field.Root>
        <Field.Root required>
          <Input
            color={"black"}
            height={"70px"}
            placeholder="Last Name"
            paddingX={5}
          />
        </Field.Root>
      </HStack>
      <Field.Root required>
        <Input
          color={"black"}
          height={"70px"}
          fontFamily="'Poppins', sans-serif"
          placeholder="Address"
          paddingX={5}
        />
      </Field.Root>
      <HStack color={"black"} my={5} fontFamily="'Poppins', sans-serif">
        <Field.Root required>
          <Input
            color={"black"}
            height={"70px"}
            placeholder="City"
            paddingX={5}
          />
        </Field.Root>
        <Field.Root required>
          <Input
            color={"black"}
            height={"70px"}
            placeholder="Postal Code"
            paddingX={5}
          />
        </Field.Root>
      </HStack>
    </form>
  );
}
