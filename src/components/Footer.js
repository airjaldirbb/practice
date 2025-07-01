"use client";
import React from "react";
import Image from "next/image";
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
  Link, Divider
} from "@mui/material";
export default function Footer() {

  return (
    <>
      <Box sx={{ position: "relative", backgroundColor: "#232F3E" }}>
        <Box sx={{ position: "relative", backgroundColor: "#232F3E", mt: 0 }}>
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
                transform: "skewX(-12deg)",
                transformOrigin: "left top",
                boxShadow: 6,

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
                <Typography sx={{ fontWeight: 400, textAlign: 'right' }}>
                  <strong>Need Help</strong> Call Us 24/7:
                </Typography>
                <Typography sx={{ mt: 1, textAlign: 'right', fontWeight: 600 }}>
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
                  size="medium"
                  sx={{
                    backgroundColor: "#fff",
                    height: 40,
                    "& .MuiInputBase-root": {
                      height: "100%",
                      fontSize: "0.9rem",
                    },
                    width: { xs: "100%", sm: "300px", md: "400px" }, // adjust width responsively
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    whiteSpace: "nowrap",
                    px: 3,
                    height: 40,
                    fontSize: "0.9rem",
                    color: '#fff',
                    backgroundColor: '#727272',
                    '&:hover': {
                      backgroundColor: '#fff',
                      color: '#000',
                    },
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

                sx={{ fontWeight: 600, mb: .5, color: "#6EC1E4" }}
              >
                Cloud Services
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

                sx={{ fontWeight: 600, mb: .5, color: "#6EC1E4" }}
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

                sx={{ fontWeight: 600, mb: .5, color: "#6EC1E4" }}
              >
                Our Infrastructure
              </Typography>
              <List dense>
                {[

                  "Data Backup|CDN| IAAS| SAAS| DR on",
                  "Demand|Zero Data Loss| Remote Infra",
                  "Management Services| Enterprise Email",
                  "Solutions: Microsoft Exchange",
                  "Server|QMail or Zimbra|We support all",

                ].map((item, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.3)",
                        backgroundColor: 'transparent '
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography

                sx={{ fontWeight: 600, mt: 3, mb: .5, color: "#6EC1E4" }}
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

                sx={{ fontWeight: 600, mb: .5, color: "#6EC1E4" }}
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

                sx={{ fontWeight: 600, mb: .5, color: "#6EC1E4" }}
              >
                About Policy
              </Typography>
              <List dense>
                {[

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


            {/* Column 4: Arise Server */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography

                sx={{ fontWeight: 600, mb: .5, color: "#6EC1E4", textAlign: 'right' }}
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
                        color: "rgba(255,255,255,0.3)", textAlign: 'right'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <Box sx={{ my: 1 }}>
                <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                {/* First image: Map */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', py: 1 }}>
                  <Image src="/footer/map-image.png" width={250} height={100} alt="Map showing location" />
                </Box>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                {/* Second: Bitcoin & PayUMoney side by side */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1, py: 1 }}>
                  <Image src="/footer/bitcoin-accepteds.png" width={140} height={20} alt="Bitcoin accepted" />
                  <Image src="/footer/payumoney.png" width={140} height={20} alt="PayUMoney supported" />
                </Box>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

                {/* Third image: ISO certification */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', py: 1 }}>
                  <Image src="/footer/iso-certify-arise-server.png" width={160} height={20} alt="ISO certified Arise Server" />
                </Box>

              </Box>






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
              <Typography sx={{ color: "rgba(255,255,255,0.3)", fontSize: '.8rem', fontWeight: 600 }}>
                © 2010 - 2025{" "}
                <Link
                  href="https://www.ariseserver.com/terms-conditions/"
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.3)",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ccc",
                    },
                  }}
                >
                  Arise Server
                </Link>{" "}
                <span style={{
                  color: "rgba(255,255,255,0.3)",
                }}>
                  - All rights reserved.

                </span>
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
              <Typography sx={{ color: "#ccc", fontSize: '.8rem', fontWeight: 600 }}>
                <Link
                  href="https://www.ariseserver.com/terms-conditions/"
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.3)",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  Terms of Service
                </Link>{" "}   <span style={{
                  color: "rgba(255,255,255,0.3)",
                }}>
                  |
                </span>
                {" "}
                <Link
                  href="https://www.ariseserver.com/privacy-policy/"
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.3)",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  Privacy Policy
                </Link>{" "}   <span style={{
                  color: "rgba(255,255,255,0.3)",
                }}>
                  |

                </span>
                {" "}
                <Link
                  href="https://www.ariseserver.com"
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.3)",
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
