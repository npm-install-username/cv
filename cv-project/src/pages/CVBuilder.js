import React from 'react';
import CVSection from '../components/CVSection';

function CVBuilder() {

  return (
    <>    
      <CVSection title='Personal Summary' />
      <CVSection title='Education' />
      <CVSection title='Professional Experience' />
      <CVSection title='Skills' />
      <CVSection title='Languages' />
      <CVSection title='Interests' />
    </>

    
  )
}

export default CVBuilder