import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
// material

// ----------------------------------------------------------------------

export default function LocationSelect() {
  const [currentHover, setCurrentHover] = useState(-1);
  const [currentSelect, setCurrentSelect] = useState({
    title: "",
    image: "",
    map: "",
  });
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
  ];
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        backgroundColor="transparent"
        zIndex={98}
        direction="column"
        p="5rem"
      >
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
            fontSize={"3rem"}
            textTransform="uppercase"
            textAlign={"center"}
            color="#000000"
            textShadow={"1px 1px 1px #FFFFFF"}
          >
            Gợi ý những điểm đến nổi tiếng
          </Text>
        </motion.div>
        <motion.ul
          style={{
            justifyContent: "space-between",
            gap: "3rem",
            display: "flex",
          }}
          variants={menuVariants}
          initial={"closed"}
          whileInView={"open"}
          viewport={{ once: true }}
        >
          {locations.map((loc, index) => {
            return (
              <motion.li
                key={loc.title}
                tabIndex={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.95 }}
                style={{
                  "::marker": {
                    display: "none",
                  },
                }}
              >
                <Flex
                  backgroundImage={`url(${loc.image})`}
                  // backgroundPosition="center"
                  backgroundSize="cover"
                  width={"20rem"}
                  height="30rem"
                  border="solid 2px"
                  borderRadius={"12px"}
                  alignItems="center"
                  justifyContent={"center"}
                  onMouseEnter={() => setCurrentHover(index)}
                  onMouseLeave={() => setCurrentHover(-1)}
                  onClick={() => setCurrentSelect(loc)}
                  opacity={currentSelect.title === loc.title ? 1 : 0.8}
                  filter={currentSelect.title === loc.title ? "" : `blur(1px)`}
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
              </motion.li>
            );
          })}
        </motion.ul>
        <Flex justifyContent={"center"} alignItems="center">
          <Text fontSize={"2rem"}>Chọn một địa điểm để tìm hiểu ngay!</Text>
        </Flex>

        <Flex
          height={"50vh"}
          my="15rem"
          justifyContent={"space-between"}
          alignItems="center"
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
              fontSize={"2rem"}
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
              width={"50rem"}
              height="50rem"
              src="/images/saigonoldmap.jpg"
              sx={{ position: "absolute", zIndex: "1" }}
            />
            <Flex
              width={"39rem"}
              height="34rem"
              sx={{ position: "relative", zIndex: "2", top: "2rem" }}
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
              fontSize={"2rem"}
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
