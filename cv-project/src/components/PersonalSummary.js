import React from 'react';
import TextInput from './TextInput';
import '../styles/CVBuilder.scss'

function PersonalSummary() {
  return (
    <div class="container">
        <div className="section-heading">
            <h2>Personal Summary</h2>  
        </div>  
        <TextInput />
    </div>
  )
}

export default PersonalSummary