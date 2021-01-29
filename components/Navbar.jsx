import {
  Box,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/core";
import Link from "@/components/Link";
import { FaSun, FaMoon } from "react-icons/fa";
const Navbar = () => {
  const Icons = useColorModeValue(<FaSun />, <FaMoon />);
  const color = useColorModeValue("gray.800", "white");
  const { toggleColorMode } = useColorMode();
  return (
    <Box 
      w="full"
      position="fixed"
      top
      zIndex={1}
      p={3}
      px={{ default: 4, lg: 5 }}
      d="flex"
      alignItems="center"
      justifyContent="space-between">
      <Stack direction="row" spacing={5}>
        <Link href="/" route fontWeight="bold" color={color}>
          Alif Naufal
        </Link>
        <Link href="/project" route fontWeight="bold" color={color}>
          Project
        </Link>
        <Link href="/about" route fontWeight="bold" color={color}>
          About
        </Link>
        
      </Stack>
      <Stack direction="row">
        <IconButton
          size="sm"
          aria-label="theme switcher"
          icon={Icons}
          onClick={toggleColorMode}
        />
      </Stack>
    </Box>
  );
};

export default Navbar;
