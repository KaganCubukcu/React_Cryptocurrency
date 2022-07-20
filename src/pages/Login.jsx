import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Link,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Signup = () => {
  const [showPassword, setshowPassword] = useState(false);
  const showPwd = () => {
    setshowPassword(!showPassword);
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 15,
        height: 660,
      }}
    >
      <Box
        sx={{
          mt: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "300px",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          textAlign="center"
          sx={{
            mb: 10,
          }}
        >
          Log In
        </Typography>
        <Link
          to="/Signin"
          variant="body2"
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 5,
            color: "white",
          }}
        >
          New to Kagan's Crypto?
          <Link to="/Singup"> Create an account</Link>
        </Link>
        <TextField
          sx={{
            input: {
              backgroundColor: "#2A2E39",
              color: "white",

              borderRadius: 3,
            },
            "& label": { color: "white" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
          variant="outlined"
          label="Email"
          type="text"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          sx={{
            backgroundColor: "#2A2E39",
            borderRadius: 3,
            input: {
              backgroundColor: "#2A2E39",
              borderRadius: 3,
              color: "white",
            },
            "& label": { color: "white" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
          margin="normal"
          required
          fullWidth
          variant="outlined"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    color: "white",
                  }}
                  onClick={showPwd}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ mt: 4, mb: 4 }}>
        <Button
          sx={{
            height: "7vh",
            backgroundColor: "#FADF63",
            color: "#131722",
            borderRadius: 3,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#FBE171",
            },
          }}
          variant="contained"
          fullWidth
        >
          Log In
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>Log in with</Typography>
          <Box
            sx={{
              pt: 3,
              display: "flex",

              justifyContent: "space-between",
            }}
          >
            <GoogleIcon
              sx={{
                width: 40,
                height: 40,
              }}
            />
            <FacebookIcon
              sx={{
                width: 40,
                height: 40,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
