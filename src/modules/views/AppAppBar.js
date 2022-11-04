import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/sharma-logo.png";

function AppAppBar() {
  const linkStyle = {
    textDecoration: "none",
    fontSize: "16px",
    color: "#ff3366",
    fontFamily: "'Roboto Condensed',sans-serif",
    fontWeight: "700",
    textTransform: "uppercase",
    marginLeft: "24px",
  };

  const { pathname } = useLocation();
  console.log("pathname: ", pathname);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "75px",
                height: "65px",
                background: "white",
                borderRadius: "30%",
              }}
            />
          <Box sx={{ flex: 1 }} />
          <Link style={linkStyle} to="/">
            {"Sharma Consultancy"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              style={{
                ...linkStyle,
                color: pathname === "/signin" ? "#ff3366" : "#fff",
              }}
              to="/signin"
            >
              {"Sign In"}
            </Link>
            <Link
              style={{
                ...linkStyle,
                color: pathname === "/signup" ? "#ff3366" : "#fff",
              }}
              to="/signup"
            >
              {"Sign Up"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
