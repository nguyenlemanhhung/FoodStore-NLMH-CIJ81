import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import PersonIcon from "@mui/icons-material/Person";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import DiscountIcon from "@mui/icons-material/Discount";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "flex-end" }}>
          <PersonIcon sx={{ mr: "5px", color: "#FAAF00" }} />
          <TextField
            required
            id="name"
            name="name"
            label="Your Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "flex-end" }}>
          <PermPhoneMsgIcon sx={{ mr: "5px", color: "#FAAF00" }} />
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="given-phone"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "flex-end" }}>
          <PersonPinCircleIcon sx={{ mr: "5px", color: "#FAAF00" }} />
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", alignItems: "flex-end" }}>
          <DiscountIcon sx={{ mr: "5px", color: "#FAAF00" }} />
          <TextField
            // required
            id="zip"
            name="zip"
            label="Discount Code"
            fullWidth
            autoComplete="shipping discount-code"
            variant="standard"
          />
        </Grid>

        {/* <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
