import { Box, Text, Button, HStack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      width="100%"
      px="24px"
      py="16px"
      bgColor="transparent"
    >
      <HStack
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontSize="20px"
          fontWeight="600"
        >
          LOGO
        </Text>

        <Button
          width="101px"
          height="41px"
          bgColor="white"
          color="black"
          borderRadius="12px"
          fontSize="14px"
          fontWeight="500"
        >
          Contact
        </Button>
      </HStack>
    </Box>
  );
};