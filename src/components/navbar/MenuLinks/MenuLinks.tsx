import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../common/ColorModeSwitcher";
import HamburgerMenu from "../AccountMenu";
import MenuLink from "./MenuLink";

type Props = {};

function MenuLinks({}: Props) {
  const menuItems = ["Hakkımızda", "Kariyer", "Kurucumuzun Mektubu"];
  const menuLinks = ["Hemen Al/Sat", "Ön Satış", "Market", "Yardım"];
  return (
    <Stack
      direction={["column", "row"]}
      spacing="2.5"
      justify="center"
      align="center"
      height="full"
    >
      <Show above="md">
        {menuLinks.slice(0, -1).map((link) => (
          <MenuLink key={link} to="/hemenalsat">
            {link}
          </MenuLink>
        ))}

        <Menu>
          <MenuButton
            as={Button}
            key=""
            variant="ghost"
            fontSize="sm"
            color={mode("navbar.text", "white")}
            rightIcon={<ChevronDownIcon />}
            size="sm"
          >
            Keşfet
          </MenuButton>
          <MenuList p="4">
            {/* Hakkımızda, Kariyer ve Kurucumuzun Mektubu menu itemları */}
            {menuItems.map((item) => (
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
          </MenuList>
        </Menu>
        <MenuLink to="/yardım">{menuLinks[menuLinks.length - 1]}</MenuLink>
        <Divider orientation="vertical" height="36px" />
      </Show>
      {/* Account menu section */}
      <HStack>
        <ColorModeSwitcher />
        <HamburgerMenu />
      </HStack>
    </Stack>
  );
}

export default MenuLinks;
