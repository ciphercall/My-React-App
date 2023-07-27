import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

function Form() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }

  return (
    <div>
      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && <StepTwo />}
    </div>
  );
}

export default Form;
