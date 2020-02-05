import React from 'react';
import UrlInput from './UrlInput';
import TinifyButton from './TinifyButton';
import TinifiedURL from './TinifiedURL';
import postData from '../data/fetch';
import './styles.css';

class  Tinification extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url:'', // User imput 
            tinyUrl:'', // Shorten URL result
            href:'', 
            message:'' 
            };
    }

    handleUrlInput = value => {
        this.setState({url: value});
    }

    handleKeyPress = event => {
        if(event.key ==='Enter'){
            this.fetchTinyUrl();
        }
    }

    fetchTinyUrl = () => {
        if(!this.state.url){
            this.setState({
                message:'No URL found !!',
                tinyUrl:'', 
                href:''
            })
            return;
        }
        postData('http://localhost:8080/api/tiny/genTinyLink',{url:this.state.url}).then((data) =>{
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

    _showResult = () => {
        return this.state.message !== ''
         ? <TinifiedURL href={this.state.href} tinifiedUrl={this.state.tinyUrl} message={this.state.message}/>
         : ''
    }

    render(){
        return(
            <div className='wrapper'>
                <UrlInput 
                    label='Enter URL: ' 
                    value={this.state.url} 
                    handleOnChange={this.handleUrlInput} 
                    handleKeyPress={this.handleKeyPress}
                />
                <TinifyButton name='Tinify' url={this.state.url} handleTinify={this.fetchTinyUrl}/>
                {this._showResult()}
            </div>
        )   
    }
}
export default Tinification;
