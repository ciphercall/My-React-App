import React, { useState } from 'react';
import MultiStep from 'react-multistep';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS

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
    <div className="container mt-5">
      <h1>Welcome to my web app!</h1>
      <p>This is my custom home page.</p>
      <div className="d-flex justify-content-center"> {/* Center the buttons */}
        <MultiStep steps={steps} activeStep={step} />
      </div>
    </div>
  );
}

export default App;
