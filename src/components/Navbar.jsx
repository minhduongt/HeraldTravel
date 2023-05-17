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
import { useEffect, useState } from "react";

const Links = [
  { title: "Trang chủ", url: "/" },
  { title: "Liên hệ", url: "/contact" },
  { title: "Giới thiệu", url: "/about" },
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
      <Flex backgroundColor={"#000000"} justifyContent="center">
        <Text color="#FFFFFF">Herald Travel - FPT University HCM</Text>
      </Flex>
      <Flex
        borderTop={isTop ? "solid 2px #ffbb00" : ""}
        px={4}
        h={"5rem"}
        w="100%"
        alignItems={"center"}
        justifyContent={"space-between"}
        position={"sticky"}
        top={scrollDirection === "down" ? "0" : "-5rem"}
        backgroundColor={isTop ? "transparent" : "#000000"}
        transition="all 0.5s"
        zIndex={"99"}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

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
          >
            Herald
          </Box>
          {Links.map((link) => (
            <Flex width={"30%"} justifyContent="center" key={link}>
              <NavLink url={link.url}>{link.title}</NavLink>
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
                <Box>
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

        <Flex alignItems={"center"}>
          {/* <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu> */}
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={90} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={1.5}>
            {Links.map((link) => (
              <NavLinkMobile key={link} url={link.url}>
                {link.title}
              </NavLinkMobile>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
}
