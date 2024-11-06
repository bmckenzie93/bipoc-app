import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  return (
    <Carousel style={{backgroundColor:'gray'}}>
      <Carousel.Item>
        <img style={{height:'400px', width:'100%'}} src="https://cleveronestudios.com/wp-content/uploads/2024/05/name-requests-square.jpg" alt="" />
        <Carousel.Caption>
          <h3 style={{backgroundColor: 'black'}}>Welcome to the BIPOC Directory 1</h3>
          <p style={{backgroundColor: 'black'}}>Discover and support BIPOC-owned businesses in your area.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px', width:'100%'}} src="https://cleveronestudios.com/wp-content/uploads/2024/05/murals-square.jpg" alt="" />
        <Carousel.Caption>
          <h3 style={{backgroundColor: 'black'}}>Welcome to the BIPOC Directory 2</h3>
          <p style={{backgroundColor: 'black'}}>Discover and support BIPOC-owned businesses in your area.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px', width:'100%'}} src="https://cleveronestudios.com/wp-content/uploads/2024/05/stickers-square.jpg" alt="" />
        <Carousel.Caption>
          <h3 style={{backgroundColor: 'black'}}>Welcome to the BIPOC Directory 3</h3>
          <p style={{backgroundColor: 'black'}}>Discover and support BIPOC-owned businesses in your area.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;