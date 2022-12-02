import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="GitHub"
            icon={<GitHubIcon />}
            href="https://github.com/PDKetchum/"
          />
          <BottomNavigationAction
            label="LinkedIn"
            icon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/pachia-xiong-a33274110/"
          />
          <BottomNavigationAction
            label="Email"
            icon={<EmailIcon />}
            href="mailto:pxiong265@gmail.com"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
