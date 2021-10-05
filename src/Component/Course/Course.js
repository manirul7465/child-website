import React from 'react';
import { Card, Col } from 'react-bootstrap';
// course
const Course = (props) => {
    const{img,name,price}=props.course;
    return (
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
    );
};

export default Course;