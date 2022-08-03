import React from "react";
import "./landing.css";
import { Grid, Box } from "@mui/material";
import CustomCards from "../../common/cards";
 
const Landing = () => {
  const handleClick=()=>{
    console.log("first")
  }
  return (
    <Box className="landingGradient">
      <Grid>
        <CustomCards name="Morning Tea" handleClick={handleClick}/>
      </Grid>
      <Grid>
        <CustomCards name="Lunch" />
      </Grid>
      <Grid>
        <CustomCards name="Evening Tea" />
      </Grid>
    </Box>
  );
};

export default Landing;
