"use client";
import React from "react";
import { useState } from "react";
import { Container, IconButton } from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  Typography,
} from "@mui/material";
export default function MainHeader({ sticky }) {
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
        width: 500,
        "& .MuiMenu-list": {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
        },
      },
    },
  };
  const regionServerData = {
    Europe: [
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
    Asia: [
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
    America: [
      { name: "USA Server", slug: "usa-server", flag: "usa.png" },
      { name: "Canada Server", slug: "canada-server", flag: "canada.png" },
    ],
    Others: [
      { name: "Turkey Server", slug: "turkey-server", flag: "turkey.png" },
      { name: "Malaysia Server", slug: "malaysia-server", flag: "my.png" },
      { name: "UAE Server", slug: "uae-server", flag: "uae.png" },
      { name: "Israel Server", slug: "israel-server", flag: "israel.png" },
    ],
  };

  const [selected, setSelected] = useState({
    Europe: "",
    Asia: "",
    America: "",
    Others: "",
  });
  // const handleChange = (region) => (e) => {
  //   const slug = e.target.value;
  //   if (slug) {
  //     window.location.href = `https://www.ariseserver.com/${slug}`;
  //   }
  //   setSelected((prev) => ({ ...prev, [region]: slug }));
  // };
  const handleChange = (region) => (event) => {
    const selectedSlug = event.target.value;
    setSelected((prev) => ({ ...prev, [region]: selectedSlug }));
    router.push(`/servers/${selectedSlug}`);
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
                        flex: "1 1 calc(25% - 16px)", // 4 per row with gap=2 (16px)
                        minWidth: 200,
                      }}
                    >
                      <InputLabel>{region} Servers</InputLabel>
                      <Select
                        value={selected[region]}
                        label={`${region} Servers`}
                        onChange={handleChange(region)}
                        MenuProps={menuProps}
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
                      </Select>
                    </FormControl>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </header>
    </>
  );
}
