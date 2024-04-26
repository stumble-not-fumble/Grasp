import { useLocation } from "react-router-dom";
import Dropdown from "./dropdown";
import { Document, Page } from "react-pdf";
import { toTitleCase } from "../utils/strings";
import "../css/course.css";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const location = useLocation();
  const course = location.state.course;
  const [isQuarterOpen, setIsQuarterOpen] = useState(true);
  const [isYearOpen, setIsYearOpen] = useState(true);
  const [isProfessorOpen, setIsProfessorOpen] = useState(true);
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState("WIN");

  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedProfessor, setSelectedProfessor] = useState("joel ross");
  const [pdfBlob, setPdfBlob] = useState(null);

  const years = new Set();
  const professors = new Set();

  const toggleQuarter = () => setIsQuarterOpen(!isQuarterOpen);
  const toggleYear = () => setIsYearOpen(!isYearOpen);
  const toggleProfessor = () => setIsProfessorOpen(!isProfessorOpen);
  const handleQuarterChange = (quarter) => {
    setSelectedQuarter(quarter);
  };
  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const handleProfessorChange = (selectedProfessor) => {
    setSelectedProfessor(selectedProfessor);
  };
  let professorOptions = [];
  let yearOptions = [];
  var courseMajor = course.course_major;
  var courseNumber = course.course_number;
  var courseTitle = course.course_title;
  let currentCoursePDFKey;
  if (courseData && courseData.offered) {
    console.log("selected year is");
    console.log(selectedYear);
    console.log("selected Quarter is");
    console.log(selectedQuarter);
    console.log("selected Professor is");
    console.log(selectedProfessor);
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

  // useEffect(() => {
  //   setIsLoading(true);
  //   if (currentCoursePDFKey) {
  //     fetch(`https://grasp-api.fly.dev/pdf/${currentCoursePDFKey}`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.blob();
  //       })
  //       .then((blob) => {
  //         setPdfBlob(blob);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data: ", error);
  //         setError(error);
  //         setIsLoading(false);
  //       });
  //   } else {
  //     console.log("the coursePDF key is null");
  //     setIsLoading(false);
  //   }
  // }, [currentCoursePDFKey, selectedProfessor, selectedQuarter, selectedYear]); // Dependencies to trigger re-fetch if any of them changes

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
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      <div className="course-container">
        <div className="course-content">
          <div className="left-column">
            <p>
              Select a quarter, year, and professor to view the course&apos;s
              syllabus.
            </p>
            <div className="expandable-section">
              <button onClick={toggleQuarter} className="section-header">
                Quarter*
              </button>
              {isQuarterOpen && (
                <div className="section-content">
                  {["SPR", "SUM", "AUT", "WIN"].map((quarter) => (
                    <label key={quarter} className="radio-label block mb-2">
                      <input
                        type="radio"
                        value={quarter}
                        checked={selectedQuarter === quarter}
                        onChange={() => handleQuarterChange(quarter)}
                        className="mr-2"
                      />
                      {quarter}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div className="expandable-section">
              <button onClick={toggleYear} className="section-header">
                Year*
              </button>
              {isYearOpen && (
                <div className="section-content">
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
            </div>
            <div className="course-summary">
              <h2>Course Summary:</h2>
              {courseData && <p>{courseData.course_description}</p>}
            </div>
            <div className="course-syllabus">
              <h2>Course Syllabus</h2>
              <div className="syllabus-placeholder"></div>
            </div>
            <button className="explore-button">Explore</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
