import React, { useState } from 'react';
import './stepper.css'

interface StepperProps {
  steps: string[];
  state: 'active' | 'default' | 'complete';
}

const HorizontalStepper: React.FC<StepperProps> = ({
  steps,
  state = 'active'
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="horizontal-stepper">
      <div className="step-indicator">
        {steps.map((step, index) => (
          <div key={index} className={`step-circle ${index === activeStep ? 'active' : ''}`}>
            {index + 1}
          </div>
        ))}
        <div className="step-line" style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}></div>
      </div>
      <div className="step-content">
        <h2>{steps[activeStep]}</h2>
      </div>
      <div className="step-actions">
        {activeStep > 0 && (
          <button onClick={handleBack} className="back-button">
            Back
          </button>
        )}
        {activeStep < steps.length - 1 && (
          <button onClick={handleNext} className="next-button">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default HorizontalStepper;