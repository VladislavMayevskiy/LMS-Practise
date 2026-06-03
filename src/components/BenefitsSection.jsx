import {
  Box,
  Heading,
  Button,
  VStack,
  Text,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import Background from "../assets/KeyBenefits/Background.svg";
import DownIcon from "../assets/KeyBenefits/DownIcon.svg";
import GreenTriangle from "../assets/KeyBenefits/Polygon.svg";
import BlueSquare from "../assets/KeyBenefits/Quadrangle.svg";
import OrangeCircle from "../assets/KeyBenefits/Circle.svg";
import RedStar from "../assets/KeyBenefits/Star.svg";

export function BenefitsSection() {
  const items = [
    { icon: GreenTriangle, title: "Your Brand, Your Way", text: "Offer schools a platform that carries your name, logo, and identity." },
    { icon: BlueSquare, title: "Monetise with Ease", text: "Sell courses directly to schools with built-in e-commerce and licensing tools." },
    { icon: OrangeCircle, title: "Scalable & Secure", text: "Handle any number of schools, classes, and learners with enterprise-grade security." },
    { icon: RedStar, title: "All-in-One Solution", text: "No need for external tools: host, deliver, manage, and sell in one platform." },
  ];

  return (
    <Box w="100%" mt={{ base: "64px", md: "80px" }} overflowX="clip">
      <Container maxW="1404px" px={{ base: 5, md: 5, xl: 0 }} w="100%">
        <SimpleGrid
          w="100%"
          columns={{ base: 1, md: 2 }}
          gridTemplateColumns={{ base: "1fr", md: "minmax(0, 1fr) minmax(0, 0.94fr)" }}
          alignItems="stretch"
          gap={{ base: 5, md: 6 }}
        >
          <Box
            position="relative"
            w="100%"
            minH={{ base: "420px", md: "auto" }}
            aspectRatio={{ base: "1 / 1.08", md: "702 / 1060" }}
            borderRadius={{ base: "16px", md: "16px" }}
            overflow="hidden"
            px={{ base: 6, md: 8 }}
            py={{ base: 7, md: 8 }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            textAlign="left"
          >
            <Box
              position="absolute"
              top={{ base: "-54px", md: "-76px" }}
              left={{ base: "58%", md: "53%" }}
              w={{ base: "140px", md: "220px" }}
              h={{ base: "140px", md: "220px" }}
              borderRadius="full"
              bg="#09D75F"
              zIndex={0}
            />

            <Box position="absolute" inset={0} zIndex={0} w="100%">
              <Box as="img" src={Background} alt="" w="100%" h="100%" objectFit="cover" />
            </Box>

            <Heading
              position="relative"
              zIndex={1}
              color="white"
              fontSize={{ base: "34px", md: "44px", lg: "52px" }}
              fontWeight={700}
              lineHeight="110%"
              letterSpacing="0"
            >
              Key Benefits
            </Heading>

            <Box position="relative" zIndex={1} display={{ base: "none", md: "block" }}>
              <Box
                p="8px"
                border="1px dashed #5A88FF"
                borderRadius="14px"
                w="178px"
                display="flex"
                justifyContent="center"
              >
                <Button
                  bgColor="white"
                  _hover={{ bgColor: "white" }}
                  fontWeight={400}
                  color="#114FF0"
                  borderRadius="12px"
                  fontSize="16px"
                  w="154px"
                  h="48px"
                  rightIcon={<Box as="img" src={DownIcon} alt="" />}
                  onClick={() => {
                    document.getElementById("contact-us-section")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Box>

          <VStack
            w="100%"
            h="100%"
            align="stretch"
            gap={{ base: 4, md: 5 }}
            spacing={0}
          >
            {items.map((item, i) => (
              <Box
                key={i}
                w="100%"
                flex={{ md: 1 }}
                minH={{ base: "auto", md: 0 }}
                bgColor="#F7F9FF"
                borderRadius="14px"
                border="1px dashed #C2D1FF"
                p={{ base: 5, md: 7, lg: 8 }}
              >
                <Box display="flex" justifyContent="flex-start">
                  <Box as="img" src={item.icon} alt="" w={{ base: 9, md: "42px" }} h={{ base: 9, md: "42px" }} objectFit="contain" />
                </Box>

                <Heading
                  mt={{ base: 4, md: 5 }}
                  fontSize={{ base: "24px", md: "30px", lg: "32px" }}
                  fontWeight={700}
                  lineHeight="120%"
                  letterSpacing="0"
                  textAlign="left"
                  overflowWrap="anywhere"
                >
                  {item.title}
                </Heading>

                <Text
                  mt={{ base: 2, md: 3 }}
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  lineHeight="150%"
                  letterSpacing="0"
                  textAlign="left"
                  overflowWrap="anywhere"
                >
                  {item.text}
                </Text>
              </Box>
            ))}

            <Box
              p="8px"
              border="1px dashed #5A88FF"
              borderRadius="14px"
              w="100%"
              display={{ base: "flex", md: "none" }}
              justifyContent="center"
            >
              <Button
                bgColor="#114FF0"
                _hover={{ bgColor: "#114FF0" }}
                fontWeight={400}
                rightIcon={<Box as="img" src={DownIcon} alt="" />}
                textColor="white"
                borderRadius="12px"
                fontSize="16px"
                w="100%"
                h="44px"
              >
                Contact Us
              </Button>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
