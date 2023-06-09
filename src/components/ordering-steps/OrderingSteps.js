import React, { useState, useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import CartInfo from "./CartInfo";
import PaymentForm from "./PaymentForm";
import ReviewOrder from "./ReviewOrder";
import { styled } from "@mui/material/styles";
import { FoodCartContext } from "../../context/FoodCartContext";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";

const steps = ["Cart information", "Payment details", "Review your order"];
const BoxItemStyle = styled(Box)({
  backgroundColor: "#ceecff",
  borderRadius: "10px",
  padding: "10px",
});
function getStepContent(step, customerInfo, handlePaymentData, error) {
  switch (step) {
    case 0:
      return <CartInfo />;
    case 1:
      return <PaymentForm handleFormData={handlePaymentData} error={error} />;
    case 2:
      return <ReviewOrder customerInfo={customerInfo} />;
    default:
      throw new Error("Unknown step");
  }
}

export default function OrderingSteps() {
  const { foodCartData, setFoodCartData } = useContext(FoodCartContext);
  // console.log("food data:", foodCartData);
  const [customerInfo, setCustomerInfo] = useState(null);

  const [activeStep, setActiveStep] = React.useState(0);

  const [allowNext, setAllowNext] = useState(false);
  const [error, setError] = useState(null);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    console.log(activeStep, allowNext);
    if (activeStep === 1 && !allowNext) {
      setError("Please enter your information");
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePaymentData = (paymentData) => {
    setCustomerInfo(paymentData);

    if (
      paymentData.name.length === 0 ||
      paymentData.address.length === 0 ||
      paymentData.phone.length === 0
    ) {
      setAllowNext(false);
    } else {
      setAllowNext(true);
    }
  };
  const handleNewOrder = () => {
    setFoodCartData(null);
    setActiveStep(0);
    setAllowNext(false);
    setCustomerInfo(null);
    setError(null);
  };
  return (
    <Box sx={{ height: "100%" }}>
      {foodCartData && foodCartData.length > 0 ? (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            // padding: "20px 10px",
          }}
        >
          <BoxItemStyle sx={{ marginBottom: "10px" }}>
            <Typography component="h1" variant="h4" align="center">
              Ordering Steps
            </Typography>
            <Stepper
              activeStep={activeStep}
              sx={{ mt: 3, mb: 5 }}
              alternativeLabel
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </BoxItemStyle>
          {activeStep === steps.length ? (
            <Box sx={{ padding: "10px" }}>
              <img
                style={{ width: "100%" }}
                src={require("../../assets/image/thank.png")}
              />
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "20px 0",
                }}
              >
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is
                <span
                  style={{
                    color: "#fc6011",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginLeft: "5px",
                  }}
                >
                  #2001539
                </span>
                <br />
                We have emailed your order confirmation, and will send you an
                update when your order has shipped.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={handleNewOrder}
                sx={{
                  backgroundColor: "#faaf00",
                  marginTop: "20px",
                  fontWeight: "700",
                }}
              >
                New Order
              </Button>
            </Box>
          ) : (
            <React.Fragment>
              <BoxItemStyle
                sx={{
                  overflow: "auto",
                  height: "100%",
                  marginBottom: "10px",
                }}
              >
                {getStepContent(
                  activeStep,
                  customerInfo,
                  handlePaymentData,
                  error
                )}
              </BoxItemStyle>

              <BoxItemStyle
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "end",
                }}
              >
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </BoxItemStyle>
            </React.Fragment>
          )}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "#ceecff",
              padding: "10px",
              borderRadius: "10px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "100%" }}
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
            />
          </Box>
          <Box
            sx={{
              height: "100%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              padding: "30px 0",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ceecff",
                padding: "20px",
                borderRadius: "50% 50% 20px 20px",
              }}
            >
              <img
                style={{
                  width: "70%",
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: 10,
                }}
                src={require("../../assets/image/ship.png")}
              />
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                Faster Delivery and Get Free Shipping if you Subscribe
              </Typography>
              <FormControl
                fullWidth
                variant="filled"
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <FilledInput
                  sx={{
                    paddingRight: "10px",
                    backgroundColor: "#fff",
                    "&::before": { display: "none" },
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          fontSize: "12px",
                          textTransform: "capitalize",
                          fontWeight: "600",
                          backgroundColor: "#f47900",
                          borderRadius: "20px",
                        }}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
