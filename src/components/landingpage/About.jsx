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
    <Flex minH={{ xs: "20rem", md: "50rem" }} justifyContent="center">
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
          <Flex
            justifyContent="center"
            alignItems={"center"}
            gap={{ xs: 1, md: 10 }}
          >
            <Text fontSize={{ xs: "1.5rem", md: "4rem" }}>Giới thiệu</Text>
            <ArrowRightIcon
              w={{ xs: "2rem", md: "4rem" }}
              h={{ xs: "2rem", md: "4rem" }}
            />
          </Flex>
          <Image
            width={{ xs: "10rem", md: "40rem" }}
            height={{ xs: "15rem", md: "40rem", lg: "50rem" }}
            alt="walkingperson"
            src="/images/walkingperson.gif"
          />
        </motion.div>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems={"center"}
        direction={"column"}
        width={{ xs: "50%", lg: "50%" }}
        mx={{ xs: "0.5rem", md: "1rem", lg: "5rem" }}
        backgroundImage="/images/saigon-vector.png"
        backgroundSize={"cover"}
      >
        <motion.div
          variants={aboutVariants}
          initial="hide"
          whileInView="appear"
          viewport={{ once: true }}
        >
          <Flex direction={"column"} p="1rem">
            <Text
              fontSize={{ xs: "1rem", md: "1.8rem" }}
              color="#000000"
              noOfLines={10}
              textShadow={"2px 3px 2px #ffffff"}
            >
              {
                "Thành phố Hồ Chí Minh là một địa điểm du lịch nổi tiếng với trang sử hào hùng cùng nhiều di tích, bảo tàng mang ý nghĩa vô cùng lớn. Với mong muốn khách du lịch sẽ hiểu rõ hơn về từng địa điểm tham quan tại Thành phố mang tên Bác, Herald được thành lập bởi sinh viên của Đại học FPT để giúp quý khách nắm bắt rõ các chi tiết về địa điểm, hành trình và một phần ý nghĩa của điểm đến đó đối với Việt Nam."
              }
              <br />
              {
                "  Hi vọng quý khách có một trải nghiệm thật tốt với Herald - Travel Chúng tôi kính chúc quý khách một chuyến du lịch thật đáng nhớ."
              }
            </Text>

            <Link href="/about">
              <Flex alignItems={"center"} pt="1rem">
                <Text fontWeight={"bold"} fontSize="1.3rem">
                  Xem thêm
                </Text>
                <ChevronRightIcon />
              </Flex>
            </Link>
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
}
