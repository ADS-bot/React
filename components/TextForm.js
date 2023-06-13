import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleFormatSentence = () => {
    console.log("Format Sentence was clicked" + text);
    let words = text.split(' ');
    let formatSentence = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let newText = formatSentence.join(' ');
    setText(newText);
    props.showAlert("Formatted Sentence!", "success");
  };

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!", "success");
};

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleCopy = () => {
    console.log("Copy was clicked" + text);
    var text = document.getElementById("floatingTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  
  const handlespaces = () => {
    console.log("Remove Extra Spaces was clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea" rows="8" style={{backgroundColor : props.mode === 'light' ? 'white' : 'black', color : props.mode === 'dark' ? 'white' : 'black'}}></textarea>
        </div><br></br>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleFormatSentence}>Capitalize 1st characters</button>
        <button className="btn btn-primary mx-1" onClick={handlespaces}>Remove Extra Spaces</button>
      </div>
      <div className='container my-3' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
