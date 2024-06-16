import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import AOS from 'aos'; // Import JS

const OurServices = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animasi berjalan dalam 2 detik
            once: true, 
        });
    }, []);

    return (
        <Container fluid="md" id="ourservice" className="my-5">
            <Row className="service-row container-lg m-auto pt-5 overflow-hidden">
                <Col md={6} xs={12} className="d-flex p-0 position-relative mb-5" data-aos="fade-right">
                    <Image src="./images/Group_47.png" className="service-img img-fluid" alt="service-img" data-aos="zoom-in" />
                    <Image src="./images/Ellipse_21.png" className="service-img2 img-fluid position-absolute end-0" alt="service-img2" />
                    <Image src="./images/Ellipse_19.png" className="service-img1 img-fluid position-absolute" alt="service-img1" />
                    <Image src="./images/Ellipse_20.png" className="service-img3 img-fluid position-absolute start-0 bottom-0" alt="service-img3" />
                </Col>
                <Col md={6} xs={12} className="fw-bold d-flex flex-column justify-content-center" data-aos="fade-left">
                    <h3 className="fw-bold">Best Car Rental for any kind of trip in Depok!</h3>
                    <p className="fw-light pt-3 fs-10">
                        Sewa mobil di Depok bersama Binar Car Rental jaminan harga
                        lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                        kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                        meeting, dll.
                    </p>
                    <ul className="service-list">
                        <li className="fw-light fs-7" data-aos="fade-left">
                            <Image src="./images/Group_53.png" alt="check icon" className="check-icon" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                        </li>
                        <li className="fw-light fs-7" data-aos="fade-left">
                            <Image src="./images/Group_53.png" alt="check icon" className="check-icon" /> Sewa Mobil Lepas Kunci di Bali 24 Jam
                        </li>
                        <li className="fw-light fs-7" data-aos="fade-left">
                            <Image src="./images/Group_53.png" alt="check icon" className="check-icon" /> Sewa Mobil Jangka Panjang Bulanan
                        </li>
                        <li className="fw-light fs-7" data-aos="fade-left">
                            <Image src="./images/Group_53.png" alt="check icon" className="check-icon" /> Gratis Antar - Jemput Mobil di Bandara
                        </li>
                        <li className="fw-light fs-7" data-aos="fade-left">
                            <Image src="./images/Group_53.png" alt="check icon" className="check-icon" /> Layanan Airport Transfer / Drop In Out
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default OurServices;
