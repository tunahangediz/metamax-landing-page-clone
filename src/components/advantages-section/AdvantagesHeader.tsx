import { Heading, VStack, chakra } from "@chakra-ui/react";
import { FC } from "react";
import SectionHeading from "../common/SectionHeading";
const AdvantagesHeader: FC = () => {
  return (
    <VStack spacing="6">
      <SectionHeading>METAMAX’IN AVANTAJLARI</SectionHeading>
      <Heading fontSize={["3xl", "3xl", "4xl", "5xl"]} fontWeight="semibold">
        Bizi{" "}
        <chakra.span
          position="relative"
          color="metamaxYellow.900"
          _after={{
            content: '""',
            width: "full",
            height: "23%",
            position: "absolute",
            left: 0,
            bottom: 1,
            opacity: "0.2",
            backgroundColor: "metamaxYellow.900",
            zIndex: -1,
          }}
        >
          benzersiz
        </chakra.span>{" "}
        yapan şeyler;
      </Heading>
    </VStack>
  );
};

export default AdvantagesHeader;
