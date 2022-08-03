import React, { useEffect } from "react";
import { Toolbar, AppBar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    // throw new Error("Not valid Data");
  });

  return (
    <Box>
      <AppBar position="sticky" sx={{backgroundColor:"#7346C4"}}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              Luminogics
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
