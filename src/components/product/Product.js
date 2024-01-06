import React from 'react'
import "./Product.css"

function    Product({ logo, text }) {
  return (
    <div className='product-container'>
        <div>
            <img src={logo} alt='logo' />
        </div>
        <div className='product-text'>
            <a>{text}</a>
        </div>
    </div>
  )
}

export default Product