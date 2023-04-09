import React, { useContext } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SignFormContext } from "../../context/SignFormContext";

function SignupForm() {
  const { switchToSignin } = useContext(SignFormContext);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
      <TextField
        sx={{
          marginBottom: "20px",
        }}
        variant="outlined"
        fullWidth
        label="Email"
        id="signup-email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{
          marginBottom: "20px",
        }}
        variant="outlined"
        fullWidth
        type={showPassword ? "text" : "password"}
        label="Password"
        id="signup-password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                size="small"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{
          marginBottom: "20px",
        }}
        variant="outlined"
        fullWidth
        type={showPassword ? "text" : "password"}
        label="Password Confirm"
        id="signup-confirm-password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon fontSize="small" />
            </InputAdornment>
          ),
          // endAdornment: (
          //   <InputAdornment position="start">
          //     <IconButton
          //       size="small"
          //       aria-label="toggle password visibility"
          //       onClick={handleClickShowPassword}
          //       onMouseDown={handleMouseDownPassword}
          //     >
          //       {showPassword ? (
          //         <VisibilityOff fontSize="small" />
          //       ) : (
          //         <Visibility fontSize="small" />
          //       )}
          //     </IconButton>
          //   </InputAdornment>
          // ),
        }}
      />
      <Button
        sx={{ borderRadius: "50px", width: "100%", mt: 3, mb: 4 }}
        variant="contained"
      >
        Sign Up
      </Button>
      <Typography>
        Already have an account?
        <Link sx={{ ml: 1 }} href="#" underline="none" onClick={switchToSignin}>
          {"Sign In"}
        </Link>
      </Typography>
    </Box>
  );
}

export default SignupForm;
