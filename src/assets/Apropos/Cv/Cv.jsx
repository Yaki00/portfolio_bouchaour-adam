import React, { useState, useEffect, useRef } from 'react';
import "./Cv.css";

function Cv() {
    const [isCvEnlarged, setIsCvEnlarged] = useState(false);
    const cvDiv = useRef(null);
    const [cvIsVisible, setcvIsVisible] = useState(false);
    const [cvPosition, setCvPosition] = useState('fixed');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY >= 5300 && scrollY < 6000) {
            cvDiv.current.style.display = 'block';
            setCvPosition('fixed');
            setcvIsVisible(true);
        } else {
            cvDiv.current.style.display = 'none';
            setcvIsVisible(false);
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
                    <img src="./CV Bouchaour Adam.jpg" alt="CV" />
                </div>

                <div className='iconscv'>
                    <img className='iconcv' src="./icons8-loupe-50.png" alt="" onClick={toggleCvSize}  />
                    <a href="./Bouchaour Adam (2).pdf" download>
                        <img className='iconcv' src="./icons8-download-24.png" alt="" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Cv;