import { useContext } from 'react';
import style from './UseContextExample.module.css';
import ComponentD from './ComponentD';
import { UserContext } from './ComponentA';

function ComponentC(props) {
    const user = useContext(UserContext);

    return(
        <>
            <div className={style.box}>
                <h1>Component C</h1>
                <h2>{`Hello again ${user}`}</h2>
                <ComponentD />
            </div>
        </>
    );
}

export default ComponentC;