import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// material

// ----------------------------------------------------------------------

export default function LocationSelect() {
  const [slider, setSlider] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentHover, setCurrentHover] = useState(-1);
  const [currentSelect, setCurrentSelect] = useState({
    title: "",
    image: "",
    map: "",
  });
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,

    autoplaySpeed: 2000,
    speed: 500,
    cssEase: "linear",
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentIdx(next);
    },
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
          centerPadding: 150,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          centerPadding: 50,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerPadding: 50,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: 100,
        },
      },
    ],
  };

  const animateVariants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        delay: 1,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const featuresLeftVariants = {
    hide: {
      x: -300,
      opacity: 0,
    },
    appear: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const featuresRightVariants = {
    hide: {
      x: 300,
      opacity: 0,
    },
    appear: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const locations = [
    {
      title: "Dinh Độc Lập",
      image: "/images/dinhdoclap2.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4474728812625!2d106.69311341535628!3d10.776999462128703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2sIndependence%20Palace!5e0!3m2!1sen!2s!4v1681221975309!5m2!1sen!2s",
    },
    {
      title: "Chùa Bửu Long",
      image: "/images/chuabuulong.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.114584608695!2d106.83412781535667!3d10.878888660267549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174df5ca8346299%3A0x4e3e8d49e73127cb!2sBuu%20Long%20Buddhist%20Temple!5e0!3m2!1sen!2s!4v1681222476984!5m2!1sen!2",
    },
    {
      title: "Bảo tàng Mỹ Thuật Thành phố Hồ Chí Minh",
      image: "/images/baotangmythuat.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5393841878804!2d106.69463082881873!3d10.769938437727298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4077edf9b1%3A0xb1466bf707230576!2sHo%20Chi%20Minh%20City%20Museum%20of%20Fine%20Arts!5e0!3m2!1sen!2s!4v1681222798607!5m2!1sen!2s",
    },
    {
      title: "Chùa Hoằng Pháp",
      image: "/images/chuahoangphap.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.833077804774!2d106.57962301535656!3d10.900287359874513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d575f67f9c1d%3A0xc8ce7b82c763b792!2sHoang%20Phap%20Buddhist%20Temple!5e0!3m2!1sen!2s!4v1681222889818!5m2!1sen!2s",
    },
    {
      title: "Bưu điện Thành phố",
      image: "/images/buudienthanhpho.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3940718437184!2d106.69770901535625!3d10.781099862054088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752677a9774b1b%3A0x3d40edb27c90ec26!2sHo%20Chi%20Minh%20City%20Post%20Office!5e0!3m2!1sen!2s!4v1681222980904!5m2!1sen!2s",
    },
    {
      title: "Trường THPT chuyên Lê Hồng Phong",
      image: "/images/lehongphong.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3940718437184!2d106.69770901535625!3d10.781099862054088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752677a9774b1b%3A0x3d40edb27c90ec26!2sHo%20Chi%20Minh%20City%20Post%20Office!5e0!3m2!1sen!2s!4v1681222980904!5m2!1sen!2s",
    },
    {
      title: "Bảo tàng áo dài",
      image: "/images/baotangaodai.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3940718437184!2d106.69770901535625!3d10.781099862054088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752677a9774b1b%3A0x3d40edb27c90ec26!2sHo%20Chi%20Minh%20City%20Post%20Office!5e0!3m2!1sen!2s!4v1681222980904!5m2!1sen!2s",
    },
  ];
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        // backgroundColor="transparent"
        zIndex={98}
        direction="column"
        p={{ xs: "1rem", lg: "2.5rem" }}
        backgroundImage={"images/hochiminhcity.jpg"}
        backgroundSize="contain"
        backgroundPosition={"center"}
        backgroundRepeat="no-repeat"
      >
        <Flex borderY={"solid 1px #ffd000 "} justifyContent={"center"}>
          <motion.div
            initial={{
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: "easeIn",
              },
            }}
            viewport={{ once: true }}
            style={{ zIndex: 98 }}
          >
            <Text
              py="4rem"
              fontSize={{ xs: "2.5rem", md: "3rem" }}
              textTransform="uppercase"
              textAlign={"center"}
              color="#000000"
              textShadow={"1px 1px 1px #FFFFFF"}
            >
              Gợi ý những điểm đến nổi tiếng
            </Text>
          </motion.div>
        </Flex>
        <Box overflow="hidden" py="10rem" margin="0" width={"100%"}>
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
          <Flex
            justifyContent={"center"}
            alignItems="center"
            pb="5rem"
            gap={{ xs: "10%", lg: "2%" }}
            height={"20vh"}
          >
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              // position="absolute"
              background="transparent"
              color="secondary.main"
              // left={{ xs: "15%", md: "25%" }}
              // top={{ xs: "30%", md: "43%" }}
              // transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
              _focus={{ boxShadow: "none" }}
            >
              <BsArrowLeft size={{ xs: "2rem", md: "4rem", lg: "6rem" }} />
            </IconButton>
            <Text
              // position="absolute"
              // left={{ xs: "25%", md: "35%" }}
              // top={{ xs: "30%", md: "42%" }}
              width={{ xs: "50%", md: "30%" }}
              fontSize={{ xs: "1.8rem", md: "2rem", lg: "3rem" }}
              textAlign={"center"}
            >
              {locations[currentIdx].title}
            </Text>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              // position="absolute"
              background="transparent"
              color="secondary.main"
              // right={{ xs: "15%", md: "25%" }}
              // top={{ xs: "30%", md: "43%" }}
              // transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickNext()}
              _focus={{ boxShadow: "none" }}
            >
              <BsArrowRight size={{ xs: "2rem", md: "4rem" }} />
            </IconButton>
          </Flex>
          <Box sx={{}}>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {/* <motion.ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
                variants={menuVariants}
                initial={"closed"}
                whileInView={"open"}
                viewport={{ once: true }}
              > */}
              {locations.map((loc, index) => {
                return (
                  <Flex
                    key={loc.title}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Flex
                      backgroundImage={`url(${loc.image})`}
                      // backgroundPosition="center"
                      backgroundSize="cover"
                      sx={
                        index === currentIdx
                          ? {
                              transform: "scaleX(1.2) scaleY(1.2)",
                              zIndex: 1,
                              // ml: { xs: "1rem", md: "0" },
                            }
                          : {
                              transform: "scale(1.0)",
                              zIndex: -1,
                            }
                      }
                      my="5rem"
                      alignSelf={"center"}
                      justifySelf="center"
                      position="relative"
                      right={{
                        xs: "-1rem",
                        md: "-10rem",
                        lg: "6rem",
                        xl: "3rem",
                      }}
                      width={{
                        xs: "15rem",
                        md: "20rem",
                        lg: "15rem",
                        xl: "20rem",
                      }}
                      height={{
                        xs: "25rem",
                        md: "30rem",
                        lg: "25rem",
                        xl: "30rem",
                      }}
                      border="solid 2px"
                      borderRadius={"12px"}
                      alignItems="center"
                      justifyContent={"center"}
                      transition="all 0.5s"
                      onMouseEnter={() => setCurrentHover(index)}
                      onMouseLeave={() => setCurrentHover(-1)}
                      onClick={() => setCurrentSelect(loc)}
                      opacity={index === currentIdx ? 1 : 0.8}
                      filter={index === currentIdx ? "" : `blur(1px)`}
                      _hover={{
                        cursor: "pointer",
                        opacity: 1,
                        filter: `blur(0)`,
                      }}
                    >
                      <Text
                        fontSize={"2rem"}
                        textAlign="center"
                        color="#FFFFFF"
                        textShadow={"1px 1px 1px #000000"}
                        display={
                          index === currentHover ||
                          currentSelect.title === loc.title
                            ? "block"
                            : "none"
                        }
                      >
                        {loc.title}
                      </Text>
                    </Flex>
                  </Flex>
                );
              })}
              {/* </motion.ul> */}
            </Slider>
          </Box>
        </Box>

        <Flex
          justifyContent={"center"}
          alignItems="center"
          textAlign={"center"}
        >
          <Text
            fontSize={{ xs: "1.5rem", md: "2.5rem" }}
            color="#FFFFFF"
            textShadow={"1px 3px 2px #000000"}
          >
            Chọn một địa điểm để tìm hiểu ngay!
          </Text>
        </Flex>
        <Flex
          height={{ xs: "100vh", md: "50vh" }}
          mt={{ xs: "0", lg: "50rem" }}
          mb={{ xs: "0", md: "10rem" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
        >
          <motion.div
            variants={featuresLeftVariants}
            initial="hide"
            whileInView={"appear"}
            style={{ width: "25%" }}
            viewport={{ once: true }}
          >
            <Flex
              height="100%"
              direction="column"
              justifyContent={"space-evenly"}
              fontSize={{ xs: "1rem", md: "1.5rem", xl: "2rem" }}
              display={{ xs: "none", lg: "flex" }}
            >
              <Text>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </Text>
              <Text>Excepteur sint occaecat cupidatat non proident</Text>
            </Flex>
          </motion.div>
          <Flex width={"50%"} justifyContent={"center"} alignItems="center">
            <Image
              width={{ xs: "20rem", md: "40rem", xl: "50rem" }}
              height={{ xs: "20rem", md: "40rem", xl: "50rem" }}
              src="/images/saigonoldmap.jpg"
              sx={{ position: "absolute", zIndex: "1" }}
            />
            <Flex
              width={{ xs: "15rem", md: "30rem", xl: "39rem" }}
              minWidth={{ xs: "15rem", md: "30rem", xl: "39rem" }}
              height={{ xs: "12rem", md: "25rem", xl: "32rem" }}
              sx={{
                position: "relative",
                zIndex: "2",
                top: { xs: "1rem", md: "1.5rem", xl: "2rem" },
              }}
            >
              <iframe
                src={currentSelect ? currentSelect.map : ""}
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title={currentSelect ? currentSelect.title : ""}
              />
            </Flex>
          </Flex>
          <motion.div
            variants={featuresRightVariants}
            initial="hide"
            whileInView={"appear"}
            style={{ width: "25%" }}
            viewport={{ once: true }}
          >
            <Flex
              height="100%"
              direction="column"
              justifyContent={"space-evenly"}
              alignItems="flex-end"
              fontSize={{ xs: "1rem", md: "1.5rem", xl: "2rem" }}
              display={{ xs: "none", lg: "flex" }}
            >
              <Text>Lorem ipsum dolor sit amet</Text>
              <Text>consectetur adipiscing elit</Text>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </Box>
  );
}
