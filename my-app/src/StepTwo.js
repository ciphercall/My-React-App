import React, { useState } from 'react';

function StepTwo(props) {
  const [inputFive, setInputFive] = useState('');
  const [inputSix, setInputSix] = useState('');
  const [inputSeven, setInputSeven] = useState('');
  const [inputEight, setInputEight] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input Five:
      </label>
      <input type="text" value={inputFive} onChange={event => setInputFive(event.target.value)} />

      <br />
      <label>
        Input Six:
      </label>
      <input type="text" value={inputSix} onChange={event => setInputSix(event.target.value)} />

      <br />
      <label>
        Input Seven:
      </label>
      <input type="text" value={inputSeven} onChange={event => setInputSeven(event.target.value)} />

      <br />
      <label>
        Input Eight:
      </label>
      <input type="text" value={inputEight} onChange={event => setInputEight(event.target.value)} />

      <br />
      <label htmlFor="file">Upload a file:</label> 
      <br />
      <input type="file" id="file" name="file" onChange={handleFileChange} />

    </form>
  );
}

export default StepTwo;
