import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import MainHeader from "@/components/MainHeader";
import Carousel from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import HeaderWrapper from "@/components/HeaderWrapper";
import { Box } from "@mui/material";
import HeroContent from "@/components/HeroContent";
import CustomerReviews from "@/components/CustomerReviews";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <HeaderWrapper />
      <Carousel />
      <HeroSection />
      <HeroContent />
      <CustomerReviews />
      <Maps />
      <Footer />
    </>
  );
}
