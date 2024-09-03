import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import gym1 from "../assets/images/gym1.jpg";
import gym2 from "../assets/images/gym2.jpg";
import gym3 from "../assets/images/gym3.jpg";
import gym4 from "../assets/images/gym4.jpg";
import gym5 from "../assets/images/gym5.jpg";
import gym6 from "../assets/images/gym6.JPG";
import coach1 from "../assets/images/coach1.PNG";
import coach2 from "../assets/images/coach2.PNG";
import coach3 from "../assets/images/coach3.PNG";
import coach4 from "../assets/images/coach4.PNG";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const AboutUs = () => {
  const projectsTab1 = [
    {
      title: "gym Front Entrance",
      description: "The exterior of our gym highlights its welcoming entrance and modern design, setting the stage for an exciting tumbling experience.",
      imgUrl: gym1,
    },
    {
      title: "Sitting Area",
      description: "Comfortable seating area inside the gym where parents and visitors can relax and observe the activities.",
      imgUrl: gym2,
    },
    {
      title: "Sitting Area",
      description: "Another view of our cozy sitting area, designed for comfort and convenience while you watch your child train.",
      imgUrl: gym3,
    },
    {
      title: "Long Trampoline",
      description: "Our state-of-the-art long trampoline, ideal for practicing and perfecting tumbling routines.",
      imgUrl: gym4,
    },
    {
      title: "Foam Pit",
      description: "The foam pit provides a safe and fun environment for practicing aerial tricks and perfecting landings.",
      imgUrl: gym5,
    },
    {
      title: "Practice Floor Mat",
      description: "The practice floor mat, a long, cushioned surface designed for executing and refining tumbling techniques.",
      imgUrl: gym6,
    },
  ];

  const projectsTab2 = [
    {
      title: "Delena",
      description: "Description for Coach 1.",
      imgUrl: coach1,
    },
    {
      title: "Garrett",
      description: "Description for Coach 2.",
      imgUrl: coach2,
    },
    {
      title: "Chaella",
      description: "Description for Coach 3.",
      imgUrl: coach3,
    },
    {
      title: "Amber",
      description: "Description for Coach 4.",
      imgUrl: coach4,
    },
  ];

  return (
    <section className="project2" id="about-us">
      {" "}
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About Us</h2>
                  <p>
                    Mother Goose isn't just your average tumbling team, Mother
                    Goose is a family, a second home, and an opportunity for
                    great sportsmanship. We strive to provide a fun learning
                    environment in which a child can develop physically,
                    emotionally, socially, and intellectually.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Our Gym</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Our Coaches</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Location</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first" className="facility-features">
                        <p>
                          At Mother Goose, we're passionate about providing a
                          top-tier training experience. Our state-of-the-art
                          tumble tracks are designed to elevate your skills,
                          while our newly remodeled observation area offers a
                          front-row seat to all the action. Whether you're an
                          athlete in training or a proud supporter, every detail
                          at Mother Goose has been crafted to inspire and
                          excite!
                        </p>
                        <Row>
                          {projectsTab1.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              isGymSection={true}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p>
                          Explore the dedicated professionals who drive our
                          program forward. Each coach brings a wealth of
                          experience and passion to the table, ensuring that
                          every athlete receives personalized support and
                          encouragement. Get to know the team behind the
                          success!
                        </p>
                        <Row>
                          {projectsTab2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          We are located at 3180 S 2050 W, West Haven, UT 84401.
                          For your convenience, you can click on the map below
                          to get directions to our gym. We hope to see you soon!
                        </p>
                        {/* Google Maps Embed */}
                        <div className="map-container">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.655893145791!2d-112.0312773235421!3d41.20747510713487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530e34bbeaaaab%3A0x1bef06f1a3239ef5!2sNorthern%20Star%20Bounders!5e0!3m2!1sen!2sus!4v1724799095724!5m2!1sen!2sus"
                            className="map-iframe"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
