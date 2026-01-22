import React,{useState} from 'react';

const ThemeSwitcher=()=>{
    const[isDarkMode,setIsDarkMode]=useState(false);
    const themeStyle={
        backgroundColor:isDarkMode?"#000":"#fff",
        color:isDarkMode?"#fff":"#000",
    };
    return(
        <div style={themeStyle}>
            <h2>Theme Switcher</h2>
            <button onClick={()=>setIsDarkMode(!isDarkMode)}>{isDarkMode?'Switch to light mode':'Switch to dark Mode'}</button>
        </div>
    )
}
export default ThemeSwitcher;