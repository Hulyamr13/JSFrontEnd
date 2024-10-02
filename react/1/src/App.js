import React, { useState } from "react";
import './App.css';
import 'h8k-components';

const title = "Text Append";

function TextField({ labelText, onChange }) {
  return (
    <div>
      <label data-testid="label">{labelText}</label>
      <input type="text" data-testid="input" onChange={onChange} />
    </div>
  );
}

function App() {
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  const handleFirstTextChange = (event) => {
    setFirstText(event.target.value);
  };

  const handleSecondTextChange = (event) => {
    setSecondText(event.target.value);
  };

  const finalText = `${firstText} ${secondText}`.trim();

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="first-text">
            <TextField labelText={'First Text'} onChange={handleFirstTextChange}/>
          </div>
          <div data-testid="second-text">
            <TextField labelText={'Second Text'} onChange={handleSecondTextChange}/>
          </div>
          <label className="mt-50 text-align-center">
            Appended Text is: 
          </label>
          <label className="mt-10 finalText" data-testid="final-text">
            {finalText}
          </label>
        </section>
      </div>
    </div>
  );
}

export default App;
