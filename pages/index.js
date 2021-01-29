import { Flex, Box, Text, useColorModeValue } from "@chakra-ui/core"
import { Circle } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import { motion } from "framer-motion"
import Head from "next/head";
import Main from "@/components/Main";

export default function Home() {
  const MotionFlex = motion.custom(Flex);
  const MotionImage = motion.custom(Image);
  const MotionCircle = motion.custom(Circle);
  const boxColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.700", "white");
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
    <Main px={{ base: 2, md: 0 }}> 
      <Head>
        <title>Next.js + chakra-ui boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MotionFlex
        initial="start"
        animate="end"
        variants={containerVariant}
        maxW={["sm", "md", "2xl", "5xl"]}
        m="auto"
        py="50px"
        textAlign="center"
        w="80vw"
        h="50vh"
        borderRadius="50"
        color={textColor}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>
          Hello
        </Text>
        <Box display="ïnline">
        <MotionCircle
          bg={boxColor}
          size="200px"
          whileHover={{ scale: 1.05 }}
          display="flex"
        ></MotionCircle>
        <MotionCircle
            bg={boxColor}
            size="200px"
            whileHover={{ scale: 1.05 }}
          ></MotionCircle>
        <MotionImage
            whileTap={{
                scale: 1,
                rotate: -2,
                transition: { type: "spring", stiffness: 700},
              }}
            src="/assets/images/alifnaufal.png"
            // fallbackSrc="https://dummyimage.com/500x500/eee/fff&text=MAN" 
            alt="foto saya" h="50vh" 
          />
        </Box>
        
      </MotionFlex>
    </Main>
  );
}
