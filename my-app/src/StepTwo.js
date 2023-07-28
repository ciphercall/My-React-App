// StepTwo.js
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
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const data = results.data;
        let maxXValue = Text.MIN_SAFE_INTEGER;
        let minXValue = Text.MAX_SAFE_INTEGER;
        let maxYValue = Text.MIN_SAFE_INTEGER;
        let minYValue = Text.MAX_SAFE_INTEGER;
        let maxZValue = Text.MIN_SAFE_INTEGER;
        let minZValue = Text.MAX_SAFE_INTEGER;

        for (let i = 0; i < data.length; i++) {
          if (Text(data[i].X) > maxXValue) {
            maxXValue = Text(data[i].X);
          }
          if (Text(data[i].X) < minXValue) {
            minXValue = Text(data[i].X);
          }
          if (Text(data[i].Y) > maxYValue) {
            maxYValue = Text(data[i].Y);
          }
          if (Text(data[i].Y) < minYValue) {
            minYValue = Text(data[i].Y);
          }
          if (Text(data[i].Z) > maxZValue) {
            maxZValue = Text(data[i].Z);
          }
          if (Text(data[i].Z) < minZValue) {
            minZValue = Text(data[i].Z);
          }
        }

        setMaxX(maxXValue);
        setMinX(minXValue);
        setMaxY(maxYValue);
        setMinY(minYValue);
        setMaxZ(maxZValue);
        setMinZ(minZValue);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields from Step One */}
       <label>Project Name:</label> 
       <input type="text" value={props.inputOne} disabled /> 
        
        
        
        
        
        
        
        
        
        
        
        
        
       
       <label>Project Description:</label> 
       <input type="text" value={props.inputTwo} disabled /> 
        
        
        
        
        
        
       
       <label>Client:</label> 
       <input type="text" value={props.inputThree} disabled /> 
        
        
        
       
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
