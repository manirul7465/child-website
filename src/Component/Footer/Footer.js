import React from 'react';
import { Card, FormControl, InputGroup, Row } from 'react-bootstrap';

// footer
    const Footer = () => {
         return (
           <div>
               <Card className="bg-success text-white">
               <Row xs={1} md={2} className="g-4">
             <div>
               <h3>
               PHONE SUPPORT
               <p>
                  24 HOURS A DAY 
               </p>
                 + 01 345 647 745
               </h3>
             </div>
           
              <div>
                 <h3>
                 NEWSLETTER
                </h3>
                <p>SIGN UP FOR SPECIAL OFFERS</p>   
                <InputGroup>
                <FormControl
                placeholder="email"
     
                />
                 <InputGroup.Text id="basic-addon2">subscribe</InputGroup.Text>
                </InputGroup>
               </div>
               </Row>
               </Card>
        </div>
    );
};

export default Footer;