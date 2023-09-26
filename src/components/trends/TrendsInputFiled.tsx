import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Icon,
  Input,
  Text,
  chakra,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FC } from "react";

const TrendsInputFiled: FC = () => {
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Flex
        direction="column"
        align="flex-start"
        justify="center"
        w="full"
        gap="3"
      >
        <FormControl id="email" mb={4}>
          <Input
            bg={mode("white", "transparent")}
            size="lg"
            placeholder="E-posta adresin"
          />
        </FormControl>

        <Button
          type="submit"
          bg="metamaxYellow.900"
          w="full"
          size="lg"
          _hover={{ bg: "metamaxYellow.700" }}
          mb={4}
          color="primary.800"
        >
          Haberdar et
        </Button>

        <Checkbox
          defaultChecked
          borderColor="metamaxYellow.900"
          iconColor={mode("white", "black")}
          colorScheme="yellowCheckbox"
        >
          <Text
            bg={mode("#F9FAFB", "#171923")}
            color={mode("black", "whiteAlpha.700")}
          >
            Metamax'tan{" "}
            <Box
              as="span"
              color={mode("black", "graySpecial.500")}
              fontWeight="bold"
            >
              Ticari Elektronik İleti
            </Box>{" "}
            almayı kabul ediyorum
          </Text>
        </Checkbox>
      </Flex>
    </form>
  );
};

export default TrendsInputFiled;
