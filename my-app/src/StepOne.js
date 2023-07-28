import React, { useState } from 'react';
import './styles.css';

function StepOne(props) {
  return (
    <form>
      <label>
      Project Name
      </label>
      <input type="text" value={props.inputOne} onChange={(event) => props.setInputOne(event.target.value)} />

      <br />
      <label>
      Project Description
      </label>
      <input type="text" value={props.inputTwo} onChange={(event) => props.setInputTwo(event.target.value)} />

      <br />
      <label>
      Client
      </label>
      <input type="text" value={props.inputThree} onChange={(event) => props.setInputThree(event.target.value)} />

      <br />
      <label>
      Contractor
      </label>
      <input type="text" value={props.inputFour} onChange={(event) => props.setInputFour(event.target.value)} />

    </form>
  );
}

export default StepOne;