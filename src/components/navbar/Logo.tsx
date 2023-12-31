import { Box, Image, useColorModeValue as mode } from "@chakra-ui/react";
import { FC } from "react";

const Logo: FC = () => (
  <Box>
    {
      <Image
        fill="white"
        height="30px"
        src={mode(
          "assets/images/svg/metamax-dark-logo.svg",
          "assets/images/svg/metamax-light-logo.svg"
        )}
        alt="metamax-log"
      />
    }
  </Box>
);
export default Logo;
