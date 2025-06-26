
"use client"
import React from "react";
import { Container, Grid2 } from "@mui/material";
import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Link,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FlickrIcon from "@mui/icons-material/PhotoCamera"; 
import PinterestIcon from "@mui/icons-material/Pinterest";
export default function HeaderSection() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
 const controlNavbar = () => {
    if (typeof window !== "undefined") {
      setShow(window.scrollY < lastScrollY || window.scrollY < 10);
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const socialLinks = [
    {
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/ariseserver",
      delay: 0,
      label: "Facebook",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/ariseserver",
      delay: 100,
      label: "Twitter",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/company/ariseserverllp/",
      delay: 200,
      label: "LinkedIn",
    },
    {
      icon: <FlickrIcon />,
      url: "#",
      delay: 300,
      label: "Flickr",
    },
    {
      icon: <PinterestIcon />,
      url: "https://www.pinterest.com/ariseserver/",
      delay: 400,
      label: "Pinterest",
    },
  ];
  return (
    <div  style={{
        backgroundColor: "#43c1fe",
        height: "45px",
        color: "white",
        position: "fixed",
        top: show ? "0" : "-50px",
        width: "100%",
        zIndex: 1300,
        transition: "top 0.3s ease-in-out",
        textAlign: "center",
        lineHeight: "45px",
        fontWeight: "bold",
      }}>
      <Container sx={{ py: 0.5 }} >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              animation: "fadeIn 0.5s ease-in-out",
            }}
          >
            {socialLinks.map((item, index) => (
              <IconButton
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener"
                sx={{
                  animation: `fadeIn 0.6s ease ${item.delay}ms forwards`,
                  opacity: 0,
                  "@keyframes fadeIn": {
                    from: { opacity: 0, transform: "translateY(-10px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
                aria-label={item.label}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {/* Info Links */}
            <List sx={{ display: "flex", flexDirection: "row", gap: 2, p: 0 }}>
              <ListItem sx={{ width: "auto", p: 0 }}>
                <ListItemIcon sx={{ minWidth: "unset", mr: 1 }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography fontWeight="bold" sx={{ color: "#fff" }}>
                      +91-9717872100
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem
                component="a"
                href="https://tawk.to/chat/5819c1337d6b3d6f0ebd9b55/default"
                target="_blank"
                sx={{ width: "auto", p: 0 }}
              >
                <ListItemIcon sx={{ minWidth: "unset", mr: 1 }}>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText primary="LiveChat" sx={{ color: "#fff" }} />
              </ListItem>

              <ListItem
                component="a"
                href="https://www.ariseserver.com/cart/submitticket.php"
                target="_blank"
                sx={{ width: "auto", p: 0 }}
              >
                <ListItemIcon sx={{ minWidth: "unset", mr: 1 }}>
                  <SupportAgentIcon />
                </ListItemIcon>
                <ListItemText primary="Support" sx={{ color: "#fff" }} />
              </ListItem>
            </List>
            {/* Login Button */}
            <Button
              variant="contained"
              size="small"
              href="https://www.ariseserver.com/cart/clientarea.php"
              target="_blank"
              startIcon={<PersonIcon />}
              sx={{
                textTransform: "none",
                backgroundColor: "#47545c", // default color
                "&:hover": {
                  backgroundColor: "#f57836", // hover color
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
