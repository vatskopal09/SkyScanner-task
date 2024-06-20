import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import "./App.css";
import Code from  "./components/Code"
import sky from "./1.png";

const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");
 

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="finish">
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
      </div>
      
       
      <div className="text-container">
        {" "}
        This page is an answer to the{" "}
        <a
          href="https://www.theforage.com/virtual-internships/prototype/km4rw7dihDr3etqom/Skyscanner-Front-End-Software-Engineering-Virtual-Job-Simulation"
          target="_blank"
          rel="noopener noreferrer"
        >
         Forage Skyscanner Front-End Software Engineering
        </a>{" "}
        course task. Unfortunately, my React version is 18.2 and Skyscanner's{" "}
        <a
          href="https://www.skyscanner.design/latest/welcome-to-backpack-Mtf5OEo4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backpack React Library
        </a>{" "}
           is not compatible with my React version. So this answer is different from Skyscanner's own. You can test and modify my App.jsx or you can create your own to complete the task. Enjoy!
      </div>
      <br />{" "}
      <div className="end"> <a
        href="https://github.com/Skyscanner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={sky} alt=""  />
      </a>
      <br />
      <div className="erdemlabel">
        <a
          href="https://github.com/erdemonal11"
          target="_blank"
          className="erdemlabel"
        >
          erdemapps.
        </a>
      </div></div>
      
    </>
  );
}
