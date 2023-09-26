import {
  Heading,
  Text,
  VStack,
  chakra,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FC } from "react";
import SectionHeading from "../common/SectionHeading";

const FAQsHeader: FC = () => {
  return (
    <VStack maxW="xl" spacing="6" textAlign="center">
      <SectionHeading>YARDIMA İHTİYACIM VAR</SectionHeading>
      <Heading fontSize={["3xl", "3xl", "5xl", "5xl"]} fontWeight="semibold">
        Sık sorulan sorular
      </Heading>
      <Text color={mode("blackAlpha.700", "whiteAlpha.700")}>
        Aradığın cevabı bulamıyorsan{" "}
        <chakra.span
          color={mode("black", "metamaxYellow.900")}
          fontWeight="semibold"
        >
          Yatırımcı Destek Merkezi
        </chakra.span>
        ’ne bakabilir veya{" "}
        <chakra.span
          fontWeight="semibold"
          color={mode("black", "metamaxYellow.900")}
        >
          canlı destek
        </chakra.span>{" "}
        ekibimize yazabilirsin.
      </Text>
    </VStack>
  );
};

export default FAQsHeader;
