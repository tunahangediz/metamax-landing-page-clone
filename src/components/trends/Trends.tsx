import {
  Heading,
  Stack,
  VStack,
  Text,
  GridItem,
  Grid,
  useColorModeValue as mode,
  Image,
  chakra,
  Box,
  Checkbox,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import TrendsCarousel from "./TrendsCarousel";
import SectionHeading from "../common/SectionHeading";
import TrendsInputFiled from "./TrendsInputFiled";
import TrendsHeader from "./TrendsHeader";

const Trends = () => {
  return (
    <VStack
      w="100vw"
      py={{ base: "10", md: "20" }}
      bg={mode("graySpecial.200", "gray.900")}
      border="1px"
      borderColor={mode("gray.200", "gray.700")}
      mb="8"
    >
      <VStack as="section" w="full" mx="auto" px="4">
        <Stack
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          w="full"
          alignItems={{ base: "flex-start", sm: "flex-start" }}
          justifyContent="space-between"
          spacing="12"
          py="20"
          px={{ md: "16" }}
          rounded="xl"
          maxW="8xl"
        >
          <VStack
            alignItems="flex-start"
            justifyContent="flex-start"
            textAlign="left"
            spacing="8"
            maxW="650px"
          >
            <TrendsHeader />
            <TrendsInputFiled />
          </VStack>
          <VStack alignItems="start" spacing="4">
            <SectionHeading>TREND OLANLAR</SectionHeading>
            <TrendsCarousel />
          </VStack>
        </Stack>
      </VStack>
    </VStack>
  );
};

export default Trends;
