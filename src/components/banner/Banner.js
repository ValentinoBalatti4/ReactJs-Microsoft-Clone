import React from 'react'
import "./Banner.css"

import image from "./assets/microsoft-edge-landing.avif"

function Banner() {
  return (
    <div className='banner-container'>
        <div className='text-container'>
            <h2>Microsoft Edge</h2>
            <p>Un rendimiento de categoría mundial con más privacidad, más productividad y más valor mientras navegas </p>
            <div>
                <input type='button' value="Descargar ahora"/>
            </div>
        </div>
        <img src={image} alt="Microsoft Edge Image"/>
    </div>
  )
}

export default Banner