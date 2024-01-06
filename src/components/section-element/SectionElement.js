import React from 'react'
import "./SectionElement.css"

function SectionElement({ image, title, description }) {
  return (
    <div className='section-element-container'>
        <img src={image} alt='News Image'/>
        <div className='section-element-text'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default SectionElement