import { InfoIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  chakra,
  useColorModeValue as mode,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";

const HowItsWorkModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        size="lg"
        bg="transparent"
        border="1px"
        borderColor={mode("graySpecial.400", "gray.700")}
        gap="2"
        color={mode("current", "white")}
        _hover={{ bg: mode("graySpecial.300", "gray.700") }}
      >
        <IoPlayCircleSharp size={19} />
        Nasıl Çalışır?
      </Button>

      <Modal isOpen={isOpen} size="6xl" onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent">
          <chakra.iframe
            src="https://www.youtube.com/embed/brW7TbvhdAI"
            aspectRatio={16 / 9}
            w="full"
            border="0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></chakra.iframe>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HowItsWorkModal;
