import React from 'react'

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
    <button onClick={addRecord}>Add</button>
  )
}

export default AddRecord