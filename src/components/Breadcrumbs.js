"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Container,
  Box,
  Typography,
  Breadcrumbs as MUIBreadcrumbs,
} from "@mui/material";

const serverNameMap = {
  germany: "Germany Dedicated Server",
  "usa-server": "USA Dedicated Server",
  "uk-server": "UK Dedicated Server",
  "india-server": "India Dedicated Server",
  // Add all your slugs here, all lowercase
};

function toTitleCase(str) {
  return str
    .replace(/dedicated-?|server/gi, "")
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...parts.map((part, idx) => {
      const href = "/" + parts.slice(0, idx + 1).join("/");
      const label =
        part === "dedicated" ? "Dedicated Servers" : toTitleCase(part);
      return { label, href };
    }),
  ];

  const slug = decodeURIComponent(parts.at(-1)?.toLowerCase() || "");
  const fullServerName = serverNameMap[slug] || "Dedicated Server";

  return (
    <Box sx={{ backgroundColor: "#54595F" }}>
   <Container sx={{ py: 2, position: "relative" }}>
  {/* Centered Server Name */}
  <Typography
    color="#fff"
    fontWeight={500}
    sx={{
      fontSize: "1.2rem",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  >
    {fullServerName}
  </Typography>

  {/* Right-Aligned Breadcrumbs */}
  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
    <MUIBreadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((crumb, idx) =>
        idx === breadcrumbs.length - 1 ? (
          <Typography key={idx} color="#fff" sx={{ fontSize: ".8rem" }}>
            {crumb.label}
          </Typography>
        ) : (
          <Link
            key={idx}
            href={crumb.href}
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: ".8rem",
            }}
          >
            {crumb.label}
          </Link>
        )
      )}
    </MUIBreadcrumbs>
  </Box>
</Container>

    </Box>
  );
}
