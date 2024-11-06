import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://cleveronestudios.com/wp-content/uploads/2024/05/name-requests-square.jpg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cleveronestudios.com/wp-content/uploads/2024/05/murals-square.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cleveronestudios.com/wp-content/uploads/2024/05/stickers-square.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;