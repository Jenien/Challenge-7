import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const WhyUs = () => {
    return (
        <section className="whyus container-fluid" id="whyus">
            <div className="container-lg pt-5">
                <h2 className="whyus-title fs-3 fw-bold pt-5">Why Us?</h2>
                <p className="whyus-title">Mengapa harus pilih Binar Car Rental?</p>
                    <div>
                    <Row >
                    <Col className="card " data-aos="flip-left" data-aos-delay="100" data-aos-offset="250">
                            <div className="card-body">
                                <Image id="card-img" src="./images/icon_complete.png" />
                                <h5 className="card-title fw-bold pt-3 pb-2">Mobil Lengkap</h5>
                                <p className="card-texta text-align-left ">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                    </Col>
                    <Col  className="card" data-aos="flip-left" data-aos-delay="300" data-aos-offset="250">
                        
                            <div className="card-body">
                                <Image id="card-img" src="./images/icon_price.png" />
                                <h5 className="card-title fw-bold pt-3 pb-2">Harga Murah</h5>
                                <p className="card-texta text-align-left">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                    </Col>
                    <Col  className="card " data-aos="flip-left" data-aos-delay="500" data-aos-offset="250">
                            <div className="card-body">
                                <Image id="card-img" src="./images/icon_24hrs.png" />
                                <h5 className="card-title fw-bold pt-3 pb-2">Layanan 24 Jam</h5>
                                <p className="card-texta text-align-left">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                    </Col>
                    <Col className="card " data-aos="flip-left" data-aos-delay="600" data-aos-offset="250">
                            <div className="card-body">
                                <Image id="card-img" src="./images/icon_professional.png" />
                                <h5 className="card-title fw-bold pt-3 pb-2">Sopir Profesional</h5>
                                <p className="card-texta text-align-left">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>

                    </Col>
                    </Row>
                    </div>
            </div>
        </section>
    );
};

export default WhyUs;
