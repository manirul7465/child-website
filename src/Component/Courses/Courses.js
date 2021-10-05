import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from './../Course/Course';
// courses
const Courses = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./Fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <h1>Our courses</h1>
          <Row xs={1} md={3} className="g-4">
                {
                 courses.map(course=><Course
                 key={course.id}
                 course={course}
                 ></Course>)
               }
            </Row>
        </div>
    );
};

export default Courses;