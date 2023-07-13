import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <AppBar
        position="static"
        style={{
          background: "orange",
          textShadow: "2px 2px 10px white",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{ display: { md: "flex" }, mr: 2 }}
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                color: "black",
                padding: "5px",
              }}
            />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 800,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                User Management App
              </Typography>
            </Link>
            <Link to="/adduser">
              <Button
                variant="outlined"
                endIcon={<PersonIcon />}
                sx={{ ml: 5, fontWeight: 800 }}
                style={{
                  border: "2px solid black",
                  color: "black",
                  boxShadow: "2px 2px 10px white",
                }}
              >
                Add User
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
