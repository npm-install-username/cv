import React from 'react';
import Accordion from './Accordion';
import '../styles/CVBuilder.scss'

function CVSection({title}) {
  return (
    <div class="container">
        <Accordion title = {title} />
        
    </div>
  )
}

export default CVSection