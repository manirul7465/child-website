import React from 'react';
import { Container,Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
// header
const Header = () => {
    
    return (
        <div>
            <Navbar bg="success" variant="dark">
              <Container>
              <Navbar.Brand >Manir kindergarten & childcare (pvt) LTD.</Navbar.Brand>
                <Navbar  className="justify-content-end">
                <NavLink  style={{ textDecoration: 'none',color:'white',margin:10 }} to="/home">Home</NavLink  > 
                <NavLink  style={{ textDecoration: 'none',color:'white',margin:10 }}  to="/courses">Courses</NavLink  >
               <NavLink  style={{ textDecoration: 'none',color:'white',margin:10  }}  to="/services">Services</NavLink  >
               <NavLink style={{ textDecoration: 'none',color:'white',margin:10  }}  to="/about">About us</NavLink  > 
              </Navbar>
             </Container>
          </Navbar>
        </div>
    );
};

export default Header;