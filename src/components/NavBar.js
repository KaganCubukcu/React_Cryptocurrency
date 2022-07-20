import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
const pages = ["Exchange", "Markets", "Dashboard", "Headmap"];

const NavBar = () => {
  //Ham Menu Open/Close
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#131722",
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar
          disableGutters={false}
          sx={{
            backgroundColor: "#131722",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            href="/"
            sx={{
              display: { xs: "none", md: " flex" },
              fontFamily: "Arial",
            }}
          >
            <Link to="/"> Kagan's Crypto </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "Arial",
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {/* Menu içerisine gelecekler  */}

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "Arial",
              flexGrow: 1,
            }}
          >
            <Link to="/"> Kagan's Crypto </Link>
          </Typography>

          {/* Nav menu items xl */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  paddingLeft: "1rem",
                  fontFamily: "Arial",
                  color: "white",
                  textTransform: "none",
                }}
              >
                <Link to={page}>{page}</Link>
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              sx={{
                color: "#E8D6CB",
                textTransform: "none",
                "&:hover": {
                  color: "#FAE069",
                },
              }}
            >
              <Link to="/Login">Log in</Link>
            </Button>

            <Button
              sx={{
                color: "#121315",
                border: 1,
                borderColor: "",
                borderRadius: "25px",
                backgroundColor: "#FADF63",
                marginLeft: "1rem",
                textTransform: "none",
                paddingX: "20px",
                paddingY: "10px",
                "&:hover": {
                  color: "#FAE069",
                },
              }}
            >
              <Link to="/SignUp">Sign Up</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
