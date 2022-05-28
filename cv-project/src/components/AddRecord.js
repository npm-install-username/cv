import React, {useState} from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import Modal from './Modal';

function AddRecord(props) {
    // let dummyData = {
    //     place: 'Harvard University',
    //     startDate: 'June 2012',
    //     endDate: 'June 2015',
    //     jobTitle: 'Doctor',
    //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
    //   }
    // const addRecord = () =>{
    //     props.updateCVContent(props.content,props.title,dummyData,props.type)
    // }
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>    
      <button className='add-record-btn' onClick={() => setIsOpen(true)}><FaPlusCircle size={20} /></button>
      {isOpen && <Modal setIsOpen={setIsOpen} title={props.title} updateCVContent = {props.updateCVContent} content = {props.content} type={props.type}/>}
    </>

  )
}

export default AddRecord