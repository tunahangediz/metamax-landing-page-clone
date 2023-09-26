import { Heading, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

const SocialMediaHeader: FC = () => {
  return (
    <VStack alignItems="flex-start" textAlign="left" w="full" spacing="4">
      <Heading fontSize="md" color="metamaxYellow.900">
        BİZİ TAKİP ET
      </Heading>
      <Heading color="primary.100" fontWeight="semibold">
        Metamax topluluğuna katıl.
      </Heading>
      <Text color="graySpecial.600">
        Metamax topluluklarını takip et, güncel gelişmelerden hiçbirini kaçırma.
      </Text>
    </VStack>
  );
};

export default SocialMediaHeader;
