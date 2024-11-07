import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCoffee, FaApple, FaBeer, FaBicycle, FaCar, FaCamera, FaGuitar, FaHome } from 'react-icons/fa';

const Categories = () => {
  const icons = [
    { icon: <FaCoffee />, label: 'Coffee' },
    { icon: <FaApple />, label: 'Apple' },
    { icon: <FaBeer />, label: 'Beer' },
    { icon: <FaBicycle />, label: 'Bike' },
    { icon: <FaCar />, label: 'Car' },
    { icon: <FaCamera />, label: 'Camera' },
    { icon: <FaGuitar />, label: 'Guitar' },
    { icon: <FaHome />, label: 'Home' },
  ]; 

  return (
    <Container className="py-4">
      <Row>
        <Col xs={12}>
          <h3>Categories</h3>
        </Col>
        {icons.map((item, index) => (
          <Col key={index} xs={6} md={3} className="mb-4">
            <Card className="text-center p-3 h-100">
              <Card.Body>
                <div className="icon" style={{ fontSize: '2rem', color: '#007bff' }}>
                  {item.icon}
                </div>
                <Card.Text className="mt-2">{item.label}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
