import React, { useState } from 'react';
import GenerateCV from '../components/GenerateCV';
//import jsPDF from 'jspdf';
import TextInput from '../components/TextInput';
import Record from '../components/Record';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import '../styles/CVBuilder.scss';

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
      content: [
        {
          place: 'Harvard University',
          startDate: 'June 2012',
          endDate: 'June 2015',
          degree: 'Medicine',
          grade: '2:1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
        },
        {
          place: 'Harvard University',
          startDate: 'June 2012',
          endDate: 'June 2015',
          degree: 'Medicine',
          grade: '2:1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
        },
      ],
    },
    {
      id: 3,
      section: 'Professional Experience',
      content: [
        {
          place: 'Harvard University',
          startDate: 'June 2012',
          endDate: 'June 2015',
          jobTitle: 'Doctor',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
        },
        {
          place: 'Harvard University',
          startDate: 'June 2012',
          endDate: 'June 2015',
          jobTitle: 'Doctor',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
        },
        {
          place: 'Harvard University',
          startDate: 'June 2012',
          endDate: 'June 2015',
          jobTitle: 'Doctor',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur sapiente maiores voluptates autem. Itaque accusantium, consequuntur placeat unde numquam suscipit. Quas, maxime culpa distinctio dicta enim officia suscipit.'
        },
      ],
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

  const updateCVContent = (cvContent, sectionTitle, newContent, type) =>{
    let tempCV = [...cvContent]
    if (type === "text"){ 
      for (let i = 0; i < tempCV.length; i++) {
        if (tempCV[i].section === sectionTitle){
          tempCV[i].content = newContent
        }
      }
      setcvContent(tempCV)
    }
    if (type === "record"){
      for (let i = 0; i < tempCV.length; i++) {
        if (tempCV[i].section === sectionTitle){
          tempCV[i].content.push(newContent)
        }
      }
      setcvContent(tempCV)
    }
    console.log(cvContent)
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
    <div className='container'> 
      <Accordion allowZeroExpanded>
            <AccordionItem >
                <AccordionItemHeading >
                    <AccordionItemButton>
                        Personal Summary
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                        <TextInput title='Personal Summary' content={cvContent} updateCVContent={updateCVContent} type = 'text'/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Education
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                      <Record title='Education' content={cvContent} updateCVContent={updateCVContent} type = 'record'/>             
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Professional Experience
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                      <Record  title='Professional Experience' content={cvContent} updateCVContent={updateCVContent} type = 'record'/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Skills
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                      <TextInput title='Skills' content={cvContent} updateCVContent={updateCVContent} type = 'text'/>             
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Languages
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                      <TextInput title='Languages' content={cvContent} updateCVContent={updateCVContent} type = 'text'/>      
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Interests
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                      <TextInput title='Interests' content={cvContent} updateCVContent={updateCVContent} type = 'text'/>.                 
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>   
      <GenerateCV onGenerate={onGenerate} content={cvContent}/>
    </div>

    
  )
}

export default CVBuilder