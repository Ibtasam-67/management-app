import React from "react";
import { Button } from "@mui/material";

const CustomButton = (props) => {
  
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        fontWeight: "600",
        width: props.isAuth ?"100%":"80%",
        // marginTop: 5.29,
        backgroundColor: "#000000",
        fontSize: "16px",
        borderRadius:"10px",
        // fontFamily: "sans-serif font",
      }}
      onClick={props.handleClick}
    >
      {props.text}
      
    </Button>
  );
};

export default CustomButton;
