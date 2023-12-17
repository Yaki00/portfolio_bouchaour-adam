import React, { useState, useEffect, useRef } from 'react';
import "./Raccourcis.css";


function Raccourcis() {
    const blockRaccouris = useRef(null);
    const [animationStart, setAnimationStart] = useState(null);
    const [etatAnimationR, setEtatAnimationR] = useState(false);

    const [animationEnCours, setAnimationEnCours] = useState(false);

    const updateBlur = (startTime) => {
        const elapsedTime = performance.now() - startTime;
        
        const flou = Math.max(0, 100 - (200 * elapsedTime / 3000));
        
        blockRaccouris.current.style.filter = `blur(${flou}px)`;
        

        if (elapsedTime < 3000) {
            requestAnimationFrame(() => updateBlur(startTime));
        } else {
            setEtatAnimationR(true);
            setAnimationEnCours(false);
        }

    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
       
        if (scrollY > 5300 ) {
            blockRaccouris.current.style.display = 'block';
            if(!etatAnimationR && !animationEnCours){
                setAnimationEnCours(true);
                const startTime = performance.now();
            setAnimationStart(startTime);
            requestAnimationFrame(() => updateBlur(startTime));
            }
        } else if (scrollY <= 5300 && blockRaccouris.current && !animationEnCours ) {
            blockRaccouris.current.style.display = 'none';
        }
        if (scrollY > 6000 ) {
            blockRaccouris.current.style.display = 'none';
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animationStart, etatAnimationR, animationEnCours]);

    

    return (

        

    <>  
        <div ref={blockRaccouris} className='blockRaccourcis'>
            <h1>Lien rapide </h1>
            <div className="raccourcis">
                <a href="" className='link'>
                    <p>Linkedin</p>
                    <img className='imgraccourcis' width="50" height="50" src="/icons8-github-50.png" alt="linkedin"/>
                </a>
                <a href="" className='link'>
                    <p>GitHub</p>
                    <img className='imgraccourcis' width="50" height="50" src="/icons8-linkedin-50.png" alt="github"/>
                </a>
                <a href="" className='link'>
                    <p>Mail</p>
                    <img className='imgraccourcis' width="50" height="50" src="/icons8-mail-50.png" alt="resume"/>
                </a>
            </div>
        </div>
        
        
        

    </>
    );
}

export default Raccourcis;