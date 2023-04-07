import React, { useContext, useState } from "react";
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
import { SignFormContext } from "../../context/SignFormContext";
import { UserContext } from "../../context/UserContext";

function SigninForm({ handleClose }) {
  const { userData, setCurrentUser } = useContext(UserContext);
  console.log("user data: ", userData);
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });
  console.log(formData);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const authenticate = (formData, userData) => {
    console.log("formData", formData);
    console.log("userData", userData);
    const { userEmail, userPassword } = formData || {};
    let isAuthen = false;
    userData &&
      userData.map((e) => {
        if (e.email === userEmail) {
          // check  pw
          if (e.password === userPassword) {
            isAuthen = true;
            alert("login successful");
          } else {
            alert("pw sai");
            isAuthen = false;
          }
        } else {
          alert("email sai");
          isAuthen = false;
        }
      });
    return isAuthen;
  };
  const handleSignin = (formData, userData) => {
    const isAuthen = authenticate(formData, userData);
    if (isAuthen) {
      console.log("authen");
      setCurrentUser(formData);
      handleClose();
    }
  };
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
        label="Email"
        id="signin-email"
        name="userEmail"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
        onChange={(e) => handleChangeInput(e)}
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
        name="userPassword"
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
        onChange={(e) => handleChangeInput(e)}
      />
      <Link href="#" underline="none">
        {"Forget your password?"}
      </Link>
      <Button
        sx={{ borderRadius: "50px", width: "100%", mt: 3, mb: 4 }}
        variant="contained"
        onClick={() => handleSignin(formData, userData)}
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
