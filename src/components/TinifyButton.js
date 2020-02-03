import React from 'react';
import './TinifyButton.css';

const TinifyButton = ({url,handleTinify}) =>{
    return (
        <button className='main-button' onClick={handleTinify}>Tinify</button>
    )
}
export default TinifyButton;