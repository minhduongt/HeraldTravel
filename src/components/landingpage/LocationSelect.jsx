import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
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
const locations = [
  {
    title: "Dinh Độc Lập",
    loc: "Quận 1",
    image: "/images/dinhdoclap2.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4474728812625!2d106.69311341535628!3d10.776999462128703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2sIndependence%20Palace!5e0!3m2!1sen!2s!4v1681221975309!5m2!1sen!2s",
    features: [
      "Khởi công xây dựng ngày 1 tháng 7 năm 1962",
      "Dinh được xây theo bản thiết kế của kiến trúc sư Ngô Viết Thụ, người Việt Nam đầu tiên đạt giải Khôi nguyên La Mã.",
      "Được Chính phủ Việt Nam xếp hạng là di tích quốc gia đặc biệt.",
      "Mang ý nghĩa lịch sử sấu sắc.",
    ],
  },
  {
    title: "Chùa Bửu Long",
    loc: "Quận 9",
    image: "/images/chuabuulong.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.114584608695!2d106.83412781535667!3d10.878888660267549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174df5ca8346299%3A0x4e3e8d49e73127cb!2sBuu%20Long%20Buddhist%20Temple!5e0!3m2!1sen!2s!4v1681222476984!5m2!1sen!2",
    features: [
      "Tên chính thức là Thiền viện Tổ đình Bửu Long.",
      "Chùa thuộc hệ phái Phật giáo nguyên thủy Nam tông, do cư sĩ Võ Hà Thuật thành lập năm 1942.",
      "Chùa Bửu Long mang nét kiến trúc các chùa ở Thái Lan, Ấn Độ kết hợp cùng nét kiến trúc các chùa thời Nguyễn.",
      "Điểm nhấn của chùa là ngôi bảo tháp có tên gọi Gotama Cetiya, bảo tháp rộng trên 2.000m², cao 70m.",
    ],
  },
  {
    title: "Bảo tàng Mỹ Thuật Thành phố Hồ Chí Minh",
    loc: "Quận 1",
    image: "/images/baotangmythuat.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5393841878804!2d106.69463082881873!3d10.769938437727298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4077edf9b1%3A0xb1466bf707230576!2sHo%20Chi%20Minh%20City%20Museum%20of%20Fine%20Arts!5e0!3m2!1sen!2s!4v1681222798607!5m2!1sen!2s",
    features: [
      "Được thành lập năm 1987 và đi vào hoạt động năm 1991.",
      "Một trong những trung tâm mỹ thuật lớn nhất nước.",
      "Đây là một tòa nhà tráng lệ kết hợp hài hòa lối kiến trúc Á Đông và châu Âu.",
      "Lưu trữ rất nhiều tác phẩm hội họa, điêu khắc và cổ vật mỹ thuật trong lịch sử đất nước và nhân loại.",
    ],
  },
  {
    title: "Chùa Hoằng Pháp",
    loc: "Hóc Môn",
    image: "/images/chuahoangphap.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.833077804774!2d106.57962301535656!3d10.900287359874513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d575f67f9c1d%3A0xc8ce7b82c763b792!2sHoang%20Phap%20Buddhist%20Temple!5e0!3m2!1sen!2s!4v1681222889818!5m2!1sen!2s",
    features: [
      "Chùa đã tồn tại hơn nửa thế kỷ, do cố Hòa thượng Thích Ngộ Chân Tử sáng lập năm 1957 trên một cánh rừng chồi.",
      "Được xem là trung tâm tu học Phật Pháp, trung tâm văn hóa Phật giáo lớn nhất Việt Nam.",
      "Chùa Hoằng Pháp đã trải qua nhiều giai đoạn tái thiết, nâng cấp. Hiện nay có khuôn viên rộng lớn với nhiều cây cao bóng mát quanh năm.",
      "Chánh điện chiều ngang 18m, chiều dài 42m, tổng diện tích xây dựng là 756m2, kiến trúc theo lối chữ 'công'",
    ],
  },
  {
    title: "Bưu điện Thành phố",
    loc: "Trung tâm Quận 1",
    image: "/images/buudienthanhpho.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3940718437184!2d106.69770901535625!3d10.781099862054088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752677a9774b1b%3A0x3d40edb27c90ec26!2sHo%20Chi%20Minh%20City%20Post%20Office!5e0!3m2!1sen!2s!4v1681222980904!5m2!1sen!2s",
    features: [
      "Bưu điện thành phố bắt đầu xây dựng vào năm 1886 cho đến năm 1891 dưới bàn tay của nhà kiến trúc sư tài ba người Pháp - Gustave Eiffel.",
      "Khách tham quan có cơ hội tìm hiểu về lịch sử, văn hóa Việt Nam thông qua các buổi triển lãm hay bộ sưu tập thú vị.",
      "Đơn vị thành viên của Tổng Công ty Bưu chính - Viễn thông Việt Nam.",
      "Gây ấn tượng bởi lối kiến trúc cổ điển với những đường nét hoa văn tinh xảo với màu vàng đặc trưng.",
    ],
  },
  {
    title: "Trường THPT chuyên Lê Hồng Phong",
    loc: "Quận 5",
    image: "/images/lehongphong.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3940718437184!2d106.69770901535625!3d10.781099862054088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752677a9774b1b%3A0x3d40edb27c90ec26!2sHo%20Chi%20Minh%20City%20Post%20Office!5e0!3m2!1sen!2s!4v1681222980904!5m2!1sen!2s",
    features: [
      "Trường được thành lập năm 1927.",
      "Một trong những trường Trung học đầu tiên được thực dân Pháp thành lập tại Sài Gòn.",
      "Tên ban đầu là Trường Trung học Pétrus Trương Vĩnh Ký.",
      "Được xem là một trong 5 trường Trung học Phổ thông chuyên có chất lượng giáo dục tốt nhất miền Nam hiện nay.",
    ],
  },
  {
    title: "Bảo tàng áo dài",
    loc: "Quận 9",
    image: "/images/baotangaodai.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3940718437184!2d106.69770901535625!3d10.781099862054088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752677a9774b1b%3A0x3d40edb27c90ec26!2sHo%20Chi%20Minh%20City%20Post%20Office!5e0!3m2!1sen!2s!4v1681222980904!5m2!1sen!2s",
    features: [
      "Chính thức đi vào hoạt động từ ngày 22/01/2014.",
      "Là nơi lưu giữ và vinh danh những câu chuyện về chiếc Áo Dài Việt Nam suốt chiều dài lịch sử đất nước.",
      "Không chỉ trưng bày những hiện vật, tư liệu quý về Áo dài mà còn phát huy các giá trị cốt lõi của trang phục dân tộc vào đời sống thực tế.",
      "kiến trúc bảo tàng là sự kết hợp hài hòa giữa phong cách nhà rường Quảng Nam với dấu ấn truyền thống đặc trưng vùng sông nước Nam Bộ.",
    ],
  },
];

export default function LocationSelect() {
  const [slider, setSlider] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentHover, setCurrentHover] = useState(-1);
  const [currentSelect, setCurrentSelect] = useState({
    title: "",
    image: "",
    map: "",
    loc: "",
    features: [""],
  });
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 5000,
    speed: 500,
    cssEase: "linear",
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentIdx(next);
      setCurrentSelect(locations[next]);
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

  const expandVariants = {
    hide: {
      width: "10%",
      opacity: 0,
      fontSize: "1vw",
    },
    appear: {
      opacity: 1,
      width: "100%",
      fontSize: "4vw",
      transition: {
        delay: 0.5,
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  console.log("slick slider", slider);
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
            style={{ zIndex: 2 }}
          >
            <Text
              py="4rem"
              fontSize={{ xs: "2.5rem", md: "3rem", lg: "5rem" }}
              textTransform="uppercase"
              textAlign={"center"}
              color="#ffd000"
              textShadow={"3px 3px 3px #000000"}
            >
              Gợi ý những điểm đến nổi tiếng
            </Text>
          </motion.div>
        </Flex>
        <Box
          overflow="hidden"
          py={{ xs: "2rem", md: "10rem" }}
          margin="0"
          width={"100%"}
        >
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
            <Flex direction={"column"} width={{ xs: "50%", md: "35%" }}>
              <Text
                textTransform={"uppercase"}
                fontSize={{ xs: "1.8rem", md: "2rem", lg: "3rem" }}
                textAlign={"center"}
              >
                {locations[currentIdx].title}
              </Text>
              <Text
                fontSize={{ xs: "1rem", md: "1.5rem", lg: "2rem" }}
                textAlign={"center"}
              >
                {locations[currentIdx].loc}
              </Text>
            </Flex>

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
          <Box>
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
                              zIndex: 99,
                              // ml: { xs: "1rem", md: "0" },
                            }
                          : {
                              transform: "scale(1.0)",
                              zIndex: 98,
                            }
                      }
                      my={{ xs: "3rem", md: "5rem" }}
                      direction={"column"}
                      justifyContent="space-between"
                      position="relative"
                      right={{
                        xs: "-1rem",
                        md: "-10rem",
                        lg: "7rem",
                        xl: "4rem",
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
                      border="solid 1px"
                      borderRadius={"12px"}
                      transition="all 0.5s"
                      onMouseEnter={() => setCurrentHover(index)}
                      onMouseLeave={() => setCurrentHover(-1)}
                      onClick={() => {
                        setCurrentSelect(loc);
                        slider.slickGoTo(index, true);
                      }}
                      boxShadow={
                        currentSelect.title === loc.title
                          ? "2px 1px 15px 0px #000000 inset"
                          : "2px 1px 15px 0px #000000"
                      }
                      opacity={index === currentIdx ? 1 : 0.8}
                      filter={index === currentIdx ? "" : `blur(1px)`}
                      _hover={{
                        boxShadow: "1px 1px 30px 10px #000000 inset",
                        cursor: "pointer",
                        opacity: 1,
                        filter: `blur(0)`,
                      }}
                    >
                      {/* <Text
                        alignSelf="center"
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
                      </Text> */}
                      {/* <Text
                        width={"100%"}
                        justifySelf={"flex-end"}
                        alignSelf="center"
                        fontSize={"1.5rem"}
                        textAlign="center"
                        color="#FFFFFF"
                        textShadow={"1px 1px 1px #000000"}
                        boxShadow="0px -20px 20px 3px #000000 inset"
                        display={
                          currentSelect.title === loc.title ? "block" : "none"
                        }
                      >
                        {"Đang chọn"}
                      </Text> */}
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
          minH="20vh"
          pb={{ xs: "10rem", md: "8rem" }}
        >
          <motion.div
            variants={expandVariants}
            initial="hide"
            whileInView={"appear"}
            viewport={{ once: true }}
            style={{
              maxHeight: "10vh",
              display: currentSelect.title !== "" ? "flex" : "none",
            }}
          >
            <Grid
              h="18rem"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={{ xs: 2, md: 4 }}
            >
              <GridItem
                colSpan={2}
                bg="#2798dadc"
                alignItems="center"
                display={"flex"}
                justifyContent="center"
              >
                {" "}
                <Text
                  fontSize={{ xs: "1rem", md: "1.5rem", xl: "2rem" }}
                  color={"#FFFFFF"}
                  textShadow={"1px 3px 2px #000000"}
                >
                  {currentSelect.features[0]}
                </Text>
              </GridItem>
              <GridItem
                rowSpan={2}
                colSpan={1}
                borderX="solid 3px #000000"
                alignItems="center"
                display={"flex"}
                justifyContent="center"
                backgroundColor={"#00000095"}
              >
                <Text
                  fontSize={{ xs: "1.4rem", md: "2rem", xl: "3.5rem" }}
                  color="#ffd000"
                  textShadow={"1px 3px 2px #000000"}
                >
                  {currentSelect.title}
                </Text>
              </GridItem>
              {currentSelect.features.slice(1, 4).map((feat, index) => {
                return (
                  <GridItem
                    colSpan={2}
                    bg={index % 2 === 0 ? "#e4661ddc" : "#2798dadc"}
                    key={feat}
                    alignItems="center"
                    display={"flex"}
                    justifyContent="center"
                  >
                    <Text
                      fontSize={{ xs: "1rem", md: "1.5rem", xl: "2rem" }}
                      color={"#FFFFFF"}
                      textShadow={"1px 3px 2px #000000"}
                    >
                      {feat}
                    </Text>
                  </GridItem>
                );
              })}
            </Grid>
          </motion.div>

          <motion.div
            variants={expandVariants}
            initial="hide"
            whileInView={"appear"}
            viewport={{ once: true }}
            style={{
              maxHeight: "10vh",
              display: currentSelect.title !== "" ? "none" : "block",
            }}
          >
            <Box p={"1rem"} bg="#ffd000">
              <Text
                // fontSize={{ xs: "1.5rem", md: "4rem" }}
                color="#FFFFFF"
                textShadow={"1px 3px 2px #000000"}
              >
                Chọn một địa điểm để tìm hiểu ngay!
              </Text>
            </Box>
          </motion.div>
        </Flex>
        <Flex
          height={{ xs: "60vh", md: "50vh" }}
          mt={{ xs: "0", md: "10rem", lg: "15rem" }}
          mb={{ xs: "0", md: "10rem", lg: "15rem" }}
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
              {" "}
              {currentSelect.title !== "" ? (
                <Text>
                  Bên cạnh là bản đồ vị trí nhằm giúp bạn di chuyển đến
                  <Box color="#ffd000" display={"inline-block"} px="0.5rem">
                    {currentSelect.title}{" "}
                  </Box>
                  dễ dàng hơn.
                </Text>
              ) : (
                <Text></Text>
              )}
            </Flex>
          </motion.div>

          <Flex width={"50%"} justifyContent={"center"} alignItems="center">
            <Image
              width={{ xs: "100%", md: "40rem", xl: "50rem" }}
              height={{ xs: "27.5rem", md: "40rem", xl: "50rem" }}
              src="/images/saigonoldmap.jpg"
              sx={{ position: "absolute", zIndex: "1" }}
            />
            <Flex
              width={{ xs: "20rem", md: "30rem", xl: "39rem" }}
              minWidth={{ xs: "20rem", md: "30rem", xl: "39rem" }}
              height={{ xs: "18rem", md: "25rem", xl: "32rem" }}
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
              <Text>Hãy ghé thăm ngay để trải nghiệm tận mắt nhé!</Text>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </Box>
  );
}
