import React, { useState, useEffect, useRef } from 'react'; // Ajout de useRef ici
import "./competences.css";

function Competences() {
    const cardCompetence = useRef(null);
    const innerCard = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY >= 6000 || scrollY < 5100) {
            
            setIsVisible(false);
           
            if (innerCard.current && innerCard.current.classList.contains('rotate')) {
                innerCard.current.classList.remove('rotate');
            }
        } else {
            setIsVisible(true);
            
            if (innerCard.current && !innerCard.current.classList.contains('rotate')) {
                setTimeout(() => {
                    innerCard.current.classList.add('rotate');
                }, 1000); // Assurez-vous que la durée correspond à celle de votre animation
            }
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
        
        <div ref={cardCompetence} className={`myCard ${isVisible ? 'visible' : ''}`}>
            <h1>Compétence</h1>
            <div ref={innerCard} className="innerCard">
                <div className="frontSide">
                    <p className="title">FRONT</p>
                    <img className='imagezoom' width="180" height="180" src="https://img.icons8.com/color/220/css3.png" alt="css3"/>
                    <p>CSS</p>
                    <img className='imagezoom' width="180" height="180" src="https://img.icons8.com/officel/2200/react.png" alt="react"/>
                    <p>React</p>
                    <img className='imagezoom' width="180" height="180" src="https://img.icons8.com/color/240/angularjs.png" alt="angularjs"/>
                    <p>Angular</p>
                    <img src="" alt="" />
                </div>
                <div className="backSide">
                    <p className="title">BACK</p>
                    <img className='imagezoom' width="180" height="180" src="https://img.icons8.com/nolan/180/symfony.png" alt="symfony"/>
                    <p>Symfony / PHP</p>
                    <img className='imagezoom' width="180" height="180" src="https://img.icons8.com/color/180/python--v1.png" alt="python--v1"/>
                    <p>Python</p>
                    <img className='imagezoom' width="180" height="180" src="https://img.icons8.com/fluency/180/node-js.png" alt="node-js"/>
                    <p>NodeJS</p>
                </div>
            </div>
        </div>

    </>
    );
}

export default Competences;