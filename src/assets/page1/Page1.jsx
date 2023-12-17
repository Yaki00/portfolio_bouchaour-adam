import React, { useEffect } from 'react';
import "./Page1.css";

function Page1() {
    // Cette fonction sera appelée à chaque événement de scroll
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const text = document.querySelector('.text-page1');
        const cercle = document.querySelector('.cercle');
        

        const pourcentage = scrollY / 2100;
 
        
        
        text.style.setProperty('--width-before', `${pourcentage * 400}%`);

        if (scrollY >= 700) {
            text.style.setProperty('--spacing', `${(scrollY-700) / 700  * -50}px`);
            
        }else {
            // Reset to default spacing if scroll is less than 1100
            text.style.setProperty('--spacing', 0);
        }

        if (1900> scrollY && scrollY >= 1300) {
            cercle.style.display ='block';
            const offset = (scrollY - 1300) / 300 * 200;
            const boxShadowValue = `0px 0px ${offset}px ${offset}px #2bbd67`;
            

            // Set the custom property to apply the box-shadow.
            cercle.style.setProperty('--box-shadow', boxShadowValue);
        }else if(3000> scrollY && scrollY >= 1900){
            const offset2 = 400 * (1 - ((scrollY - 1900) / 1100));
            
            const boxShadowValue = `0px 0px ${offset2}px ${offset2}px #2bbd67`;
            cercle.style.setProperty('--box-shadow', boxShadowValue);
        }else {
            cercle.style.display ='none';
        }

        if (scrollY >= 2100) {
            text.style.position = 'absolute';
            text.style.top = '1000px';
        } else {
            text.style.position = 'fixed';
            text.style.top = '50%';
        }
    };

    useEffect(() => {
        const text = document.querySelector('.text-page1');
        text.style.setProperty('--spacing', '-30px')
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        // Nettoyer l'event listener lors de la désallocation du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='divaccueil'>
            <h1 className="text-page1">Portfolio </h1>
            <div className='cercle'></div>
        </div>
        
    );
}

export default Page1;
