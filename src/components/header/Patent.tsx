import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  useColorModeValue as mode,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, useState } from "react";

const Patent: FC = () => {
  const { onToggle, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);

  return (
    <HStack
      role="group"
      boxShadow="base"
      bg={mode("white", "gray.700")}
      rounded="md"
      py="1.5"
      px="3"
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      overflow="hidden"
      maxH="8"
    >
      <Image
        src={mode(
          "assets/images/svg/turk-patent-light.svg",
          "assets/images/svg/turk-patent-dark.svg"
        )}
      />
      <motion.div
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{ width: isOpen ? "160px" : 0 }}
        transition={{ duration: 0.6 }}
        style={{ overflow: "hidden" }}
      >
        <Flex alignItems="center" gap="1" w="170px" id="patent-text">
          <Divider orientation="vertical" h="5" mx="1" />

          <Text
            fontSize="xs"
            fontWeight="semibold"
            color={mode("gray.700", "whiteAlpha.700")}
          >
            Başvuru no: 2022/02696
          </Text>
        </Flex>
      </motion.div>
    </HStack>
  );
};

export default Patent;
