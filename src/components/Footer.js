"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
export default function Footer() {
  const footerData = [
    {
      title: "Cloud Services",
      items: [
        "Public Cloud",
        "Private Cloud",
        "Hybrid Cloud",
        "SAP App Hosting",
        "Content Delivery Network(CDN)",
        "Enterprises Cloud Solutions",
        "Colocation Pricing",
        "IP Latency Test",
        "Hardware Price For India",
        "OFFER",
      ],
    },
    {
      title: "Submit Ticket",
      items: ["24/7/365 Support"],
    },
    {
      title: "Hosting Solutions",
      items: [
        "Web Hosting",
        "WordPress Hosting",
        "VPS Hosting",
        "Dedicated Servers",
        "Cloud Servers",
        "Reseller Hosting",
        "Managed Hosting",
      ],
    },
    {
      title: "Company",
      items: [
        "About Us",
        "Careers",
        "Blog",
        "Client Testimonials",
        "Contact Us",
        "Press & News",
      ],
    },
    {
      title: "Resources",
      items: [
        "Knowledge Base",
        "FAQs",
        "Documentation",
        "Network Status",
        "Affiliate Program",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
  ];
  return (
    <>
      <Box sx={{ position: "relative", backgroundColor: "#232F3E", mt: 10 }}>
        <Box sx={{ position: "relative", backgroundColor: "#232F3E", mt: 10 }}>
          {/* Flex container to align both horizontally */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "stretch",
              justifyContent: "flex-start",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Left Side: Skewed "Need Help" Box */}

            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                backgroundColor: "#f5f5f5",
                height: "100%",
                transform: "skewX(-5deg)",
                transformOrigin: "left top",
                boxShadow: 4,

                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 24,
                px: 4,
                py: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Unskew content inside */}
              <Box sx={{ transform: "skewX(5deg)" }}>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  <strong>Need Help</strong> Call Us 24/7:
                </Typography>
                <Typography variant="h5" sx={{ mt: 1 }}>
                  +91-9717872100
                </Typography>
              </Box>
            </Box>

            {/* Right Side: Newsletter Form */}
            <Box
              sx={{
                flex: 1,
                px: { xs: 2, md: 4 },
                py: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" sx={{ mb: 1, color: "#fff" }}>
                Sign up to Newsletter for special offers
              </Typography>
              <Box
                component="form"
                onSubmit={(e) => e.preventDefault()}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1,
                }}
              >
                <TextField
                  placeholder="Please enter your email"
                  variant="outlined"
                  size="small"
                  sx={{
                    backgroundColor: "#fff",
                    height: 40,
                    "& .MuiInputBase-root": {
                      height: "100%",
                      fontSize: "0.9rem",
                    },
                    width: { xs: "100%", sm: "300px" }, // adjust width responsively
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    whiteSpace: "nowrap",
                    px: 3,
                    height: 40, // match TextField height
                    fontSize: "0.9rem",
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* </Box> */}

        {/* Footer container with top padding to prevent overlap */}
        <Container sx={{ pt: 5 }}>
          {/* Optional top row if needed */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 2 }}
          >
            {/* Add content here if needed */}
          </Grid>

          {/* Footer links */}
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            sx={{ mt: 4 }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#f57836" }}
              >
                Our Infrastructure
              </Typography>
              <List dense>
                {[
                  "Data Backup",
                  "CDN",
                  "IAAS",
                  "SAAS",
                  "DR on Demand",
                  "Zero Data Loss",
                  "Remote Infra Management Services",
                  "Enterprise Email Solutions: Microsoft Exchange Server",
                  "QMail or Zimbra",
                  "We support all this",
                ].map((item, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: "#ddd",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#f57836" }}
              >
                Submit Ticket
              </Typography>
              <List dense>
                {["Cloud Servers"].map((item, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: "#ddd",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mt: 3, mb: 2, color: "#f57836" }}
              >
                Public Cloud Product
              </Typography>
              <List dense>
                {[
                  "Cloud Servers",
                  "Cloud Managed",
                  "Cloud Storage",
                  "Cloud Load Balancers",
                  "Cloud Backup",
                  "Cloud Database",
                  "Cloud Bandwidth",
                  "Cloud Apps",
                  "Dedicated Servers",
                ].map((item, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: "#ddd",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#f57836" }}
              >
                Know to Us
              </Typography>
              <List dense>
                {[
                  "About Us",
                  "Contact Us",
                  "Career",
                  "DMCA",
                  "SLA",
                  "T & C",
                  "Acceptable Use Policy",
                  "About Policy",
                  "Refund Policy",
                  "Privacy Policy",
                  "Domain Policy",
                  "Term of Services",
                  "Spam and Abuse",
                  "VPS Servers",
                ].map((item, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: "#ddd",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#f57836" }}
              >
                Cloud Services
              </Typography>
              <List dense>
                {[
                  "Public Cloud",
                  "Private Cloud",
                  "Hybrid Cloud",
                  "SAP App Hosting",
                  "Content Delivery Network(CDN)",
                  "Enterprises Cloud Solutions",
                  "Colocation Pricing",
                  "IP Latency Test",
                  "Hardware Price For India",
                  "OFFER",
                  "Submit Ticket",
                  "24/7/365 Support",
                ].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: item === "Submit Ticket" ? "#f57836" : "#ddd",
                        fontWeight: item === "Submit Ticket" ? 600 : 400,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Column 4: Arise Server */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#f57836" }}
              >
                Arise Server
              </Typography>
              <List dense>
                {[
                  "Skype : ariseservers",
                  "Mail: Info(at)ariseserver(dot)com",
                  "accounts(at)ariseserver(dot)com",
                  "PayPal – The safer, easier way to pay online!",
                ].map((item, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: "#ddd",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#111", py: 2 }}>
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Left Side */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                © 2010 - 2025{" "}
                <Link
                  href="https://www.ariseserver.com/terms-conditions/"
                  underline="none"
                  sx={{
                    color: "#ccc",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  Arise Server
                </Link>{" "}
                - All rights reserved.
              </Typography>
            </Grid>

            {/* Right Side */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                textAlign: { xs: "center", md: "right" },
                mt: { xs: 1, md: 0 },
              }}
            >
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                <Link
                  href="https://www.ariseserver.com/terms-conditions/"
                  underline="none"
                  sx={{
                    color: "#ccc",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link
                  href="https://www.ariseserver.com/privacy-policy/"
                  underline="none"
                  sx={{
                    color: "#ccc",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link
                  href="https://www.ariseserver.com"
                  underline="none"
                  sx={{
                    color: "#ccc",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  Site Map
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
