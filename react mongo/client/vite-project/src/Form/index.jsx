import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <>
      <form
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <TextField
          style={{ width: "600px" }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          style={{ width: "600px" }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          style={{ width: "600px" }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          style={{ width: "600px" }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <Button variant="outlined" color="error">Submit</Button>
      </form>
    </>
  );
};

export default Form;
