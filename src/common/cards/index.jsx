import React from "react";
import { Card, Typography } from "@mui/material";
import CustomButton from "../button";

const CustomCards = (props) => {
  return (
    <Card sx={{ width: 400, height: 400, borderRadius: "20px" }}>
      <img
        src="tea.jpg"
        height="240"
        width="440"
      />
      <Typography
        variant="h5"
        sx={{
          fontWeight: "900",
          marginTop:"10%"
        }}
        style={{ color: props.color }}
      >
        {props.name}
      </Typography>
      <CustomButton text="Order" handleClick={props.handleClick} />
    </Card>
  );
};

export default CustomCards;
