import React, { useState } from 'react';
import Papa from 'papaparse';

function StepTwo(props) {
  const [maxX, setMaxX] = useState('');
  const [minX, setMinX] = useState('');
  const [maxY, setMaxY] = useState('');
  const [minY, setMinY] = useState('');
  const [maxZ, setMaxZ] = useState('');
  const [minZ, setMinZ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form
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
    <form onSubmit={handleSubmit}>
      {/* Input fields from Step One */}
      <div className="form-group mt-4">
        <label>Project Name:</label>
        <input type="text" className="form-control" value={props.inputOne} disabled />
      </div>

      <div className="form-group mt-4">
        <label>Project Description:</label>
        <input type="text" className="form-control" value={props.inputTwo} disabled />
      </div>

      <div className="form-group mt-4">
        <label>Client:</label>
        <input type="text" className="form-control" value={props.inputThree} disabled />
      </div>

      <div className="form-group mt-4">
        <label>Contractor:</label>
        <input type="text" className="form-control" value={props.inputFour} disabled />
      </div>

      {/* New inputs */}
      <div className="form-row mt-4">
        <div className="col">
          <label>Max X:</label>
          <input type="text" className="form-control" value={maxX} onChange={(e) => setMaxX(e.target.value)} />
        </div>
        <div className="col">
          <label>Min X:</label>
          <input type="text" className="form-control" value={minX} onChange={(e) => setMinX(e.target.value)} />
        </div>
      </div>

      <div className="form-row mt-4">
        <div className="col">
          <label>Max Y:</label>
          <input type="text" className="form-control" value={maxY} onChange={(e) => setMaxY(e.target.value)} />
        </div>
        <div className="col">
          <label>Min Y:</label>
          <input type="text" className="form-control" value={minY} onChange={(e) => setMinY(e.target.value)} />
        </div>
      </div>

      <div className="form-row mt-4">
        <div className="col">
          <label>Max Z:</label>
          <input type="text" className="form-control" value={maxZ} onChange={(e) => setMaxZ(e.target.value)} />
        </div>
        <div className="col">
          <label>Min Z:</label>
          <input type="text" className="form-control" value={minZ} onChange={(e) => setMinZ(e.target.value)} />
        </div>
      </div>

      {/* File upload */}
      <div className="form-group mt-4">
        <label htmlFor="file">Upload a file:</label>
        <input type="file" className="form-control-file" id="file" name="file" onChange={handleFileChange} />
      </div>

      <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
  );
}

export default StepTwo;
