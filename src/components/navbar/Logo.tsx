import { Box, Image, useColorModeValue as mode } from "@chakra-ui/react";
import { FC } from "react";

const Logo: FC = () => (
  <Box>
    {
      <Image
        fill="white"
        height="30px"
        src={mode("/metamin.svg", "/metamin.svg")}
        alt="metamax-log"
      />
    }
  </Box>
);
export default Logo;
