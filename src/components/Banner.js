import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/images/header.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom"; // Import Link

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="text-container"> 
                    <h1>Mother Goose Tumbling</h1>
                    <p>We Flippin' Love Our Athletes!</p>
                    <div className="button-container"> 
                      <Link to="/classes">
                        <Button className="btn-recreation" title="View Recreation Classes">
                          View Classes
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="header-img-themed" // Added class for theming
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
