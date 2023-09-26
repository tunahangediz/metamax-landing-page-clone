import {
  HStack,
  Icon,
  Link,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FC } from "react";
import { BsTelegram } from "react-icons/bs";
import {
  IoLogoDiscord,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io5";

const SocialLinks: FC = () => {
  const socailIcons = [
    {
      icon: IoLogoDiscord,
      link: "https://discord.com/invite/yyNy5ZMDqM",
      bg: "discord",
    },
    {
      icon: IoLogoInstagram,
      bg: "instagram",
      link: "https://www.instagram.com/metamaxofficial/",
      bgGradinet:
        "radial-gradient(58.52% 53.5% at 33.5% 100%, rgb(254, 218, 117) 9.37%, rgb(250, 126, 30) 47.5%, rgba(250, 126, 30, 0) 100%), radial-gradient(187.41% 126% at 84.5% 113.5%, rgb(245, 11, 94) 19.76%, rgb(223, 8, 151) 52.03%, rgb(150, 47, 191) 76.88%, rgb(79, 91, 213) 93.34%)",
    },
    {
      icon: BsTelegram,
      link: "https://t.me/metamaxduyurular",
      bg: "telegram",
    },
    {
      icon: IoLogoWhatsapp,
      link: "https://wa.me/908507770515",
      bg: "whatsapp",
    },
    {
      icon: IoLogoTwitter,
      link: "https://twitter.com/metamaxofficial",
      bg: "twitter",
    },
    {
      icon: IoLogoYoutube,
      link: "https://www.youtube.com/channel/UCndNxfe0hjgX2S4EtS3oRrQ",
      bg: "youtube",
    },
    {
      icon: IoLogoLinkedin,
      link: "https://www.linkedin.com/company/metamaxofficial",
      bg: "linkedin",
    },
  ];
  return (
    <HStack spacing="4" align="center">
      {socailIcons.map((icon) => (
        <Link
          key={icon.bg}
          target="_blank"
          href={icon.link}
          rounded="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            color={mode("graySpecial.700", "graySpecial.600")}
            _hover={{ color: mode("graySpecial.900", "white") }}
            boxSize={5}
            as={icon.icon}
          />
        </Link>
      ))}
    </HStack>
  );
};

export default SocialLinks;
