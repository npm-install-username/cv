import React from 'react';
import Accordion from './Accordion';
import '../styles/CVBuilder.scss'

function CVSection({title, type, content, updateCVContent}) {
  return (
    <div class="container">
        <Accordion title = {title} type={type} content={content} updateCVContent = {updateCVContent}/>
    </div>
  )
}

export default CVSection