import { Box, Flex, Text } from "@chakra-ui/react";
// material

// ----------------------------------------------------------------------

export default function ContactPage() {
  return (
    <Box minH={"200rem"}>
      <Flex m={"1rem"} borderX="solid 2px #000000">
        <Text p="1rem" fontSize={{ xs: "1.5rem", md: "2rem" }}>
          Liên hệ:
        </Text>
      </Flex>
    </Box>
  );
}
