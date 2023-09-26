import { Heading, Text, useColorModeValue as mode } from "@chakra-ui/react";
import { FC } from "react";

const TrendsHeader: FC = () => {
  return (
    <>
      {" "}
      <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="semibold">
        {" "}
        Finansal farkındalığı keşfet.
      </Heading>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color={mode("graySpecial.800", "graySpecial.600")}
      >
        Metamax ve emlak piyasası hakkındaki önemli gelişmeleri senin için
        derliyoruz.
      </Text>
    </>
  );
};

export default TrendsHeader;
