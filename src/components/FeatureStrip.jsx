import { Box, Text } from "@chakra-ui/react";

export const FeatureStrip = () => {
  return (
    <Box
      display="flex"
      width="100%"
      mt="40px"
      bg="#F7F8FC"
      py="14px"
    >
      <Box flex="1" textAlign="center">
        <Text fontSize="12px">DELIVER EDUCATION, YOUR WAY</Text>
      </Box>

      <Box
        flex="1"
        textAlign="center"
        borderLeft="1px solid"
        borderColor="#E3E6EE"
      >
        <Text fontSize="12px">
          GROW YOUR AUDIENCE WITHOUT GIVING UP YOUR IDENTITY
        </Text>
      </Box>

      <Box
        flex="1"
        textAlign="center"
        borderLeft="1px solid"
        borderColor="#E3E6EE"
      >
        <Text fontSize="12px">FULL CONTROL</Text>
      </Box>
    </Box>
  );
};