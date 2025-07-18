
import style from './UseContextExample.module.css';
import ComponentB from './ComponentB';
import { useState, createContext } from 'react';

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("BroCode");

    return(
        <>
            <div className={style.box}>
                <h1>Component A</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user} >
                    <ComponentB />
                </UserContext.Provider>
            </div>
        </>
    );
}

export default ComponentA;