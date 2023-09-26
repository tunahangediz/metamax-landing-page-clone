import {
  Divider,
  Grid,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";
import { IoHelpBuoyOutline, IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const data = [
    {
      title: "Keşfet",
      linkTexts: [
        "NFT emlak sektöründe kullanılır mı?",
        "Faizsiz emlak yatırımı mümkün mü?",
        "Emlak ürünlerinin fiyatları nasıl belirlenir?",
        "Gayrimenkul tokenizasyonu nedir?",
        "Düşük bütçelerle emlak yatırımı mümkün mü?",
      ],
    },
    {
      title: "Şirket",
      linkTexts: ["Hakkımızda", "Kariyer", "Kurucumuzun Mektubu"],
    },
    {
      title: "Kullanıcı Politikaları",
      linkTexts: [
        "KVKK Aydınlatma Metni",
        "Kullanıcı Sözleşmesi",
        "Açık Rıza Beyanı",
        "Çerez Politikası",
      ],
    },
    {
      title: "İletişim",
      linkTexts: [
        <>
          <Icon boxSize="22" as={IoMailOutline} /> Email: info@metamax.com.tr
        </>,
        <>
          <Icon boxSize="22" as={IoHelpBuoyOutline} /> Yardıma mı ihtiyacın var?
        </>,
        "Adres: Mehmetçik Mah. Aspendos Bulvarı No:99/A Muratpaşa / Antalya",
      ],
    },
  ];

  return (
    <VStack
      w="100vw"
      pt={{ base: "10", md: "12" }}
      bg={mode("graySpecial.200", "gray.900")}
      border="1px"
      borderColor={mode("gray.200", "gray.700")}
    >
      <VStack
        as="footer"
        w="full"
        mx="auto"
        px={{ base: "4", sm: "8", md: "24" }}
        maxW="8xl"
      >
        <VStack w="full" spacing="12">
          <Grid
            justifyContent="flex-start"
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(4,1fr)",
            }}
            gap="2"
            w="full"
          >
            {data.map((item) => (
              <VStack
                key={item.title}
                alignItems="flex-start"
                textAlign="left"
                spacing="4"
              >
                <Heading
                  fontSize="xl"
                  fontWeight="semibold"
                  color={mode("primary.800", "primary.100")}
                  mb="4"
                >
                  {item.title}
                </Heading>
                {item.linkTexts.map((link) => (
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: mode("primary.900", "metamaxYellow.900"),
                    }}
                    display="flex"
                    alignItems="center"
                    gap="2"
                    key={Math.random() * 100}
                    color={mode("graySpecial.800", "graySpecial.600")}
                  >
                    {link}
                  </Link>
                ))}
              </VStack>
            ))}
          </Grid>
          <Divider w="100vw" />
          <HStack justifyContent="space-between" w="full" pb="8">
            <Text
              fontSize="xs"
              fontWeight="medium"
              color={mode("graySpecial.700", "graySpecial.600")}
              textAlign={"left"}
            >
              © 2023 Metamax Teknoloji A.Ş Tüm hakları saklıdır.
            </Text>
            {/* logossss */}
            <SocialLinks />
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Footer;
