import React, {useState, useEffect} from 'react';
import "./Slider.css";

import image1 from "./assets/slider-img1.avif";
import image2 from "./assets/slider-img2.avif";
import image1mob from "./assets/slider-img1-mobile.avif";
import image2mob from "./assets/slider-img2-mobile.jpg";

function Slider() {
    const images = {
        desktop: [image1, image2],
        mobile: [image1mob, image2mob]
    }
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1082);

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth < 1082);
    }


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex + 1 > images.desktop.length ? prevIndex - 1 : prevIndex + 1
        ));
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1));
    }


    useEffect(() => {
        const handleResize = () => {
        updateIsMobile();
        setCurrentIndex(0); // Reset index when switching between desktop and mobile
        };

        window.addEventListener('resize', handleResize);
        updateIsMobile(); // Initial check
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);


  return (
    <div className='slider-container'>
        <div className="slide">
            {
                currentIndex == 0 ? (
                    <div className="text-container">
                        <div className='top'>
                            <h2>Maximiza el día a día con Microsoft 365</h2>
                        </div>
                        <div className='center'>
                            <p>Recibe protección en línea, almacenamiento seguro en la nube y aplicaciones innovadoras diseñadas para adaptarse a tus necesidades, todo en un mismo plan. </p>
                        </div>
                        <div className='bottom'>
                            <input className='button1' type="button" value="Para 1 persona"/>
                            <div className='button2'>
                                <a>Hasta 6 personas</a>
                                <span class="material-symbols-outlined">arrow_forward_ios</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-container right">
                        <div className='top'>
                            <h2>Xbox Series X</h2>
                        </div>
                        <div className='center'>
                            <p>Recibe aventuras con la Xbox más rápida y formidable de todas. </p>
                        </div>
                        <div className='bottom'>
                            <input className='button1' type="button" value="Comprar Xbox Series X"/>
                        </div>
                    </div>
                )
            }

            <img src={images[isMobile ? 'mobile' : 'desktop'][currentIndex]} alt={images[currentIndex + 1]}/>
        </div>
        <div className="slider-controlers">
            <span className="material-symbols-outlined" onClick={prevSlide}>chevron_left</span>
            <div className='slider-indicators'>
                {
                    images.desktop.map((image, index) => (
                        <span key={index} className={`material-symbols-outlined ${currentIndex === index ? 'active' : ''}`}>fiber_manual_record</span>
                    ))
                }
            </div>
            <span className="material-symbols-outlined" onClick={nextSlide}>chevron_right</span>
        </div>
    </div>
  )
}

export default Slider;