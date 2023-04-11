import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import slickStyles from "./css/slick-dot.module.css";
import { AnimatePresence, motion } from "framer-motion";

const FadeCarousel = ({ children }, props) => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: slickStyles.dots_bar,
  };

  const animateVar = {
    hidden: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  const images = [
    {
      title: "Dinh Độc Lập",
      url: "/images/dinhdoclap2.jpg",
    },
    {
      title: "Chùa Bửu Long",
      url: "/images/chuabuulong.jpg",
    },
    {
      title: "Bảo tàng Mỹ Thuật Thành phố Hồ Chí Minh",
      url: "/images/baotangmythuat.jpg",
    },
    {
      title: "Chùa Hoằng Pháp",
      url: "/images/chuahoangphap.jpg",
    },
    {
      title: "Bưu điện Thành phố",
      url: "/images/buudienthanhpho.jpg",
    },
  ];

  return (
    <Box>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Box width="100%" height={"100%"}>
        <Flex justifyContent={"center"}>
          <motion.div
            variants={animateVar}
            initial="hidden"
            animate="show"
            style={{ zIndex: 98, position: "absolute" }}
            // viewport={{ once: true }}
          >
            <Flex
              position="relative"
              justifyContent={"center"}
              backgroundColor="transparent"
              top="10rem"
              zIndex={98}
            >
              <Text
                width={"70%"}
                fontSize={"5rem"}
                textTransform="uppercase"
                textAlign={"center"}
                color="#FFFFFF"
                textShadow={"3px 3px 3px #7a6c3494"}
              >
                Những địa điểm độc đáo chờ bạn khám phá
              </Text>
            </Flex>
          </motion.div>
        </Flex>
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <Box key={image.title}>
                <Image
                  width={"100%"}
                  height="1080px"
                  alt={image.title}
                  src={image.url}
                />
                <Flex
                  direction={"column"}
                  position="absolute"
                  bottom="10rem"
                  left="5rem"
                  border="solid 1px #c9a30d"
                >
                  <motion.div
                    key={image.title}
                    variants={animateVar}
                    initial="hidden"
                    animate="show"
                    style={{ zIndex: 98 }}
                  >
                    <Text
                      textAlign={"center"}
                      fontSize={"2.5rem"}
                      width={"7rem"}
                      color="#FFFFFF"
                      textShadow={"2px 2px 2px #c9a30d"}
                      overflowWrap={"anywhere"}
                    >
                      {image.title}
                    </Text>
                  </motion.div>
                </Flex>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default FadeCarousel;
