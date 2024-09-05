import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
    const [count, setCount] = useState(0);

    const decrement = () => setCount(count => count - 1);
    const reset = () => setCount(0);
    const increment = () => setCount(count => count + 1);

    return (
        <>
            <div className={styles.counterContainer}>
                <p className={styles.counterDisplay}>{count}</p>
                <button className={styles.counterButton} onClick={decrement}>-</button>
                <button className={styles.counterButton} onClick={reset}>Reset</button>
                <button className={styles.counterButton} onClick={increment}>+</button>
            </div>
        </>
    );
}

export default Counter;