import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardAdmin = () => {
  const [cars, setCars] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);

  const [editCar, setEditCar] = useState({
    id: '',
    manufacture: '',
    image: '',
    rentPerDay: '',
    capacity: ''
  });


  useEffect(() => {
    axios.get('http://localhost:3001/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars data:', error);
      });
  }, []);

  const handleShowDelete = (carId) => {
    setCarToDelete(carId);
    setShowDelete(true);
  };

  const handleCloseDelete = () => setShowDelete(false);

  const handleShowEdit = (car) => {
    setEditCar(car);
    setShowEdit(true);
  };

  const handleCloseEdit = () => setShowEdit(false);
  const deleteCar = (carId) => {
    axios.delete(`http://localhost:3001/cars/${carId}`)
      .then(() => {
        setCars(cars.filter(car => car.id !== carId));
        handleCloseDelete();
      })
      .catch(error => {
        console.error('Error deleting car:', error);
        alert('Failed to delete car');
      });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditCar({ ...editCar, [name]: value });
  };

  const updateCar = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/cars/${editCar.id}`, editCar)
      .then(() => {
        setCars(cars.map(car => (car.id === editCar.id ? editCar : car)));
        handleCloseEdit();
      })
      .catch(error => {
        console.error('Error updating car:', error);
        alert('Failed to update car');
      });
  };

  return (
    <Container fluid className="py-4">
      <Row>
        <Col>
          <h6 className="mb-4">CAR LIST</h6>
          <Row className="align-items-center mt-3">
            <Col md={6}>
              <h1 className="main-title fs-20 m-0 fw-bold">List Car</h1>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <Link to="/add-car">
              <Button className="fs-14 fw-bold">
                Add New Car
              </Button>
            </Link>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <Button variant="outline-primary" className="me-2">All</Button>
              <Button variant="outline-secondary" className="me-2">Small</Button>
              <Button variant="outline-secondary" className="me-2">Medium</Button>
              <Button variant="outline-secondary">Large</Button>
            </Col>
          </Row>
          <Row>
            {cars.map((car) => (
              <Col md={3} id="car-card" key={car.id}>
                <Card id="car-card">
                  <Card.Img className="car-img" variant="top" src={car.image} alt="Car" />
                  <Card.Body>
                    <Card.Title>{car.manufacture} / {car.model}</Card.Title>
                    <Card.Text>
                      Rp {car.rentPerDay / 1000}.000 / hari
                    </Card.Text>
                    <Card.Text>
                      Capacity: {car.capacity}
                    </Card.Text>
                    <Card.Text>
                      AvailAt {new Date(car.availableAt).toLocaleString()}
                    </Card.Text>
                    <Row>
                      <Col>
                        <Button variant="outline-danger" className="w-100" onClick={() => handleShowDelete(car.id)}>Delete</Button>
                      </Col>
                      <Col>
                        <Button variant="success" className="w-100" onClick={() => handleShowEdit(car)}>Edit</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Penghapusan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda yakin ingin menghapus mobil ini?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Batal
          </Button>
          <Button variant="danger" onClick={() => deleteCar(carToDelete)}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateCar}>
            <Form.Group className="mb-3">
              <Form.Label>Manufacture</Form.Label>
              <Form.Control
                type="text"
                name="manufacture"
                value={editCar.manufacture}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={editCar.image}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rent Per Day</Form.Label>
              <Form.Control
                type="number"
                name="rentPerDay"
                value={editCar.rentPerDay}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Capacity</Form.Label>
              <Form.Control
                type="number"
                name="capacity"
                value={editCar.capacity}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

        </Container>
      );
    };
    
    export default DashboardAdmin;
    