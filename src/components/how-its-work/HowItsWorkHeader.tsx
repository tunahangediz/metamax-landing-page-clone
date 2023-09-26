import { Heading, VStack, chakra } from "@chakra-ui/react";
import { FC } from "react";
import SectionHeading from "../common/SectionHeading";
const HowItsWorkHeader: FC = () => {
  return (
    <VStack alignItems="center" maxW="500px" spacing="4">
      <SectionHeading>NASIL ÇALIŞIR?</SectionHeading>
      <Heading fontSize={["3xl", "3xl", "5xl", "5xl"]} fontWeight="semibold">
        Bir evin değerine nasıl
        <chakra.span color="metamaxYellow.900"> ortak olurum?</chakra.span>
      </Heading>
    </VStack>
  );
};

export default HowItsWorkHeader;
