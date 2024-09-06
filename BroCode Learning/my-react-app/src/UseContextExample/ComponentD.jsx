
import style from './UseContextExample.module.css';
import { UserContext } from './ComponentA';
import { useContext } from 'react';



function ComponentD(props) {
    const user = useContext(UserContext);
    return(
        <>
            <div className={style.box}>
                <h1>Component D</h1>
                <h2>{`Bye ${user}`}</h2>
            </div>
        </>
    );
}

export default ComponentD;