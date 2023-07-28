// ResultTable.js

import React from 'react';

function ResultTable({ inputData }) {
  return (
    <div>
      <h2>Results</h2>
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
  );
}

export default ResultTable;
