import React from 'react'
import "./Footer.css"

function Footer() {
    const info = {
        "Novedades": ["Microsoft 365", "Aplicaoines de windows 11"],
        "Microsoft Store": ["Perfil de la cuenta", "Centro de descargas", "Devoluciones", "Seguimiento de pedidos"],
        "Educacíon": ["Microsoft Educación", "Dispositivos para el sector educativo", "Microsoft Teams para Educación", "Microsoft 365 Educación", "Office Educación", "Entrenamiento y desarrollo para educadores", "Ofertas para estudiantes y padres", "Azure para estudiantes"],
        "Empresa": ["Microsoft Cloud","Seguridad de Microsoft","Azure","Dynamics 365","Microsoft 365","Microsoft Advertising","Microsoft Manufactura","Microsoft Teams"],
        "Desarrollador y TI": ["Centro de desarrolladores","Documentación","Microsoft Learn","Comunidad de Microsoft Tech","Marketplace de Azure","AppSource","Microsoft Power Platform","Visual Studio"],
        "Compañía":["Trabajos","Acerca de Microsoft","Privacidad en Microsoft","Inversionistas","Sustentabilidad"]
    }


  return (
    <div className='footer-container'>
        {
            Object.keys(info).map(key => (
            <div key={key}>
                <a style={{ fontWeight: 600 }}>{key}</a>
                <ul>
                {info[key].map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>
            ))
        }
    </div>
  )
}

export default Footer