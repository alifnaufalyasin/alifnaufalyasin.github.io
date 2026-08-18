import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/core";

const experiences = [
  {
    company: "Pintu",
    role: "Software Development Engineer",
    period: "March 2022 - Present",
    location: "Jakarta, Indonesia",
  },
  {
    company: "Pintu",
    role: "Software Engineer",
    period: "September 2021 - March 2022",
    location: "Jakarta, Indonesia",
  },
  {
    company: "PT GITS Indonesia",
    role: "Backend Engineer (SmaRT Project)",
    period: "October 2021 - January 2022",
    location: "Indonesia",
  },
  {
    company: "Telkom University AI Lab",
    role: "Laboratory Assistant / Inventory Manager",
    period: "January 2021 - March 2022",
    location: "Bandung, Indonesia",
  },
  {
    company: "Ketringan.com",
    role: "Software Developer (Line Chatbot)",
    period: "February 2020 - December 2021",
    location: "Indonesia",
  },
  {
    company: "Sagara Technology",
    role: "Back End Developer",
    period: "July 2020 - September 2020",
    location: "Indonesia",
  },
];

const Experience = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const muted = useColorModeValue("gray.500", "gray.400");

  return (
    <Box w="full" maxW="2xl" mx="auto" px={4} py={10}>
      <Heading size="lg" mb={6} color={textColor}>
        Experience
      </Heading>
      <Stack spacing={6}>
        {experiences.map((exp, idx) => (
          <Box key={idx} borderLeftWidth="2px" borderColor="gray.300" pl={4}>
            <Text fontWeight="bold" color={textColor}>
              {exp.role}
            </Text>
            <Text color={textColor}>
              {exp.company} &middot; {exp.location}
            </Text>
            <Text fontSize="sm" color={muted}>
              {exp.period}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Experience;
