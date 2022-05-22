import React from 'react'

function GenerateCV(props) {
  return (
    <div class="container">
      <button onClick={()=> props.onGenerate(props.content)}>Generate CV</button>
    </div>
  )
}

export default GenerateCV