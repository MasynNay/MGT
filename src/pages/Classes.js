import React from "react";
import { Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import "./CompetitionInformation.css";
import rec1 from "../assets/images/rec1.PNG";
import rec2 from "../assets/images/rec2.PNG";
import rec3 from "../assets/images/rec3.PNG";
import rec4 from "../assets/images/rec4.PNG";
import rec5 from "../assets/images/rec5.PNG";
import rec6 from "../assets/images/rec6.PNG";
import rec7 from "../assets/images/rec7.PNG";
import rec8 from "../assets/images/rec8.PNG";
import rec9 from "../assets/images/rec9.PNG";
import team1 from "../assets/images/team1.PNG";
import team2 from "../assets/images/team2.PNG";
import NSB from "../assets/images/NSB.PNG";

const projectsTab1 = [
  {
    title: "Registration Information",
    description:
      "Yearly registration fee is $30.00 NON-REFUNDABLE. Sept-Sept $30.00. Pro rated registration fee: Jan-Aug $20.00, Summer registration Jun-Aug $8.00.",
    imgUrl: rec1,
  },
  {
    title: "Monthly Tuition",
    description:
      "Monthly Tuition $50.00 is due by or before your child's second lesson of the month or a $5 late fee will be automatically added. ($20 return check fee).",
    imgUrl: rec2,
  },
  {
    title: "Tuition Payment",
    description:
      "Make checks payable to 'MGTumbling' with the students name written in the memo area. If paying with cash, please seal the cash in an envelope with students name on it.",
    imgUrl: rec3,
  },
  {
    title: "Important Information",
    description:
      "Once you register your child, you will be charged for class time if they're present or not. A two-week notice is required to stop charges.",
    imgUrl: rec4,
  },
  {
    title: "Attendance Policy",
    description:
      "Regular attendance in class is extremely important! Please avoid absences if possible. We DO NOT deduct tuition for absences.",
    imgUrl: rec5,
  },
  {
    title: "Dress Attire",
    description:
      "All students must wear proper attire, no loose t-shirts or denim jeans. Team students are required to wear a leotard.",
    imgUrl: rec6,
  },
  {
    title: "Visitors",
    description:
      "May observe the classes from the parent room only. NO parents or visitors may sit in the gym area! Keep small children at hand for their safety.",
    imgUrl: rec7,
  },
  {
    title: "Gym Cleanliness",
    description:
      "We strive to keep a clean gym. Please clean up after yourself. Cleaning supplies are available in the supply room near the office.",
    imgUrl: rec8,
  },
  {
    title: "Class Time Slots",
    description:
      "Monday: 9:30, 10:30, 11:30 | Tuesday: 9:30, 10:30, 11:30, 12:30, 1:30 | Wednesday: 10:30, 11:30, 12:30, 1:30 | Thursday: 9:30, 10:30, 11:30, 12:30, 1:30 | Friday: 10:30, 11:30, 12:30, 2:00, 3:00, 4:00",
    imgUrl: rec9,
  },
];

const projectsTab2 = [
  {
    title: "Class Duration",
    description:
      "Team classes are 1.5 hours per lesson, 2 lessons per week. In total, around 12 hours a month.",
    imgUrl: team1,
  },
  {
    title: "Class Time Slots",
    description:
      "(Monday/Wednesday 9-10:30), (Monday 12:30-2 & Wednesday 12-1:30) Depending on your child's school schedule, all day school children will have class (Wednesday 2:15-3:45 & Friday 3:30-5)",
    imgUrl: rec9,
  },
  {
    title: "Tuition Payment",
    description: "Team classes cost $110 per month.",
    imgUrl: rec3,
  },
  {
    title: "Attendance Policy",
    description:
      "Regular attendance in class is extremely important! Please avoid absences if possible. We DO NOT deduct tuition for absences.",
    imgUrl: rec5,
  },
  {
    title: "Dress Attire",
    description:
      "All students must wear proper attire, no loose t-shirts or denim jeans. Team students are required to wear a leotard.",
    imgUrl: rec6,
  },
  {
    title: "Register / More Information",
    description:
      "If you would like to view more information regarding the team, you can click the Parent Portal option in the menu and log in. Or you can call Delana at (801) 791-4163.",
    imgUrl: team2,
  },
];

const projectsTab3 = [
  {
    title: "Northern Star Bounders",
    description:
      "For more class information from Northern Star Bounders, click the button below.",
    imgUrl: NSB,
    additionalLink: "https://www.northernstarbounders.com/classes.html",
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
          Classes
        </h2>

        <Tab.Container id="competition-tabs" defaultActiveKey="first">
          <Nav
            variant="pills"
            className="nav-pills mb-5 justify-content-center align-items-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="first">Recreation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Other Information</Nav.Link>
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
            </Tab.Pane>

            <Tab.Pane eventKey="third" className="tab-pane-content">
              <Row>
                {projectsTab3.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                    additionalLink={project.additionalLink}
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
