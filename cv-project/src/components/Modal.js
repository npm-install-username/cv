import React , {useState} from 'react'

import { RiCloseLine } from "react-icons/ri";
import TextInput from './TextInput';


function Modal(props) {
    const handleSubmit = (e) =>{
        e.preventDefault();
        let entry = {
            // +1 because records length will become 1 longer after updating this (records length only goes up by 1 after adding)
            key: props.recordsLength + 1,
            place: place,
            startDate: startDate,
            endDate: endDate,
            content: textField,
        }
        if (props.title==='Education'){
            entry.degree = degree
            entry.grade = grade

        }
        if (props.title==='Professional Experience'){
            entry.jobTitle = jobTitle
        }
        console.log(entry)
        props.updateCVContent(props.content,props.title,entry,props.type)
        props.setIsOpen(false)
        
    }
    const [place,setPlace] = useState('')
    const [jobTitle,setJobTitle] = useState('')
    const [degree,setDegree] = useState('')
    const [grade, setGrade] = useState('')
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const [textField, setTextField] = useState('')

  return (
    <>
        <div className="darkBG" onClick={() => props.setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                    <h5 className="heading">Add Info</h5>
                    </div>
                    <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="place">Company</label>
                            <input type="text" title='place' name='place' required value={place} onChange={(e) => setPlace(e.target.value)}/>
                            {props.title === 'Education' &&
                                <div className="education-info-Wrapper">
                                    <label htmlFor="degree" >Degree</label>
                                    <input type="text" title='degree' name='degree' required value={degree} onChange={(e) => setDegree(e.target.value)}/>
                                    <label htmlFor="grade">Grade</label>
                                    <input type="text" title='grade' name='grade' required value={grade} onChange={(e) => setGrade(e.target.value)}/>
                                </div>
                            }
                            {props.title === 'Professional Experience' &&
                                <div className="work-info-Wrapper">
                                    <label htmlFor="jobTitle">Title</label>
                                    <input type="text" title='jobTitle' name='jobTitle' required value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>

                                </div>
                            }
                            <div className="date-Wrapper">
                                <label htmlFor="startDate" >Start Date</label>
                                <input type="text" title='startDate' name='startDate' required value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                                <label htmlFor="endDate">End Date</label>
                                <input type="text" title='endDate'name='endDate' required value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                            </div>
                            <div className="text-field">
                                <TextInput  title={props.title} content={props.content} updateCVContent={props.updateCVContent} type = 'record' setTextField={setTextField} />
                            </div>
                                <div className="modalActions">
                                <div className="actionsContainer">
                                <button className="addBtn" >
                                Add Record
                                </button>
                                <button
                                className="cancelBtn"
                                onClick={() => props.setIsOpen(false)}
                                >
                                Cancel
                                </button>
                            </div>
                        </div>
                        </form>
                    </div>

            </div>
        </div>
    </>
    ); 
}

export default Modal
