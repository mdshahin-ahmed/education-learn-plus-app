import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hocks/useCourses';
import Course from '../Course/Course';

const Home = () => {
    const [courses] = useCourses([]);
    const HomeCourses = courses.slice(5,8);
    return (
        <div>            
            <Container>
                <h1 className='text-center'>Our Courses</h1>
                <h6 className='text-center'>Showing 3 courses of 14 for you. If you want to show all courses please visit Services page</h6>
                <Row xs={1} md={3} className="g-4">              
                             
                    {
                        HomeCourses.map(course => <Course 
                                key={course.id} 
                                course={course}
                            ></Course>)
                    }
                    
                </Row>
            </Container>
        </div>
    );
};

export default Home;