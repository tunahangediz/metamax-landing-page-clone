import {
  GridItem,
  HStack,
  Icon,
  Text,
  VStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FC } from "react";
type Props = {
  index: number;
  element: { title: string; description: string; icon: any };
};
const AdvantageGridItem: FC<Props> = ({ index, element }) => {
  return (
    <GridItem
      borderBottomWidth={{
        base: index != 5 ? "1px" : 0,
        md: index != 4 && index != 5 ? "1px" : 0,
      }}
      borderRightWidth={{
        base: 0,
        md: index % 2 === 0 ? "1px" : 0,
      }}
      borderColor={mode("graySpecial.400", "gray.700")}
      key={index}
      py={{ base: "6", md: "8" }}
      px={{ base: "4", md: "6" }}
      _hover={{ bg: mode("graySpecial.300", "") }}
      alignItems="center"
      height={{ md: "200px" }}
      display="flex"
    >
      <HStack spacing="8">
        <Icon as={element.icon} boxSize="12"></Icon>
        <VStack spacing="2" alignItems="start" textAlign="left">
          <Text fontSize="xl" fontWeight="semibold">
            {element.title}
          </Text>
          <Text
            fontSize="lg"
            color={mode("graySpecial.700", "graySpecial.600")}
          >
            {element.description}
          </Text>
        </VStack>
      </HStack>
    </GridItem>
  );
};

export default AdvantageGridItem;
