import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import Header from "../components/header/Header";
import HowItsWork from "../components/how-its-work/HowItsWork";
import Layout from "../components/layout/Layout";
import SocialMediaSection from "../components/socialmedia-section/SocialMediaSection";
import WhyMetamax from "../components/why-metamax/WhyMetamax";
import AdvantagesSection from "../components/advantages-section/AdvantagesSection";
import FAQs from "../components/FAQs/FAQs";
import Trends from "../components/trends/Trends";

const Home: FC = () => {
  return (
    <Layout>
      <VStack px={{ base: "4", sm: "8", lg: "24", "2xl": 4 }} spacing="0">
        <Header />
        <WhyMetamax />
        <HowItsWork />
        <SocialMediaSection />
        <AdvantagesSection />
        <Trends />
        <FAQs />
      </VStack>
    </Layout>
  );
};

export default Home;
