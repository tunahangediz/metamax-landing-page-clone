import {
  Box,
  Heading,
  Stack,
  VStack,
  Image,
  useColorModeValue as mode,
  chakra,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import SectionHeading from "../common/SectionHeading";

const WhyMetamax: FC = () => {
  return (
    <VStack
      as="section"
      w="full"
      py={{ base: "8", sm: "8", lg: "52", xl: "52" }}
    >
      <Stack
        w="full"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        spacing="8"
      >
        <Box>
          <Image
            src={mode(
              "src/assets/images/svg/why-metamax-light.svg",
              "src/assets/images/svg/why-metamax-dark.svg"
            )}
          />
        </Box>
        <VStack
          alignItems="flex-start"
          textAlign="left"
          justifyContent="space-around"
          maxW={"700px"}
        >
          <SectionHeading>NEDEN METAMAX?</SectionHeading>
          <Heading
            fontSize={["3xl", "3xl", "5xl", "5xl"]}
            fontWeight="semibold"
            width={{ base: "full", md: "80%", lg: "80%", xl: "80%" }}
          >
            Birikimin,{" "}
            <chakra.span color="metamaxYellow.900">hak ettiği</chakra.span>{" "}
            değeri görsün.
          </Heading>
          <VStack
            fontSize="lg"
            color={mode("graySpecial.800", "graySpecial.600")}
            align="start"
          >
            <Text>
              Emlak, kazanç oranı hızla yükselen bir yatırım aracıdır. Merkez
              Bankası verilerine göre konut fiyatları yıllık olarak İstanbul'da
              %210, Ankara’da %193, İzmir’de %175 ve Antalya'da %231 oranında
              artış göstermiştir. Türkiye genelinde ise bu oran %185 olarak
              hesaplanmıştır.
            </Text>
            <Text>
              {" "}
              <Text>
                Metamax giriş maliyeti yüksek emlak yatırımını küçük bütçeler
                ile yapmanıza imkan sağlar.
              </Text>
            </Text>
          </VStack>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default WhyMetamax;
