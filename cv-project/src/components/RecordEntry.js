import React from 'react'

function RecordEntry(props) {
    console.log(props.entryContent)
  return (
    <div>
        <h3>{props.entryContent.place}</h3>
    </div>
  )
}

export default RecordEntry