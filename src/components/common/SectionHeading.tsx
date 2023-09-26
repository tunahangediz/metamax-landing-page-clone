import { Heading, useColorModeValue as mode } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return (
    <Heading
      fontSize={["md", "md", "xl"]}
      color={mode("blackAlpha.600", "whiteAlpha.600")}
    >
      {children}
    </Heading>
  );
};

export default SectionHeading;
