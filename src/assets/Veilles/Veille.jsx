import React, { useState, useEffect, useRef } from 'react';
import "./Veille.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Veille() {
    const [cardText, setCardText] = useState({
        deepfake: {
            default: `Le deepfake est une technique avancée de synthèse 
            d'image basée sur l'intelligence artificielle qui permet de superposer des fichiers audio et vidéo
         existants pour créer des contenus qui semblent réels. Le terme 'deepfake' est un amalgame de 
         "deep learning' (apprentissage profond) et 'fake' (faux), indiquant ainsi que les contenus sont créés à 
         l'aide d'algorithmes d'apprentissage profond.`,


            expanded: (
                <>
                    <p>Le deepfake est une technique avancée de synthèse
                    d'image basée sur l'intelligence artificielle qui permet de superposer des fichiers audio et vidéo existants pour créer des contenus qui semblent réels.
                    Le terme "deepfake" est un amalgame de "deep learning" (apprentissage profond) et "fake" (faux),
                    indiquant ainsi que les contenus sont créés à l'aide d'algorithmes d'apprentissage profond.</p>
        
                    <h2>Introduction</h2>
                    <p>Les deepfakes sont principalement connus pour leur capacité à créer des vidéos trompeuses, où les visages ou les voix de personnes sont remplacés par ceux d'autres individus. Cette technologie repose sur des réseaux de neurones convolutifs (CNN) et des réseaux antagonistes génératifs (GAN), qui apprennent à reconnaître et à reproduire des modèles complexes dans les données audiovisuelles.</p>
                    
                    <h2>Développement et Technique</h2>
                    <p><b>Technologie sous-jacente :</b></p>
                    <ul>
                        <li>Réseaux antagonistes génératifs (GAN) : Ces systèmes utilisent deux réseaux neuronaux concurrents, le générateur et le discriminateur, pour créer des images très réalistes.</li>
                        <li>Apprentissage profond et modélisation : Les réseaux de neurones sont entraînés sur d'énormes ensembles de données pour apprendre à imiter l'apparence, les mouvements et les sons des cibles.</li>
                    </ul>
                    <p><b>Utilisations et Applications :</b></p>
                    <ul>
                        <li>Divertissement et médias : Utilisation dans les films pour rajeunir des acteurs ou pour les doublages linguistiques.</li>
                        <li>Éducation et recherche : Recréation de figures historiques pour des expériences éducatives interactives.</li>
                        <li>Politique et propagande : Création de faux discours ou de scénarios impliquant des figures publiques.</li>
                    </ul>
                    <p><b>Exemples récents et cas notables :</b></p>
                    <ul>
                        <li>Politique : Des vidéos de figures politiques, comme Barack Obama et Donald Trump, ont été créées pour démontrer les dangers potentiels des deepfakes en politique.</li>
                        <li>Cinéma : Utilisation dans le film "The Irishman" pour rajeunir Robert De Niro et Al Pacino.</li>
                        <li>Réseaux sociaux : Diffusion de vidéos deepfake de célébrités sur des plateformes comme TikTok et Instagram.</li>
                    </ul>
                    <h2>Éthique et Controverses</h2>
                    <p><b>Implications éthiques :</b></p>
                    <ul>
                        <li>Les deepfakes soulèvent des questions éthiques concernant la confiance et la véracité des contenus médiatiques.</li>
                        <li>Ils peuvent être utilisés pour diffamer des personnes ou créer des fausses nouvelles (fake news).</li>
                    </ul>
                    <p><b>Législation et contre-mesures :</b></p>
                    <ul>
                        <li>Des lois sont proposées et mises en œuvre pour lutter contre la création et la diffusion de contenus deepfake nuisibles.</li>
                        <li>Développement d'outils de détection des deepfakes pour aider à distinguer les vraies vidéos des fausses.</li>
                    </ul>
                    <h2>Conclusion</h2>
                    <p>Le deepfake est une technologie puissante qui a le potentiel de révolutionner la création de contenu, mais elle présente également des risques significatifs. Il est essentiel que les consommateurs de médias restent vigilants et que les créateurs et les législateurs travaillent ensemble pour s'assurer que son utilisation est éthique et réglementée pour prévenir les abus.</p>
                </>
            )},
        ai: {
            default: (
                <p>L'intelligence artificielle (IA) est un domaine de l'informatique qui vise à créer des machines capables de fonctionner intelligemment et de manière autonome. Elle englobe des techniques telles que l'apprentissage machine, la vision par ordinateur, et le traitement du langage naturel.</p>
            ),
            expanded: (
                <>
                    <p>Les ordinateurs neuromorphiques imitent le cerveau humain pour effectuer des tâches de traitement de l'information, offrant des perspectives prometteuses pour l'IA, notamment en termes d'apprentissage en temps réel et d'efficacité énergétique.</p>
        
                    <h2>Introduction</h2>
                    <p>Les ordinateurs neuromorphiques sont inspirés par le fonctionnement du cerveau humain. Cette technologie vise à recréer les processus neuronaux pour le traitement de l'information, promettant une révolution dans les domaines de l'intelligence artificielle et du machine learning.</p>
                    
                    <h2>Comment ça marche ?</h2>
                    <p>Ces systèmes utilisent des réseaux de neurones artificiels qui imitent les connexions neuronales du cerveau, permettant un traitement de l'information parallèle et une grande efficacité énergétique. Ils sont capables d'apprendre et de s'adapter de manière autonome.</p>
                    <p><b>Applications potentielles</b></p>
                    <p>Les ordinateurs neuromorphiques pourraient transformer plusieurs secteurs :</p>
                    <ul>
                        <li>Robotique : pour des robots plus autonomes et adaptables.</li>
                        <li>Santé : dans le diagnostic et le traitement personnalisé grâce à leur capacité à analyser de grandes quantités de données.</li>
                        <li>Industrie : optimisation des processus de production en temps réel.</li>
                    </ul>
                    
                    <h2>Avantages</h2>
                    <p>Comparés aux ordinateurs traditionnels, les ordinateurs neuromorphiques offrent :</p>
                    <ul>
                        <li>Une grande efficacité énergétique.</li>
                        <li>La capacité d'apprendre et de s'adapter de façon autonome.</li>
                        <li>Un traitement de l'information en temps réel.</li>
                        <li>Des temps de réponse rapides grâce au traitement parallèle de l'information.</li>
                    </ul>


                    <h2>Éthique et Défis</h2>
                    <p><b>Questions Éthiques :</b></p>
                    <ul>
                        <li>L'IA pose des questions sur la vie privée, la sécurité des données et le biais algorithmique.</li>
                        <li>Les décisions automatisées de l'IA peuvent avoir des conséquences juridiques et morales importantes.</li>
                    </ul>

                    <h2>FAQ</h2>
                    <h3>Quelle est la différence entre les ordinateurs neuromorphiques et les ordinateurs quantiques ?</h3>
                    <p>Alors que les ordinateurs neuromorphiques sont inspirés par le cerveau humain pour le traitement de l'information, les ordinateurs quantiques utilisent les principes de la mécanique quantique pour effectuer des calculs. Les deux technologies ont des applications potentielles différentes et complémentaires.</p>
                    
                    <h2>Les ordinateurs neuromorphiques sont-ils déjà utilisés ?</h2>
                    <p>Il existe des projets de recherche et des prototypes, mais l'adoption à grande échelle est encore en développement. La complexité de leur conception et la nécessité de nouveaux paradigmes de programmation sont parmi les défis à relever.</p>
                </>
            )
        }
    });
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCardSize = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    const handleClickOutside = (event) => {
        if (expandedCard && !event.target.closest('.cardveillle')) {
            setExpandedCard(null);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [expandedCard]);
    const textLimit = (text, limit = 50) => {
        return text.split(' ').slice(0, limit).join(' ') + (text.split(' ').length > limit ? '...' : '');
    };

    return (
        <>  
            <div id="veilles" className="container mt-5">
                <h1 className='titreVeille'>Veille</h1>
                <div className="row">
                    <div className="col-md-10">
                    <Card className={`cardveillle ${expandedCard === 'deepfake' ? 'expanded' : ''}`}>
                            <Card.Img className='imgveille' src="deepfake.png" />
                            <Card.Body>
                                <Card.Title>DeepFake</Card.Title>
                                <Card.Text>
                                    {expandedCard === 'deepfake' ? cardText.deepfake.expanded : cardText.deepfake.default}
                                </Card.Text>
                                <Button className='btn btndoc' onClick={() => toggleCardSize('deepfake')}>Voir plus</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-10 ">
                        <Card className={`cardveillle ${expandedCard === 'ai' ? 'expanded' : ''}`}>
                            <Card.Img className='imgveille' variant="top" src="artificial.png" />
                            <Card.Body>
                                <Card.Title>Ordinateurs Neuromorphiques</Card.Title>
                                <Card.Text>
                                {expandedCard === 'ai' ? cardText.ai.expanded : cardText.ai.default}
                            </Card.Text>
                                <Button className='btn btndoc' onClick={() => toggleCardSize('ai')}>Voir plus</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Veille;
