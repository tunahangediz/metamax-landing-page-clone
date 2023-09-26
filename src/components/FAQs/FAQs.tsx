import { VStack } from "@chakra-ui/react";
import FAQsAccordion from "./FAQsAccordion";
import FAQsHeader from "./FAQsHeader";

const FAQs = () => {
  return (
    <VStack w="full" pt={{ base: "10", md: "20" }}>
      <VStack w="full" as="section" spacing="16">
        <FAQsHeader />
        <FAQsAccordion />
      </VStack>
    </VStack>
  );
};

export default FAQs;
