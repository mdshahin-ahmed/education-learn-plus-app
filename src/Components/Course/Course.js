import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {img, title, description, price} = props.course;
    return (
        <div className='course-style'>
            <Col className='my-4 mb-5 d-flex h-100'>
                <Card>
                    <div className='img-container'>
                        <Card.Img className='card-img' variant="top" src={img} />
                    </div>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    
                        
                    </Card.Body>
                    <h5 className='mt-auto text-center pb-3'>Price: ${price}</h5>
                </Card>
            </Col>
        </div>
    );
};

export default Course;