import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

const Auth = () => {
    const [idAdmin, setIdAdmin] = useState('');
    const [password, setPassword] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder logic for authentication
        if (idAdmin === 'admin' && password === 'password') {
            navigate('/dashboard');
        } else {
            setAlertVisible(true);
        }
    };

    return (
        <>
            <Container className="position-sticky z-index-sticky top-0">
                <Navbar expand="lg" className="blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
                    <Container fluid>
                        <Navbar.Brand href="#">Car Management</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
            <main className="main-content mt-0">
                <section>
                    <div className="page-header min-vh-100">
                        <Container>
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                                    <Card className="card-plain">
                                        <Card.Header className="pb-0 text-start">
                                            <h4 className="font-weight-bolder">Sign In</h4>
                                            <p className="mb-0">Enter Your IdAdmin</p>
                                        </Card.Header>
                                        <Card.Body>
                                            {alertVisible && (
                                                <Alert variant="danger" onClose={() => setAlertVisible(false)} dismissible>
                                                    Incorrect ID Admin or Password!
                                                </Alert>
                                            )}
                                            <Form id="loginForm" onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        id="idAdmin"
                                                        placeholder="ID Admin"
                                                        value={idAdmin}
                                                        onChange={(e) => setIdAdmin(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <div className="text-center">
                                                    <Button type="submit" className="btn-lg w-100 mt-4 mb-0">Sign in</Button>
                                                </div>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                                    <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style={{ backgroundImage: "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')", backgroundSize: 'cover' }}>
                                        <span className="mask bg-gradient-primary opacity-6"></span>
                                        <h4 className="mt-5 text-white font-weight-bolder position-relative">Attention is the new currency</h4>
                                        <p className="text-white position-relative">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Auth;
