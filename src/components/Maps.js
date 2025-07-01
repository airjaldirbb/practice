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
      question: "Best Destination for Server and Hosting",
      answer:
        "Arise server is a great destination for business to manage hosting servers. It let you take your business to the next level. It assists you to access successful business in your field. You might acquire hosting servers at a lower cost from the professionals. Web hosting service assists business keep potential clients on the server. Hosting service providers are offering top-notch service to all kinds of business.  You might get valuable solution from this service provider and acquire tips to promote your organization.",
    },
    {
      question: "Is web hosting useful for your business?",
      answer: "It gives an effective solution to your business. It let individuals and businesses to post a web page to the internet. It helps you run your website and acquire more customers for your business. It assists you to take regular backup of your business database. It is the best way to protect business data. Also, you might optimize organization with fast speed. So, make use of our professionals and get perfect service at limited cost.",
    },
    {
      question: "What is Domain?",
      answer: "Domain name is your website title. It is the address that customers will enter in their internet browser to access your web site.",
    },
    {
      question: "What is the dedicated Server?",
      answer: "Dedicated server is the Individual computer hardware which has fullcontrol that you can put on your site until you can use from high bandwidth and high security.",
    },
    {
      question: "How can I move a dedicated server to a different account?",
      answer: "It is impossible to change the owner of a dedicated server or to move it to another account. If you want to have a server in a different account, you need to order a new one in the other account, install/configure the new server and transfer the data from your old to the new server."
    },
    {
      question: "How many website I can host in a dedicated server?",
      answer: "It is depends on the server hardwar. However a dedicated server can host more website then a VPS."
    },
    {
      question: "What are the advantages of dedicated server hosting?",
      answer: "Dedicated server mean a full server only for you its mean you will get Better performance on your application. Dedicated server is not shared with other client so it’s very reliable. As any other client does not have access to server you can be sure of having better security. Custom configure is only possible in all dedicated server so you make change they setting and firewall to make your server fully protected and secure."
    },
    {
      question: "Why should I buy a dedicated server?",
      answer: "If you want superior performance, high security, greater reliability and custom configuration, we suggest dedicated server."
    },
    {
      question: "How much time you take to setup a dedicated server?",
      answer: "We provide server setup on the same day of your order. But may be some delay in other data center but not more than 24hours after order."
    },
    {
      question: "How is the support of dedicated server?",
      answer: "Software that Balances Data have used of them have been supported that payment of price is done monthly and annually."
    },

  ];

  const faqsRight = [
    {
      question: "Why you need this service?",
      answer:
        "Server hosting experts might undergo some new technology techniques to offer great service to clients. You can obtain help from professionals to access your company with no issues. You operate an affordable dedicated server. We are helping lots of business to maintain server easily. It let you access server on a virtual environment. You might acquire various kinds of hosting service from us. It allows you to access customizable and hassle-free servers. You solve all the issues that you face in your company.",
    },
    {
      question: "Is it possible to rent a dedicated server to test there?",
      answer: "No.",
    },
    {
      question: "Which Dedicated Server will be best for me?",
      answer: "It’s depending on your requirement this can be discussed with our support team.",
    },
    {
      question: "What is VPS hosting?",
      answer: "Your physical servers will be hosted in a data center and a VPS is the divided part of this physical server that has its own operating system, disc space, and bandwidth. Your VPS offers wide server customization options, similar to a dedicated server, but at the low cost.",
    },
    {
      question: "For which purpose we use VPS?",
      answer: "The VPS is a flawless technique between web hosting and corporal servers, which provide high performance as a dedicated environment. It gives y with more control than a web hosting plan, but without the difficulty of managing a server’s physical hardware",
    },
    {
      question: "Advantages of VPScompared to a dedicated server?",
      answer: "We would recommend VPS server at that situation if one want to have full control over your hardware and want to avail all other facilities that dedicated server havein affordable cost. It gives you full control over you server.",
    },
    {
      question: "What is a Cloud?",
      answer: "A cloud is aassociation of networks, hardware, services, storage, and interfaces that helps in delivering computing as a service.",
    },
    {
      question: "What is cloud computing?",
      answer: "Cloud is not fairly a technological know-how through itself. As an alternative, it’s a procedure to building IT services that harnesses the swiftly growing power of servers as well as virtualization technologies that mix many servers into large computing pools and divide single servers into more than one digital machine.",
    },
    {
      question: "Is the cloud secure?",
      answer: "In Cloud, Data is encrypted and the Hosting companies do not have access to those encryption keys. Only the account holder can manage access by user identities and access policies.",
    },
    {
      question: "Can I put a database in the cloud?",
      answer: "Yes.You can allot a virtual machine in the cloud and install your database on it, and operate it as if you were operating a database server that you own",
    },
    {
      question: "Benefits of cloud computing?",
      answer: [
        "You can store and keep backup of your data.",
        "Great and highly powerful skills and capabilities.",
        "Affordable and time saving."
      ]
    }


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
                    gap: 1,
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
                        <Typography component="span" sx={{ color: '#6EC1E4', fontWeight: 400 }} >
                          {" "}
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ fontSize: '.875rem' }}>{faq.answer}</AccordionDetails>
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
                    gap: 1,
                  }}
                >


                  {faqsRight.map((faq, index) => (
                    <Accordion
                      key={index}
                      expanded={expandedRight === index}
                      onChange={handleExpand(index, "right")}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={400} sx={{ color: '#6EC1E4' }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        {Array.isArray(faq.answer) ? (
                          <ul style={{ paddingLeft: 20, marginTop: 0 }}>
                            {faq.answer.map((point, idx) => (
                              <li key={idx} style={{ listStyleType: 'disc' }}>
                                <Typography sx={{ fontSize: '.875rem' }}>{point}</Typography>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <Typography sx={{ fontSize: '.875rem' }}>{faq.answer}</Typography>
                        )}
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
