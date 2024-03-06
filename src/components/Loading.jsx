import React from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";

function Loading() {
  const defaultTitle = "Traveling...";
  return (
    <Flex
      fontFamily="main"
      alignItems={"center"}
      justifyContent="center"
      height="100vh"
      direction={"column"}
    >
      <Flex alignItems={"center"} gap={2}>
        <Spinner
          height={"2rem"}
          width={"2rem"}
          thickness="4px"
          speed="0.65s"
          emptyColor="black"
          color="#c9a30d"
          size="xl"
        />
        <Flex gap={2} fontSize="2rem">
          <Text> {defaultTitle}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Loading;
