import { Box, Heading, Text } from "@chakra-ui/react";

export const AboutSection = () => {
  return (
    <Box px="40px" py="60px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="40px"
        position="relative"
        minH="190px"
      >
        <Heading fontSize="28px">
          Education, Delivered
        </Heading>

        <Text maxW="520px" fontSize="14px" textAlign="left">
          Have you got great educational content but need a platform to distribute
          it? Our platform gives education content creators everything they need
          to package, distribute, and monetise courses for schools.
        </Text>

        <Box
          as="img"
          alt=""
          position="absolute"
          left="0"
          bottom="0"
          width="180px"
        />
      </Box>


    </Box>
  );
};