import { useLocation } from "react-router-dom";
import PageHeader from "./pageheader";
import Dropdown from "./dropdown";
import "../css/course.css";
import { useState } from "react";

const CoursePage = () => {
  const location = useLocation();
  const course = location.state.course;
  const [isQuarterOpen, setIsQuarterOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isProfessorOpen, setIsProfessorOpen] = useState(false);
  const [selectedQuarters, setSelectedQuarters] = useState({
    Spring: false,
    Summer: false,
    Fall: false,
    Winter: false,
  });

  const [selectedYear, setSelectedYear] = useState();
  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const options = [
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
  ];

  const toggleQuarter = () => setIsQuarterOpen(!isQuarterOpen);
  const toggleYear = () => setIsYearOpen(!isYearOpen);
  const toggleProfessor = () => setIsProfessorOpen(!isProfessorOpen);
  const handleQuarterChange = (quarter) => {
    setSelectedQuarters((prev) => ({ ...prev, [quarter]: !prev[quarter] }));
  };

  return (
    <div className="course-container">
      <div className="course-content">
        <div className="left-column">
          <p>
            Select a quarter, year, and professor to view the course&apos;s
            syllabus.
            <br />
            <br />
          </p>
          <div className="expandable-section">
            <button onClick={toggleQuarter} className="section-header">
              Quarter*
            </button>
            {isQuarterOpen && (
              <div className="section-content">
                <div className="select-container">
                  {["Spring", "Summer", "Fall", "Winter"].map((quarter) => (
                    <label key={quarter}>
                      <input
                        type="checkbox"
                        checked={selectedQuarters[quarter]}
                        onChange={() => handleQuarterChange(quarter)}
                      />
                      {quarter}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="expandable-section">
            <button onClick={toggleYear} className="section-header">
              Year*
            </button>
            {isYearOpen && (
              <div className="section-content">
                <div className="select-container">
                  {["Spring", "Summer", "Fall", "Winter"].map((quarter) => (
                    <label key={quarter}>
                      <input
                        type="checkbox"
                        checked={selectedQuarters[quarter]}
                        onChange={() => handleQuarterChange(quarter)}
                      />
                      {quarter}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button onClick={toggleProfessor} className="section-header">
              Professor*
            </button>
            {isProfessorOpen && (
              <div className="section-content">
                <div className="select-container">
                  {["Spring", "Summer", "Fall", "Winter"].map((quarter) => (
                    <label key={quarter}>
                      <input
                        type="checkbox"
                        checked={selectedQuarters[quarter]}
                        onChange={() => handleQuarterChange(quarter)}
                      />
                      {quarter}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="right-column">
          <PageHeader />
          <div className="course-summary">
            <h2>Course Summary:</h2>
            <p>
              Introduction to client-side development on the internet, including
              markup, programming languages, protocols, libraries, and
              frameworks for creating and maintaining usable and accessible,
              interactive applications.
            </p>
          </div>
          <div className="course-prerequisites">
            <h2>Prerequisite:</h2>
            <p>Either CSE 123, CSE 143, CSE 154, or CSE 163; and INFO 201.</p>
          </div>
          <div className="course-syllabus">
            <h2>Course Syllabus</h2>
            <div className="syllabus-placeholder"></div>
          </div>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
