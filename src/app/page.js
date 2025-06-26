import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import MainHeader from "@/components/MainHeader";
import Carousel from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import HeaderWrapper from "@/components/HeaderWrapper";
import { Box } from "@mui/material";
import HeroContent from "@/components/HeroContent";
export default function Home() {
  return (

    <>  
        
    <HeaderWrapper />
 
       {/* <HeaderSection />
     <Box sx={{ mt: "45px" }}>
        <MainHeader />
      </Box> */}
     <Carousel/>
     <HeroSection/>
     <HeroContent/>
    </>

  );
}
