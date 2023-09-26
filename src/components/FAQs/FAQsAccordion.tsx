import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  VStack,
  chakra,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FC } from "react";

const FAQsAccordion: FC = () => {
  const accordionItems = [
    {
      question:
        "Emlak ürünlerine ait tapuları görebilir miyim? Konutlar fiziksel olarak var mı?",
      answer:
        "Metamax Platformu içinde yatırımcılara sunulan emlak ürünlerinin hepsi gerçek, somut varlıklardır. Web sitemizdeki emlak ürünlerinin detay sayfalarında ilgili taşınmazlara ilişkin tapu kayıtlarını görebilir aynı zamanda tapu kaydı üzerinde karekod ile bilgileri teyit edebilirsiniz.",
    },
    {
      question: "Metamax denetlenebilir mi?",
      answer:
        "Metamax Teknoloji A.Ş. Ocak 2022’de kurulmuş vergi mükellefi bir şirkettir. Tüm kayıtları şeffaf ve devlet kurumlarınca denetlenebilir durumdadır. Emlak ürünleri ile ilgili kiralama işlemleri, tapu kayıtları, sigorta bilgileri ve emlak masrafları kayıt altında olup platformumuzda yatırımcılar için yayınlanmaktadır.",
    },
    {
      question: "Elde edilen kazançlar üzerinden vergi kesintisi olacak mı?",
      answer:
        "Şu an için böyle bir yasal düzenleme bulunmadığından kaynakta vergileme yapılmamaktadır.",
    },
    {
      question: "Emlak ürünlerine ait giderler nasıl karşılanır?",
      answer:
        "İlk satış işlemlerinden doğan vergi ve masraflar gayrimenkulün Ön Satış fiyatına dahil edilir. Satış işleminden sonra yapılan senelik DASK ve diğer sigorta giderleri, gayrimenkulün kira gelirlerinden karşılanır.",
    },
    {
      question: "Metamax emlak ürünlerini satabilir mi?",
      answer:
        "Emlak ürünlerinin satışı ancak web sitemiz üzerinden ilgili gayrimenkulde pay sahibi olan yatırımcıların, payları oranında katılacakları anket ile yatırımcılarımızın karar vermesi üzerine mümkün olacaktır.",
    },
  ];

  return (
    <VStack w="full">
      <Accordion
        w="full"
        border="1px"
        borderColor={mode("gray.200", "whiteAlpha.300")}
        rounded="xl"
        allowToggle
      >
        {accordionItems.map((item) => (
          <AccordionItem key={item.question} border="none">
            {({ isExpanded }) => (
              <>
                <chakra.h2>
                  <AccordionButton
                    _hover={{}}
                    w="full"
                    justifyContent="space-between"
                    textAlign="left"
                    py="6"
                    px="8"
                    bg={mode(isExpanded ? "graySpecial.200" : "", "")}
                  >
                    <Heading
                      fontSize="xl"
                      fontWeight="semibold"
                      color={mode("primary.700", "whiteAplha.300")}
                    >
                      {item.question}
                    </Heading>
                    <Flex
                      border={!isExpanded ? "1px" : 0}
                      borderColor={mode("graySpecial.500", "gray.700")}
                      p="3"
                      rounded="full"
                      color={isExpanded ? "graySpecial.150" : "graySpecial.500"}
                      bg={isExpanded ? "graySpecial.400" : ""}
                    >
                      {isExpanded ? (
                        <MinusIcon fontSize="sm" />
                      ) : (
                        <AddIcon fontSize="sm" />
                      )}
                    </Flex>
                  </AccordionButton>
                </chakra.h2>

                <AccordionPanel
                  px="8"
                  textAlign="left"
                  bg={mode(isExpanded ? "graySpecial.200" : "", "")}
                  color={mode("graySpecial.700", "graySpecial.600")}
                >
                  {item.answer}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
};

export default FAQsAccordion;
