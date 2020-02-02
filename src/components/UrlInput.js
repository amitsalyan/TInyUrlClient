import React from 'react';

const UrlInput = ({url, setUrl}) => {
    return(
        <div>
            <label>Enter Url:</label>
            <input value={url} placeholder='Enter your Url here' onChange={event => setUrl(event.target.value)}/>
        </div>

    )
}
export default UrlInput;