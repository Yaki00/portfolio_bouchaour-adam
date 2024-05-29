import React, { useState } from 'react';
import "./Document.css";
import '../Apropos/Ecole/Ecole.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Document() {
    const [expanded, setExpanded] = useState(null);
    const [filter, setFilter] = useState(null); // État pour le filtre
    const [expandedCards, setExpandedCards] = useState({});
    const [additionalContent, setAdditionalContent] = useState({});


    const toggleExpand = (cardTitle) => {
        setExpandedCards(prevState => ({
            ...prevState,
            [cardTitle]: !prevState[cardTitle]
        }));

        // Ajout des boutons de téléchargement supplémentaires pour la carte "AP3 M2L"
        if (cardTitle === "AP3 M2L") {
            setAdditionalContent(prevState => ({
                ...prevState,
                [cardTitle]: !prevState[cardTitle] ? (
                    <div>
                        <Button href="/portfolio_bouchaour-adam/M2L_BASE_DE_DONNEES.pdf" download>M2L BASE DE DONNEES</Button>
                        <Button href="/portfolio_bouchaour-adam/Tableau_AP3.pdf" download>Tableau</Button>
                        <Button href="/portfolio_bouchaour-adam/Requetes_AP3.pdf" download>Requetes</Button>
                    </div>
                ) : null
            }));
        }
    };


    // Fonction pour appliquer le filtre
    const applyFilter = (filterCriteria) => {
        console.log("test");
        console.log("Filtre appliqué :", filterCriteria);
        setFilter(filterCriteria);
    };

    // Informations des cartes
    const cardInfo = [
        {
            title: "Tableau de Synthèse",
            imgSrc: "/portfolio_bouchaour-adam/tableausynt.jpg",
            description: "Tableau de synthèse",
            downloadLink: "/portfolio_bouchaour-adam/Tableaudesynthèse1.pdf",
            category: "Ecole",
            expandable: false
        },
        {
            title: "GLPI",
            imgSrc: "https://www.linuxtricks.fr/upload/logo-glpi.png",
            description: "Guide d'installation et de configuration de GLPI avec test",
            downloadLink: "/portfolio_bouchaour-adam/GLPI_2.pdf",
            category: "Ecole",
            expandable: false
        },
        {
            title: "AP1 ARANEA",
            imgSrc: "/portfolio_bouchaour-adam/Aranea.jpg",
            description: "Projet AP1 création d'entreprise fictive",
            downloadLink: "/portfolio_bouchaour-adam/Powerpoint_Aranea.pdf",
            category: "Ecole",
            expandable: false
        },
        {
            title: "AP2 M2L",
            imgSrc: "/portfolio_bouchaour-adam/m2lap2.jpg",
            description: "Projet AP2, proposition des solutions aux problématiques de M2L",
            downloadLink: "/portfolio_bouchaour-adam/AP2.pdf",
            category: "Ecole",
            expandable: false
        },
        {
            title: "AP3 M2L",
            imgSrc: "/portfolio_bouchaour-adam/m2lap3.jpg",
            description: "Projet AP3, mise en place d'une application web pour le client",
            downloadLink: "/portfolio_bouchaour-adam/AP3.pdf",
            category: "Ecole",
            expandable: false
        },
        {
            title: "AP4 M2L",
            imgSrc: "/portfolio_bouchaour-adam/m2lap3.jpg",
            description: "Projet AP4, mise en place d'une application mobile pour le client",
            downloadLink: "/portfolio_bouchaour-adam/AP4.pdf",
            category: "Ecole",
            expandable: false
        },

        {
            title: "Test Unitaire",
            imgSrc: "/testunitaire.jpg",
            description: "Test unitaire de l'application web / mobile M2L AP3 / AP4",
            downloadLink: "/portfolio_bouchaour-adam/E5_Tests_Unitaires.pdf",
            category: "Ecole",
            expandable: false
        },

        {
            title: "Cahier des charges",
            imgSrc: "./cahiercharges.jpg",
            description: "Cahier des charges de l'application web / mobile M2L AP3 / AP4",
            downloadLink: "/portfolio_bouchaour-adam/Cahier_des_charges.pdf",
            category: "Ecole",
            expandable: false
        },

        {
            title: "Feely",
            imgSrc: "/portfolio_bouchaour-adam/feedly.jpg",
            description: " Feedly est une solution qui permet de suivr des flux RSS, de cette façons les utilisateurs ont un support de veille informationnelle. ",
            downloadLink: "/portfolio_bouchaour-adam/Feedly.pdf",
            category: "Ecole",
            expandable: false
        },
        {
            title: "Ubuntu",
            imgSrc: "/ubuntu.jpg",
            description: " Guide d'installation et de configuration d'un serveur Ubuntu sur une machine virtuelle",
            downloadLink: "/portfolio_bouchaour-adam/Déploiement-VM.pdf",
            category: "Ecole",
            expandable: false
        },
        {
            title: "Figma",
            imgSrc: "/figma.png",
            description: " Documentation de l'outil Figma",
            downloadLink: "/portfolio_bouchaour-adam/Figma.pdf",
            category: "Entreprise",
            expandable: false
        },
        {
            title: "Poke Api",
            imgSrc: "/pokeapi.png",
            description: " Documentation de l'API PokeApi ",
            downloadLink: "/portfolio_bouchaour-adam/DOC_pokeapi.pdf",
            category: "Ecole",
            expandable: false
        },
        {
            title: "SPE",
            imgSrc: "/SPE.jpg",
            description: " Documentation pour le site SPE",
            downloadLink: "/portfolio_bouchaour-adam/SPE.pdf",
            category: "Entreprise",
            expandable: false
        },
        {
            title: "A110 Club",
            imgSrc: "/Alpine-Logo.png",
            description: " Documentation pour le site A110 Club",
            downloadLink: "/portfolio_bouchaour-adam/A110_Club_Documentation.pdf",
            category: "Entreprise",
            expandable: false
        }
    ];



    // Filtrer les cartes selon le critère sélectionné
    const filteredCards = filter ? cardInfo.filter(card => card.category === filter) : cardInfo;

    return (
        <>
            <div id="doc" className='container' style={{ zIndex: 10 }}>
                <h1 className='titreVeille'>Document</h1>
                <p className='textdoc'>Retrouvez ici tous les documents que j'ai réalisé durant ma formation</p>
                <hr />

                <div className='row'>
                    <div className='col-md-3'>
                        <Card className='card carddoc'>
                            <Card.Body>
                                <Card.Title>Filtres</Card.Title>
                                <div className="filters">
                                    <Button onClick={() => applyFilter("Ecole")} className='btn btndoc'>Ecole</Button>
                                    <Button onClick={() => applyFilter("Entreprise")} className='btn btndoc'>Entreprise</Button>
                                    <Button onClick={() => applyFilter(null)} className='btn btndoc'>Afficher Tout</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    {filteredCards.map((card, index) => (
                        <div className='col-md-3' key={index}>
                            <div className='card carddoc'>
                                <div className='card-body'>
                                    <h5 className='card-title carddoctitre'>{card.title}</h5>
                                    <img className='imagedoc' src={card.imgSrc} alt={card.title} />
                                    {expandedCards[card.title] || !card.expandable ? card.description : `${card.description.slice(0, 50)}...`}
                                    {/* Affichage du contenu supplémentaire */}
                                    {additionalContent[card.title]}
                                    {/* Bouton Voir plus */}
                                    {card.expandable && (
                                        <Button variant="primary" onClick={() => toggleExpand(card.title)}>
                                            {expandedCards[card.title] ? "Voir moins" : "Voir plus"}
                                        </Button>
                                    )}
                                    <hr />
                                    <div className='blockbtn'>
                                        <a href={card.downloadLink} download className='btn btndoc'>Télécharger</a>
                                        <a href={card.downloadLink} target='_blank' className='btn btndoc'>Voir</a>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Document;
