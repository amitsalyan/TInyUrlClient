import React from 'react';
import postData from '../data/fetch';

const TinifyButton = ({url}) => {
    async function tinify = () =>{
        let genTinyLink = {};
		genTinyLink['url'] = url;
        postData('https://localhost:8443/api/tiny/genTinyLink',{url:url}).then((data) =>{
            console.log(data)
        })

    }
    return (
        <button onClick={tinify()}>Tinify</button>
    )
}
export default TinifyButton;