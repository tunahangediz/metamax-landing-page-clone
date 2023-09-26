import { Button, HStack, Link } from "@chakra-ui/react";
import { FC } from "react";
import HowItsWorkModal from "./HowItsWorkModal";

const HeaderButtonGroup: FC = () => {
  return (
    <HStack>
      <Button
        as={Link}
        href="https://metamax.com.tr/auth/register"
        size="lg"
        colorScheme="yellow"
        bg="metamaxYellow.900"
        _hover={{ bg: "metamaxYellow.700", textDecoration: "none" }}
      >
        Başlayın
      </Button>
      {/* <Button
        size="lg"
        bg="transparent"
        border="1px"
        borderColor={mode("graySpecial.400", "gray.700")}
        gap="2"
        color={mode("current", "white")}
        _hover={{ bg: mode("graySpecial.300", "gray.700") }}
      >
        <InfoIcon boxSize={4} />
        Nasıl Çalışır?
      </Button> */}
      <HowItsWorkModal />
    </HStack>
  );
};

export default HeaderButtonGroup;
