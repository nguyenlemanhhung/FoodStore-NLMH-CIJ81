import React, { useContext } from "react";
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
import { FoodCartContext } from "../FoodCartContext";

const steps = ["Cart information", "Payment details", "Review your order"];
const BoxItemStyle = styled("box")({
  backgroundColor: "#ceecff",
  borderRadius: "10px",
  padding: "10px",
});
function getStepContent(step, handlePaymentData) {
  switch (step) {
    case 0:
      return <CartInfo />;
    case 1:
      return <PaymentForm handleFormData={handlePaymentData} />;
    case 2:
      return <ReviewOrder />;
    default:
      throw new Error("Unknown step");
  }
}

export default function OrderingSteps() {
  const { foodCartData } = useContext(FoodCartContext);
  console.log("food data:", foodCartData);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePaymentData = (paymentData) => {
    console.log("paymentData", paymentData);
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
          <BoxItemStyle sx={{ marginBottom: "5px" }}>
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
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
              <img
                style={{ width: "100%" }}
                src={require("../../assets/image/shipping3.jpeg")}
              />
            </Box>
          ) : (
            <React.Fragment>
              <BoxItemStyle
                sx={{
                  overflow: "auto",
                  height: "60%",
                  marginBottom: "10px",
                }}
              >
                {getStepContent(activeStep, handlePaymentData)}
              </BoxItemStyle>
              {/* {activeStep === 0 && (
                <Box
                  sx={{
                    margin: "0 20px 10px",
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  <h3
                    style={{
                      backgroundColor: "#e0edee",
                      margin: "0",
                      padding: "10px",
                      color: "#FAAF00",
                    }}
                  >
                    <span style={{ marginRight: "50px", color: "#000" }}>
                      Total:
                    </span>
                    <span
                      style={{
                        color: "#7a7a7a",
                        fontSize: "16px",
                        marginRight: "5px",
                      }}
                    >
                      $
                    </span>
                    {foodCartData
                      .map((food) => food.quantity * food.price)
                      .reduce((sum, i) => sum + i, 0)}
                  </h3>
                </Box>
              )} */}
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
      )}
    </Box>
  );
}
