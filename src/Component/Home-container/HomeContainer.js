import React from 'react';
import { Card, Col } from 'react-bootstrap';
// home courses container
const HomeContainer = (props) => {
    const{img,name,price}=props.homecontainer;
    return (
        <div>
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>course:{name}</Card.Title>
            <Card.Text>
              price:{price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default HomeContainer;