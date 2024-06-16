import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

const SearchCar = () => {
  return (
    <div>
      <Container>
        <Row id="searchCar" className="fc-container mt-4">
          <Col className="card-filter">
            <div className="card-filterb">
              <Row>
                <Col md={2}>
                  <p className="pt-1">Tipe Driver</p>
                  <Form.Select id="driver">
                    <option value="">Pilih Driver</option>
                    <option value="dengan-supir">Dengan Supir</option>
                    <option value="lepas-kunci">Tanpa Supir (Lepas kunci)</option>
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <p className="pt-1">Tanggal</p>
                  <Form.Control type="date" id="date" />
                </Col>
                <Col md={3}>
                  <p className="pt-1">Waktu Jemput/Ambil</p>
                  <Form.Control type="time" id="time" />
                </Col>
                <Col md={3}>
                  <p className="pt-1">Jumlah Penumpang</p>
                  <Form.Control type="number" id="qty" />
                </Col>
                <Col md={2} className="d-flex align-items-end">
                  <Button id="load-btn">
                    Cari Mobil
                  </Button>
                </Col>
              </Row>
            </div>
            <Button type="button" id="close-btn" className="close-btn">
              <span aria-hidden="true">&times;</span>
            </Button>
          </Col>
        </Row>

        <Row className="row-cols-auto justify-content-center mt-4" id="carsList">
        </Row>

        <div id="notifikasiMobilTidakTersedia" className="container-sm mt-0 w-25 mb-1rem text-center alert alert-danger hide">
          Mobil yang anda cari tidak tersedia
        </div>
      </Container>
    </div>
  );
}

export default SearchCar;
