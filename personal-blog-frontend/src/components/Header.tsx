import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ height: "65px" }}>
      <Toolbar
        sx={{
          justifyContent: "flex-end",
          height: "100%",
        }}
      >
        <Button color="inherit" href="/">
          HOME
        </Button>
        <Button color="inherit" href="/login">
          LOGIN
        </Button>
        <Button color="inherit" href="/publish">
          PUBLISH
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
