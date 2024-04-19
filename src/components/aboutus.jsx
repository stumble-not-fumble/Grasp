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
        together with a common goal of enhanc the registration process for
        students interested in or currently enrolled in the Informatics major.
        Our website aims to facilitate an informed decision-making process for
        UW students when selecting courses, enabling them to acquire a
        comprehensive understanding of course content and requirements, leading
        to fewer dropped classes and stressful scheduling conflicts.
      </p>

      <div className="about-us-grid">
        <div className="about-us-first-row">
          <img src={druth} />
          <img src={ian} />
        </div>
        <div className="about-us-second-row">
          <img src={mia} />
          <img src={gabriella} />
          <img src={zach} />
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
