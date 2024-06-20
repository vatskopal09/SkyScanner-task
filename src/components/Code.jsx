import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

 
import copyIcon from '../copy-icon.png';

function Code() {
  const codeString = `import React, { useState } from "react";
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";
  import { format } from "date-fns";
  import "./App.css";
  import Code from "./code.jsx";
  
  const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
  const formatMonth = (date) => format(date, "MMMM yyyy");
  
  export default function App() {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateSelect = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <>
        <div className="container">
          <header>
            <div>
              <h1>Reservation Date</h1>
            </div>
          </header>
          <main>
            <div className="date-picker-container">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateSelect}
                dateFormat="EEEE, do MMMM yyyy"
              />
            </div>
            <button onClick={() => alert("It works!")}>Continue</button>
          </main>
        </div>
        <Code />
      </>
    );
  }
  `;  

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeString);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
    
    <div
      style={{
        position: 'relative',
        overflow: 'auto',
        maxHeight: 'calc(60vh - 100px)',
      }}
    >    
      <SyntaxHighlighter language="jsx" style={vs}>
        {codeString}
      </SyntaxHighlighter>
      <div
        style={{
          position: 'absolute',
          top: '0.2rem',
          right: '0.2rem',
          zIndex: 1,
        }}
      >
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: '0.2rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={handleCopyClick}
        >
          {isCopied ? (
            <span>Copied!</span>
          ) : (
            <img src={copyIcon} alt="Copy" style={{ width: '20px', height: '20px' }} />
          )}
        </button>
      </div>
    </div>
    </>
  );
}

export default Code;
