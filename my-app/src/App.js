import React, { useState } from 'react';
import MultiStep from 'react-multistep';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

function App() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');
  const [inputFive, setInputFive] = useState('');
  const [inputSix, setInputSix] = useState('');
  const [inputSeven, setInputSeven] = useState('');
  const [inputEight, setInputEight] = useState('');
  const [file, setFile] = useState(null);

  const steps = [
    {
      title: 'Step 1',
      component: <StepOne
        inputOne={inputOne}
        inputTwo={inputTwo}
        inputThree={inputThree}
        inputFour={inputFour}
        setInputOne={setInputOne}
        setInputTwo={setInputTwo}
        setInputThree={setInputThree}
        setInputFour={setInputFour}
        nextStep={() => setStep(1)}
      />
    },
    {
      title: 'Step 2',
      component: <StepTwo
        inputOne={inputOne}
        inputTwo={inputTwo}
        inputThree={inputThree}
        inputFour={inputFour}
        inputFive={inputFive}
        inputSix={inputSix}
        inputSeven={inputSeven}
        inputEight={inputEight}
        file={file}
        setFile={setFile}
      />
    }
  ];

  const [step, setStep] = useState(0);

  return (
    <div>
      <h1>Welcome to my web app!</h1>
      <p>This is my custom home page.</p>
      <MultiStep steps={steps} activeStep={step} />
    </div>
  );
}

export default App;