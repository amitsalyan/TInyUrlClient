import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Button} from '../commons/Button';
import './TinifiedURL.css'

const TinifiedURL = ({message, tinifiedUrl, href}) =>{
    const resultClassName = !tinifiedUrl ? 'failed-result' : 'success-result';
    function _showCopyToClipboard() {
        if (resultClassName === 'success-result') {
            return <>
                <CopyToClipboard text={tinifiedUrl} >
                    <Button>Copy URL to Clipboard</Button>
                </CopyToClipboard> 
            </>
        }
    }
    return <>
        <div className={`result ${resultClassName}`}>
            <div>{message}</div>
            <a href={href}>{tinifiedUrl}</a>
        </div>
        {_showCopyToClipboard()}
    </>
}

export default TinifiedURL;
