import React from "react";
import { Box, Typography, Button } from "@mui/material";
import cripto from "../assets/c2.png";
import { Link } from "react-router-dom";
import Requests from "../config/Requests";

const Index = () => {
  return (
    // Giriş Bölümü
    <>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        <Box>
          <Typography
            component={"h4"}
            sx={{
              mt: 10,
              p: 10,
              pl: { xs: 10, md: 20 },
              fontSize: { xs: "1.45rem", md: "3rem" },
              display: { textAlign: "center" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <Typography
              component={"p"}
              sx={{
                pt: 5,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              minus reiciendis aut hic labore aspernatur.
            </Typography>
            <Button
              sx={{
                color: "#FADF63",
                border: 2,
                mt: 4,
                "&:hover": {
                  boxShadow: "0 0 10px #FAE069",
                  color: "#FADF63",
                },
              }}
            >
              <Link
                to="/SignUp"
                style={{
                  color: "white",
                }}
              >
                Get Started
              </Link>
            </Button>
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: 1000,
            height: 700,
          }}
        >
          <img src={cripto} alt="cripto"></img>
        </Box>
      </Box>
      <Requests />
    </>
    // Giriş Bölümü Sonu
  );
};

export default Index;
