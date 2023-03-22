import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import CartInfo from "./CartInfo";
import PaymentForm from "./PaymentForm";
import ReviewOrder from "./ReviewOrder";

const steps = ["Cart information", "Payment details", "Review your order"];

function getStepContent(step) {
  console.log(step);
  switch (step) {
    case 0:
      return <CartInfo />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <ReviewOrder />;
    default:
      throw new Error("Unknown step");
  }
}

export default function OrderingSteps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  return (
    <Box>
      <Typography component="h1" variant="h4" align="center">
        Ordering Steps
      </Typography>
      <Stepper activeStep={activeStep} sx={{ mt: 3, mb: 5 }} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Thank you for your order.
          </Typography>
          <Typography variant="subtitle1">
            Your order number is #2001539. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ overflow: "auto" }}>{getStepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}

            <Button variant="contained" onClick={handleNext} sx={{ mt: 3 }}>
              {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
