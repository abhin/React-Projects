
import { useState } from "react";
import styles from './ColorPicker.module.css';

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    let style = {backgroundColor: color}

    return (
        <>
            <div className={styles.colorPickerContainer}>
                <h1>Color Picker</h1>
                <div className={styles.colorDisplay} style={style}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a Color</label>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>
        </>
    );
}

export default ColorPicker;