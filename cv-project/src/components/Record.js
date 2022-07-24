import React, { useEffect } from 'react'
import RecordEntry from './RecordEntry'
import AddRecord from './AddRecord'
import { useState } from 'react'

function Record(props) {

    const [found, setFound] = useState(props.content.find(obj =>{
      return obj.section === props.title
    }))
  
    let rows = []
    for (let i = 0; i < Object.keys(found.content).length; i++) {
      rows.push(<RecordEntry entryContent={found.content[i]} title ={props.title} key={i}/>)
      
    }
    const [recordsLength,setRecordsLength] = useState(0)


    useEffect(()=>{
      const finder = props.content.find(obj =>{
        return obj.section === props.title
      })
      setFound(finder)
      setRecordsLength(Object.keys(found.content).length)
      
    },[props.content, props.title, found])
    
    
  return (
    <div>
        {rows}
        <AddRecord content={props.content} updateCVContent = {props.updateCVContent} type = {props.type} title={props.title} recordsLength={recordsLength} />
    </div>
  )
}

export default Record