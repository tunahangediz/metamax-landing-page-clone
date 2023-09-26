import {
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { FC } from "react";

import HowItsWorkHeader from "./HowItsWorkHeader";
const cardContents = [
  {
    name: "Ön Satış",
    src: {
      light: "src/assets/images/svg/on-satis.svg",
      dark: "src/assets/images/svg/on-satis-dark.svg",
    },
    bgPosition: "bottom left",
    text: "Emlak ürünleri yatırımcılara avantajlı fiyatlarla sunulur ve talep toplanır.",
    textPos: "",
  },
  {
    name: "Tokenizasyon",
    src: {
      light: "src/assets/images/svg/tokenizasyon.svg",
      dark: "src/assets/images/svg/tokenizasyon-dark.svg",
    },
    bgPosition: "top left",
    text: "Talep toplama süreci tamamlanan emlak ürünü NFT'ye dönüştürülür ve yatırımcılara payı oranında dağıtılır.",
    textPos: "flex-end",
  },
  {
    name: "Market",
    src: {
      light: "src/assets/images/svg/market.svg",
      dark: "src/assets/images/svg/market-dark.svg",
    },
    bgPosition: "bottom right",
    text: "Yatırımcılar 7/24 işlem yapabilir, Market'te portföylerini çeşitlendirebilir.",
    textPos: "",
  },
];

const HowItsWork: FC = () => {
  return (
    <VStack
      w="full"
      spacing="16"
      py={{ base: "8", sm: "8", lg: "12", xl: "12" }}
    >
      <HowItsWorkHeader />

      <Stack
        direction={{ base: "column", md: "row" }}
        w="full"
        justify="space-between"
        spacing="8"
      >
        {cardContents.map((content) => (
          <VStack
            key={content.name}
            bgColor={mode("graySpecial.100", "gray.700")}
            bgImage={`url(${mode(content.src.light, content.src.dark)})`}
            bgPosition={content.bgPosition}
            bgRepeat="no-repeat"
            w="full"
            minH="455px"
            h="fulll"
            rounded="xl"
            border={mode("1px", "none")}
            borderColor="graySpecial.400"
            textAlign="left"
            padding="6"
            justifyContent={content.textPos}
            _hover={{
              backgroundColor: mode("graySpecial.300", "graySpecial.900"),
            }}
          >
            <Heading
              textAlign="left"
              fontSize="3xl"
              fontWeight="semibold"
              w="full"
            >
              {content.name}
            </Heading>
            <Text
              fontSize="lg"
              color={mode("graySpecial.700", "graySpecial.600")}
            >
              {content.text}
            </Text>
          </VStack>
        ))}
      </Stack>
    </VStack>
  );
};

export default HowItsWork;
