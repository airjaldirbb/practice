import {
  Container,
  Typography,
  Box,
  Accordion,
  Grid,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
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
  ];
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
<Box sx={{ backgroundColor: "#f9f9f9", py: 6 }}>
  <Container>
    <Typography
      sx={{
        textAlign: "center",
        mt: 4,
        fontWeight: 600,
        fontSize: "2rem",
      }}
    >
      FAQ'S
    </Typography>

    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="flex-start"
      mt={4}
    >
      {/* Left Column */}
      <Grid item xs={12} md={6}>
        {faqsLeft.map((faq, index) => (
          <Accordion key={index} TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={6}>
        {faqsRight.map((faq, index) => (
          <Accordion key={index} TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  </Container>
</Box>

    </>
  );
}
