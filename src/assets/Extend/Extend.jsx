// ExpandableCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ExpandableCard({ title, contentDefault, contentExpanded, isExpanded, onToggle }) {
  return (
    <Card className={`cardecole ${isExpanded ? 'expanded' : ''}`}>
      <Card.Body>
        <Card.Title className="carddoctitre">{title}</Card.Title>
        <Card.Text>
          {isExpanded ? contentExpanded : contentDefault}
        </Card.Text>
        <Button className="btn btnecole" onClick={onToggle}>
          {isExpanded ? 'Moins d\'infos' : 'En savoir plus'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ExpandableCard;
