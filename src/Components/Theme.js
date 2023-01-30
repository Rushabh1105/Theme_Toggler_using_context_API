import React, { useContext } from 'react'
import "./Theme.css";
import { ThemeContext } from '../Context/ThemeProvider';

function Theme() {

    const {theme, dark, toggle} = useContext(ThemeContext);
    //console.log(dark, theme, toggle);


  return (
    <div className='theme_container'>
        <h1>Theme Toggler</h1>
        
        <div className="theme_header" 
            onClick={toggle}
            style={{
                backgroundColor : theme.backgroundColor,
                color : theme.color,
            }}
        >
            <h1>Context API Theme Toggler</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore nemo dolores ducimus pariatur eaque excepturi fuga dolor deleniti nulla temporibus!
            </p>


            <div className="button_container">
                {`Toggle to ${!dark ? 'Dark' : 'Light'} Theme`}
            </div>
        </div>
      
    </div>
  )
}


export default Theme
