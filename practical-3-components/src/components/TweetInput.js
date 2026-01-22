import React,{useState} from 'react';

const TweetInput=()=>{
    const[text,setText]=useState('');
    const maxLength=50;
    return(
    <div>
    <h1>Type your message here:</h1>
    <textarea value={text} onChange={(e)=>setText(e.target.value)}>Type here....</textarea>
    <input type="button"
    value="tweet" disabled={text.length>maxLength}></input>
    </div>
    );
}
export default TweetInput;