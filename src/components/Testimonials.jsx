import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/volkhov/400.css";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const testimonials = [
    {
      name: "James K.",
      title: "Traveler",
      image: "./image (1).png", // replace with actual image path
      review:
        "You won’t regret it. I would like to personally thank you for your outstanding product. ",
    },
    {
      name: "Sarah L.",
      title: "Designer",
      image: "./image (2).png",
      review:
        "Exactly what I was looking for. Thank you for making it so pleasant and hassle-free! All features are great.",
    },
    {
      name: "John W.",
      title: "Developer",
      image: "./image (1).png",
      review:
        "This is the best investment I've made. I will recommend it to everyone. It really saves time!",
    },
  ];

  function handleForward() {
    if (active === 2) {
      return;
    } else {
      setActive(active + 1);
    }
    return false;
  }
  function handleBack() {
    if (active === 0) {
      return;
    } else {
      setActive(active - 1);
    }
  }
  return (
    <Box
      w="90%"
      pb={10}
      textAlign={"center"}
      marginTop={100}
      marginBottom={100}
    >
      <Text color={"#484848"} fontSize={"46px"} fontFamily="'Volkhov', serif">
        This Is What Our Customers Say
      </Text>
      <Text
        color={"#8A8A8A"}
        fontSize={"16px"}
        fontFamily="'Poppins', sans-serif"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis
      </Text>
      <Box height={"400px"} width={"100%"} marginTop={10}>
        <HStack
          justifyContent={"center"}
          height={{ lg: "400px", base: "400px" }}
        >
          {/* {testimonials.slice(0, active).map((testimonial, index) => (
            <Stack
              width={{ lg: "650px", base: "100%" }}
              height={{ lg: "300px", base: "175px" }}
              alignItems={"center"}
              direction={"row"}
              boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
              justifyContent={"center"}
              gap={10}
              index={index}
            >
              <Image src={testimonial.image} width={"240px"} height={"240px"} />
              <Box
                marginTop={50}
                width={"50%"}
                textAlign={"left"}
                display={"flex"}
                gap={5}
                flexDir={"column"}
                height={"300px"}
              >
                <Text
                  color={"#484848"}
                  fontSize={"16px"}
                  fontFamily="'Poppins', sans-serif"
                >
                  "{testimonial.review}"
                </Text>
                <HStack>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <IoStarSharp key={index} color="#FCA120" size={20} />
                  ))}
                </HStack>
                <Box width={"50%"}>
                  <hr />
                </Box>
                <Text
                  color={"#484848"}
                  fontSize={"32px"}
                  fontFamily="'Volkhov', serif"
                >
                  {testimonial.name}
                </Text>
                <Text
                  color={"#484848"}
                  fontSize={"16px"}
                  fontFamily="'Poppins', sans-serif"
                >
                  {testimonial.title}
                </Text>
              </Box>
            </Stack>
          ))} */}

          <Stack
            width={{ lg: "650px", base: "100%" }}
            height={{ lg: "350px", base: "400px" }}
            alignItems={"center"}
            direction={{ sm: "row", base: "column" }}
            boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
            justifyContent={"center"}
            gap={5}
            backgroundColor={"white"}
            paddingY={10}
          >
            <Image
              src={testimonials[active].image}
              width={{ sm: "240px", base: "100px" }}
              height={{ sm: "240px", base: "100px" }}
            />
            <Box
              width={{ sm: "50%", base: "90%" }}
              textAlign={"left"}
              display={"flex"}
              gap={{ sm: 5, base: 2 }}
              flexDir={"column"}
              height={"240px"}
            >
              <Text
                color={"#484848"}
                fontSize={"16px"}
                fontFamily="'Poppins', sans-serif"
                textAlign={{ sm: "left", base: "center" }}
              >
                "{testimonials[active].review}"
              </Text>
              <HStack mx={{ base: "auto", sm: "0" }}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoStarSharp key={index} color="#FCA120" size={20} />
                ))}
              </HStack>
              <Box width={{ sm: "50%", base: "100%" }}>
                <hr />
              </Box>
              <Text
                color={"#484848"}
                fontSize={"32px"}
                fontFamily="'Volkhov', serif"
                textAlign={{ sm: "left", base: "center" }}
              >
                {testimonials[active].name}
              </Text>
              <Text
                color={"#484848"}
                fontSize={"16px"}
                fontFamily="'Poppins', sans-serif"
                textAlign={{ sm: "left", base: "center" }}
              >
                {testimonials[active].title}
              </Text>
            </Box>
          </Stack>
          {/* {testimonials.slice(active).map((testimonial, index) => (
            <Stack
              width={{ lg: "650px", base: "100%" }}
              height={{ lg: "300px", base: "175px" }}
              alignItems={"center"}
              direction={"row"}
              boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
              justifyContent={"center"}
              gap={10}
              index={index}
            >
              <Image src={testimonial.image} width={"240px"} height={"240px"} />
              <Box
                marginTop={50}
                width={"50%"}
                textAlign={"left"}
                display={"flex"}
                gap={5}
                flexDir={"column"}
                height={"300px"}
              >
                <Text
                  color={"#484848"}
                  fontSize={"16px"}
                  fontFamily="'Poppins', sans-serif"
                >
                  "{testimonial.review}"
                </Text>
                <HStack>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <IoStarSharp key={index} color="#FCA120" size={20} />
                  ))}
                </HStack>
                <Box width={"50%"}>
                  <hr />
                </Box>
                <Text
                  color={"#484848"}
                  fontSize={"32px"}
                  fontFamily="'Volkhov', serif"
                >
                  {testimonial.name}
                </Text>
                <Text
                  color={"#484848"}
                  fontSize={"16px"}
                  fontFamily="'Poppins', sans-serif"
                >
                  {testimonial.title}
                </Text>
              </Box>
            </Stack>
          ))}
           */}
        </HStack>
        <HStack
          mx={"auto"}
          justifyContent={"center"}
          width={"10%"}
          marginTop={10}
        >
          <Button
            width={"45px"}
            height={"45px"}
            backgroundColor={"white"}
            rounded={50}
            boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
            opacity={active === 0 ? 0.5 : 1}
            onClick={() => handleBack()}
          >
            <IoIosArrowBack />
          </Button>
          <Button
            width={"45px"}
            height={"45px"}
            backgroundColor={"white"}
            rounded={50}
            boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
            opacity={active === 2 ? 0.5 : 1}
            onClick={() => handleForward()}
          >
            <IoIosArrowForward />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}
