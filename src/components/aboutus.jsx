import "../css/aboutus.css";
import gabriella from "../img/gabriella.png";
import zach from "../img/zach.png";
import ian from "../img/ian.png";
import mia from "../img/mia.png";
import druth from "../img/druth.png";

const AboutUs = () => {
  return (
    <main className="about-us">
      <h1>About Us</h1>
      <p className="about-us-para">
        We are four seniors at the University of Washington who have come
        together with a common goal of enhance the registration process for
        students interested in or currently enrolled in the Informatics major.
        Our website aims to facilitate an informed decision-making process for
        UW students when selecting courses, enabling them to acquire a
        comprehensive understanding of course content and requirements, leading
        to fewer dropped classes and stressful scheduling conflicts.
      </p>

      <div className="about-us-grid">
        <div className="about-us-first-row">
          <div className="about-us-img-container mr-4">
            <img src={druth} alt="Dhruth Kesani" />
            <div className="about-us-info">
              <h2>Druth Kesani</h2>
              <h3>Role: Frontend and UI/UX</h3>
            </div>
          </div>
          <div className="about-us-img-container">
            <img src={ian} alt="Ian Lu" />
            <div className="about-us-info">
              <h2>Ian Lu</h2>
              <h3>Role: Frontend and Backend</h3>
            </div>
          </div>
        </div>
        <div className="about-us-second-row">
          <div className="about-us-img-container mr-4">
            <img src={mia} alt="Mia Pham" />
            <div className="about-us-info">
              <h2>Mia Pham</h2>
              <h3>Role: Product Manager, U/UX, and Frontend</h3>
            </div>
          </div>
          <div className="about-us-img-container mr-4">
            <img src={gabriella} alt="Gabriella Rivera" />
            <div className="about-us-info">
              <h2>Gabriella Rivera</h2>
              <h3>Role: Backend</h3>
            </div>
          </div>
          <div className="about-us-img-container">
            <img src={zach} alt="Zachary Zang" />
            <div className="about-us-info">
              <h2>Zachary Zhang</h2>
              <h3>Role: Frontend and Backend</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
