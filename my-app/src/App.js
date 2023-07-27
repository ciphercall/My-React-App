import React from 'react';
import MultiStep from 'react-multistep';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

function App() {
  const steps = [
    { title: 'Step 1', component: <StepOne /> },
    { title: 'Step 2', component: <StepTwo /> },
  ];

  return (
    <div>
      <h1>Welcome to my web app!</h1>
      <p>This is my custom home page.</p>
      <MultiStep steps={steps} />
    </div>
  );
}

export default App;
