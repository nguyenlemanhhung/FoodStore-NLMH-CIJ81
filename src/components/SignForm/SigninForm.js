import React, { useContext } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SignFormContext } from "./SignFormContext";

function SigninForm() {
  const { switchToSignup } = useContext(SignFormContext);

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
        label="Your Name"
        id="signin-name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
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
        id="signin-password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Link href="#" underline="none">
        {"Forget your password?"}
      </Link>
      <Button
        sx={{ borderRadius: "50px", width: "100%", mt: 3, mb: 4 }}
        variant="contained"
      >
        Sign In
      </Button>
      <Typography>
        Don't have an account?
        <Link sx={{ ml: 1 }} href="#" underline="none" onClick={switchToSignup}>
          {"Sign Up"}
        </Link>
      </Typography>
    </Box>
  );
}

export default SigninForm;