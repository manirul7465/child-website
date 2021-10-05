import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';

// About us
const About = () => {
    return (
        <div>
            <Card>
            <img  src="https://cdn.pixabay.com/photo/2018/07/05/16/59/students-3518726__340.jpg" alt="" />
            </Card>
            <Row xs={1} md={3} className="g-4 mt-3">
            <h1>Hello. Our school has been present for over 20 years. We make the most of all our students.</h1>
            <p>
            My school has a huge playground where I can play various outdoor games. I have many friends at my school where we study and play together. My school teachers are very kind and caring towards everyone. We celebrate all national functions at my school with great pomp and show.
            </p>
            <p>
            An accommodating school is one that fulfills all of your wishes and needs. This means it is well-equipped with all of the tools needed to foster and encourage learning.In other words, no student is left behind; the school does its best to provide a space for all students to thrive. This is a good word to use when you feel like the school did you some sort of favor.
            </p>
            </Row>
            <Row xs={1} md={3} className="g-4 mt-3 mb-5">
                <div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrggIP1tphFNHqBURDu-6QY1TiSJVXQy0Uuw&usqp=CAU" alt="" /> 
               <h3>Principal:peter jen</h3>
               <Button>View profile</Button>  
                </div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9lksaxdh8dePTsGYLiVzsaP5ofoHOICHI9gxTRGj1ds1GG-NZccfpoku6jXWGwROfe4k&usqp=CAU" alt="" /> 
               <h3>Head teacher:mary ken </h3>
               <Button>View profile</Button>  
                </div>
               <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYrdAp6320-K4qri1MrdxHzNf223yXW5dQ8LBsFLF6MdckbihHA4Lvx45O1GX9MLn4ds&usqp=CAU" alt="" /> 
               <h3>Assitence teacher:mariana jen</h3>
               <Button>View profile</Button>  
                </div>
               
            </Row>
            
            
        </div>
        
    );
};

export default About;