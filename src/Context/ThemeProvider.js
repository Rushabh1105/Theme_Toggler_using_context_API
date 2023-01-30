import React, { createContext, useEffect, useState } from 'react'


const themes = {
    dark : {
        backgroundColor : 'black',
        color : 'white',
    },
    light : {
        backgroundColor : 'white',
        color : 'black',
    },
}

const initialState = {
    dark : false,
    theme : themes.light,
    toggle : () => {},
}

const ThemeContext = createContext(initialState);

function ThemeProvider( {children} ) {

    const [dark, setDark] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true';
        setDark(isDark);
    } , [dark]);

    const toggle = () => {
        localStorage.setItem('dark', JSON.stringify(!dark));
        setDark(!dark);
    }

    const theme = dark ? themes.dark : themes.light;


  return (
    <ThemeContext.Provider value={{theme, dark, toggle }} >
        {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
