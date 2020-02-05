import React from 'react';
import './UrlInput.css';

const UrlInput = ({label, value, handleOnChange, handleKeyPress}) => {
    return (
        <div className='url-input'>
            <label htmlFor='url-input'>{label}</label>
            <input 
                id='url-input' 
                value={value} 
                onChange={event => handleOnChange(event.target.value)}
                onKeyPress={event => handleKeyPress(event)}
            />
        </div>
    )
}
export default UrlInput;