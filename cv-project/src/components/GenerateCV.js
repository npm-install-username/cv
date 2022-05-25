import React from 'react';


function GenerateCV(props) {

  return (
    <div className="container">
      <button onClick={()=> props.onGenerate(props.content)}>Generate CV</button>
    </div>
  )
}

export default GenerateCV