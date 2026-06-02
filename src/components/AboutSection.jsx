import { Box, Heading, Text } from "@chakra-ui/react";
import greenElipse from "../assets/Shapes/green-elipse.png";

export const AboutSection = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px="40px"
      py="60px"
      gap="40px"
      position={"relative"}
    ><Box
  as="img"
  src={greenElipse}
  alt=""
  position="absolute"
  left="40px"
  top="130px"
  width="180px"
/>
      <Heading fontSize="28px">
        Education, Delivered
      </Heading>

<Text maxW="520px" fontSize="14px" textAlign="left">Have you got great educational content but need a platform to distribute it?
  Our platform gives education content creators everything they need to package,
  distribute, and monetise courses for schools.      </Text>
    </Box>
  );
};