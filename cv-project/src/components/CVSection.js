import React from 'react';
import Accordion from './Accordion';
import '../styles/CVBuilder.scss'

function CVSection({title, type, content}) {
  return (
    <div class="container">
        <Accordion title = {title} type={type} content={content} />
    </div>
  )
}

export default CVSection