import React from 'react';
import UrlInput from './UrlInput';
import TinifyButton from './TinifyButton';

const Tinification = () => {
    let url;
    const setUrl = (value) => {
        url = value;
    }
    return(
        <>
            <UrlInput url={url} setUrl={setUrl}/>
            <TinifyButton url={url}/>
        </>
    )
}

export default Tinification;