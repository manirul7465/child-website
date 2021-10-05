import React from 'react';
import { Card, Col } from 'react-bootstrap';
// service
const Service = (props) => {
    const{img,name,description}=props.service;
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>service:{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;