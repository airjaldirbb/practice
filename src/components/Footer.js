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
      <Box sx={{ backgroundColor: "#f5f5f5", py: 4 }}>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Left Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                <strong>Need Help</strong> Call Us 24/7:
              </Typography>
              <Typography variant="h5" sx={{ mt: 1 }}>
                +91-9717872100
              </Typography>
            </Grid>

            {/* Right Section */}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#232F3E" }}>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="body1"
              sx={{ mb: 1, color: "#fff", display: "flex-end" }}
            >
              Sign up to Newsletter for special offers
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                hi;
              }}
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
                fullWidth
                sx={{ backgroundColor: "#fff" }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  whiteSpace: "nowrap",
                  px: 3,
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Grid>

          <Grid container spacing={4}>
            {footerData.map((section, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2, color: "#f57836" }}
                >
                  {section.title}
                </Typography>
                <List dense>
                  {section.items.map((item, i) => (
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
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#111", py: 2 }}>
        <Container>
          <Grid container spacing={70} alignItems="center">
            {/* Left side */}
            <Grid item xs={12} md={6}>
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

            {/* Right side */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#ccc", textAlign: "right" }}
              >
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
