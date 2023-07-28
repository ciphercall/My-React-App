// StepTwo.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Papa from 'papaparse';
import ResultTable from './ResultTable';

function StepTwo({ inputOne, inputTwo, inputThree, inputFour }) {
  const [maxX, setMaxX] = useState('');
  const [minX, setMinX] = useState('');
  const [maxY, setMaxY] = useState('');
  const [minY, setMinY] = useState('');
  const [maxZ, setMaxZ] = useState('');
  const [minZ, setMinZ] = useState('');
  const [step, setStep] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form and show the result table on the next page
    setStep(2);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const data = results.data;
        let maxXValue = Number.MIN_SAFE_INTEGER;
        let minXValue = Number.MAX_SAFE_INTEGER;
        let maxYValue = Number.MIN_SAFE_INTEGER;
        let minYValue = Number.MAX_SAFE_INTEGER;
        let maxZValue = Number.MIN_SAFE_INTEGER;
        let minZValue = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < data.length; i++) {
          const x = parseFloat(data[i].X);
          const y = parseFloat(data[i].Y);
          const z = parseFloat(data[i].Z);

          if (!isNaN(x)) {
            maxXValue = Math.max(maxXValue, x);
            minXValue = Math.min(minXValue, x);
          }

          if (!isNaN(y)) {
            maxYValue = Math.max(maxYValue, y);
            minYValue = Math.min(minYValue, y);
          }

          if (!isNaN(z)) {
            maxZValue = Math.max(maxZValue, z);
            minZValue = Math.min(minZValue, z);
          }
        }

        setMaxX(maxXValue.toString());
        setMinX(minXValue.toString());
        setMaxY(maxYValue.toString());
        setMinY(minYValue.toString());
        setMaxZ(maxZValue.toString());
        setMinZ(minZValue.toString());
      },
    });
  };

  return (
    <div>
      {step === 1 && (
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Project Name:</label>
                <input type="text" className="form-control" value={inputOne} disabled />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Project Description:</label>
                <input type="text" className="form-control" value={inputTwo} disabled />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Client:</label>
                <input type="text" className="form-control" value={inputThree} disabled />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Contractor:</label>
                <input type="text" className="form-control" value={inputFour} disabled />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Max X:</label>
                <input type="text" className="form-control" value={maxX} onChange={(e) => setMaxX(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Min X:</label>
                <input type="text" className="form-control" value={minX} onChange={(e) => setMinX(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Max Y:</label>
                <input type="text" className="form-control" value={maxY} onChange={(e) => setMaxY(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Min Y:</label>
                <input type="text" className="form-control" value={minY} onChange={(e) => setMinY(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Max Z:</label>
                <input type="text" className="form-control" value={maxZ} onChange={(e) => setMaxZ(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Min Z:</label>
                <input type="text" className="form-control" value={minZ} onChange={(e) => setMinZ(e.target.value)} />
              </div>
            </div>
          </div>

          {/* File upload */}
          <div className="form-group">
            <label htmlFor="file">Upload a file:</label>
            <input type="file" className="form-control-file" id="file" name="file" onChange={handleFileChange} />
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      )}
      {step === 2 && (
        <ResultTable
          inputData={{
            inputOne,
            inputTwo,
            inputThree,
            inputFour,
            maxX,
            minX,
            maxY,
            minY,
            maxZ,
            minZ,
          }}
        />
      )}
    </div>
  );
}

StepTwo.propTypes = {
  inputOne: PropTypes.string.isRequired,
  inputTwo: PropTypes.string.isRequired,
  inputThree: PropTypes.string.isRequired,
  inputFour: PropTypes.string.isRequired,
};

export default StepTwo;
