import { Container, Row, Col } from 'react-bootstrap';
import { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

const Testimonial = () => {
    const carousel = useRef();

    const options = {
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsiveClass: true,
        navText: ["<", ">"],
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
        },
    };
    const next = () => {
        carousel.current.to(carousel.current.state.position + 1);
    };
    
    const prev = () => {
        carousel.current.to(carousel.current.state.position - 1);
    };
    
    return (
        <section className="testimonial-wrapper container-fluid p-0 pt-5" id="testimonial">
            <Container>
                <h2 className="testimonial-title">Testimonial</h2>
                <p className="text-center mb-5">Berbagai review positif dari para pelanggan kami</p>
                <Row>
                    <Col>
                        <OwlCarousel options={options}>
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src="./images/testicowo.png" alt="Photo1" />
                                </div>
                                <div className="testimonial-text">
                                    <div className="star-rating">★ ★ ★ ★ ★</div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, incidunt odit?
                                        Exercitationem earum officia est. Dolore nobis totam quia dolores ad velit tempora
                                        accusamus maiores eligendi, illo quidem modi fugit.
                                    </p>
                                    <p className="testimonial-user">Dudul 62, Bandung</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src="./images/testiciwi.png" alt="Photo2" />
                                </div>
                                <div className="testimonial-text">
                                    <div className="star-rating">★ ★ ★ ★ ★</div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, incidunt odit?
                                        Exercitationem earum officia est. Dolore nobis totam quia dolores ad velit tempora
                                        accusamus maiores eligendi, illo quidem modi fugit.
                                    </p>
                                    <p className="testimonial-user">hoho 45, Jakarta</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src="./images/testiciw.png" alt="Photo3" />
                                </div>
                                <div className="testimonial-text">
                                    <div className="star-rating">★ ★ ★ ★ ★</div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, incidunt odit?
                                        Exercitationem earum officia est. Dolore nobis totam quia dolores ad velit tempora
                                        accusamus maiores eligendi, illo quidem modi fugit.
                                    </p>
                                    <p className="testimonial-user">hehe 33, Konoha</p>
                                </div>
                            </div>
                        </OwlCarousel>
                        <div className="navigation-buttons">
                        <button onClick={prev} className="prev-button">&lt;</button>
                        <button onClick={next} className="next-button">&gt;</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;
