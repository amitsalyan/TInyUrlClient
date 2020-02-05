import React from 'react';
import {Button} from '../commons/Button';

const TinifyButton = ({name, url,handleTinify}) =>{
    return (
        <Button name={name} onClick={handleTinify}>{name}</Button>
    )
}
export default TinifyButton;