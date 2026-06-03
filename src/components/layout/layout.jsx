import { Box } from "@chakra-ui/react";

export default function LandingLayout({ children }) {
  return (
    <Box minH="100vh" w="100%" position="relative" overflow="hidden">
      <Box
  as="img"
  alt=""
  position="absolute"
  top="-90px"
  right="-90px"
  w="260px"
  h="260px"
  objectFit="contain"
  zIndex={0}
  pointerEvents="none"
/>

      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}
