import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Contact() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div>
          Name
          <TextField
            required
            id="filled-required"
            label="Required"
            variant="filled"
          />
        </div>
        <div>
          Email
          <TextField
            required
            id="filled-required"
            label="Required"
            variant="filled"
          />
        </div>
        <div>
          Text
          <TextField
            id="filled-multiline-flexible"
            label="Required"
            multiline
            required
            maxRows={6}
            value={value}
            onChange={handleChange}
            variant="filled"
          />
        </div>
        <Button variant="outlined">Submit</Button>
      </div>
    </Box>
  );
}
