import React, { useState } from 'react';

function StepTwo(props) {
  const [inputFive, setInputFive] = useState('');
  const [inputSix, setInputSix] = useState('');
  const [inputSeven, setInputSeven] = useState('');
  const [inputEight, setInputEight] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input Five:
        <input type="text" value={inputFive} onChange={event => setInputFive(event.target.value)} />
      </label>
      <br />
      <label>
        Input Six:
        <input type="text" value={inputSix} onChange={event => setInputSix(event.target.value)} />
      </label>
      <br />
      <label>
        Input Seven:
        <input type="text" value={inputSeven} onChange={event => setInputSeven(event.target.value)} />
      </label>
      <br />
      <label>
        Input Eight:
        <input type="text" value={inputEight} onChange={event => setInputEight(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default StepTwo;
