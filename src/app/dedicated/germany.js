import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";
import MainHeader from "@/components/MainHeader";
import React from "react";
import { Box, Container, Typography,Card,CardContent,List,ListItem,Button,Divider,Grid } from "@mui/material";
export default function germany(product ) {
      const productList = [
    {
      id: "product48",
      name: "Intel Core i7-6700-A",
      specs: [
        { label: "RAM", value: "32 GB" },
        { label: "Drives", value: "2 x 500 GB SSD" },
        { label: "Port speed", value: "1Gbps" },
        { label: "Bandwidth", value: "Unmetered" },
        { label: "IPv4", value: "One" },
      ],
      price: "$136.39",
      link: "/cart/index.php?rp=/store/germany-dedicated-servers/intel-core-amd-athlon",
    },
    {
      id: "product49",
      name: "AMD Ryzen 5-5600X",
      specs: [
        { label: "RAM", value: "64 GB" },
        { label: "Drives", value: "2 x 1 TB NVMe" },
        { label: "Port speed", value: "1Gbps" },
        { label: "Bandwidth", value: "Unmetered" },
        { label: "IPv4", value: "Two" },
      ],
      price: "$159.99",
      link: "/cart/index.php?rp=/store/germany-dedicated-servers/amd-ryzen",
    },
     {
      id: "product59",
      name: "AMD Ryzen 5-5600X",
      specs: [
        { label: "RAM", value: "64 GB" },
        { label: "Drives", value: "2 x 1 TB NVMe" },
        { label: "Port speed", value: "1Gbps" },
        { label: "Bandwidth", value: "Unmetered" },
        { label: "IPv4", value: "Two" },
      ],
      price: "$159.99",
      link: "/cart/index.php?rp=/store/germany-dedicated-servers/amd-ryzen",
    },
     {
      id: "product69",
      name: "AMD Ryzen 5-5600X",
      specs: [
        { label: "RAM", value: "64 GB" },
        { label: "Drives", value: "2 x 1 TB NVMe" },
        { label: "Port speed", value: "1Gbps" },
        { label: "Bandwidth", value: "Unmetered" },
        { label: "IPv4", value: "Two" },
      ],
      price: "$159.99",
      link: "/cart/index.php?rp=/store/germany-dedicated-servers/amd-ryzen",
    },
       {
      id: "product79",
      name: "AMD Ryzen 5-5600X",
      specs: [
        { label: "RAM", value: "64 GB" },
        { label: "Drives", value: "2 x 1 TB NVMe" },
        { label: "Port speed", value: "1Gbps" },
        { label: "Bandwidth", value: "Unmetered" },
        { label: "IPv4", value: "Two" },
      ],
      price: "$159.99",
      link: "/cart/index.php?rp=/store/germany-dedicated-servers/amd-ryzen",
    },
     {
      id: "product89",
      name: "AMD Ryzen 5-5600X",
      specs: [
        { label: "RAM", value: "64 GB" },
        { label: "Drives", value: "2 x 1 TB NVMe" },
        { label: "Port speed", value: "1Gbps" },
        { label: "Bandwidth", value: "Unmetered" },
        { label: "IPv4", value: "Two" },
      ],
      price: "$159.99",
      link: "/cart/index.php?rp=/store/germany-dedicated-servers/amd-ryzen",
    },
   
  ];
  return (
    <>
      <HeaderSection></HeaderSection>
      <MainHeader />
      <Breadcrumbs />
      <Box
        sx={{
          backgroundImage: "url('/images/OIP.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#fff",
          py: { xs: 6, md: 10 },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />

        {/* Text content over image */}
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
           
            sx={{
              fontSize: { xs: ".875rem", md: ".875rem" },
              fontWeight: 200,
              lineHeight: 1.7,
            }}
          >
            If business owners and Industrialists in Frankfurt Arise Server
            offers its esteemed customers a facility to buy fully managed
            dedicated server Germany with a high-performance guarantee, 99.95%
            uptime, 100% support and security. No matter either your business is
            online or offline, with our cheap dedicated servers Germany, you can
            enhance your business to the succeeding levels promptly.In brief,
            with our Germany dedicated web hosting you would get good promotions
            and marketing facilities. Moreover, with our dedicated hosting in
            Germany, you would experience perks such as privacy, stability,
            reliability, customization and flexibility which is not possible in
            case of Shared Hosting Servers. In case, you have an e-commerce site
            then obviously your site needs to tackle heavy traffic and abundant
            hits at the same time.
          </Typography>
 
        </Container>
      </Box>
     <Container disableGutters sx={{ py: 4,justifyContent:"center" }}>
      <Typography
        textAlign="center"
        fontWeight={600}
        fontSize="2rem"
        mb={3}
      >
        Germany Datacenter Linux / Windows Dedicated Server Plans
      </Typography>

      <Grid container spacing={0} sx={{justifyContent:"center" }}>
        {productList.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Box p={1}>
              <Card
                sx={{
                  height: "100%",width:"100%",
                  borderRadius: 2,
                  backgroundColor: "#f9f9f9",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    {product.name}
                  </Typography>

                  <Divider sx={{ mb: 2 }} />

                  <List dense>
                    {product.specs.map((spec, idx) => (
                      <ListItem key={idx} disableGutters>
                        <strong>{spec.label}:</strong>&nbsp;{spec.value}
                      </ListItem>
                    ))}
                  </List>

                  <Divider sx={{ my: 2 }} />

                  <Box textAlign="center" mb={2}>
                    <Typography variant="body2" color="text.secondary">
                      From
                    </Typography>
                    <Typography variant="h6" fontWeight={700}>
                      {product.price}
                      <span style={{ fontWeight: 400 }}>/mo</span>
                    </Typography>
                  </Box>

                  <Button variant="contained" fullWidth href={product.link}>
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>


      <Footer />
    </>
  );
}
