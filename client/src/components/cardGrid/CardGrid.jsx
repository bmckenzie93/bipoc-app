// src/components/CardGrid.jsx
import React from 'react';
import { Card, Row, Col, Carousel } from 'react-bootstrap';

const CardGrid = () => {
  const items = [
    { 
      images: [
        'https://via.placeholder.com/150/0000FF/808080?text=Slide+1',
        'https://via.placeholder.com/150/FF0000/FFFFFF?text=Slide+2',
        'https://via.placeholder.com/150/00FF00/000000?text=Slide+3'
      ],
      label: 'Card 1'
    },
    { 
      images: [
        'https://via.placeholder.com/150/0000FF/808080?text=Slide+1',
        'https://via.placeholder.com/150/FF0000/FFFFFF?text=Slide+2',
        'https://via.placeholder.com/150/00FF00/000000?text=Slide+3'
      ],
      label: 'Card 2'
    },
    // Add more items as needed
  ];

  return (
    <div className="text-center my-4">
      <h2>Card Grid with Image Carousel</h2>
      <Row xs={1} sm={2} md={4} className="g-4">
        {items.map((item, index) => (
          <Col key={index}>
            <Card className="rounded h-100">
              <Carousel interval={null} className="rounded">
                {item.images.map((image, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={image}
                      alt={`Slide ${i + 1}`}
                      className="d-block w-100 rounded"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{item.label}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardGrid;
