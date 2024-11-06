import React from 'react';
import { Container, Row, Col, Tabs, Tab, Carousel, Button, Image } from 'react-bootstrap';

const FeaturedBusinesses = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-3">
        <Col>
          <h2>Check out diners' favorite restaurants in Portland, Oregon</h2>
          <p className="text-muted">Updated on 11/5/2024</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Diners’ Choice Awards are based on where your fellow diners book, dine, and review. 
            Only verified diners get to review restaurants on OpenTable, so our data doesn’t lie.
          </p>
        </Col>
      </Row>


      <Tabs defaultActiveKey="overall" id="restaurant-tabs" className="mb-3">
        <Tab eventKey="overall" title="Overall">
          <Container>
            <Row className="my-4">
              
              <Col md={4} className="mb-4">
                <Carousel interval={3000}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={`https://via.placeholder.com/300x200?text=Image+1+for+Item+1`}
                      
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={`https://via.placeholder.com/300x200?text=Image+2+for+Item+2`}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={`https://via.placeholder.com/300x200?text=Image+3+for+Item+3`}
                    />
                  </Carousel.Item>
                </Carousel>
                <h4 className="mt-3">Restaurant Title</h4>
                <p>
                  Discover amazing dining experiences at Restaurant. Indulge in exquisite cuisine and vibrant ambiance.
                </p>
                <Button variant="primary">Learn More</Button>
              </Col>
              <Col md={8} className="mb-4">
                <Row className="align-items-center my-4 d-flex flex-column">
                  <Col md={6}>
                    <div className="d-flex gap-3">
                      <Image
                        src="https://via.placeholder.com/300x200?text=Image+1"
                        alt="Top Image"
                        className="w-100"
                        rounded
                      />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam, qui doloremque quis asperiores culpa sint dolor accusantium consequatur distinctio?</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex gap-3">
                      <Image
                        src="https://via.placeholder.com/300x200?text=Image+1"
                        alt="Top Image"
                        className="w-100"
                        rounded
                      />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam, qui doloremque quis asperiores culpa sint dolor accusantium consequatur distinctio?</p>
                    </div>
                  </Col>

                </Row>
              </Col>
            </Row>
          </Container>
        </Tab>

        <Tab eventKey="food" title="Food">
          <p>Check out what verified diners have to say about this restaurant. Only genuine feedback to help you decide where to dine!</p>
        </Tab>
        <Tab eventKey="service" title="Service">
          <p>Explore the restaurant's menu. From appetizers to desserts, get a sneak peek at the delicious offerings available.</p>
        </Tab>
        <Tab eventKey="resources" title="Resources">
          <p>Explore the restaurant's menu. From appetizers to desserts, get a sneak peek at the delicious offerings available.</p>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default FeaturedBusinesses;
