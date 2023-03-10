import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

function App() {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const formatText = () => {
    const words = inputText.split(' ');
    const formattedWords = words.map(word => {
      const boldPart = word.substring(0, 3);
      const normalPart = word.substring(3);
      return <span><b>{boldPart}</b>{normalPart} </span>;
    });
    setFormattedText(formattedWords);
  }

  const downloadPDF = () => {
    const element = document.getElementById('formattedText');
    html2pdf().from(element).save();
  }

  return (
    <div>
      <h1>Text Formatter</h1>
      <p>Enter some text below:</p>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={formatText}>Format Text</button>
      <br />
      <br />
      {formattedText && (
        <div>
          <h2>Formatted Text:</h2>
          <p id="formattedText">{formattedText}</p>
          <button onClick={downloadPDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
}

export default App;
