import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Gallery from "./pages/Gallery";
import Classes from "./pages/Classes"; // Previously Recreation
import CompetitionInformation from "./pages/CompetitionInformation"; // Previously Competition Results
import DatesAndInfo from "./pages/DatesAndInfo";

function App() {
  return (
    <Router basename="/MGT">
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <AboutUs />
                <Skills />
                <Contact />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route
            path="/competition-information"
            element={<CompetitionInformation />}
          />
          <Route path="/dates-info" element={<DatesAndInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
