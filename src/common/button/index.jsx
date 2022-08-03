import React from "react";
import { Button } from "@mui/material";

const CustomButton = (props) => {
  
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        fontWeight: "600",
        width: "100%",
        marginTop: 5.29,
        backgroundColor: "#111727",
        fontSize: "16px",
        borderRadius:"10px"
        // fontFamily: "sans-serif font",
      }}
      onClick={props.handleClick}
    >
      {props.text}
      
    </Button>
  );
};

export default CustomButton;
