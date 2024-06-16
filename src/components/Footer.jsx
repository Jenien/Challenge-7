import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <Container>
                <div className="row">
                    <div className="alamat col-md-3">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-md-3">
                        <p><a className="footer-text" href="#ourservice">Our Service</a></p>
                        <p><a className="footer-text" href="#whyus">Why Us</a></p>
                        <p><a className="footer-text" href="#testimonial">Testimonial</a></p>
                        <p><a className="footer-text" href="#faq">FAQ</a></p>
                    </div>
                    <div className="connect col-md-3">
                        <p>Connect with us</p>
                        <a href="https://www.facebook.com"><img src="./images/icons/icon_facebook.png" className="mx-" alt="Facebook" /></a>
                        <a href="https://www.instagram.com"><img src="./images/icons/icon_instagram.png" className="mx-" alt="Instagram" /></a>
                        <a href="https://www.Twitter.com"><img src="./images/icons/icon_twitter.png" className="mx-" alt="Twitter" /></a>
                        <a href="https://www.gmail.com"><img src="./images/icons/icon_mail.png" className="mx-" alt="Mail" /></a>
                        <a href="https://www.twitch.com"><img src="./images/icons/icon_twitch.png" className="mx-" alt="Twitch" /></a>
                    </div>
                    <div className="detail col-md-3">
                        <p>&copy; 2024 Binar Car Rental</p>
                        <a className="navbar-brand" href="#">
                            <span className="logo d-block"></span>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
