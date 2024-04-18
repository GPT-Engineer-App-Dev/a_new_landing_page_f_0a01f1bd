import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" justifyContent="space-between" alignItems="center" p={4} bg="blue.800" color="white">
        <Heading as="h1" size="lg">
          Webbografi
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link href="#home" p={2}>
            Home
          </Link>
          <Link href="#features" p={2}>
            Features
          </Link>
          <Link href="#about" p={2}>
            About
          </Link>
          <Link href="#contact" p={2}>
            Contact
          </Link>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Flex id="home" direction="column" justifyContent="center" alignItems="center" height="90vh" bgImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzEzNDIwNDQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" color="white">
        <VStack spacing={4}>
          <Heading as="h2" size="2xl" textAlign="center">
            Empowering Your Digital Presence
          </Heading>
          <Text fontSize="xl">Innovative solutions tailored for your business growth.</Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" variant="solid">
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* Featured Content */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="xl" mb={6}>
          Featured Services
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading mb={2}>Web Design</Heading>
            <Text mt={4}>Create stunning and responsive websites.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading mb={2}>SEO Optimization</Heading>
            <Text mt={4}>Enhance your site's visibility on search engines.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading mb={2}>Digital Marketing</Heading>
            <Text mt={4}>Strategic marketing to boost your online presence.</Text>
          </Box>
        </Stack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; {new Date().getFullYear()} Webbografi. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
