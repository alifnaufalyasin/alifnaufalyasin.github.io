import { Flex, Box, Text, useColorModeValue, Link, IconButton, Stack } from "@chakra-ui/core"
import { FaGithub, FaInstagram, FaLine } from "react-icons/fa";
import { Image } from "@chakra-ui/image"
import { motion } from "framer-motion"

const Banner = () => {
  const MotionFlex = motion.custom(Flex);
  const MotionImage = motion.custom(Image);
  const MotionLink = motion.custom(Link);
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
  const linkVariant = {
    start: { y: 20, opacity: 0 },
    end: { y: 0, opacity: 1 },
  };
  const links = [
    {
      name: "instagram",
      url: "https://instagram.com/alifnaufal_yasin",
      icon: <FaInstagram />,
    },
    {
      name: "github",
      url: "https://github.com/alifnaufalyasin",
      icon: <FaGithub />,
    },
    {
      name: "line",
      url: "http://line.me/ti/p/naufalyasin",
      icon: <FaLine />,
    },
  ];
  return (
    <MotionFlex
      initial="start"
      animate="end"
      variants={containerVariant}
      maxW={["sm", "md", "2xl", "5xl"]}
      m="auto"
      py="50px"
      textAlign="center"
      w="90vw"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box w={{ base: "100%", lg: "50%" }} px={{ base: 4, lg: 0 }}>
        <Text fontSize="lg" color={textColor} textAlign={{ base: "center", lg: "left" }}> 
          Hi, I’m Alif, a Back-end Developer at Pintu based in Jakarta. I work with REST APIs, SQL, and databases, and I’m interested in web technologies and machine learning. I’ve built Line chatbots and backend services with ExpressJs and have experience across multiple engineering and teaching roles.
        </Text>
        <Stack
            direction="row"
            mt={4}
            justifyContent={{ base: "center", lg: "unset" }}
          >
            {links.map((item, idx) => {
              return (
                <MotionLink
                  key={idx}
                  variants={linkVariant}
                  href={item.url}
                  isExternal
                >
                  <IconButton
                    color={textColor}
                    aria-label={item.name}
                    icon={item.icon}
                    fontSize="30px"
                  />
                </MotionLink>
              );
            })}
          </Stack>
      </Box>
      <Stack w={{ base: "100%", lg: "auto" }} alignItems="center">
        <MotionImage
          whileHover={{ scale: 1.05 }}
          whileTap={{
              scale: 1,
              rotate: -2,
              transition: { type: "spring", stiffness: 700},
            }}
          src="/assets/images/alifnaufal.png"
          fallback={require('../public/assets/images/alifnaufal.png?webp')}
          alt="foto saya" 
          h={{ base: "40vh", lg: "50vh" }}
          maxW="100%"
          objectFit="contain"
        />
        <Text fontSize="xl">
          M Alif Naufal Yasin
        </Text>
      </Stack>
    </MotionFlex>
  );
};

export default Banner;
