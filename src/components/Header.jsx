import { Box, Text } from "@chakra-ui/react";


export const Header = () => {
  return (
    <Box
      width="full"
      paddingY={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom={1}
      borderColor={"#FFFFFF"}
      bgColor={"black"}
      boxShadow={"sm"}
    >
        <Text>Header</Text>
    </Box>
  );
};