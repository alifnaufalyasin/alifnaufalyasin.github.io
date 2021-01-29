import React from "react";
import Head from "next/head";
import { Stack, Code, Text, Box } from "@chakra-ui/core";
import { useRouter } from "next/router";
// import MotionBox from "../components/MotionBox";
import Link from "../components/Link";
// import PageLayout from "../components/PageLayout";

const NotFound = () => {
  const { asPath } = useRouter();
  return (
    <Box w="full" h="100vh" alignContent="center" justifyContent={{ base: "center", lg: "unset" }} >
      <Head>
        <title>404 Not Found😭</title>
      </Head>
      <Stack textAlign="center" mt={8}>
        <Text fontSize="6xl">
          404
        </Text>
        <Text mt={2}>
          The page <Code>{asPath}</Code> does not exist.
        </Text>
        <Text>
          <Link route href="/">
            Back to home.
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default NotFound;