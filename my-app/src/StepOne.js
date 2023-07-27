import React, { useState } from 'react';
import './styles.css';

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
      </label>
      <input type="text" value={inputOne} onChange={event => setInputOne(event.target.value)} />

      <br />
      <label>
        Input Two:
      </label>
      <input type="text" value={inputTwo} onChange={event => setInputTwo(event.target.value)} />

      <br />
      <label>
        Input Three:
      </label>
      <input type="text" value={inputThree} onChange={event => setInputThree(event.target.value)} />

      <br />
      <label>
        Input Four:
      </label>
      <input type="text" value={inputFour} onChange={event => setInputFour(event.target.value)} />

    </form>
  );
}

export default StepOne;
