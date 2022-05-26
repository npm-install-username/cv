import React from 'react'
import '../styles/RecordEntry.scss'
import { FaTrash, FaPen } from 'react-icons/fa';


function RecordEntry(props) {
    

    if (props.title==='Education') {
        return (
            <div className='record-entry-preview'>
                <h4>{props.entryContent.place} <FaPen /> <FaTrash/> </h4>
                <h5>{props.entryContent.startDate} - {props.entryContent.endDate}</h5>
                <h5>{props.entryContent.degree}</h5>
            </div>
          )
    } 
    if (props.title === 'Professional Experience'){
        return (
            <div className='record-entry-preview'>
                <h4>{props.entryContent.place}</h4>
                <h5>{props.entryContent.startDate} - {props.entryContent.endDate}</h5>
                <h5>{props.entryContent.jobTitle}</h5>
            </div>
          )
    }

}

export default RecordEntry