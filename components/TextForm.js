import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleFormatSentence = () => {
    console.log("Format Sentence was clicked" + text);
    let words = text.split(' ');
    let formatSentence = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let newText = formatSentence.join(' ');
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea className="form-control" placeholder='Enter Text' onChange={handleOnChange} id="floatingTextarea" rows="8"></textarea>
        </div><br></br>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleFormatSentence}>Format Sentence</button>
      </div>
      <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
