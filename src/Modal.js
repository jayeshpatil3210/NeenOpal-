import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { FormControl, InputLabel, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ data, onSubmit, index }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState({
    email: " ",
    id: "",
    like: "",
    name: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    setValue(data);
  }, []);

  const handleChanges = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleUpdate = () => {
    onSubmit(value, index);
    handleClose();
  };
  return (
    <div>
      <Button href="#" onClick={handleOpen}>
        <EditIcon color="action" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Basic Modal</h3>
          {/* <CloseIcon onClick={handleClose} /> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              margin: "15px 0px",
            }}
          >
            <InputLabel htmlFor="my-input">Name :</InputLabel>
            <TextField
              name="name"
              onChange={(e) => handleChanges(e)}
              value={value.name}
              id="outlined-basic"
              size="small"
              variant="outlined"
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              margin: "15px 0px",
            }}
          >
            <InputLabel htmlFor="my-input">Email :</InputLabel>
            <TextField
              name="email"
              onChange={(e) => handleChanges(e)}
              value={value.email}
              id="outlined-basic"
              size="small"
              variant="outlined"
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              margin: "15px 0px",
            }}
          >
            <InputLabel htmlFor="my-input">Phone :</InputLabel>
            <TextField
              name="phone"
              onChange={(e) => handleChanges(e)}
              value={value.phone}
              id="outlined-basic"
              size="small"
              variant="outlined"
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              margin: "15px 0px",
            }}
          >
            <InputLabel htmlFor="my-input">Website :</InputLabel>
            <TextField
              name="website"
              onChange={(e) => handleChanges(e)}
              value={value.website}
              id="outlined-basic"
              size="small"
              variant="outlined"
              required
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              margin: "5px 0px",
              padding: "0px 25px",
            }}
          >
            <Button
              onClick={handleUpdate}
              variant="contained"
              size="small"
              sx={{
                margin: "0px 10px",
              }}
            >
              Ok
            </Button>
            <Button onClick={handleClose} variant="outlined" size="small">
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
