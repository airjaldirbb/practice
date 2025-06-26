import React from "react";
import { Container } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroContent() {
  const features = [
    {
      img: "/HeroContent/image1.png",
      title: "Offers Root Access Complete Control On Server",
    },
    {
      img: "/HeroContent/cloud.png",
      title: "Enterprise Grade Hardware With Full SSD Storage",
    },
    {
      img: "/HeroContent/clock.png",
      title: "24/7 Expert Support With Guaranteed SLA",
    },
      {
      img: "/HeroContent/image1.png",
      title: "Offers Root Access Complete Control On Server",
    },
    {
      img: "/HeroContent/cloud.png",
      title: "Enterprise Grade Hardware With Full SSD Storage",
    },
    {
      img: "/HeroContent/clock.png",
      title: "24/7 Expert Support With Guaranteed SLA",
    },
  ];
  return (
    <>
      <section>
        <Container sx={{ mt: 4 }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#333333",
              fontWeight: 600,
              fontSize: "1.5rem",
            }}
          >
            KEY FEATURES ON ALL SERVERS
          </Typography>
          <Box sx={{ flexGrow: 1, py: 4 }}>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "2px solid #ccc", // light border
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // soft shadow
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto", // center horizontally
                        my: 2, // optional vertical margin
                      }}
                    >
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        width={50}
                        height={50}
                      />
                    </Box>

                    <Typography  sx={{ mt: 2,fontWeight:400,fontSize:'1.5rem'}}>
                      {feature.title}
                    </Typography>
                  </Box>
                </Grid>
                
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
}
