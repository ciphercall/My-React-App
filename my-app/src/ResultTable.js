import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

function ResultTable({ inputData }) {
  const tableRef = useRef(null);

  const handleSaveAsPDF = () => {
    const element = tableRef.current;
    const options = {
      margin:       1,
      filename:     'results.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div>
      <h2>Results</h2>
      <div ref={tableRef}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project Name</td>
              <td>{inputData.inputOne}</td>
            </tr>
            <tr>
              <td>Project Description</td>
              <td>{inputData.inputTwo}</td>
            </tr>
            <tr>
              <td>Client</td>
              <td>{inputData.inputThree}</td>
            </tr>
            <tr>
              <td>Contractor</td>
              <td>{inputData.inputFour}</td>
            </tr>
            <tr>
              <td>Max X</td>
              <td>{inputData.maxX}</td>
            </tr>
            <tr>
              <td>Min X</td>
              <td>{inputData.minX}</td>
            </tr>
            <tr>
              <td>Max Y</td>
              <td>{inputData.maxY}</td>
            </tr>
            <tr>
              <td>Min Y</td>
              <td>{inputData.minY}</td>
            </tr>
            <tr>
              <td>Max Z</td>
              <td>{inputData.maxZ}</td>
            </tr>
            <tr>
              <td>Min Z</td>
              <td>{inputData.minZ}</td>

            </tr>

          </tbody>

        </table>


      </div>
              {/* Save as PDF button */}
        {/* Use the following button that calls the handleSaveAsPDF function when clicked */}
            
        <button type="button" onClick={handleSaveAsPDF}>
       		Save as PDF
       	</button>


    </div>

  );
}

export default ResultTable;
