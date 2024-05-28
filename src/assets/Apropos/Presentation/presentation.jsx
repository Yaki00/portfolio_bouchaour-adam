import React, { useState, useEffect, useRef } from 'react';
import "./presentation.css";

function Presentation() {

    const pav1 = useRef(null);

    const textPrenom = useRef(null);
    const textNom = useRef(null);
    const textAge = useRef(null);
    const textProfession = useRef(null);



    const handleScroll = () => {
        const scrollY = window.scrollY;


        const displayStyle1 = scrollY > 4400 && scrollY < 6000 ? 'block' : 'none';
        const displayStyle2 = scrollY > 4500 && scrollY < 6000 ? 'block' : 'none';
        const displayStyle3 = scrollY > 4600 && scrollY < 6000 ? 'block' : 'none';
        const displayStyle4 = scrollY > 4700 && scrollY < 6000 ? 'block' : 'none';
        const displayStyle5 = scrollY > 4800 && scrollY < 6000 ? 'block' : 'none';


        if (pav1.current && textPrenom.current && textNom.current && textAge.current && textProfession.current) {
            pav1.current.style.display = displayStyle1;
            textPrenom.current.style.display = displayStyle2;
            textNom.current.style.display = displayStyle3;
            textAge.current.style.display = displayStyle4;
            textProfession.current.style.display = displayStyle5;
            
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
            <div ref={pav1} className='pav1' >
                    <h1>Présentation</h1>
                    <p ref={textPrenom} className='ecriture l13l'> Prénom :  <strong>Adam</strong></p>
                    <p ref={textNom} className='ecriture l15l'> Nom :  <strong>Bouchaour</strong></p> 
                    <p ref={textAge} className='ecriture l8l'> Age :  <strong>25</strong></p> 
                    <p ref={textProfession} className='ecriture l35l'> Profession :  <strong>étudiant à l' <a className='link' href="https://esic.fr/">ESIC</a> </strong></p>    
            </div>
        </>
    );
}

export default Presentation;