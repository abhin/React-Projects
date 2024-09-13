import {useEffect, useRef, useState } from "react";
import style from "./StopWatch.module.css";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intrervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intrervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intrervalIdRef.current);
        }

    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const formatTime = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minute = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000  % 60);
        let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, 0);
        minute = String(minute).padStart(2, 0);
        seconds = String(seconds).padStart(2, 0);
        milliSeconds = String(milliSeconds).padStart(2, 0);

        return `${hours}:${minute}:${seconds}:${milliSeconds}`;
    }

    return (
        <>
            <div className={style.stopWatch}>
                <div className={style.display}>{formatTime()}</div>
                <div className={style.controls}>
                    <button onClick={start} className={style.startButton}>Start</button>
                    <button onClick={stop} className={style.stopButton}>Stop</button>
                    <button onClick={reset} className={style.resetButton}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default StopWatch;