import React, { useState, useRef, useEffect } from "react";
import styles from "./Time.module.css";

const Time = () => {
  const [timer, setTimer] = useState(0); // State to track timer
  const intervalRef = useRef(null); // Ref to store interval ID

  // Start timer function
  const startTime = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1); // Update state with previous timer value
    }, 1000);
  };

  // Stop timer function
  const stopTime = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval
      intervalRef.current = null; // Reset the interval reference
    }
  };

  // Clear timer function
  const clearTime = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0); // Reset timer state
  };

  // Cleanup interval when component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Clear interval on component unmount
  }, []);

  return (
    <div className={styles.time}>
      <h2>Time App : {timer}</h2>
      <div className={styles.buttonContainer}>
        <button onClick={startTime} id={styles.srtBtn}>
          Start
        </button>
        <button onClick={stopTime} id={styles.stpBtn}>
          Stop
        </button>
        <button onClick={clearTime} id={styles.clrBtn}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Time;
