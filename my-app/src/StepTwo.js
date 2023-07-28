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
      <label>Project Name:</label>
      <input type="text" value={props.inputOne} disabled />

      <br />

      <label>Project Description:</label>
      <input type="text" value={props.inputTwo} disabled />

      <br />

      <label>Client:</label>
      <input type="text" value={props.inputThree} disabled />

      <br />

      <label>Contractor:</label>
      <input type="text" value={props.inputFour} disabled />

      {/* New inputs */}
      <br />
      <br />

      <label>Max X:</label>
      <input type="Text" value={maxX} onChange={(e) => setMaxX(e.target.value)} />
      &nbsp;

      <label>Min X:</label>
      <input type="Text" value={minX} onChange={(e) => setMinX(e.target.value)} />

      <br />
      <br />

      <label>Max Y:</label>
      <input type="Text" value={maxY} onChange={(e) => setMaxY(e.target.value)} />
      &nbsp;

      <label>Min Y:</label>
      <input type="Text" value={minY} onChange={(e) => setMinY(e.target.value)} />

      <br />
      <br />

      <label>Max Z:</label>
      <input type="Text" value={maxZ} onChange={(e) => setMaxZ(e.target.value)} />
      &nbsp;

      <label>Min Z:</label>
      <input type="Text" value={minZ} onChange={(e) => setMinZ(e.target.value)} />

      {/* File upload */}
      <br />
      <br />
      <label htmlFor="file">Upload a file:</label>
      <br />
      <input type="file" id="file" name="file" onChange={handleFileChange} />
    </form>
  );
}

export default StepTwo;