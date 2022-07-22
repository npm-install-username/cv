import React from 'react';


function TextInput(props) {
  const found = props.content.find(obj =>{
    return obj.section === props.title
  })
  return (
    <>
      <textarea name="" id="" cols="30" rows="10" defaultValue={found.content} onChange={(e)=>{props.updateCVContent(props.content, props.title, e.target.value, props.type)}}></textarea>
    </>
  )
}

export default TextInput