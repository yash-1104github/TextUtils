import React, { useState } from 'react'



export default function FormText(props) {

    const handleUpclick = () => {
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        //setText("You have clicked on handleUpClick");
        props.showAlert("Converted to uppercase!", "success");
    }
    const handlelowclick = () => {
        console.log("lowercasecase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleclearclick = () => {
        let newText = ('');
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const hadleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
        
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');
    // text = "new text "; wrong way
    // setText("new text"); correct way

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                {/* <label htmlform="MyBox" className="form-label">Enter You Text</label> */}
                <textarea className="form-control" value={text}
                        onChange={hadleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey': 'white', 
                        color: props.mode === 'dark' ? 'white' : 'grey' }} id="MyBox" rows="8"></textarea>
            </div>
                <button  disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
                <button  disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowclick}>Convert to Lowercase</button>
                <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>Clear</button>
                <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
               <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
            
            </div>
        </>
    )
}
{/* mx-2 pading */ }





