import {
  Heading,
  Text,
  chakra,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FC } from "react";
const HeaderInfo: FC = () => {
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "6xl" }}
        lineHeight={{ base: "1" }}
        fontWeight="bold"
        letterSpacing="tight"
      >
        Küçük birikimlerle emlak yatırımı fırsatı
      </Heading>
      <Text
        my={{ md: "4" }}
        fontSize="lg"
        fontWeight="medium"
        letterSpacing="tight"
        color={mode("gray.600", "gray.400")}
      >
        Etrafındaki varlıklı insanların %90’ının emlak yatırımcısı olduğunu
        biliyor musun? <chakra.span fontWeight="bold">200 TL</chakra.span> ile
        sen de ilk emlak yatırımını yap, hemen kazanmaya başla.
      </Text>
    </>
  );
};

export default HeaderInfo;
