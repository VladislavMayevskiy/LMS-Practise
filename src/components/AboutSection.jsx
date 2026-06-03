import { Box, Heading, Text } from "@chakra-ui/react";
import greenElipse from "../assets/Shapes/green-elipse.png";
import keyBenefitsBg from "../assets/Shapes/key-benefits-bg.png";
import howItWorks from "../assets/Shapes/how-it-works.png";
import readyToChat from "../assets/Shapes/ready-to-chat.png";
import logo from "../assets/Shapes/logo.png";

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
          src={greenElipse}
          alt=""
          position="absolute"
          left="0"
          bottom="0"
          width="180px"
        />
      </Box>

      <Box
        as="img"
        src={keyBenefitsBg}
        alt="Key Benefits"
        display="block"
        w="100%"
        mt="20px"
      />

      <Box
        as="img"
        src={howItWorks}
        alt="How It Works"
        display="block"
        w="100%"
      />

      <Box
        as="img"
        src={readyToChat}
        alt="Ready to chat"
        display="block"
        w="100%"
      />

      <Box
        as="img"
        src={logo}
        alt="Logo"
        display="block"
        w="100%"
      />
    </Box>
  );
};