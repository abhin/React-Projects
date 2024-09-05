import List from '../List/List';
import moduleStyles from './Button.module.css';
import { useState } from 'react';

function Button(props) {

    const styles = {
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        display: "block",
        margin: "10px"
    };

    let [category, setCategory] = useState();  ;
    const handleClick = e => setCategory(e.target.getAttribute("data-category"));

    return (
        <>
            <button className={moduleStyles.button} style={styles} onClick={handleClick} data-category="">Food List</button>
            <button className={moduleStyles.button} style={styles} onClick={handleClick} data-category="vegetables">Vegetables list</button>
            <button className={moduleStyles.button} style={styles} onClick={handleClick} data-category="fruits">Fruits List</button>
            <button className={moduleStyles.button} style={styles} onClick={handleClick} data-category="paultry">Paultry List</button>

            <List.ShowList category={category} />
        </>
    );
}

export default Button;