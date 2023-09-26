import { Grid, VStack } from "@chakra-ui/react";
import { FC } from "react";
import AdvantageGridItem from "./AdvantageGridItem";
import AdvantagesHeader from "./AdvantagesHeader";
import {
  IoWalletOutline,
  IoCashOutline,
  IoHomeOutline,
  IoTimeOutline,
  IoLockClosedOutline,
  IoGlobeOutline,
} from "react-icons/io5";

const AdvantagesSection: FC = () => {
  const advantages = [
    {
      title: "Düşük bütçelerle yatırım",
      description:
        "Düşük bütçelerle yatırım yap. Emlak ürününün değeri arttıkça yatırımın değer kazansın.",
      icon: IoWalletOutline,
    },
    {
      title: "Zaman ve maliyet tasarrufu",
      description:
        "Geleneksel emlak yatırımında ortaya çıkan zor ve karmaşık prosedürleri unut. Saniyeler içinde, düşük işlem ücretleri ile emlak yatırımı yap.",
      icon: IoCashOutline,
    },
    {
      title: "Kira getirisi",
      description:
        "Pay sahibi olduğun emlak ürününden günlük kira getirisi kazan.",
      icon: IoHomeOutline,
    },
    {
      title: "7/24 Alım-Satım",
      description: "Yatırım paylarını Market’te 7/24 al ya da sat.",
      icon: IoTimeOutline,
    },
    {
      title: "Güvenli hizmet",
      description:
        "Blok zincir altyapısıyla güvenilir ve şeffaf emlak yatırımı yap.",
      icon: IoLockClosedOutline,
    },
    {
      title: "Bölgesel engel yok",
      description:
        "Bölgesel engellere takılmadan ülkenin herhangi bir yerinde bulunan emlak ürünlerini kolayca inceleyerek yatırım yap.",
      icon: IoGlobeOutline,
    },
  ];

  return (
    <VStack w="full" py={{ base: "20", md: "32" }}>
      <VStack w="full" as="section" spacing={{ base: "8", md: "16" }}>
        <AdvantagesHeader />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          w="full"
        >
          {advantages.map((element, index) => (
            <AdvantageGridItem key={index} index={index} element={element} />
          ))}
        </Grid>
      </VStack>
    </VStack>
  );
};

export default AdvantagesSection;
