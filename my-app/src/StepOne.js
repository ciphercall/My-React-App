import React from 'react';

function StepOne(props) {
  return (
    <form>
      <div className="form-group row mt-4">
        <label className="col-sm-2 col-form-label">Project Name:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={props.inputOne}
            onChange={(event) => props.setInputOne(event.target.value)}
          />
        </div>
      </div>

      <div className="form-group row mt-4">
        <label className="col-sm-2 col-form-label">Project Description:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={props.inputTwo}
            onChange={(event) => props.setInputTwo(event.target.value)}
          />
        </div>
      </div>

      <div className="form-group row mt-4">
        <label className="col-sm-2 col-form-label">Client:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={props.inputThree}
            onChange={(event) => props.setInputThree(event.target.value)}
          />
        </div>
      </div>

      <div className="form-group row mt-4">
        <label className="col-sm-2 col-form-label">Contractor:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={props.inputFour}
            onChange={(event) => props.setInputFour(event.target.value)}
          />
        </div>
      </div>
    </form>
  );
}

export default StepOne;
