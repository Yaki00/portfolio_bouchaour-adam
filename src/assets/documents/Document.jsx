import React, { useState, useEffect } from 'react';
import "./Document.css";

function Document() {  



  return (
    <>  
        <div className='container'>
            <h1 className='titreVeille'>Document</h1>
            
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card carddoc'>
                        <div className='card-body'>
                            <h5 className='card-title carddoctitre'>Tableau de Synthèse</h5>
                            <img className='imagedoc' src="/portfolio_bouchaour-adam/tableausynt.jpg" alt="" />
                            <p className='card-text'>Voici le tableau de synthèse demande a l'épreuve E4</p>
                            <a href="/portfolio_bouchaour-adam/Tableaudesynthèse.pdf" download className='btn btndoc'>Télécharger</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card carddoc'>
                        <div className='card-body'>
                            <h5 className='card-title carddoctitre'>GLPI</h5>
                            <img className='imagedoc' src="https://www.linuxtricks.fr/upload/logo-glpi.png" alt="" />
                            <p className='card-text'>Voici la documentation de GLPI, GLPI est un logiciel libre de gestion 
                            des services informatiques et de gestion des services d'assistance. </p>
                            <a href="/portfolio_bouchaour-adam/GLPI_2.PDF" className='btn btndoc'>Télécharger</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card carddoc'>
                        <div className='card-body'>
                            <h5 className='card-title carddoctitre'>AP1 ARANEA</h5>
                            <img className='imagedoc' src="/portfolio_bouchaour-adam/Aranea.jpg" alt="" />
                            <p className='card-text'>Projet AP1 création d'entreprise fictive</p>
                            <a href="Powerpoint_Aranea.pdf" download className='btn btndoc'>Télécharger</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card carddoc'>
                        <div className='card-body'>
                            <h5 className='card-title carddoctitre'>AP2 M2L</h5>
                            <img className='imagedoc' src="/portfolio_bouchaour-adam/m2lap2.jpg" alt="" />
                            <p className='card-text'>Projet AP2</p>
                            <a href="/portfolio_bouchaour-adam/AP2.pdf" download className='btn btndoc'>Télécharger</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card carddoc'>
                        <div className='card-body'>
                            <h5 className='card-title carddoctitre'>AP3 M2L</h5>
                            <img className='imagedoc' src="/portfolio_bouchaour-adam/m2lap3.jpg" alt="" />
                            <p className='card-text'>Projet AP3 création d'un site web</p>
                            <a href="" download className='btn btndoc'>Télécharger</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    
  );
}

export default Document; 