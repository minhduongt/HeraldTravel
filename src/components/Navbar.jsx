import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Links = [
  { title: "nav_home", url: "/" },
  { title: "nav_contact", url: "/contact" },
  { title: "nav_about", url: "/about" },
];
const Languagues = [
  { value: "vi", text: "VI" },
  { value: "en", text: "EN" },
];
const NavLink = ({ children, url }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: "#ffd000",
    }}
    href={url}
    color="#ffffffc7"
    fontSize={"1.8rem"}
    textShadow={"1px 3px 2px #000000"}
    transition="all 0.5s"
  >
    {children}
  </Link>
);
const NavLinkMobile = ({ children, url }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: "#ffd000",
    }}
    href={url}
    color="#ffffffc7"
    fontSize={"1.3rem"}
    textShadow={"1px 2px 1.5px #000000"}
    transition="all 0.5s"
  >
    {children}
  </Link>
);

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
export default function Navbar() {
  const navigate = useNavigate();
  const currentLanguague = localStorage.getItem("lang");
  const [isTop, setTop] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollDirection = useScrollDirection();
  const onScroll = () => {
    setTop(document.documentElement.scrollTop < 30);
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    // Remove listener on unmount
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  // var body = document.body; //IE 'quirks'
  // var document = document.documentElement; //IE with doctype
  // document = document.clientHeight ? document : body;
  // useEffect(() => {
  //   console.log("document.scrollTop", document.scrollTop);
  // }, [document.scrollTop]);
  const handleChangeLanguage = (lang) => {
    let loc = window.location.origin;
    window.location.replace(loc + "/?lng=" + lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <>
      <Flex
        backgroundColor={"#00000090"}
        justifyContent="center"
        position={"relative"}
        zIndex={"101"}
      >
        <Text color="#FFFFFF">Herald Travel</Text>
      </Flex>
      <Flex
        borderTop={isTop ? "solid 2px #ffbb00" : ""}
        px={4}
        h={"5rem"}
        w="100%"
        alignItems={"center"}
        justifyContent={"space-between"}
        position={"sticky"}
        top={{
          xs: 0,
          lg: isTop ? "0" : scrollDirection === "down" ? "-5rem" : "0",
        }}
        backgroundColor={isTop ? "transparent" : "#00000090"}
        transition="all 0.5s"
        zIndex={"99"}
        display={{ xs: "none", md: "flex" }}
      >
        <HStack
          as={"nav"}
          spacing={4}
          display={{ base: "none", md: "flex" }}
          justifyContent="center"
          w={"100%"}
        >
          <Box
            justifySelf={"left"}
            color="#FFFFFF"
            width={"10%"}
            fontSize="3rem"
            textShadow={"2px 2px #000"}
          >
            Herald
          </Box>
          {Links.map((link) => (
            <Flex width={"30%"} justifyContent="center" key={link.title}>
              <NavLink url={link.url}>{t(link.title)}</NavLink>
            </Flex>
          ))}
          <Flex
            alignItems={"center"}
            color="#FFFFFF"
            width={"10%"}
            fontSize="1rem"
          >
            {Languagues.map((lang, index) => {
              return (
                <Box key={lang.value}>
                  <Button
                    onClick={() => handleChangeLanguage(lang.value)}
                    background="none"
                    _hover={{ backgroundColor: "#ffd000" }}
                    color={currentLanguague === lang.value ? "#ffd000" : ""}
                  >
                    {lang.text}
                  </Button>
                  {index === Languagues.length - 1 ? "" : "|"}
                </Box>
              );
            })}
          </Flex>
        </HStack>
      </Flex>

      <IconButton
        w={"3rem"}
        h="2.75rem"
        size={"md"}
        colorScheme="yellow"
        icon={<Hamburger toggled={isOpen} toggle={isOpen ? onClose : onOpen} />}
        aria-label={"Open Nav"}
        left={
          isOpen ? 5 : isTop ? "5" : scrollDirection === "down" ? "-5rem" : "5"
        }
        bottom={5}
        transition="all 0.5s"
        display={{ md: "none" }}
        position={"fixed"}
        zIndex={"101"}
        sx={{
          border: "none",
          _hover: {
            border: "none",
          },
        }}
        // onClick={}
      />

      <Stack
        width={"100vw"}
        height={"100vh"}
        display={{ md: "none" }}
        px={"1rem"}
        position={"fixed"}
        transition={"0.25s ease-in-out"}
        zIndex={"100"}
        overflow={"hidden"}
        top={{
          xs: isTop ? "1.5rem" : 0,
          lg: 0,
        }}
        sx={{ backgroundColor: "#00000090", left: isOpen ? "0rem" : "-50rem" }}
      >
        <Stack as={"nav"} spacing={4}>
          {Links.map((link) => (
            <Text
              transition={"0.25s ease-in-out"}
              fontSize={"2rem"}
              // px={2}
              py={1}
              rounded={"md"}
              color="#ffbb00da"
              _hover={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#f7dc95da",
                // transform: "scale(1.1)",
              }}
              onClick={() => navigate(link.url)}
              key={link.id}
            >
              {t(link.title)}
            </Text>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
