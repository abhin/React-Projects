import { createContext, useState } from "react";

// create context
export const globalContext = createContext(null);

function GlobalContext({ children }) {
    const [theme, setTheme] = useState('light');
    return <globalContext.Provider value={{theme, setTheme}}>{children}</globalContext.Provider>
}

export default GlobalContext;