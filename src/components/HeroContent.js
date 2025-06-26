"use client";
import React from "react";
import { Container } from "@mui/material";
import {
  Box,
  Grid,
  Typography,
  Link,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";

import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FolderIcon from "@mui/icons-material/Folder";
import CableIcon from "@mui/icons-material/Cable";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function HeroContent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);
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
      img: "/HeroContent/lock.png",
      title: "Offers Root Access Complete Control On Server",
    },
    {
      img: "/HeroContent/warranty.png",
      title: "Enterprise Grade Hardware With Full SSD Storage",
    },
    {
      img: "/HeroContent/support.png",
      title: "24/7 Expert Support With Guaranteed SLA",
    },
  ];
  const cardData = [
    {
      img: "/HeroContent/cloud1.png",
      title: "Enterprise Public Cloud",
      description:
        "Scalable and flexible cloud infrastructure tailored for businesses, with enterprise-grade security and performance.",
      link: "https://www.ariseserver.com/enterprise-cloud-hosting/",
      linkText: "Know More",
    },
    {
      img: "/HeroContent/private.png",
      title: "Private Cloud",
      description:
        "A secure and dedicated cloud environment built exclusively for your organization’s needs.",
      link: "https://www.ariseserver.com/on-premise-cloud-hosting/",
      linkText: "See Price",
    },
    {
      img: "/HeroContent/premise.png",
      title: "On Premise Cloud",
      description:
        "Bring the power of the cloud into your own infrastructure with full control and compliance.",
      link: "https://www.ariseserver.com/enterprise-cloud-hosting/",
      linkText: "Know More",
    },
    {
      img: "/HeroContent/servers.png",
      title: "Dedicated Servers",
      description:
        "High-performance dedicated servers for maximum control, reliability, and speed.",
    },
    {
      img: "/HeroContent/colocation.png",
      title: "Colocation",
      description:
        "Host your servers in our secure data centers with top-tier power, cooling, and connectivity.",
      link: "https://www.ariseserver.com/enterprise-cloud-hosting/",
      linkText: "Know More",
    },
    {
      img: "/HeroContent/datacenter.png",
      title: "Reliable Datacenters",
      description:
        "Enterprise-grade data centers with 24/7 support, security, and advanced infrastructure.",
    },
  ];
  const featuresData = [
    {
      title: "SECURED BY FIREWALL",
      type: "icon",
      icon: <SecurityOutlinedIcon fontSize="medium" />,
    },
    {
      title: "24X7 REMOTE MONITORING",
      type: "icon",
      icon: <CloudIcon fontSize="medium" />,
    },
    {
      title: "HARDWARE REPLACEMENT",
      type: "image",
      icon: <StorageOutlinedIcon fontSize="medium" />,
    },
    {
      title: "99.99% UPTIME",
      type: "image",
      icon: <ThumbUpAltOutlinedIcon fontSize="medium" />,
    },
    {
      title: "IPV4 AND IPV6",
      type: "image",
      icon: <CloudIcon fontSize="medium" />,
    },
    {
      title: "NO SETUP COST",
      type: "icon",
      icon: <SettingsIcon fontSize="medium" />,
    },
    {
      title: "24X7X365 SUPPORT",
      type: "icon",
      icon: <AccessTimeIcon fontSize="medium" />,
    },

    {
      title: "FREE QUICK MIGRATION",
      type: "image",
      icon: <FolderIcon fontSize="medium" />,
    },
    {
      title: "ROOT ACCESS",
      type: "image",
      icon: <CloudIcon fontSize="medium" />,
    },
    {
      title: "FASTEST CONNECTIVITY",
      type: "image",
      icon: <CableIcon fontSize="medium" />,
    },
  ];
  const listItems = [
    "Unique and matchless technology provides you with the proven performance, trustworthiness, and functionality.",
    "We have implemented exceptional hardware, devoted routing and custom performance provision technologies to offer maximum redundancy.",
    "Quick and easy provisioning: Select from a wide array of hosting control panels for easy management and administration of your websites.",
    "Backup and data recovery: Disk-based data protection and recovery for servers and workstations on Windows or Linux OS, physical or virtual.",
    "All our products and services are perfectly optimized for speed.",
    "Managing Servers: A dedicated hosting service where the client leases an entire server instead of sharing.",
    "World-class web hosting and most secure servers in a host of countries. Daily backups and security checks ensured.",
    "Outstanding 24/7 customer support to solve all your queries.",
    "We have served and are trusted by several renowned brands.",
  ];

  const firstRow = featuresData.slice(0, 5);
  const secondRow = featuresData.slice(5, 10);
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
          <Box sx={{ py: 4 }}>
            <Grid container spacing={4} justifyContent="center">
              {features.map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 2,
                      maxWidth: 300, // optional: keeps content compact and aligned
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "2px solid #ccc",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                        my: 2,
                      }}
                    >
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        width={50}
                        height={50}
                      />
                    </Box>

                    <Typography
                      sx={{
                        mt: 2,
                        fontWeight: 400,
                        fontSize: "1.2rem",
                        textAlign: "center",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Container sx={{ mt: 4, backgroundColor: "#f7f7fd" }}>
          <Box sx={{ py: 4 }}>
            <Typography
              sx={{
                textAlign: "center",
                color: "#333333",
                fontWeight: 600,
                fontSize: "1.5rem",
                mb: 4,
              }}
            >
              ENTERPRISE CLOUD COMPUTING SOLUTION
            </Typography>
            <Typography align="center" sx={{ mb: 4 }}>
              Choose Enterprise Cloud, Real Cloud Computing, Cloud CDN and
              Managed Dedicated Servers Solution from Arise Server with SLA
              Backed Network Uptime 99.95%, Lowest Latency, N+N Redundancy,
              Prompt Technical Assistance and Carrier Neutral Facility
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {cardData.map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      maxWidth: 300,
                      width: "100%",
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: 8,
                      },
                    }}
                  >
                    {/* Circle Image */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "2px solid #ccc",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        my: 2,
                      }}
                    >
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        width={50}
                        height={50}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      sx={{ fontSize: "1.2rem", textAlign: "center" }}
                    >
                      {feature.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        textAlign: "center",
                        color: "#555",
                        minHeight: 60,
                      }}
                    >
                      {feature.description}
                    </Typography>

                    {/* Link or Price */}
                    {feature.link ? (
                      <Link
                        href={feature.link}
                        target="_blank"
                        underline="hover"
                        sx={{
                          color: "#ff6600",
                          fontWeight: 600,
                          mt: "auto",
                        }}
                      >
                        {feature.linkText || "Know More"}
                      </Link>
                    ) : feature.price ? (
                      <Typography
                        variant="body1"
                        sx={{ color: "#43c0fe", fontWeight: 600, mt: "auto" }}
                      >
                        {feature.price}
                      </Typography>
                    ) : null}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Container sx={{ mt: 4 }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#333333",
              fontWeight: 600,
              fontSize: "1.5rem",
            }}
          >
            WE PROMISE
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
          >
            {featuresData.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "45%", md: "18%" }, // responsive sizing
                  textAlign: "center",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {feature.img ? (
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={50}
                    height={50}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "#43c1fe",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: 3,
                      fontSize: 30,
                      transition: "0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#ffffff",
                        color: "#f57836",
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                )}
                <Typography sx={{ mt: 2, fontWeight: 400, fontSize: "1.1rem" }}>
                  {feature.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
        <Container sx={{ mt: 6 }}>
          {/* Tabs Centered */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="OUR EXCLUSIVE RANGE OF SERVICES" />
              <Tab label="WHY WITH US" />
            </Tabs>
          </Box>

          {/* Content Panel */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              boxShadow: 4,
            }}
          >
            {/* Tab 1 */}
            {value === 0 && (
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                justifyContent="space-between"
                gap={4}
              >
                {/* List with ticks */}
                <Box flex={1}>
                  <Typography  mb={2} fontWeight={600}>
                    OUR EXCLUSIVE RANGE OF SERVICES
                  </Typography>
                  <List>
                    {listItems.map((item, index) => (
                      <ListItem
                        key={index}
                        sx={{ alignItems: "flex-start", pb: 1 }}
                      >
                        <ListItemIcon sx={{ minWidth: "30px", mt: "5px" }}>
                          <CheckCircleIcon sx={{ color: "#f57836" }} />{" "}
                          {/* Orange tick */}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              
                              sx={{ color: "#333", lineHeight: 1.6 }}
                            >
                              {item}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Image */}
                <Box flex={1} display="flex" justifyContent="center">
                  <Image
                    src="/images/why-us.png"
                    alt="Dedicated Server"
                    width={400}
                    height={400}
                    style={{ borderRadius: 10 }}
                  />
                </Box>
              </Box>
            )}

            {/* Tab 2 */}
            {value === 1 && (
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                justifyContent="space-between"
                gap={4}
              >
                {/* Image */}
                <Box flex={1} display="flex" justifyContent="center">
                  <Image
                    src="/images/why.jpg"
                    alt="Cloud Server"
                    width={400}
                    height={400}
                    style={{ borderRadius: 10 }}
                  />
                </Box>

                {/* Text */}
                <Box flex={1}>
                  <Typography mb={2} fontWeight={600}>
                    Why With Us
                  </Typography>
                  <Typography  lineHeight={1.8}>
                    Arise Server LLP provide a wide range of Managed Servers,
                    Cloud Hosting Solutions for Business requiremnet. Arise
                    Server has expertise in Managed Cloud Serer Solutions,
                    Virtualization & Disaster Recovery, and our Technical
                    Support team everytime help you 24*7 for your resolve query.
                    100% Guaranteed Your Satisfaction : We never stop
                    communication with our customers, without resolve client
                    query 100% satisfaction. We hired all team member of highly
                    experience their field in tech support, manage
                    infrastructure of business, manage dedicate server, cloud
                    server, vps server. Our Support team very well experiance to
                    manage all server Linux server Windows server. IBM, HP,
                    Intel, and Database MSSQL, MySQL, Mongo, PL/pgSQL and app
                    PHP, Apache, Exim. We presence services in the Tourism,
                    Telecom, Health, Educ, Engery, Utilities, Agriculture and
                    more.
                  </Typography>
                </Box>
              </Box>
            )}
          </Paper>
        </Container>
      </section>
    </>
  );
}
