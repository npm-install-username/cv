import React from 'react'

function RecordEntry(props) {
    console.log(props.entryContent)

    if (props.title==='Education') {
        return (
            <div>
                <h4>{props.entryContent.place}</h4>
                <h5>{props.entryContent.startDate} - {props.entryContent.endDate}</h5>
                <h5>{props.entryContent.degree}</h5>
            </div>
          )
    } 
    if (props.title === 'Professional Experience'){
        return (
            <div>
                <h4>{props.entryContent.place}</h4>
                <h5>{props.entryContent.startDate} - {props.entryContent.endDate}</h5>
                <h5>{props.entryContent.jobTitle}</h5>
            </div>
          )
    }

}

export default RecordEntry