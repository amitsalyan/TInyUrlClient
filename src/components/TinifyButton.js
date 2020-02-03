import React from 'react';
import './TinifyButton.css';

const TinifyButton = ({name, url,handleTinify}) =>{
    return (
        <button name={name} className='main-button' onClick={handleTinify}>{name}</button>
    )
}
export default TinifyButton;