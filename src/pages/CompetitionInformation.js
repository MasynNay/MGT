import React from "react";
import { Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import "./CompetitionInformation.css";
import template from "../assets/images/template.png";

// Example project card content without additionalLink
const projectsTab1 = [
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
];

const projectsTab2 = [
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
];

const projectsTab3 = [
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
  {
    title: "Stay Tuned!",
    description: "This has not been announced yet. Check again later.",
    imgUrl: template, // Add image URL if available
  },
];

const CompetitionInformation = () => {
  return (
    <section className="project" id="competition-information">
      <Container>
        <h2
          style={{
            paddingTop: "150px",
            paddingBottom: "50px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Competition Information
        </h2>

        <Tab.Container id="competition-tabs" defaultActiveKey="first">
          <Nav
            variant="pills"
            className="nav-pills mb-5 justify-content-center align-items-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="first">Results</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Dates</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Start Lists</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first" className="tab-pane-content">
              <Row>
                {projectsTab1.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                  />
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="second" className="tab-pane-content">
              <Row>
                {projectsTab2.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                  />
                ))}
              </Row>
              <p class="rules-notes">
                <strong>
                  Important Rules and Competition Qualification Notes
                </strong>

                <br />
                <br />

                <strong>Qualification for State</strong>
                <ul>
                  <li>
                    Athlete must have competed in two PTAU Invitational
                    competitions prior to State.
                  </li>
                </ul>

                <br />

                <strong>Qualification for Regionals</strong>
                <ul>
                  <li>
                    Athletes must compete in two PTAU Invitational Competitions
                  </li>
                  <li>Athletes must compete at the State Championships</li>
                </ul>

                <br />

                <strong>
                  Qualification for Nationals (USA GymChamps/Stars and Stripes)
                </strong>
                <ul>
                  <li>
                    Athletes must compete in two PTAU Invitational Competitions
                  </li>
                  <li>Athletes must compete at the State Championships</li>
                  <li>Athletes must compete at the Regional Championships</li>
                  <li>
                    Athletes must achieve the qualifying score on each event at
                    either State Champs or Regional Champs
                  </li>
                </ul>

                <br />

                <strong>Competition Dress Code</strong>
                <ul>
                  <li>
                    Girls: Team Leotard (undergarments of any type must not be
                    visible: 0.2 pts. deduction from the total score.)
                  </li>
                  <li>
                    Boys: Team competition shirt & shorts (no longer than a 5"
                    inseam)
                  </li>
                  <li>
                    Double Mini requires white foot covering - Double mini shoes
                    is best
                  </li>
                  <li>NO colored socks or logos on white socks</li>
                  <li>NO jewelry (earrings of any sort)</li>
                  <li>Body piercings that are visible must be removed.</li>
                  <li>
                    Bandages and supports devices must not create big contrast
                    with the skin color. Any violation will result in a 0.2 pts.
                    from the total score.
                  </li>
                  <li>
                    Hair: must be secured tightly to your head in a bun style -
                    (NO bobby pins. flat clips only)
                  </li>
                </ul>
              </p>
            </Tab.Pane>

            <Tab.Pane eventKey="third" className="tab-pane-content">
              <Row>
                {projectsTab3.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                  />
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default CompetitionInformation;
