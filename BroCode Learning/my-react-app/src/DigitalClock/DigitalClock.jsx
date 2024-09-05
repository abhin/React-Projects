import { useEffect, useState } from "react";
import style from "./DigitalClock.module.css";

function DigitalClock() {

    const[date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [date]);

    const displayTime = () => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}${padZero(meridiem)}`;
    }

    const padZero = (number) => {
        return number < 10 && `0${number}` || number;
    }

    return(
        <>
            <div className={style.clockContainer}>
                <div className={style.clock}>
                    <span>{displayTime()}</span>
                </div>
            </div>
        </>
    );
}

export default DigitalClock;