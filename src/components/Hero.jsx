import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";import polygon from "../assets/Shapes/Polygon 2.png"

export const Hero = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      pt="150px"
      position="relative"
      
    >

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