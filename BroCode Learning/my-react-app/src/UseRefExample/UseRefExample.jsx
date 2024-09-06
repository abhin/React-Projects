import { useEffect, useRef, useState } from "react";

function UseRefExample() {

    const [number, setNumber] = useState(0);
    const countRef = useRef(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Render");
        // console.log(countRef);
        // console.log(`Count ${countRef.current}`);
    });

    const handleIncrement = () => {
        // setNumber(n => n + 1);
        countRef.current++;
    }

    const handleDecrement = () => {
        // setNumber(n => n - 1);
        countRef.current--;
    }

    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        console.log(inputRef1.current.value && `Input Value: ${inputRef1.current.value}`);
    }

    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "green";
        inputRef3.current.style.backgroundColor = "";
        console.log(`Input Value ${inputRef2.current.value}`);
    }

    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "red";
        console.log(`Input Value ${inputRef3.current.value}`);
    }

    return (
        <>
            <p>Count: {number}</p>
            <p>Count: {countRef.current}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>

            <button onClick={handleClick1}>Click Me</button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>Click Me</button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>Click Me</button>
            <input ref={inputRef3}/>
        </>
    );
}

export default UseRefExample;