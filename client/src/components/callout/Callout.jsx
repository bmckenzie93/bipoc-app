import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Callout = () => {
  return (
    <Container fluid className="callout-section py-5">
      <Row className="justify-content-center align-items-center text-center">
        <Col md={8}>
          <h2 className="mb-4 text-white">Discover Your Next Favorite Spot!</h2>
          <p className="mb-4 text-light">
            Explore top-rated restaurants, new dining experiences, and the latest hot spots, hand-picked by our community.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="light" size="lg">
              Learn More
            </Button>
            <Button variant="outline-light" size="lg">
              Get Started
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Callout;
