import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // console.log("UpperCase Was clicked");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // console.log("LowerCase Was clicked");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        // console.log("LowerCase Was clicked");
    }
    const handleOnChange = (event) => {
        // console.log("Onchange Was clicked");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('');
    // text="new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* value has been set to text so that so that default can be shown on screen */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={removeExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className='container my-3'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
