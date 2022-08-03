import React from "react";
import { Button } from "@mui/material";

const CustomButton = (props) => {
  
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        fontWeight: "800",
        width: "100%",
        marginTop: 5.29,
        backgroundColor: "#7346C4",
        fontSize: "16px",
        fontFamily: "sans-serif font",
      }}
      onClick={props.handleClick}
    >
      {props.text}
      
    </Button>
  );
};

export default CustomButton;
