"use client";
import {
  Box,
  Container,
  IconButton,
  useMediaQuery,
  Grid,
  useTheme,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";
import CardActionArea from "@mui/material/CardActionArea";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function CustomerReviews() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const itemsPerPage = isMobile ? 1 : 2;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + itemsPerPage, cards.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const cards = [
    {
      title: "-Tony-",
      description:
        "I am thankful to your organization that I have discovered this sort of opportunity.It has been months that I have been searching for good support. When I joined, I couldn't trust my eyes that this sort of administration do truly exist on the web, with respect to me I have tried numerous organizations who offers arrangement not on transparency.",
    },
    {
      title: "-Paulo-",
      description:"So I was given a maltreatment warning originating from one of our committed servers and I didn't have the foggiest idea where to begin. I looked and found Arise Server LLP. Inside minutes the issue was analyzed and they began attempting to search for the reason for the issue. They helped tackling the issue and the sky is the limit from there: tweaked the server so this was more diligently to happen once more. This was an extraordinary administration!"
    },
    { title: "-Rekha Lal-", description: "Subsequent to attempting a few help I ran over Arise Server LLP and have never thought back. Extraordinary evaluating is upheld up with incredible administration. I have an overseen server arrangement and the specialized help has been splendid. Quick to get questions replied and the care staff are very much prepared. Exceedingly prescribed. Fabulous administration." },
    { title: "-Shuyan-", description: "I am not a PC master, my past host never made things so natural that Arise Server LLP has made for me. I can introduce any contents in only couple of snaps. You all truly help me a great deal. Presently, I can do anything from WHM without login to SSH as I am very little comfortable with it. Much obliged to you folks for introducing simply great modules for me. You all stone. Much obliged to you for your proposals folksâ€¦" },
    { title: "Card 5", description: "Description 5" },
  ];
  const visibleCards = cards.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      <Box sx={{ backgroundColor: "#43c1fe" }}>
        <Container sx={{ position: "relative", mt: 4,py:4 }}>
          <Box sx={{ textAlign: "center", justifyContent: "center" }}>
            <Typography
              sx={{
                color: "#fff",
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: 600,
              }}
            >
              What Customer Says
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            
            }}
          >
            <IconButton
              onClick={handlePrev}
              disabled={currentIndex === 0}
              sx={{
                position: "absolute",
                top: "50%",
                left: -20,
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "#fff",
                boxShadow: 2,
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= cards.length}
              sx={{
                position: "absolute",
                top: "50%",
                right: -20,
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "#fff",
                boxShadow: 2,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {visibleCards.map((card, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                     
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                       <Typography variant="h6" gutterBottom>
                        {card.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
