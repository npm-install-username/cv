import React, { useState } from 'react';
import CVSection from '../components/CVSection';
import GenerateCV from '../components/GenerateCV';
//import jsPDF from 'jspdf';

function CVBuilder() {
  const [cvContent, setcvContent] = useState([
    {
      id:0,
      section: 'Personal Information',
      name: 'John Doe',
      jobTitle: 'Accountant',
      address: '123 Random Street, City, 34S ZC2, Country', 
      email: 'johndoe@email.com',
      phoneNum: '07221111111'
    },
    {
      id: 1,
      section: 'Personal Summary',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste beatae dolores vero nesciunt omnis amet ex voluptatem quis possimus saepe numquam totam eum, eius nam deserunt placeat minus atque!',
    },
    {
      id: 2,
      section: 'Education',
      content: {
        record1: {
          place: 'Harvard University',
          startDate: 'June 2012',
          endDate: 'June 2015',
          degree: 'Medicine',
          grade: '2:1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
        },
        record2: {
          place: 'Harvard University',
          startDate: 'June 2012',
          endDate: 'June 2015',
          degree: 'Medicine',
          grade: '2:1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
        },
      },
    },
    {
      id: 3,
      section: 'Professional Experience',
      content: {
        record1: {
          place: 'Harvard University',
          startDate: 'June 2012',
          endDate: 'June 2015',
          jobTitle: 'Doctor',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
        },
        record2: {
          place: 'Harvard University',
          startDate: 'June 2012',
          endDate: 'June 2015',
          jobTitle: 'Doctor',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
        },
      },
    },
    {
      id: 4,
      section: 'Skills',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste beatae dolores vero nesciunt omnis amet ex voluptatem quis possimus saepe numquam totam eum, eius nam deserunt placeat minus atque!',
    },
    {
      id: 5,
      section: 'Languages',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste beatae dolores vero nesciunt omnis amet ex voluptatem quis possimus saepe numquam totam eum, eius nam deserunt placeat minus atque!',
    },
    {
      id: 6,
      section: 'Interests',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste beatae dolores vero nesciunt omnis amet ex voluptatem quis possimus saepe numquam totam eum, eius nam deserunt placeat minus atque!',
    },
  ])

  // This will only work on function call. Need to include setcvcontent somehow.
  const updateCVContent = (cvContent, sectionTitle, newContent, type) =>{
    if (type === "text"){
      let tempCV = [...cvContent]
      for (let i = 0; i < tempCV.length; i++) {
        if (tempCV[i].section === sectionTitle){
          tempCV[i].content = newContent
        }
      }
      console.log(tempCV)
      setcvContent(tempCV)
    }

  }
  const onGenerate = (cvContent) => {
    
    // var doc = new jsPDF('p', 'pt');
    
    // doc.text(20, 20, cvContent[0].name)
    // doc.addFont('helvetica', 'normal')
    // doc.text(20, 60, cvContent[0].jobTitle)
    // doc.text(20, 100, cvContent[0].address)
    // doc.text(20, 100, cvContent[0].address)       
    
    // // doc.save('demo.pdf')
    // doc.output('dataurlnewwindow');
    
    console.log(cvContent)
  }

  return (
    <>    
      <CVSection title='Personal Summary' type='text' content={cvContent} updateCVContent={updateCVContent}/>
      <CVSection title='Education' type='record' content={cvContent} updateCVContent={updateCVContent}/>
      <CVSection title='Professional Experience' type='record' content={cvContent} updateCVContent={updateCVContent}/>
      <CVSection title='Skills' type='text' content={cvContent} updateCVContent={updateCVContent}/>
      <CVSection title='Languages' type='text' content={cvContent} updateCVContent={updateCVContent}/>
      <CVSection title='Interests' type='text' content={cvContent} updateCVContent={updateCVContent}/>
      <GenerateCV onGenerate={onGenerate} content={cvContent}/>
    </>

    
  )
}

export default CVBuilder