import React from "react";
import { Box, Button, Container, Heading, Text, Image, VStack, Link, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} alignItems="flex-start">
        <Box p={5} shadow="md" borderWidth="1px" bg={bgColor} w="full" rounded="md">
          <Heading mb={2}>Hello, I'm John Doe!</Heading>
          <Text fontSize="xl" color={textColor}>
            I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences.
          </Text>
        </Box>
        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ0ODg3MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" />
        </Box>
        <Link href="mailto:john.doe@example.com" style={{ textDecoration: "none" }}>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
            Contact Me
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
