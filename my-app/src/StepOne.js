import React from 'react';

function StepOne(props) {
  return (
    <form>
      <div className="form-group mt-4">
        <label>Project Name:</label>
        <input
          type="text"
          className="form-control"
          value={props.inputOne}
          onChange={(event) => props.setInputOne(event.target.value)}
        />
      </div>

      <div className="form-group mt-4">
        <label>Project Description:</label>
        <input
          type="text"
          className="form-control"
          value={props.inputTwo}
          onChange={(event) => props.setInputTwo(event.target.value)}
        />
      </div>

      <div className="form-group mt-4">
        <label>Client:</label>
        <input
          type="text"
          className="form-control"
          value={props.inputThree}
          onChange={(event) => props.setInputThree(event.target.value)}
        />
      </div>

      <div className="form-group mt-4">
        <label>Contractor:</label>
        <input
          type="text"
          className="form-control"
          value={props.inputFour}
          onChange={(event) => props.setInputFour(event.target.value)}
        />
      </div>
    </form>
  );
}

export default StepOne;
