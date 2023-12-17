import React from 'react';
import "./Veille.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Veille() {
    const textLimit = (text, limit = 50) => {
        return text.split(' ').slice(0, limit).join(' ') + (text.split(' ').length > limit ? '...' : '');
    };

    return (
        <>  
            <div className="container mt-5">
                <h1 className='titreVeille'>Veille</h1>
                <div className="row">
                    <div className="col-md-6">
                        <Card className='cardveillle' >
                            <Card.Img variant="top" src="deepfake.png" />
                            <Card.Body>
                                <Card.Title>DeepFake</Card.Title>
                                <Card.Text>
                                    {textLimit("Ici, vous mettez le texte concernant DeepFake. Ce texte sera coupé après 50 mots...")}
                                </Card.Text>
                                <Button variant="primary">Voir plus</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6 ">
                        <Card className='cardveillle'>
                            <Card.Img variant="top" src="artificial.png" />
                            <Card.Body>
                                <Card.Title>L'Intelligence Artificielle</Card.Title>
                                <Card.Text>
                                    {textLimit("Ici, vous mettez le texte concernant l'Intelligence Artificielle. Ce texte sera coupé après 50 mots...")}
                                </Card.Text>
                                <Button variant="primary">Voir plus</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Veille;
