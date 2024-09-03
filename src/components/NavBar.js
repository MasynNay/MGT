import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/logo.webp";
import nav2 from "../assets/images/nav2.svg";
import nav3 from "../assets/images/nav3.svg";
import '../app.css'; // Import the CSS file for styling

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Refs for toggling navbar collapse
  const toggleRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    // Close the navbar after clicking a link
    if (toggleRef.current && collapseRef.current) {
      toggleRef.current.click(); // Simulate a click to collapse the navbar
    }
  };

  const renderNavLinks = () => {
    return (
      <>
        <Nav.Link
          as={Link}
          to="/"
          className={
            activeLink === "home" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("home")}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/classes"
          className={
            activeLink === "classes" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("classes")}
        >
          Classes
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/competition-information"
          className={
            activeLink === "competition-information"
              ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("competition-information")}
        >
          Competition Information
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          smooth
          to="/#about-us"
          className={
            activeLink === "about-us" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("about-us")}
        >
          About Us
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          smooth
          to="/#contact"
          className={
            activeLink === "contact" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("contact")}
        >
          Contact
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/gallery"
          className={
            activeLink === "gallery" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("gallery")}
        >
          Gallery
        </Nav.Link>
        <Nav.Link
          as="a"
          href="https://app.jackrabbitclass.com/regv2.asp?id=547434"
          className={
            activeLink === "parent-portal" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("parent-portal")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Parent Portal
        </Nav.Link>
      </>
    );
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled navbar" : "navbar"}>
      <Container fluid className="custom-container">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ref={toggleRef} />
        <Navbar.Collapse id="basic-navbar-nav" ref={collapseRef}>
          <Nav className="ms-auto">{renderNavLinks()}</Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.facebook.com/MGTumbling">
                <img src={nav2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/mgtumbling/">
                <img src={nav3} alt="Instagram" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
