import React from 'react';
import TextInput from './TextInput';
import '../styles/CVBuilder.scss'

function CVSection({title}) {
  return (
    <div class="container">
        <div className="section-heading">
            <h2>{title}</h2>  
        </div>  
        <TextInput />
    </div>
  )
}

export default CVSection