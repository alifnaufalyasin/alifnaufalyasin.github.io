import { Box } from "@chakra-ui/core";
import Link from "@/components/Link";

const Footer = () => {
  return (
    <Box w="full" py="2" textAlign="center">
      © Copyright 2021 <Link href="https://github.com/alifnaufalyasin">alifnaufalyasin</Link>
    </Box>
  );
};

export default Footer;
