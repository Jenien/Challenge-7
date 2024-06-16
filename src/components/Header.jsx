import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(''); 
    const navigate = useNavigate();

    const handleShowModal = (type) => {
        setModalType(type);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCloseModal();
        navigate('/admin');
    };

    return (
        <>
            <Navbar key="md" expand="md" className="fixed-top" id="shadow-header">
                <Container fluid="md">
                    <Navbar.Brand href="/">
                        {/* <Image src="images/logo.png" width="100px" height="32px" /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>BCR</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="navbar-link justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#our-services" id="nav-item">Our Services</Nav.Link>
                                <Nav.Link href="#why-us" id="nav-item">Why Us</Nav.Link>
                                <Nav.Link href="#testimonial" id="nav-item">Testimonial</Nav.Link>
                                <Nav.Link href="#faq-section" id="nav-item">FAQ</Nav.Link>
                                <Nav.Link>
                                    <Button id="btn-register" onClick={() => handleShowModal('register')}>Register</Button>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalType === 'login' ? 'Admin Login' : 'Admin Register'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        {modalType === 'register' && (
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" required />
                            </Form.Group>
                        )}

                        <Button variant="primary" type="submit">
                            {modalType === 'login' ? 'Login' : 'Register'}
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {modalType === 'login' ? (
                        <Button variant="link" onClick={() => handleShowModal('register')}>
                            Dont have an account? Register
                        </Button>
                    ) : (
                        <Button variant="link" onClick={() => handleShowModal('login')}>
                            Already have an account? Login
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Header;
