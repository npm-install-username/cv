import React from 'react'
import { useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import Modal from './Modal';




function RecordEntry(props) {
    //refers to modal
    // modal was initially not working cos I was placing it inside div 
    const [isOpen, setIsOpen] = useState(false);

    if (props.title==='Education') {
        return (
            <>
                <div className='record-entry-preview' onClick={() => setIsOpen(true)}>
                    <h4>{props.entryContent.place} <FaPen style={{cursor:'pointer'}}/> <FaTrash style={{cursor:'pointer'}}/></h4>
                    <h5>{props.entryContent.startDate} - {props.entryContent.endDate}</h5>
                    <h5>{props.entryContent.degree}</h5>

                </div>
            
                {isOpen && <Modal setIsOpen={setIsOpen} title={props.title} updateCVContent = {props.updateCVContent} content = {props.content} type={props.type}
                recordsLength={props.recordsLength} mode='editDelete' />}
            </>

          )
    } 
    if (props.title === 'Professional Experience'){
        return (
            <>
                <div className='record-entry-preview' onClick={() => setIsOpen(true)}>
                    <h4>{props.entryContent.place} <FaPen style={{cursor:'pointer'}}/><FaTrash style={{cursor:'pointer'}}/></h4>
                    <h5>{props.entryContent.startDate} - {props.entryContent.endDate}</h5>
                    <h5>{props.entryContent.jobTitle}</h5>
                </div>
                {isOpen && <Modal setIsOpen={setIsOpen} title={props.title} updateCVContent = {props.updateCVContent} content = {props.content} type={props.type}
                recordsLength={props.recordsLength} mode='editDelete' />}
            </>

          )
    }
    if (props.docID!=null) {
        return (
            <>            
                <div className='record-entry-preview' onClick={() => setIsOpen(true)}>
                    <h4>{props.title} </h4>
                    <h3>{props.content[0].jobTitle}</h3>
                </div>
                {isOpen && <Modal setIsOpen={setIsOpen} title={props.title} updateCVContent = {props.updateCVContent} content = {props.content} type={props.type}
                recordsLength={props.recordsLength} mode='editDelete' />}
            </>

        )
    }

}

export default RecordEntry