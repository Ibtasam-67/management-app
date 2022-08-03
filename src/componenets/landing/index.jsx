import React from "react";
import Header from "../header/index";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import {AiOutlineArrowRight} from "react-icons/ai"
import CustomButton from "../../common/button";
const Landing = () => {
  const theme = useTheme();
  return (
    <div>
      <Header />
       {/* <Container> */}
       <Grid container sx={{ display: "flex", justifyContent: "space-between",marginTop:"10%" }}>
        <Grid item md={3} mt="2%">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" mt="15%">
              Good Morning
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180 }}
              src="girl.avif"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item md={3} mt="2%">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" mt="15%">
                Enjoy a nice Lunch
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                 Enjoy a nice Lunch
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              >
                {/* <CustomButton text="Click"/> */}
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180 }}
              src="girl.avif"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item md={3} mt="2%">
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" mt="15%">
              Good Evening 
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width:180 }}
              src="girl.avif"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      </Grid>
       {/* </Container> */}
     
    </div>
  );
};

export default Landing;
