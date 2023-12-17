import React, { useState, useEffect, useRef } from 'react';
import "./Cv.css";

function Cv() {
    const [isCvEnlarged, setIsCvEnlarged] = useState(false);
    const cvDiv = useRef(null);
    const [cvIsVisible, setcvIsVisible] = useState(false);
    const [cvPosition, setCvPosition] = useState('fixed');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY >= 5300) {
            cvDiv.current.style.display = 'block';
            if(scrollY >=5301){
                setcvIsVisible(!cvIsVisible);
            }
             else if (scrollY < 5600 && cvPosition !== 'fixed') {
                setCvPosition('fixed');
            }
        } else if (scrollY < 5300) {
            cvDiv.current.style.display = 'none';
        }
        if (scrollY >= 6000 ) {
            cvDiv.current.style.display = 'none';
        }
    };



    const toggleCvSize = () => {
        setIsCvEnlarged(!isCvEnlarged);
    };

    useEffect(() => {
        if (isCvEnlarged) {
           
            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = '';
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isCvEnlarged]);

    return (
        <> 
            <div className={`overlay ${isCvEnlarged ? 'show' : ''}`} onClick={toggleCvSize}></div>
            <div ref={cvDiv} className={`divcv ${cvPosition} ${cvIsVisible ? 'cvIsVisible' : ''} ${isCvEnlarged ? 'enlarged' : ''}`}>
                <h1>Curriculum Vitae</h1>
                <div className='cvimg deploiementcv' onClick={toggleCvSize}>
                    <img src="./bouchaour-adam-cv.jpg" alt="CV" />
                </div>

                <div className='iconscv'>
                    <img className='iconcv' src="./icons8-loupe-50.png" alt="" onClick={toggleCvSize}  />
                    <a href="./bouchaour-adam-cv.pdf" download>
                        <img className='iconcv' src="./icons8-download-24.png" alt="" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Cv;