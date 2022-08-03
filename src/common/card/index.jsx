import React from "react";
import { Typography, Card, Box, CardContent, CardMedia } from "@mui/material";
import CustomButton from "../button";

const CustomCard = (props) => {
  return (
    <Card sx={{ display: "flex"}}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h5"
            mt="15%"
            sx={{ fontWeight: "700" }}
          >
           {props.text}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 3, pb: 1 }}>
          <CustomButton text="Order" isCard />
        </Box>
      </Box>
       
      <CardMedia
        component="img"
        sx={{ width: 165}}
        src="girl.avif"
        alt="Live from space album cover"
      /> 
    </Card>
  );
};

export default CustomCard;
