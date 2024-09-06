
import style from './UseContextExample.module.css';
import ComponentC from './ComponentC';

function ComponentB() {
    return(
        <>
            <div className={style.box}>
                <h1>Component B</h1>
                <ComponentC />
            </div>
        </>
    );
}

export default ComponentB;