import React, { useState, useEffect } from 'react';
import "./Ecole.css";
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Ecole() {

    const [cardText, setCardText] = useState({
        SISR: {
            default: (
                <>
                <p>Le BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) forme des techniciens supérieurs 
                    capables de mettre en place et de gérer des infrastructures réseaux et des systèmes informatiques.</p>
                </>
            ),


            expanded: (
                <>
                <h1>SISR : Solutions d'Infrastructure, Systèmes et Réseaux</h1>

                <section>
                    <h2>Qu'est-ce que le SISR?</h2>
                    <p>Le SISR, ou Solutions d'Infrastructure, Systèmes et Réseaux, est une spécialisation du BTS Services Informatiques aux Organisations. Cette formation prépare les étudiants à concevoir, gérer et maintenir l'infrastructure réseau d'une organisation, en se concentrant sur les compétences techniques nécessaires pour administrer des réseaux, gérer des serveurs, et assurer la sécurité des systèmes d'information.</p>
                </section>

                <section>
                    <h2>Matières Enseignées</h2>
                    <p>Les étudiants en SISR abordent un large éventail de sujets, tels que :</p>
                    <ul>
                        <li>Administration Réseau : Configuration et gestion des réseaux informatiques.</li>
                        <li>Gestion des Serveurs : Installation, configuration et maintenance des serveurs.</li>
                        <li>Sécurité Informatique : Mise en place de mesures de sécurité pour protéger les données et les systèmes.</li>
                        <li>Virtualisation : Création et gestion de systèmes virtuels pour optimiser les ressources.</li>
                        <li>Base de Données : Gestion des bases de données et assurer leur intégrité et leur disponibilité.</li>
                    </ul>
                </section>

                <section>
                    <h2>Débouchés Professionnels</h2>
                    <p>Les diplômés du parcours SISR sont préparés pour diverses carrières dans le domaine des systèmes et réseaux informatiques, comme :</p>
                    <ul>
                        <li>Administrateur Système et Réseau : Gestion et maintenance des infrastructures réseau d'une organisation.</li>
                        <li>Technicien Support Informatique : Assistance et dépannage des systèmes informatiques.</li>
                        <li>Consultant en Sécurité Informatique : Conseil en sécurité des systèmes d'information.</li>
                        <li>Ingénieur Réseaux : Conception et déploiement de solutions réseau pour les entreprises.</li>
                    </ul>
                </section>
                </>
            )},
        SLAM: {
            default: (
                <>
                <p>Le BTS SIO option SLAM (Solutions Logicielles et Applications Métiers) forme des techniciens supérieurs capables de 
                    développer des applications informatiques.</p>
                </>
            ),
            expanded: (
                <>
                <h1>SLAM : Solutions Logicielles et Applications Métiers</h1>

                <section>
                    <h2>Qu'est-ce que le SLAM?</h2>
                    <p>Le SLAM, ou Solutions Logicielles et Applications Métiers, est une spécialisation du BTS Services Informatiques aux Organisations qui se concentre sur le développement de logiciels et d'applications métier. Les étudiants apprennent à concevoir, développer, et maintenir des solutions logicielles, des bases de données, et des applications web ou mobiles.</p>
                </section>

                <section>
                    <h2>Matières Enseignées</h2>
                    <p>La formation SLAM couvre des domaines tels que :</p>
                    <ul>
                        <li>Développement d'Applications : Conception et programmation d'applications web et mobiles.</li>
                        <li>Gestion de Bases de Données : Création et gestion de bases de données.</li>
                        <li>Programmation Orientée Objet : Utilisation de langages comme Java ou C#.</li>
                        <li>Interface Utilisateur : Conception d'interfaces intuitives et conviviales.</li>
                        <li>Analyse et Conception de Systèmes d'Information : Analyse des besoins et conception de systèmes informatiques adaptés.</li>
                    </ul>
                </section>

                <section>
                    <h2>Débouchés Professionnels</h2>
                    <p>Les diplômés de SLAM peuvent prétendre à des postes tels que :</p>
                    <ul>
                        <li>Développeur d'Applications : Création d'applications pour répondre aux besoins spécifiques.</li>
                        <li>Analyste Programmeur : Analyse des besoins des utilisateurs et développement de solutions logicielles.</li>
                        <li>Chef de Projet Informatique : Gestion de projets de développement logiciel.</li>
                        <li>Consultant en Systèmes d'Information : Conseil en matière de systèmes d'information pour les entreprises.</li>
                    </ul>
                </section>
                </>
            )
        }
    });



    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMIPvs5en9lYn39p9H_dQr8WhJd3iNGT50LaoqLWyBg&shttps://t2e2i7f7.rocketcdn.me/wp-content/uploads/2022/07/master-cybersecurite-paris-6.png",
        "https://file.diplomeo-static.com/crop/450x450/00/00/02/39/23924.jpg",
        "https://mesinfos.fr/content/articles/475/A114475/initial-coblence-avocats.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDW87_ciG7ChQoiZdccYfwMP_Cucp0vVlkuejEPvA8Q&s",
        "https://t2e2i7f7.rocketcdn.me/wp-content/uploads/2022/11/se-reorienter-dans-linformatique-rentrees-decalees.jpg",
        "https://walt.community/uploads/media/6221df85c9729_.png",
        "https://t2e2i7f7.rocketcdn.me/wp-content/uploads/2023/04/campus-montpellier-locaux-1-1.jpg",
    ];

    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (option) => {
        console.log(option);
        setExpanded(expanded === option ? null : option);
    };

    const handleClickOutside = (event) => {
        if (expanded && !event.target.closest('.cardecole')) {
            setExpanded(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [expanded]);
    return (
        <div id="parcours" className="container my-5 ecolediv">
            <h1 className="titreVeille">Parcours</h1> 
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <ul className="timeline">
            <li>
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>BTS SIO SLAM</h4>
                  <h5>ESIC / IPSSI, 2022 - 2024</h5>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Stage Informatique Developpement Web</h4>
                  <h5>Wecyde, 3 mois 2022-2024</h5>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Licence Math Informatique</h4>
                  <h5>Université Paris Saclay, 2019-2022</h5>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  
                    <div className='cardphoto  '>
                        <div className="photo-stack mb-3">
                            {images.map((src, index) => (
                                <img key={index} src={src} alt={`Image ${index}`} className={`stacked-photo photo-${index}`} />
                            ))}
                        </div>

                    </div>

                </div>

                <div >
                    <h3>BTS SIO</h3>
                    <p>Le BTS SIO (Services Informatiques aux Organisations) est une formation de niveau bac+2 qui permet d'obtenir un diplôme d'État. Il est possible de suivre cette formation en alternance ou en initial.</p>
                    <div className="row">
                        <div className="col-md-6">
                           <Card className={`cardecole ${expanded === 'SISR' ? 'expanded' : ''}`}>
                                <Card.Body>
                                    <Card.Title className="carddoctitre">SISR</Card.Title>
                                    <Card.Text>
                                    {expanded === 'SISR' ? cardText.SISR.expanded : cardText.SISR.default}
                                    </Card.Text>
                                    <Button className="btn btnecole"  onClick={() => toggleExpand('SISR')}>En savoir plus</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                        <Card className={`cardecole ${expanded === 'SLAM' ? 'expanded' : ''}`}>
                                <Card.Body>
                                    <Card.Title className="carddoctitre">SLAM</Card.Title>
                                    <Card.Text>
                                    {expanded === 'SLAM' ? cardText.SLAM.expanded : cardText.SLAM.default}
                                    </Card.Text>
                                    <Button className="btn btnecole"  onClick={() => toggleExpand('SLAM')}>En savoir plus</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ecole;
