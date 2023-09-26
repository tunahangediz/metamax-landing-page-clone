import { AtSignIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FC } from "react";
import { IoMenuOutline, IoPersonCircleOutline } from "react-icons/io5";

const HamburgerMenu: FC = () => {
  const isAuthenticated = true;
  const menuItemList = isAuthenticated
    ? ["Giriş yap", "Kayıt ol"]
    : ["Giriş yap", "Kayıt ol", "dsfsdfds", "fdfsdfdsfsd"];
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="menu"
        variant="ghost"
        border="1px solid"
        borderColor={mode("gray.200", "gray.700")}
        p="2"
        borderRadius="24px"
      >
        <Flex gap="1" align="center">
          <Icon
            boxSize="22"
            as={IoMenuOutline}
            color={mode("graySpecial.800", "white")}
          />
          <Icon
            boxSize="22"
            as={IoPersonCircleOutline}
            color={mode("graySpecial.800", "white")}
          />
        </Flex>
      </MenuButton>

      <MenuList p="4" display="flex" flexDirection="column" gap="2">
        {menuItemList.map((item) => (
          <MenuItem
            key={item}
            as={Button}
            display="flex"
            justifyContent="start"
            fontSize="sm"
          >
            {item}
          </MenuItem>
        ))}

        <Divider />

        <MenuItem as={Button} display="flex" justifyContent="start">
          <AtSignIcon boxSize={5} mr="2" />
          TRY
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
