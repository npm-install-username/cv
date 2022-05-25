import React, { useEffect } from 'react'
import RecordEntry from './RecordEntry'

function Record(props) {

    const found = props.content.find(obj =>{
        return obj.section === props.title
    })
    // console.log(found)
    let rows = []
    for (let i = 0; i < Object.keys(found.content).length; i++) {
        rows.push(<RecordEntry entryContent={found.content[i]}/>)
        console.log(found.content[i])
    }
    // console.log(Object.keys(found.content).length)
    // console.log(rows)
  return (
    <div>
        {rows}
    </div>
  )
}

export default Record