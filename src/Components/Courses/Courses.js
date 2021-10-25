import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hocks/useCourses';
import Course from '../Course/Course';

const Courses = () => {
    const [courses] = useCourses([]);
    return (
        <div>            
            <Container>
                <h1 className='text-center'>All Courses</h1>                <Row xs={1} md={3} className="g-4">              
                             
                    {
                        courses.map(course => <Course 
                                key={course.id} 
                                course={course}
                            ></Course>)
                    }
                    
                </Row>
            </Container>
        </div>
    );
};

export default Courses;