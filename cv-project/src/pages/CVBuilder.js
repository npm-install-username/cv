import React from 'react';
import CVSection from '../components/CVSection';

function CVBuilder() {

  return (
    <>    
      <CVSection title='Personal Summary' type='text'/>
      <CVSection title='Education' type='record'/>
      <CVSection title='Professional Experience' type='record'/>
      <CVSection title='Skills' type='text'/>
      <CVSection title='Languages' type='text'/>
      <CVSection title='Interests' type='text'/>
    </>

    
  )
}

export default CVBuilder