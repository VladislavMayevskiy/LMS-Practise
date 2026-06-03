
import { Box } from "@chakra-ui/react";
import ellipse from "../../assets/Ellipse2.svg";

export default function LandingLayout({ children }) {
  return (
    <Box minH="100vh" w="100%" position="relative" overflow="hidden">
      <Box
        as="img"
        src={ellipse}
        alt=""
        position="absolute"
        top={0}
        right={0}
        w="300px"
        h="300px"
        zIndex={10}
        pointerEvents="none"
      />

      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}
