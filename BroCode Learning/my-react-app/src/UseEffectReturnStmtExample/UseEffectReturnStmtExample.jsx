import { useEffect, useState } from "react";

function UseEffectReturnStmtExample() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener Removed");
        }
    }, []);

    useEffect(()=>{
        document.title = `Size ${width} x ${height}`;
    }, [width, height]);


    return(
        <>
            <p>Window Width: {width} px</p>
            <p>Window Height: {height} px</p>
        </>
    );
}

export default UseEffectReturnStmtExample;