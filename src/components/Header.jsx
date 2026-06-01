import { Box, Text} from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      width="full"
      paddingY={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom={1}
      borderColor={"#F5F7F9"}
      bgColor={"white"}
      boxShadow={"sm"}
    >
        <Text>Header</Text>
    </Box>
  );
};