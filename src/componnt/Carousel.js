import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel style={{ marginBottom: '3rem' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/p1.png"
          alt="الصورة الأولى"
          style={{ height: '50%', width: '100%' }}
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/p2.png"
          alt="الصورة الثانية"
          style={{ height: '100%', width: '100%' }}

        />
      </Carousel.Item>

      
    </Carousel>
  );
}

export default UncontrolledExample;
