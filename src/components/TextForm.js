import React , {useState} from 'react'

export default function TextForm(props) {
const [text,setText]=useState("")

const upperfun=()=>{
          let newText = text.toUpperCase();
          setText(newText);

}
const handleChange=(event)=>{
    console.log("onChange function is mendetory for input the text");
    setText(event.target.value);
}

const lowerfun=()=>{
  let newText = text.toLowerCase();
  setText(newText);
}
const clearfun=()=>{
   let newText="";
   setText(newText);

}
  return (
    <>
    <div>
        <h1>{props.title}</h1>
      <div className="mb-3">
         <textarea className="form-control" id='myBox' rows="8" value={text} onChange={handleChange} placeholder='Enter text here'></textarea>
       </div>
       <button className='btn btn-primary' onClick={upperfun} >Convert To UpperCase</button>
       <button className='btn btn-dark mx-3' onClick={lowerfun} >Convert To LowerCase</button>
       <button className='btn btn-warning' onClick={clearfun} >Clear text</button>

    </div>
   <div className="container my-4">
    <h3>Your Text Summery</h3>
     <h6>{text.split(" ").length} Words and {text.length} letters</h6>
     <h3>Preview</h3>
     <h6>{text}</h6>
   
    </div>
   </>
  )
}
