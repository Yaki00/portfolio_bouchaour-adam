import React, { useState, useEffect, useRef } from 'react'; // Ajout de useRef ici
import "./apropos.css";
import Competences from "./competences/competences.jsx";
import presentation from "./Presentation/presentation.jsx";
import Presentation from './Presentation/presentation.jsx';
import Raccourcis from './Raccourcis/Raccourcis';
import Cv from './Cv/Cv';


function Apropos() {
    const [showText, setShowText] = useState(true);
    const textRef = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        console.log(scrollY);
        
        

        if (scrollY >= 2500 && scrollY < 6000) {
            const opacity = Math.min((scrollY - 2500) / 2000, 1);
            
            if(textRef.current){
                textRef.current.style.setProperty('--opacity', opacity); 
            }  
        } else {
            if(textRef.current){
                textRef.current.style.setProperty('--opacity', 0);
            }
        }

        if (scrollY < 4000 && textRef.current) {
            textRef.current.style.position = 'fixed';
            textRef.current.style.top = '50%';
            textRef.current.style.left = '56%';
        } else if (scrollY >= 4000 && textRef.current) {
            const hautCalcule = 50 - ((scrollY - 4000) / 100) * 12.5;
            const gaucheCalcule = 56 - ((scrollY - 4000) / 100) * 9;
            const width = Math.max(6 - ((scrollY - 4000) / 100), 4);
       

            const haut = Math.max(hautCalcule, 5);
            const gauche = Math.max(gaucheCalcule, 30);
            textRef.current.style.top = `${haut}%`;
            textRef.current.style.left = `${gauche}%`;
            textRef.current.style.fontSize = `${width}vw`;
        }else if (scrollY >= 4400 && textRef.current) {
            textRef.current.style.position = 'absolute';
            textRef.current.style.top = '5%';
            textRef.current.style.left = '30%';
            textRef.current.style.fontSize = '4vw';
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>  
            <div className='approposdivglob'>
                <div className="containerTitreApropos">

                    {showText && <h1 ref={textRef} className="text-apropos">A propos</h1>}
                </div>
                <div className="containerApropos">
                <Presentation />
                <Competences />
                <Raccourcis />
                <Cv />

                </div>
                <div>

                </div>

            </div>
            
        </>
    );
}

export default Apropos;
