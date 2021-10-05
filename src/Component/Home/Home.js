import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Form, Row } from 'react-bootstrap';
import HomeContainer from '../Home-container/HomeContainer';

// home
const Home = () => {
  const[homecontainers,setHomecontainers]=useState([]);
  useEffect(()=>{
      fetch('./HomeCointainer.JSON')
      .then(res=>res.json())
      .then(data=>setHomecontainers(data))
  },[])
    return (
      // Carousel
        <div className="row">
            <Carousel className="col">
              <Carousel.Item>
            <img
          className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2017/06/17/17/11/learn-2412780_960_720.jpg?text=First slide&bg=373940" fluid
           alt="First slide"
          />

           </Carousel.Item>
           <Carousel.Item>
             <img
            className="d-block w-100"
           src="https://cdn.pixabay.com/photo/2014/10/27/01/22/kindergarten-504672_1280.jpg?text=Second slide&bg=282c34" fluid
            alt="Second slide"
              />
             {/* input form */}
          </Carousel.Item>
            <Carousel.Item>
           <img
             className="d-block w-100"
                 src="https://cdn.pixabay.com/photo/2017/06/29/20/42/kindergarten-2456159_960_720.jpg?text=Third slide&bg=20232a" fluid
                alt="Third slide"
              />

           </Carousel.Item>
         </Carousel>
         <div className="col"><h1>We grow your child in green environment and 100% care.</h1>
         <h3>Experience</h3>
         <h3>Quality</h3>
         <h3>Professionality</h3>
         <h3>Guarantee</h3>
           </div>
           

            <h3 className="mt-5">See Our Courses and admit your child</h3>
            <div className="row mt-3 mb-3">
              <div className="col">
            <Row xs={1} md={2} className="g-4">
                {
                 homecontainers.map(homecontainer=><HomeContainer
                 key={homecontainer.id}
                 homecontainer={homecontainer}
                 ></HomeContainer>)
               }
            </Row>
               </div>
                <div className="col" >
                <h1>register now</h1>
                <Form>
                      <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
            </Row>

               <Form.Group className="mb-3" controlId="formGridAddress1">
               <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Address 2" />
             </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
              </Form.Select>
             </Form.Group>

               <Form.Group as={Col} controlId="formGridZip">
               <Form.Label>Zip</Form.Label>
                <Form.Control />
             </Form.Group>
            </Row>

            <Button  variant="danger" type="submit">
               Submit
            </Button>
             </Form>
              </div>
            </div>
        </div>
       
        
    );
};

export default Home;