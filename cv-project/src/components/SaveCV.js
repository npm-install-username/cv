import React from 'react'

function SaveCV(props) {
  return (
    <div className="container">
      <button onClick={()=> props.saveCV()}>SAVE</button>
    </div>
  )
}

export default SaveCV