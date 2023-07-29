import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Papa from 'papaparse';
import ResultTable from './ResultTable';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Plot from 'react-plotly.js';

function StepTwo({ inputOne, inputTwo, inputThree, inputFour }) {
  const [maxX, setMaxX] = useState('');
  const [minX, setMinX] = useState('');
  const [maxY, setMaxY] = useState('');
  const [minY, setMinY] = useState('');
  const [maxZ, setMaxZ] = useState('');
  const [minZ, setMinZ] = useState('');
  const [step, setStep] = useState(1);
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form and show the result table on the next page
    setStep(2);
  };

  const handleFileUpload = (event) => {
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
  
        const xValues = [];
        const kpValues = [];
  
        for (let i = 0; i < data.length; i++) {
          const x = parseFloat(data[i].X);
          const kp = parseFloat(data[i].KP);
  
          if (!isNaN(x) && !isNaN(kp)) {
            xValues.push(x);
            kpValues.push(kp);
          }
        }
  
        const trace = {
          x: kpValues,
          y: xValues,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        };
  
        const layout = {
          title: 'X vs KP',
          xaxis: { title: 'KP' },
          yaxis: { title: 'X' },
        };
  
        setChartData({ trace, layout });
        setShowChart(true);
      },
    });
  };
  

  const handleCloseChart = () => setShowChart(false);

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
                <input type="text" className= "form-control" value={inputFour} disabled />
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
            <div className= "col-md-6">
              <div className="form-group">
                <label>Min Z:</label>
                <input type="text" className="form-control" value={minZ} onChange={(e) => setMinZ(e.target.value)} />
              </div>
            </div>
          </div>

          {/* File upload */}
          <div className="form-group">
            <label htmlFor="file">Upload a file:</label>
            <input
              type="file"
              className="form-control-file"
              id="file"
              name="file"
              onChange={handleFileUpload}
            />
          </div>

{/* Chart modal */}
<Modal show={showChart} onHide={handleCloseChart} size="lg">
  <Modal.Header closeButton>
    <Modal.Title>X vs KP</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {chartData.trace && chartData.layout && (
      <Plot data={[chartData.trace]} layout={chartData.layout} style={{ width: '90%' }} />
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseChart}>
      Close
    </Button>
  </Modal.Footer>
</Modal>

          {/* Submit button */}
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



