import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
// material

// ----------------------------------------------------------------------

export default function AboutSection() {
  const titleVariants = {
    hide: {
      x: -300,
      opacity: 0,
    },
    appear: {
      opacity: 1,
      x: 0,
      rotate: 5,
      transition: {
        delay: 0.5,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const aboutVariants = {
    hide: {
      x: -100,
      opacity: 0,
    },
    appear: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <Flex minH={"50rem"} justifyContent="center">
      <Flex
        justifyContent="center"
        alignItems={"center"}
        direction={"column"}
        width="50%"
      >
        <motion.div
          variants={titleVariants}
          initial="hide"
          whileInView="appear"
          viewport={{ once: true }}
        >
          <Flex justifyContent="center" alignItems={"center"} gap={10}>
            <Text fontSize={"4rem"}>Giới thiệu</Text>
            <ArrowRightIcon w="4rem" h="4rem" />
          </Flex>
          <Image
            width={"40rem"}
            height="50rem"
            alt="walkingperson"
            src="/images/walkingperson.gif"
          />
        </motion.div>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems={"center"}
        direction={"column"}
        width="50%"
        mx={"10rem"}
      >
        <motion.div
          variants={aboutVariants}
          initial="hide"
          whileInView="appear"
          viewport={{ once: true }}
        >
          <Flex direction={"column"} p="1rem">
            <Text fontSize={"1.8rem"} color="#000000">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            </Text>
            <Link>
              <Flex alignItems={"center"} pt="1rem">
                <Text>Xem thêm</Text>
                <ChevronRightIcon />
              </Flex>
            </Link>
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
}
