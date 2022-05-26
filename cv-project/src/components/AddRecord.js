import React from 'react'
import '../styles/buttons.scss'
import { FaPlusCircle } from 'react-icons/fa';

function AddRecord(props) {
    let dummyData = {
        place: 'Harvard University',
        startDate: 'June 2012',
        endDate: 'June 2015',
        jobTitle: 'Doctor',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
      }
    const addRecord = () =>{
        props.updateCVContent(props.content,props.title,dummyData,props.type)
    }
  return (
    <button className='add-record-btn' onClick={addRecord}><FaPlusCircle size={20} /></button>
  )
}

export default AddRecord