import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Hero = (props) => {
  return (
    <div id="main-section" className="main">
      <Container>
        <Row className="main-table">
          {/* Text content */}
          <Col md={6} xs={12} id="hero-text main-left" className=" d-flex flex-column justify-content-center">
            <h1>Sewa & Rental Mobil Terbaik di Kawasan Depok</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <div>
              <a href="/cars">
                <Button id="btn-sewa" hidden={props.hideButton}>
                  Mulai Sewa Mobil
                </Button>
              </a>
            </div>
          </Col>
          {/* Image */}
          <Col md={6} xs={12} className="d-flex justify-content-end main-right">
            <div id="img-car" className="img-car img-fluid" >
              <Image src="images/img_car.png" alt="Gambar Mobil" id="img-car" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
