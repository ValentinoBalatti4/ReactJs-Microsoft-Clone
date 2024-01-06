import React from 'react'
import xboxLogo from "./assets/xbox-logo.svg"
import windowsLogo from "./assets/windows-logo.svg"
import Product from '../product/Product'
import "./Products.css"

function Products() {
    const data = {
        microsoft: {logo: windowsLogo, text: "Elige tu Microsoft 365"},
        xbox: {logo: xboxLogo, text: "Comprar Xbox"},
        windows: {logo: windowsLogo, text: "Obtener windows 11"}
    }

  return (
    <div className='products-container'>
        {
            Object.keys(data).map((key) => {
                return <Product key={key} logo={data[key].logo} text={data[key].text}/>
            })
        }
    </div>
  )
}

export default Products