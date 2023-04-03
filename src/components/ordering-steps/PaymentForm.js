import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import PersonIcon from "@mui/icons-material/Person";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import DiscountIcon from "@mui/icons-material/Discount";

export default function PaymentForm({ handleFormData }) {
  const DEFAULT_DATA = {
    name: "",
    phone: "",
    address: "",
    discountCode: "",
  };
  const [customerInfo, setCustomerInfo] = useState(DEFAULT_DATA);
  console.log("customerInfo", customerInfo);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };
  useEffect(() => {
    handleFormData(customerInfo);
  }, [handleFormData, customerInfo]);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ display: "flex", alignItems: "flex-end" }}>
          <PersonIcon sx={{ mr: "5px", color: "#FAAF00" }} />
          <TextField
            onChange={(e) => handleChangeInput(e)}
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
            onChange={(e) => handleChangeInput(e)}
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
            onChange={(e) => handleChangeInput(e)}
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
            onChange={(e) => handleChangeInput(e)}
            // required
            id="discountCode"
            name="discountCode"
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
