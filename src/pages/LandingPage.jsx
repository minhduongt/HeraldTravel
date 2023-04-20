import FadeCarousel from "@/components/FadeCarousel";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import LocationSelect from "@/components/landingpage/LocationSelect";
import AboutSection from "@/components/landingpage/About";
// material

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <Box minH={"150rem"}>
      <Box position={"relative"} top="-5rem">
        <FadeCarousel />
      </Box>
      <AboutSection />
      <LocationSelect />
      <Flex height={"10vh"} backgroundColor="#ffd00090"></Flex>
    </Box>
  );
}
