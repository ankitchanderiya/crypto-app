import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarSrc from '../assets/mine.jpg'
import {AiOutlineInstagram,AiOutlineTwitter,AiOutlineLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column","row", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very reasonable prices.
          </Text>
          <HStack>
            <a href="/">
              <AiOutlineInstagram size={"30"}/>
            </a>
            <a href="/">
              <AiOutlineTwitter size={"30"}/>
            </a>
            <a href="/">
              <AiOutlineLinkedin size={"30"} />
            </a>
          </HStack>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;