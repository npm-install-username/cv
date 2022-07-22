import React from 'react'
import RecordEntry from './RecordEntry'
import AddRecord from './AddRecord'

function Record(props) {

    const found = props.content.find(obj =>{
        return obj.section === props.title
    })
    // // console.log(found)
    // console.log(Object.keys(found.content).length)
    let rows = []
    for (let i = 0; i < Object.keys(found.content).length; i++) {
        rows.push(<RecordEntry entryContent={found.content[i]} title ={props.title} />)
    }
    // console.log(Object.keys(found.content).length)
    // console.log(rows)
  return (
    <div>
        {rows}
        <AddRecord content={props.content} updateCVContent = {props.updateCVContent} type = {props.type} title={props.title}/>
    </div>
  )
}

export default Record