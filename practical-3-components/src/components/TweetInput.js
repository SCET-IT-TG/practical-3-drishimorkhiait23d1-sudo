import React,{useState} from 'react';

const TweetInput=()=>{
    const[text,setText]=useState(' ');
    const maxLength=50;

    <input type="button" disabled={text.length>maxLength?'true':'false'}></input>
}
export default TweetInput;