import React from 'react'
import '../styles/Modal.scss'
import { RiCloseLine } from "react-icons/ri";
import TextInput from './TextInput';
import '../styles/TextInput.scss'

function Modal(props) {

  return (
    <>
        <div className="darkBG" onClick={() => props.setIsOpen(false)} />
        <div className="centered">
        <div className="modal">
            <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
            </div>
            <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className="modalContent">
                <form >
                    <label htmlFor="place">Company</label>
                    <input type="text" title='place'/>
                    {props.title === 'Education' &&
                        <div className="education-info-Wrapper">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" title='degree'/>
                            <label htmlFor="Grade">Grade</label>
                            <input type="text" title='endDate'/>
                        </div>
                    }
                    {props.title === 'Professional Experience' &&
                        <div className="work-info-Wrapper">
                            <label htmlFor="jobTitle">Title</label>
                            <input type="text" title='jobTitle'/>

                        </div>
                    }
                    <div className="date-Wrapper">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="text" title='startDate'/>
                        <label htmlFor="endDate">End Date</label>
                        <input type="text" title='endDate'/>
                    </div>
                    <div className="text-field">
                        <TextInput />
                    </div>
                </form>
            </div>
            <div className="modalActions">
            <div className="actionsContainer">
                <button className="deleteBtn" onClick={() => props.setIsOpen(false)}>
                Delete
                </button>
                <button
                className="cancelBtn"
                onClick={() => props.setIsOpen(false)}
                >
                Cancel
                </button>
            </div>
            </div>
        </div>
        </div>
    </>
    ); 
}

export default Modal
