import React, { useState } from 'react';

function StepOne(props) {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.nextStep();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input One:
        <input type="text" value={inputOne} onChange={event => setInputOne(event.target.value)} />
      </label>
      <br />
      <label>
        Input Two:
        <input type="text" value={inputTwo} onChange={event => setInputTwo(event.target.value)} />
      </label>
      <br />
      <label>
        Input Three:
        <input type="text" value={inputThree} onChange={event => setInputThree(event.target.value)} />
      </label>
      <br />
      <label>
        Input Four:
        <input type="text" value={inputFour} onChange={event => setInputFour(event.target.value)} />
      </label>
    </form>
  );
}

export default StepOne;
