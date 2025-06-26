"use client";
import React, { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import MainHeader from "./MainHeader";

export default function HeaderWrapper() {
  const [showMainHeader, setShowMainHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowMainHeader(currentScroll > 100); // threshold to show MainHeader
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!showMainHeader && <HeaderSection />}
      <MainHeader sticky={showMainHeader} />
    </>
  );
}
