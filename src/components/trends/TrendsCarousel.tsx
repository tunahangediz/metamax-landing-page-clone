import {
  AspectRatio,
  Box,
  Card,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FC, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import { truncateString } from "../../helpers/helpers";
import { useWindowSize } from "@react-hook/window-size";
const TrendsCarousel: FC = () => {
  const trendsContent = [
    {
      title: "Varlık Yönetiminin Geleceği Security Token Nedir?",
      imgName: "security-token",
      date: "07 Haziran",
      tag: "blockzinciri-teknolojisi",
    },
    {
      title: "Blok Zincir Teknolojisi ve Getirdiği Güvenlik Avantajları",
      imgName: "blockchain",
      date: "27 Nisan",
      tag: "blokzinciri-teknolojisi",
    },
    {
      title: "Gayrimenkul Yatırımında Akıllı Sözleşmelerin Rolü",
      imgName: "smart-contracts",
      date: "03 Mayıs",
      tag: "akıllı-sözleşmeler",
    },
    {
      title:
        "Blokzincir Teknolojisi ve Tokenizasyonla Gayrimenkul Yatırımında Devrim Yaratmak: Metamax Emlak…",
      imgName: "tokenizasyon",
      date: "28 Mart",
      tag: "emlak",
    },
    {
      title: "Single-Point-of-Failure (SPOF) Nedir? Nasıl Önlenir?",
      imgName: "single-point",
      date: "23 Mayıs",
      tag: "blokzinciri-teknolojisi",
    },
    {
      title: "Depreme Dayanıklı Bina Nasıl Olur?",
      imgName: "depreme-dayanıklı",
      date: "02 Mart",
      tag: "deprem",
    },
  ];
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [swiper, setSwiper] = useState<any>(null); // State to hold the Swiper instance
  const [width, height] = useWindowSize();

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const handlePaginationClick = (index: number) => {
    setActiveSlideIndex(index);
    if (swiper) {
      swiper.slideTo(index); // Use Swiper's slideTo method to navigate to the clicked slide
    }
  };

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={width > 1000 ? 2 : 1}
      slidesPerGroup={width > 1000 ? 2 : 1}
      onSwiper={setSwiper}
      style={{ maxWidth: "700px", position: "relative" }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      onSlideChange={handleSlideChange}
      modules={[Autoplay]}
    >
      {trendsContent.map((content) => (
        <SwiperSlide
          key={content.title}
          style={{ display: "flex", height: "364px" }}
        >
          <Card
            maxW={{ base: "350px", sm: "md" }}
            height="full"
            shadow="none"
            border="1px"
            borderColor={mode("gray.200", "graySpecial.900")}
            display="flex"
          >
            <AspectRatio w="full" minH="270px" ratio={4 / 3}>
              <Image
                src={`assets/images/trends/${content.imgName}.jpg`}
                alt="Green double couch with wooden legs"
                roundedTop="lg"
              />
            </AspectRatio>

            <Flex fontSize="xs" fontWeight="medium" height="full">
              <VStack textAlign="left" px="4" py="2" height="full">
                <HStack w="full">
                  <Text>{content.date}</Text>

                  <Text> • {content.tag}</Text>
                </HStack>
                <Heading fontSize="md">{truncateString(content.title)}</Heading>
              </VStack>
            </Flex>
          </Card>
        </SwiperSlide>
      ))}
      <div style={{ textAlign: "left", marginTop: "10px" }}>
        {trendsContent.map(
          (_, index) =>
            index % 2 == 0 && (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  width: "4rem",
                  height: "6px",
                  borderRadius: "0.75rem",

                  background:
                    activeSlideIndex === index
                      ? mode("#141414", "#FDDD5D")
                      : mode("#E8E9EA", "#475467"),
                  margin: "0 4px",
                  cursor: "pointer",
                }}
                onClick={() => handlePaginationClick(index)}
              ></span>
            )
        )}
      </div>
    </Swiper>
  );
};

export default TrendsCarousel;
