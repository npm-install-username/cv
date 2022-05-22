import React, { useState } from 'react';
import CVSection from '../components/CVSection';
import GenerateCV from '../components/GenerateCV';

function CVBuilder() {
  const [cvContent, setcvContent] = useState([
    {
      id: 1,
      section: 'Personal Statement',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste beatae dolores vero nesciunt omnis amet ex voluptatem quis possimus saepe numquam totam eum, eius nam deserunt placeat minus atque!',
    },
    {
      id: 2,
      section: 'Education',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste beatae dolores vero nesciunt omnis amet ex voluptatem quis possimus saepe numquam totam eum, eius nam deserunt placeat minus atque!',
    },
    {
      id: 3,
      section: 'Professional Experience',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste beatae dolores vero nesciunt omnis amet ex voluptatem quis possimus saepe numquam totam eum, eius nam deserunt placeat minus atque!',
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

  const onGenerate = (cvContent) => {
    console.log(cvContent)
  }

  return (
    <>    
      <CVSection title='Personal Summary' type='text' content={cvContent}/>
      <CVSection title='Education' type='record' content={cvContent}/>
      <CVSection title='Professional Experience' type='record' content={cvContent}/>
      <CVSection title='Skills' type='text' content={cvContent}/>
      <CVSection title='Languages' type='text' content={cvContent}/>
      <CVSection title='Interests' type='text' content={cvContent}/>
      <GenerateCV onGenerate={onGenerate} content={cvContent}/>
    </>

    
  )
}

export default CVBuilder