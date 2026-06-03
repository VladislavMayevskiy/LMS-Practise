import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";import polygon from "../assets/Shapes/Polygon 2.png"
import blueStar from "../assets/Shapes/blue-star.png";
import yellowStar from "../assets/Shapes/yellow-star.png";
import greenEllipse from "../assets/Shapes/Ellipse 2.png";
export const Hero = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      pt="150px"
      position="relative"
      
    >
      <Box
  as="img"
  src={blueStar}
  alt=""
  position="absolute"
  left="-20px"
  top="180px"
  width="150px"
  />
  <Box
  as="img"
  src={yellowStar}
  alt=""
  position="absolute"
  right="-20px"
  top="220x"
  width="100px"
  />
<VStack gap="16px" textAlign="center">
        <Heading
          fontSize="44px"
          lineHeight="1.1"
          fontWeight="700"
          maxW="720px"
        >
            <Box
  as="img"
  src={polygon}
  alt=""
  width="74px"
  height="74px"
  objectFit="contain"
/>
          Empower Schools with Your
          <br />
          Own Branded Learning Platform
        </Heading>

        <Text
          fontSize="16px"
          color="#555555"
          maxW="560px"
        >
          Sell your courses and educational content directly to schools and
          students — all under your brand.
        </Text>

        <Button
          bgColor="#155DFC"
          color="white"
          borderRadius="8px"
          px="18px"
          height="40px"
          fontSize="14px"
        >
          Learn more
        </Button>
      </VStack>
    </Box>
  );
};