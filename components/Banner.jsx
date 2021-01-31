import { Flex, Box, Text, useColorModeValue } from "@chakra-ui/core"
import { Image } from "@chakra-ui/image"
import { motion } from "framer-motion"

const Banner = () => {
  const MotionFlex = motion.custom(Flex);
  const MotionImage = motion.custom(Image);
  const MotionBox = motion.custom(Box);
  const boxColor = useColorModeValue("gray.100", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const shadow = useColorModeValue("xl","")
  const containerVariant = {
    start: {
      y: 20,
      opacity: 0,
      transition: { staggerChildren: 0.25 },
    },
    end: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.75 },
    },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };
  return (
    <MotionFlex
      initial="start"
      animate="end"
      variants={containerVariant}
      maxW={["sm", "md", "2xl", "5xl"]}
      m="auto"
      py="50px"
      textAlign="center"
      w="80vw"
      h="90vh"
      borderRadius="50"
      color={textColor}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>
        Hello
      </Text>
      <MotionBox
        bg={boxColor}
        whileHover={{ scale: 1.05 }}
        whileTap={{
            scale: 1,
            rotate: -2,
            transition: { type: "spring", stiffness: 700},
          }}
        borderRadius="full"
        boxShadow={shadow}
      >
        <MotionImage
          src="/assets/images/alifnaufal.png"
          // fallbackSrc="https://dummyimage.com/500x500/eee/fff&text=MAN" 
          alt="foto saya" 
          h="50vh"
          borderRadius="full"
        />
      </MotionBox>
      
    </MotionFlex>
  );
};

export default Banner;
