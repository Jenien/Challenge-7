import { Button, Container } from 'react-bootstrap';

const Banner = (props) => {
    return (
        <section>
            <Container className="card-b">
                <div className="card-b-body">
                    <h1 className="card-b-title">Sewa Mobil Di Depok Sekarang</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="/cars">
                    <Button id="btn-sewa2" hidden={props.hideButton}>
                    Mulai Sewa Mobil
                    </Button>
              </a>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
