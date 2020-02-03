import React from 'react';
import UrlInput from './UrlInput';
import TinifyButton from './TinifyButton';
import TinifiedURL from './TinifiedURL';
import postData from '../data/fetch';
import './styles.css';

class  Tinification extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url:'',
            tinyUrl:'', 
            href:'',
            message:''
            };
    }
    //componentWillMount ()

    handleUrlInput = value => {
        this.setState({url: value});
    }

    handleClick = () => {
        if(!this.state.url){
            this.setState({
                message:'No URL found !!',
                tinyUrl:'', 
                href:''
            })
            return;
        }
        postData('https://localhost:8443/api/tiny/genTinyLink',{url:this.state.url}).then((data) =>{
            if(data.status==='INVALID'){
                this.setState({
                    message:'Invalid URL !!',
                    tinyUrl:'', 
                    href:''
                })
            }else if(data.status==='ACTIVE'){
                this.setState({
                    tinyUrl:data.tinyUrl, 
                    href:data.tinyUrl,
                    message:'Tinified Successfully !!'
                })
            }
            ;
        })
    }

    render(){
        return(
            <div className='wrapper'>
                <UrlInput label='Enter URL: ' value={this.state.url} handleOnChange={this.handleUrlInput} />
                <TinifyButton name='Tinify' url={this.state.url} handleTinify={this.handleClick}/>
                <TinifiedURL href={this.state.href} tinifiedUrl={this.state.tinyUrl} message={this.state.message}/>
            </div>
        )   
    }
}
export default Tinification;
