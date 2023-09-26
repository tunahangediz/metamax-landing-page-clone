import { Box, Flex, useColorModeValue as mode } from "@chakra-ui/react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks/MenuLinks";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Box
      as="nav"
      w="full"
      borderBottom="1px solid"
      borderColor={mode("gray.200", "gray.700")}
      bg={mode("white", "bodyColor.dark")}
      position="fixed"
      zIndex="3"
    >
      <Flex w="full" justify="space-between" alignItems="center" px="6" py="4">
        <Logo />
        <MenuLinks />
      </Flex>
    </Box>
  );
};

export default Navbar;
