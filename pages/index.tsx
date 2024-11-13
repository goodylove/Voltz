import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";
import Section1 from "@/src/container/Home/Section1";
import Section2 from "@/src/container/Home/Section2";
import { Box } from "@mui/material";



export default function Home() {
  return (
    <Box >
      <NavBar/>
      <Section1/>
      <Section2/>

      <Footer/>
    </Box>
  );
}
