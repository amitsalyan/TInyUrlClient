import React from 'react';
import './TinifiedURL.css'

const TinifiedURL = ({message, tinifiedUrl, href}) =>{
    const resultClassName = !tinifiedUrl ? 'failed-result' : 'success-result';
    if (tinifiedUrl === '' && message === '') {
        return null;
    }
    return (
        <div className={`result ${resultClassName}`}>
            <div>{message}</div>
            <a href={href}>{tinifiedUrl}</a>
        </div>
    )
}

export default TinifiedURL;
