import { useLocation } from "react-router-dom";
import Dropdown from "./dropdown";
import { toTitleCase } from "../utils/strings";
import "../css/course.css";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const location = useLocation();
  const course = location.state.course;
  const [isQuarterOpen, setIsQuarterOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isProfessorOpen, setIsProfessorOpen] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedQuarters, setSelectedQuarters] = useState({
    Spring: false,
    Summer: false,
    Fall: false,
    Winter: false,
  });

  const [selectedYear, setSelectedYear] = useState();
  const [selectedProfessor, setSelectedProfessor] = useState();
  const years = new Set();
  // const yearOptions = [
  //   { value: "2018", label: "2018" },
  //   { value: "2019", label: "2019" },
  //   { value: "2020", label: "2020" },
  //   { value: "2021", label: "2021" },
  //   { value: "2022", label: "2022" },
  // ];
  const professors = new Set();
  // const professorOptions = [
  //   { value: "2018A", label: "2018A" },
  //   { value: "2019A", label: "2019A" },
  //   { value: "2020A", label: "2020A" },
  //   { value: "2021A", label: "2021A" },
  //   { value: "2022A", label: "2022A" },
  // ];

  const toggleQuarter = () => setIsQuarterOpen(!isQuarterOpen);
  const toggleYear = () => setIsYearOpen(!isYearOpen);
  const toggleProfessor = () => setIsProfessorOpen(!isProfessorOpen);
  const handleQuarterChange = (quarter) => {
    setSelectedQuarters((prev) => ({ ...prev, [quarter]: !prev[quarter] }));
  };
  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const handleProfessorChange = (selectedProfessor) => {
    setSelectedProfessor(selectedProfessor);
  };
  let professorOptions;
  let yearOptions;
  var courseMajor = course.course_major;
  var courseNumber = course.course_number;
  var courseTitle = course.course_title;
  var currentCoursePDFKey = null;
  if (courseData && courseData.offered) {
    courseData.offered.forEach((offeredItem) => {
      professors.add(offeredItem.professor);
      years.add(offeredItem.year);
    });
    professorOptions = Array.from(professors).map((professor) => {
      return { value: professor, label: professor };
    });
    yearOptions = Array.from(years).map((year) => {
      return { value: year, label: year };
    });
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://grasp-api.fly.dev/course/${courseMajor}/${courseNumber}/${courseTitle}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourseData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setIsLoading(false);
      });
  }, []); // Dependencies to trigger re-fetch if any of them changes

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
                {/* <div className="select-container">
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
                </div> */}
                <Dropdown options={yearOptions} onChange={handleYearChange} />
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button onClick={toggleProfessor} className="section-header">
              Professor*
            </button>
            {isProfessorOpen && (
              <div className="section-content">
                {/* <div className="select-container">
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
                </div> */}
                <Dropdown
                  options={professorOptions}
                  onChange={handleProfessorChange}
                />
              </div>
            )}
          </div>
        </div>
        <div className="right-column">
          <div>
            <div className="header-container">
              <h1>{`${course.course_major.toUpperCase()} ${course.course_number} ${toTitleCase(course.course_title)}`}</h1>
            </div>
            {}
          </div>
          <div className="course-summary">
            <h2>Course Summary:</h2>
            {courseData && <p>{courseData.course_description}</p>}
          </div>
          {/* <div className="course-prerequisites">
            <h2>Prerequisite:</h2>
            <p>Either CSE 123, CSE 143, CSE 154, or CSE 163; and INFO 201.</p>
          </div> */}
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
