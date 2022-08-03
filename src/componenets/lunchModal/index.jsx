/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { Modal, MenuItem, Select } from "@mui/material";
import Fade from "@mui/material/Fade";
import { Typography, TextField } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LunchModal({ row }) {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FaEdit
        onClick={handleOpen}
        style={{ cursor: "pointer", fontSize: "18x" }}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h5">User Name</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography variant="h5" sx={{ mt: 2 }}>
                Description
              </Typography>
              <TextField
                // onChange={(e) => {
                //   setName(e.target.value);
                // }}
                id="tea"
                type="text"
                label="Tea Volume"
                variant="outlined"
                // value={name}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Typography variant="h5" sx={{ mt: 6 }}>
                Roti Quantity
              </Typography>
              <TextField
                sx={{ mt: 5, mr: 5 }}
                // onChange={(e) => {
                //   setName(e.target.value);
                // }}
                id="roti"
                type="number"
                label="Roti"
                variant="outlined"
                // value={name}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Typography variant="h5" sx={{ mt: 6 }}>
                Amount
              </Typography>
              <TextField
                sx={{ mt: 5, mr: 3 }}
                // onChange={(e) => {
                //   setName(e.target.value);
                // }}
                id="amount"
                type="number"
                label="Amount"
                variant="outlined"
                // value={name}
              />
            </Box>

            <Box
              style={{ display: "flex", justifyContent: "flex-end" }}
              sx={{ mt: 8 }}
            >
              <Button
                variant="contained"
                style={{ height: "5vh" }}
                size="large"
                sx={{ mr: 2 }}
              >
                Order
              </Button>

              <Button onClick={handleClose} variant="contained">
                Close
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
