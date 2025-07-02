"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  TextField,
  IconButton,
  Button,
  ListSubheader,
} from "@mui/material";

export default function MainHeader({ sticky }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const [values, setValues] = useState({
    category: "",
    service: "",
    location: "",
    department: "",
  });
  const [selectedServer, setSelectedServer] = useState(null);
  const menuProps = {
    PaperProps: {
      sx: {
        maxHeight: 400,
        width: 600,
        "& .MuiMenu-list": {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
        },
        "& .MuiMenuItem-root": {
          borderBottom: "1px solid rgba(168, 22, 22, 0.1)",
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
    },
    disableScrollLock: true,
  };
  const regionServerData = {
    DedicatedServers: [
      {
        name: "Germany Server",
        slug: "Germany",
        flag: "germany16x13.png",
      },
      { name: "France Server", slug: "France", flag: "france16x13.png" },
      { name: "UK Server", slug: "UK", flag: "uk16x13.png" },
      { name: "Italy Server", slug: "italyserver", flag: "italy16x13.png" },
      { name: "Russia Server", slug: "russiaserver", flag: "russia16x13.png" },
      {
        name: "Europe Server",
        slug: "euserver",
        flag: "europe.png",
      },
      { name: "Canada Server", slug: "canada-server", flag: "canada16x13.png" },
      { name: "UK Server", slug: "uk-server", flag: "uk16x13.png" },
      {
        name: "Australia Server",
        slug: "au-server",
        flag: "australia16x13.png",
      },
      { name: "India Server", slug: "india-server", flag: "india16x13.png" },
      {
        name: "Israel Server",
        slug: "israel-server",
        flag: "israel16x13.png",
      },
      { name: "Japan Server", slug: "Japan-server", flag: "japan16x13.png" },
      { name: "UK Server", slug: "uk-server", flag: "uk16x13.png" },
      {
        name: "Malasia Server",
        slug: "malasia-server",
        flag: "malasia16x13.png",
      },
      {
        name: "Singapur Server",
        slug: "singapur-server",
        flag: "singapur16x13.png",
      },
      {
        name: "Thailand Server",
        slug: "Thailand-dedicated-server",
        flag: "thailand16x13.png",
      },
      { name: "Turkey Server", slug: "turkey-server", flag: "turkey16x13.png" },
      { name: "UAE Server", slug: "uae-server", flag: "uae16x13.png" },
      { name: "Italy Server", slug: "italy-server", flag: "italy16x13.png" },
      { name: "USA Server", slug: "USA-server", flag: "USA16x13.png" },
      {
        name: "Germany Server",
        slug: "germany-dedicated-server",
        flag: "germany16x13.png",
      },
      { name: "France Server", slug: "france-server", flag: "france16x13.png" },
      { name: "UK Server", slug: "uk-server", flag: "uk16x13.png" },
      { name: "Italy Server", slug: "italy-server", flag: "italy16x13.png" },
      { name: "Russia Server", slug: "russia-server", flag: "russia.png" },
      {
        name: "Germany Server",
        slug: "germany-dedicated-server",
        flag: "germany16x13.png",
      },
      { name: "France Server", slug: "france-server", flag: "france16x13.png" },
      { name: "UK Server", slug: "uk-server", flag: "uk16x13.png" },
      { name: "Italy Server", slug: "italy-server", flag: "italy16x13.png" },
      { name: "Russia Server", slug: "russia-server", flag: "russia.png" },
    ],
    VPS: [
      { name: "India Server", slug: "india-server", flag: "india.png" },
      { name: "Singapore Server", slug: "singapore-server", flag: "si.png" },
      { name: "Hong Kong Server", slug: "hong-kong-server", flag: "hk.png" },
      {
        name: "Thailand Server",
        slug: "thailand-server",
        flag: "thailand.png",
      },
      { name: "Japan Server", slug: "japan-server", flag: "japan.png" },
    ],
    Cloud: [
      { name: "USA Server", slug: "usa-server", flag: "usa.png" },
      { name: "Canada Server", slug: "canada-server", flag: "canada.png" },
    ],
    Hosting: [
      { name: "Turkey Server", slug: "turkey-server", flag: "turkey.png" },
      { name: "Malaysia Server", slug: "malaysia-server", flag: "my.png" },
      { name: "UAE Server", slug: "uae-server", flag: "uae.png" },
      { name: "Israel Server", slug: "israel-server", flag: "israel.png" },
    ],
    ServerSupport: [
      { name: "Turkey Server", slug: "turkey-server", flag: "turkey.png" },
      { name: "Malaysia Server", slug: "malaysia-server", flag: "my.png" },
      { name: "UAE Server", slug: "uae-server", flag: "uae.png" },
      { name: "Israel Server", slug: "israel-server", flag: "israel.png" },
    ],
  };

  const [selected, setSelected] = useState({
    DedicatedServers: "",
    VPS: "",
    Cloud: "",
    Hosting: "",
    ServerSupport: "",
  });

  // const handleChange = (region) => (event) => {
  //   const selectedSlug = event.target.value;
  //   setSelected((prev) => ({ ...prev, [region]: selectedSlug }));
  //   router.push(`/servers/${selectedSlug}`);
  // };
  const handleChange = (region) => (event) => {
    const slug = event.target.value;

    setSelected((prev) => ({
      ...prev,
      [region]: slug,
    }));
    if (region === "DedicatedServers") {
      router.push(`/dedicated/${slug}`);
    } else if (region === "VPS") {
      router.push(`/vps/${slug}`);
    } else {
      router.push(`/servers/${slug}`); // fallback or other category
    }
  };
  const getLabel = (region) => {
    if (region === "DedicatedServers") return "Dedicated Servers";
    if (region === "VPS") return "VPS Servers";
    return `${region} Servers`;
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1100, // ensure it stays above other elements
          backgroundColor: "#fff", // prevent transparency when overlapping content
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // optional subtle shadow
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1200,
            backgroundColor: "#fff",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            mt: "100px", // or whatever height HeaderSection is
            overflow: "visible",
          }}
        >
          <Container sx={{ py: 0.5 }}>
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
                  mt: 2,
                  animation: "fadeIn 0.5s ease-in-out",
                }}
              >
                <Image src="/images/logo.jpg" width={180} height={200} alt="" />
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
                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap={2}
                  mt={2}
                  justifyContent="flex-start"
                >
                  {Object.entries(regionServerData).map(([region, servers]) => (
                    <FormControl
                      key={region}
                      size="small"
                      sx={{
                        flex: "1 1 calc(15% - 16px)",
                        minWidth: 149,
                      }}
                    >
                      <InputLabel style={{ fontSize: ".8rem" }}>
                        {getLabel(region)}
                      </InputLabel>
                      <Select
                        value={selected[region] || ""}
                        label={`${region} Servers`}
                        onChange={handleChange(region)}
                        MenuProps={{
                          PaperProps: { style: { maxHeight: 300 } },
                        }}
                      >
                        {servers.map((server, idx) => (
                          <MenuItem key={idx} value={server.slug}>
                            <Box display="flex" alignItems="center" gap={1}>
                              <Avatar
                                src={`/flags/${server.flag}`}
                                alt={server.name}
                                sx={{ width: 20, height: 15 }}
                                variant="square"
                              />
                              <Typography variant="body2">
                                {server.name}
                              </Typography>
                            </Box>
                          </MenuItem>
                        ))}

                        {/* Dedicated Servers Footer Buttons */}
                        {region === "DedicatedServers" && (
                          <ListSubheader disableSticky sx={{ mt: 1 }}>
                            <Box
                              display="flex"
                              flexDirection="column"
                              gap={1}
                              px={2}
                            >
                              <Button
                                fullWidth
                                variant="contained"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  router.push("/dedicated"); // go to all dedicated servers
                                }}
                                sx={{
                                  backgroundColor: "#00C1CF",
                                  color: "#fff",
                                  textTransform: "none",
                                  "&:hover": {
                                    backgroundColor: "#00a8b0",
                                  },
                                }}
                              >
                                All Dedicated Servers
                              </Button>
                              <Button
                                fullWidth
                                variant="contained"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  router.push("/dedicated/custom-order"); // custom order page
                                }}
                                sx={{
                                  backgroundColor: "#00C1CF",
                                  color: "#fff",
                                  textTransform: "none",
                                  "&:hover": {
                                    backgroundColor: "#00a8b0",
                                  },
                                }}
                              >
                                Custom Order Servers
                              </Button>
                            </Box>
                          </ListSubheader>
                        )}

                        {/* VPS Footer Button */}
                        {region === "VPS" && (
                          <MenuItem divider>
                            <Box width="100%" pt={1}>
                              <Button
                                fullWidth
                                variant="contained"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  router.push("/vps");
                                }}
                                sx={{
                                  backgroundColor: "#00C1CF",
                                  color: "#fff",
                                  textTransform: "none",
                                  "&:hover": {
                                    backgroundColor: "#00a8b0",
                                  },
                                }}
                              >
                                All VPS Servers
                              </Button>
                            </Box>
                          </MenuItem>
                        )}
                      </Select>
                    </FormControl>
                  ))}

                  <IconButton
                    onClick={() => setShowSearch((prev) => !prev)}
                    color="primary"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
                mt: 2,
                gap: 1,
              }}
            >
              {showSearch && (
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Search servers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{
                    width: 150,
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    mr: 7,
                    mb: 1,
                  }}
                />
              )}
            </Box>
          </Container>
        </Box>
      </header>
    </>
  );
}
