import React from 'react';


function TextInput(props) {
  const found = props.content.find(obj =>{
    
    // this only applies to text inputs - record entries with text area are only added upon add record button submit
    return obj.section === props.title
  
    
  })

  const updateTextField = (e) =>{
    props.setTextField(e.target.value)
  }
  return (
    <>
      {props.type==='text' && 
      <textarea name="" id="" cols="30" rows="10" defaultValue={found.content} onChange={(e)=>{props.updateCVContent(props.content, props.title, e.target.value, props.type)}} ></textarea>}
      {props.type==='record' && 
      <textarea name="" id="" cols="30" rows="10" defaultValue={'sdafasd'} onChange={(e)=>{updateTextField(e)}} ></textarea>}

      
    </>
  )
}

export default TextInput