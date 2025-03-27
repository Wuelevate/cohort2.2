import React, { useState, useEffect, useRef } from "react";
import './StopWatch.css';

const StopWatch = ({ increment }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        
        return [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0')
        ].join(':');
    };

    const toggleTimer = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + increment);
            }, 1000);
        }
        setIsRunning(!isRunning);
    };
    // console.log(intervalRef.current)

    const reset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);


    return (
        <div className="container1">
            <h1>{formatTime(time)}</h1>
            <br />
            <div className="buttons">
                <button className="reset" onClick={reset}>Reset</button>
                <button 
                    className={isRunning ? "stop" : "start"} 
                    onClick={toggleTimer}
                >
                    {isRunning ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
};

export default StopWatch;
