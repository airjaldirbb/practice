"use client";
import { Container, Typography, Box, Grid, Fade } from "@mui/material";
import { useState } from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Maps() {
  const faqsLeft = [
    {
      question: "What is a dedicated server?",
      answer:
        "A dedicated server is a physical server exclusively rented by a client for their use.",
    },
    {
      question: "Can I upgrade my server later?",
      answer: "Yes, you can upgrade your resources as your needs grow.",
    },
    {
      question: "Can I upgrade my server later?",
      answer: "Yes, you can upgrade your resources as your needs grow.",
    },
  ];

  const faqsRight = [
    {
      question: "Do you offer server management?",
      answer:
        "Yes, we offer fully managed services including updates and monitoring.",
    },
    {
      question: "Is there 24/7 technical support?",
      answer: "Absolutely, our team is available 24/7 via chat and email.",
    },
    {
      question: "Is there 24/7 technical support?",
      answer: "Absolutely, our team is available 24/7 via chat and email.",
    },
  ];

  const [expandedLeft, setExpandedLeft] = useState(null);
  const [expandedRight, setExpandedRight] = useState(null);

  const handleExpand = (panel, side) => (event, isExpanded) => {
    if (side === "left") {
      setExpandedLeft(isExpanded ? panel : null);
    } else {
      setExpandedRight(isExpanded ? panel : null);
    }
  };
  return (
    <>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            mt: 4,
            fontWeight: 600,
            fontSize: "2rem", // Corrected from fontWeight
          }}
        >
          DEPLOY AND SCALE YOUR INFRASTRUCTURE IN OUR DATACENTERS
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
            }}
          >
            <Image
              alt="Data Center Map"
              src="/images/map-image.png"
              width={700}
              height={700}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "#f9f9f9", py: 4 }}>
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              mb: 4,
              fontWeight: 600,
              fontSize: "2rem",
            }}
          >
            FAQ'S
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid size={6}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    maxWidth: 500,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {" "}
                  {faqsLeft.map((faq, index) => (
                    <Accordion
                      key={index}
                      expanded={expandedLeft === index}
                      onChange={handleExpand(index, "left")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span" >
                          {" "}
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>{faq.answer}</AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    maxWidth: 500,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {faqsRight.map((faq, index) => (
                    <Accordion
                      key={index}
                      expanded={expandedRight === index}
                      onChange={handleExpand(index, "right")}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={600}>{faq.question}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
