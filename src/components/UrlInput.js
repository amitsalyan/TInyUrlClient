import React from 'react';
import './UrlInput.css';

const UrlInput = ({label, value, handleOnChange}) => {
    return (
        <div className='url-input'>
            <label htmlFor='url-input'>{label}</label>
            <input id='url-input' value={value} onChange={event => handleOnChange(event.target.value)}/>
        </div>
    )
}
export default UrlInput;