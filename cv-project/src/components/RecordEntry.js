import React from 'react'

import { FaTrash, FaPen } from 'react-icons/fa';


function RecordEntry(props) {
    

    if (props.title==='Education') {
        return (
            <div className='record-entry-preview'>
                <h4>{props.entryContent.place} <FaPen style={{cursor:'pointer'}}/> <FaTrash style={{cursor:'pointer'}}/></h4>
                <h5>{props.entryContent.startDate} - {props.entryContent.endDate}</h5>
                <h5>{props.entryContent.degree}</h5>
            </div>
          )
    } 
    if (props.title === 'Professional Experience'){
        return (
            <div className='record-entry-preview'>
                <h4>{props.entryContent.place} <FaPen style={{cursor:'pointer'}}/><FaTrash style={{cursor:'pointer'}}/></h4>
                <h5>{props.entryContent.startDate} - {props.entryContent.endDate}</h5>
                <h5>{props.entryContent.jobTitle}</h5>
            </div>
          )
    }

}

export default RecordEntry