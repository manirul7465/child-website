import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import Service from '../Service/Service';

// all services
const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./FakeService.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1>Our services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                 services.map(service=><Service
                 key={service.id}
                 service={service}
                
                 ></Service>)
               }
            </Row>
              
        </div>
    );
};

export default Services;