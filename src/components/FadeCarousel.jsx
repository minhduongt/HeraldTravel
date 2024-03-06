import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import slickStyles from "./css/slick-dot.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FadeCarousel = ({ children }, props) => {
  const { t } = useTranslation();
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
    {
      title: "Trường THPT chuyên Lê Hồng Phong",
      url: "/images/lehongphong.jpg",
    },
    {
      title: "Bảo tàng áo dài",
      url: "/images/baotangaodai.jpg",
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

      <Box width="100%" height={"100%"} overflow="hidden">
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
              top={{ xs: "5rem", md: "10rem" }}
              zIndex={98}
            >
              <Text
                width={"70%"}
                fontSize={{ xs: "2rem", md: "4rem" }}
                textTransform="uppercase"
                textAlign={"center"}
                color="#FFFFFF"
                textShadow={"3px 3px 3px #7a6c3494"}
              >
                {t("first_title")}
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
                  height={{ xs: "50vh", md: "100vh", lg: "110vh" }}
                  alt={image.title}
                  src={image.url}
                />
                <Flex
                  direction={"column"}
                  position="absolute"
                  bottom={{ xs: "6rem", md: "10rem" }}
                  left={{ xs: "1rem", md: "5rem" }}
                  border="solid 1px #c9a30d"
                >
                  <motion.div
                    variants={animateVar}
                    initial="hidden"
                    animate="show"
                    style={{ zIndex: 98 }}
                  >
                    <Text
                      textAlign={"center"}
                      fontSize={{ xs: "1.5rem", md: "2.5rem" }}
                      width={"8rem"}
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
