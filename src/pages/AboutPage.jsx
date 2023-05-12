import { Box, Flex, Text } from "@chakra-ui/react";
// material

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <Box minH={"200rem"}>
      <Flex m={"1rem"} borderX="solid 2px #000000">
        <Text p="1rem" fontSize={{ xs: "1.5rem", md: "2rem" }}>
          {
            "Thành phố Hồ Chí Minh là một địa điểm du lịch nổi tiếng với trang sử hào hùng cùng nhiều di tích, bảo tàng mang ý nghĩa vô cùng lớn. Với mong muốn khách du lịch sẽ hiểu rõ hơn về từng địa điểm tham quan tại Thành phố mang tên Bác, Herald được thành lập bởi sinh viên của Đại học FPT để giúp quý khách nắm bắt rõ các chi tiết về địa điểm, hành trình và một phần ý nghĩa của điểm đến đó đối với Việt Nam."
          }
          <br />
          {
            "  Hi vọng quý khách có một trải nghiệm thật tốt với Herald - Travel Chúng tôi kính chúc quý khách một chuyến du lịch thật đáng nhớ."
          }
        </Text>
      </Flex>
    </Box>
  );
}
