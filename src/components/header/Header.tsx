import { Box, Image, Stack, VStack } from "@chakra-ui/react";
import { FC } from "react";
import HeaderButtonGroup from "./HeaderButtonGroup";
import HeaderInfo from "./HeaderInfo";
import Patent from "./Patent";

const Header: FC = () => {
  return (
    <>
      {/* first vstack for layout */}
      {/* Stack for header */}
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        align="center"
        w="full"
        spacing="8"
        py={{ base: "8", sm: "8", lg: "24", xl: "24" }}
      >
        <VStack
          align="flex-start"
          textAlign="left"
          gap="4"
          maxW="620px"
          h="full"
        >
          <Patent />

          <HeaderInfo />

          <HeaderButtonGroup />
        </VStack>
        <Box
          maxW="500px"
          w="full"
          display={{ base: "none", md: "block", xl: "block" }}
        >
          <Image
            width="full"
            objectFit="cover"
            src="assets/images/svg/header-image.svg"
          />
        </Box>
      </Stack>
    </>
  );
};

export default Header;
