import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../assets/images/logo.webp";
import nav2 from "../assets/images/nav2.svg";
import nav3 from "../assets/images/nav3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <div className="footer-text-box">
              <h5>Mother Goose Tumbling</h5>
              <p>3180 S 2050 W, West Haven, UT 84401</p>
              <p>(801) 791-4163</p>
              <p>© 2024 Mother Goose Tumbling</p>
              <p>
                Website created by{" "}
                <a href="https://masynnay.com" target="_blank" rel="noopener noreferrer">
                  Masyn Nay
                </a>
              </p>
            </div>
          </Col>
          <Col size={12} sm={4} className="text-center">
            <div className="footerlogo">
              <a href="/MGT">
                <img src={logo2} alt="Logo2" />
              </a>
            </div>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/MGTumbling">
                <img src={nav2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/mgtumbling/">
                <img src={nav3} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
