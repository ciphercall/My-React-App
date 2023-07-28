import React from 'react';

function StepOne(props) {
  return (
    <form>
      <label>
        Project Name
        <input type="text" value={props.inputOne} onChange={(event) => props.setInputOne(event.target.value)} />
      </label>

      <br />

      <label>
        Project Description
        <input type="text" value={props.inputTwo} onChange={(event) => props.setInputTwo(event.target.value)} />
      </label>

      <br />

      <label>
        Client
        <input type="text" value={props.inputThree} onChange={(event) => props.setInputThree(event.target.value)} />
      </label>

      <br />

      <label>
        Contractor
        <input type="text" value={props.inputFour} onChange={(event) => props.setInputFour(event.target.value)} />
      </label>
    </form>
  );
}

export default StepOne;
