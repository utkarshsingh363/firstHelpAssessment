import React, { useState } from "react";
import "./CheckoutStepper.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import OrderPreview from "./OrderPreview";

function getStepContent(step) {
  switch (step) {
    case 0:
      return <OrderPreview />;
    case 1:
      return <p>Payment Details</p>;
    case 2:
      return <p>Summary</p>;
    default:
      return <p>Order Preview</p>;
  }
}

function CheckoutStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Order Preview", "Payment Details", "Summary"];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {getStepContent(activeStep)}

      <button onClick={handleNext}>Next</button>
      <button onClick={handleBack}>Previous</button>
    </Box>
  );
}

export default CheckoutStepper;
