import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

import {Link as RouterLink} from "react-router-dom"

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>
          <RouterLink to="/">
            <Text>Home</Text>
          </RouterLink>
          <RouterLink to="/products">
            <Text>Product</Text>
          </RouterLink>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <RouterLink to="/register">
                <Button>Register</Button>
              </RouterLink>
              <RouterLink to="/login">
                <Button>Login</Button>
              </RouterLink>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
            <AiOutlineShoppingCart />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
