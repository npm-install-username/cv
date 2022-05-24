import React from 'react';
import Accordion from './Accordion';
import '../styles/CVBuilder.scss'

function CVSection({title, type, cvContent, updateCVContent}) {
  return (
    <div class="container">
        <Accordion title = {title} type={type} content={cvContent} updateCVContent = {updateCVContent}/>
    </div>
  )
}

export default CVSection