import {
  Grid,
  Image,
  Link,
  Stack,
  VStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import SocialMediaHeader from "./SocialMediaHeader";

const SocialMediaSection = () => {
  const socailIcons = [
    {
      name: "discord",
      link: "https://discord.com/invite/yyNy5ZMDqM",
      bg: "discord",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/metamaxofficial/",
      bgGradinet:
        "radial-gradient(58.52% 53.5% at 33.5% 100%, rgb(254, 218, 117) 9.37%, rgb(250, 126, 30) 47.5%, rgba(250, 126, 30, 0) 100%), radial-gradient(187.41% 126% at 84.5% 113.5%, rgb(245, 11, 94) 19.76%, rgb(223, 8, 151) 52.03%, rgb(150, 47, 191) 76.88%, rgb(79, 91, 213) 93.34%)",
    },
    { name: "telegram", link: "https://t.me/metamaxduyurular", bg: "telegram" },
    {
      name: "whatsapp",
      link: "https://wa.me/908507770515",
      bg: "whatsapp",
    },
    {
      name: "twitter",
      link: "https://twitter.com/metamaxofficial",
      bg: "twitter",
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/channel/UCndNxfe0hjgX2S4EtS3oRrQ",
      bg: "youtube",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/metamaxofficial",
      bg: "linkedin",
    },
  ];

  return (
    // social links div genişliği diğer sectionlardan biraz daha geniş bunu düzenle
    <VStack
      w="100vw"
      py={{ base: "10", md: "20" }}
      px={{ sm: "0", lg: "20" }}
      bg={mode("graySpecial.200", "gray.900")}
      border="1px"
      borderColor={mode("gray.200", "gray.700")}
    >
      <VStack w="full" mx="auto" px="4">
        <Stack
          bg="gray.700"
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          w="full"
          alignItems={{ base: "flex-start", sm: "flex-start", md: "center" }}
          justifyContent="space-between"
          spacing="12"
          p="48px 64px"
          rounded="xl"
          maxW="8xl"
        >
          <SocialMediaHeader />
          <VStack>
            <Grid
              templateColumns={{ sm: "repeat(7, 1fr)", base: "repeat(4,1fr)" }}
              gap="2"
              w="full"
            >
              {socailIcons.map((icon) => (
                <Link
                  key={icon.name}
                  target="_blank"
                  href={icon.link}
                  bgColor={icon?.bg}
                  bgGradient={icon?.bgGradinet}
                  rounded="full"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  w="12"
                  h="12"
                  p="3"
                >
                  <Image
                    src={`src/assets/images/social-media/${icon.name}.svg`}
                  />
                </Link>
              ))}
            </Grid>
          </VStack>
        </Stack>
      </VStack>
    </VStack>
  );
};

export default SocialMediaSection;
