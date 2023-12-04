import React, {useState} from 'react'
import PropTypes from 'prop-types'

// only 1 div is returned here
// All the jsx is inside the return funciton and the hooks are in the function body
// there are many more hooks in React other than this useState
// var(text) and the function(setText) to change it's value
// 'value' is used in textarea to put content inside of it
// function to handle change is used to allow to enter text inside the textform

export default function TextForm(props) {

  const [text, setText]= useState("Enter text here2");

  const functionToHandleChange = (event) =>{
    setText(event.target.value)
  }

  const handleUprClick = () =>{
    let x = text.toUpperCase();
    setText(x)
  }

  const handleLwrClick = () =>{
    let x = text.toLowerCase();
    setText(x)
  }

  return (
    <>
    <div className='container my-3'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={functionToHandleChange}rows="8"></textarea>
      </div>
      <div className="btn btn-primary mx-1" onClick={handleUprClick}>Convert to uppercase</div>
      <div className="btn btn-primary mx-1" onClick={handleLwrClick}>Convert to lowercase</div>
    </div>
    <div className="container">
      <h2>Your test summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text.split(" ").length * 0.08} Minutes read.</p>
      <h3>Preview</h3>
      <p>{text}</p> 
    </div>
    </>
  )
}
