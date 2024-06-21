import React , {useState} from 'react'

export default function TextForm(props) {
const [text,setText]=useState("Enter text here")
const upperfun=()=>{
          let newText = text.toUpperCase();
          setText(newText);

}
const handleChange=(event)=>{
    console.log("this function is mendetory for input the text");
    setText(event.target.value);
}

  return (
    <div>
        <h1>{props.title}</h1>
      <div className="mb-3">
         <textarea className="form-control" id='myBox' rows="8" value={text} onChange={handleChange}></textarea>
       </div>
       <button className='btn btn-primary' onClick={upperfun} >Convert To UpperCase</button>
    </div>
  )
}
