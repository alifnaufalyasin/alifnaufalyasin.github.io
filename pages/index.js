import Head from "next/head";
import Main from "@/components/Main";
import Banner from "../components/Banner"

export default function Home() {
  
  return (
    <Main px={{ base: 2, md: 0 }}> 
      <Head>
        <title>M Alif Naufal Yasin - Backend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
    </Main>
  );
}
