import React from 'react';


function TextInput(props) {
  return (
    <>
      <textarea name="" id="" cols="30" rows="10" defaultValue={'asdasd'} onChange={(e)=>{props.updateCVContent(props.content, props.title, e.target.value, props.type)}}></textarea>
    </>
  )
}

export default TextInput