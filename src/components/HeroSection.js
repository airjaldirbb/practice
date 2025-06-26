"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
  Card,
  Avatar,
  Button,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function HeroSection() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const serverSlides = [
    {
      name: "France Dedicated Server",
      price: "Starting at $138.70 USD Monthly",
      img: "/flags/france.png", // Store in public/flags/
      link: "https://www.ariseserver.com/france-dedicated-server/",
    },
    {
      name: "Germany Dedicated Server",
      price: "Starting at $120.00 USD Monthly",
      img: "/Flags/Germany.jpg",
      link: "https://www.ariseserver.com/germany-dedicated-server/",
    },
    // Add more slides here
  ];
  const cardItems = [
    {
      title: "Fast Deployment",
      description: "Deploy servers in minutes with automated provisioning.",
    },
    {
      title: "99.9% Uptime",
      description: "Enjoy stable and reliable infrastructure round the clock.",
    },
    {
      title: "24/7 Support",
      description: "Our engineers are available anytime you need help.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Container sx={{ mt: 4 }}>
      <Typography align="center">
        For grooming your business faster, you need a reliable and robust
        infrastructure partner. Arise Server LLP is delivering world-class
        services for all kinds of Hosting Servers with no initial cost.
      </Typography>

      <Typography
        align="center"
        sx={{ mt: 4, fontSize: "20px", fontWeight: 600 }}
      >
        AS PER YOUR BUSINESS NEED CHOOSE OUR DATA CENTER AND PAY ACCORDINGLY
      </Typography>

      <Box sx={{ width: "100%", mt: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            label={
              <Box display="flex" alignItems="center" gap={2}>
                <Image
                  src="/images/datacenter.jpg"
                  alt="Dedicated"
                  width={40}
                  height={40}
                />
                <Typography fontWeight="bold">Dedicated Servers</Typography>
              </Box>
            }
          />
          <Tab
            label={
              <Box display="flex" alignItems="center" gap={2}>
                <Image src="/images/vps.jpg" alt="VPS" width={40} height={40} />
                <Typography fontWeight="bold">VPS Servers</Typography>
              </Box>
            }
          />
          <Tab
            label={
              <Box display="flex" alignItems="center" gap={2}>
                <Image
                  src="/images/cloud.jpg"
                  alt="Cloud"
                  width={40}
                  height={40}
                />
                <Typography fontWeight="bold">Cloud Servers</Typography>
              </Box>
            }
          />
          <Tab
            label={
              <Box display="flex" alignItems="center" gap={2}>
                <Image
                  src="/images/management.jpg"
                  alt="Web"
                  width={40}
                  height={40}
                />
                <Typography fontWeight="bold">Web Hosting</Typography>
              </Box>
            }
          />
        </Tabs>
        <Box
          sx={{
            border: "1px solid #ddd",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
            p: 2,
            backgroundColor: "#fff", // Optional: keep background white
          }}
        >
          {/* Tab Panels */}
          <TabPanel value={value} index={0}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Text */}
              <Box flex={1}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  DEDICATED SERVER
                </Typography>
                <Typography>
                  Arise Server LLP is a prominent online destination offering
                  all types of managed dedicated and cloud hosting servers at no
                  initial cost. If you're suffering from poor website
                  performance, switch to our affordable dedicated servers
                  tailored to your needs.
                </Typography>
              </Box>

              {/* Carousel */}
              <Box maxWidth={350} mx="auto">
                <Slider {...settings}>
                  {serverSlides.map((slide, index) => (
                    <Card
                      key={index}
                      sx={{
                        textAlign: "center",
                        py: 3,
                        px: 2,
                        minHeight: 200,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 1,
                        boxShadow: 3,
                        borderRadius: 2,
                        backgroundColor: "#43c0fe",
                        color: "#fff",
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#314150",
                        },
                      }}
                    >
                      <Box mb={1}>
                        <Avatar
                          src={slide.img}
                          alt={slide.name}
                          sx={{ width: 80, height: 60, mx: "auto" }}
                          variant="square"
                        />
                      </Box>
                      <Typography variant="h6" fontWeight="bold">
                        {slide.name}
                      </Typography>
                      <Typography variant="body2">{slide.price}</Typography>
                      <Button
                        href={slide.link}
                        target="_blank"
                        variant="contained"
                        size="small"
                        sx={{
                          mt: 1,
                          backgroundColor: "#f57836",
                          "&:hover": { backgroundColor: "#d65b22" },
                        }}
                      >
                        Order Now
                      </Button>
                    </Card>
                  ))}
                </Slider>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <Button
                    href="https://www.ariseserver.com/managed-dedicated-servers/"
                    target="_blank"
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#f57836",
                      "&:hover": { backgroundColor: "#d65b22" },
                    }}
                  >
                    DEDICATED SERVERS LOCATIONS
                  </Button>
                </Box>
              </Box>
              {/* Image */}
              <Box flex={1} display="flex" justifyContent="center">
                <Image
                  src="/images/dedicated-hosting.jpg"
                  alt="Data Center"
                  width={500}
                  height={300}
                  style={{ borderRadius: 10 }}
                />
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box flex={1}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  VPS SERVER
                </Typography>
                <Typography>
                  Our VPS hosting cheap system functions in the same manner as
                  the dedicated. We would provide you have one physical server
                  where you can run several different virtualized operating
                  systems on that one server. It is pleasurable to say that
                  every virtualized operating system would act as if it was a
                  dedicated server. This endows you to have all of the
                  advantages of a dedicated server at a fraction of the cost.
                  Moreover, our VPS hosting environment terms as a container,
                  and the physical server where each container is provisioned
                  terms as a node.
                </Typography>
              </Box>
              {/* Carousel */}
              <Box maxWidth={350} mx="auto">
                <Slider {...settings}>
                  {serverSlides.map((slide, index) => (
                    <Card
                      key={index}
                      sx={{
                        textAlign: "center",
                        py: 3,
                        px: 2,
                        minHeight: 200,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 1,
                        boxShadow: 3,
                        borderRadius: 2,
                        backgroundColor: "#43c0fe",
                        color: "#fff",
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#314150",
                        },
                      }}
                    >
                      <Box mb={1}>
                        <Avatar
                          src={slide.img}
                          alt={slide.name}
                          sx={{ width: 80, height: 60, mx: "auto" }}
                          variant="square"
                        />
                      </Box>
                      <Typography variant="h6" fontWeight="bold">
                        {slide.name}
                      </Typography>
                      <Typography variant="body2">{slide.price}</Typography>
                      <Button
                        href={slide.link}
                        target="_blank"
                        variant="contained"
                        size="small"
                        sx={{
                          mt: 1,
                          backgroundColor: "#f57836",
                          "&:hover": { backgroundColor: "#d65b22" },
                        }}
                      >
                        Order Now
                      </Button>
                    </Card>
                  ))}
                </Slider>
              </Box>
              {/* Image */}
              <Box flex={1} display="flex" justifyContent="center">
                <Image
                  src="/images/dedicated-hosting.jpg"
                  alt="Data Center"
                  width={500}
                  height={200}
                  style={{ borderRadius: 10 }}
                />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Cloud Server Pricing Plans.
          </TabPanel>
          <TabPanel value={value} index={3}>
            Web Hosting Contact Details.
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
}
