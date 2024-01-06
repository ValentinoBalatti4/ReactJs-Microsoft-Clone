import React from 'react'
import "./NewsSection.css"
import SectionElement from '../section-element/SectionElement';
import img1 from './assets/img1.avif';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.avif';
import img4 from './assets/img4.webp';
import Banner from '../banner/Banner';
import img5 from './assets/img5.webp';
import img6 from './assets/img6.webp';
import img7 from './assets/img7.avif';
import img8 from './assets/img8.webp';



function NewsSection() {

  const data1 = {
    1: {image: img1, title: "Regala equipos para jugar al mejor precio ", desc: "Disfruta de la velocidad y el rendimiento del futuro por un excelente precio con la Xbox Series S en Robot White. "},
    2: {image: img2, title: "Te presentamos el nuevo Bing ", desc: "Plantea preguntas verdaderas. Chatea y crea. Recibe respuestas mejores con el copiloto para Internet con tecnología de IA. "},
    3: {image: img3, title: "Xbox Game Pass Ultimate ", desc: "Unwrap 100+ games for one low monthly price. "},
    4: {image: img4, title: "Microsoft OneDrive", desc: "Guarda tus archivos y fotos en OneDrive y accede a ellos desde cualquier dispositivo y en cualquier lugar. "}
  }

  const data2 = {
    1: {image: img5, title: "Visual Studio 2022 ", desc: "Disfruta del IDE más completo para desarrolladores de .NET y C++ en Windows y crea juegos, servicios, aplicaciones web, en la nube, para el escritorio y dispositivos móviles. "},
    2: {image: img6, title: "Bienvenido a tu Windows 365 Cloud PC ", desc: "Disfruta de tu experiencia de Windows en forma segura por streaming desde la nube Microsoft a cualquier dispositivo. "},
    3: {image: img7, title: "Participa en la era de la IA", desc: "ea, comunica y programa con las últimas soluciones de IA de Microsoft. "},
    4: {image: img8, title: "Prueba Microsoft 365 gratis ", desc: "Disfruta de Microsoft Teams, almacenamiento seguro en la nube y aplicaciones exclusivas en los diferentes dispositivos con una prueba gratuita de Microsoft 365 Empresa Estándar durante un mes. "}
  }


  return (
    <>
      <div className='news-section-container'>
        {
          Object.keys(data1).map(key => {
            return <SectionElement key={key} image={data1[key].image} title={data1[key].title} description={data1[key].desc}/>
          })
        }
      </div>
      <Banner/>
      <div className='news-section-container'>
      {
          Object.keys(data2).map(key => {
            return <SectionElement key={key} image={data2[key].image} title={data2[key].title} description={data2[key].desc}/>
          })
        }
      </div>
    </>
  )
}

export default NewsSection