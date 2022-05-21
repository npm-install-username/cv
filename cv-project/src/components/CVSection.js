import React from 'react';
import Accordion from './Accordion';
import '../styles/CVBuilder.scss'

function CVSection({title, type}) {
  return (
    <div class="container">
        <Accordion title = {title} type={type} />
    </div>
  )
}

export default CVSection