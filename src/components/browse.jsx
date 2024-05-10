import "../css/browse.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "../css/course.css";
import Browsecard from "../components/browsecard";
import { useEffect, useState } from "react";

const Browse = () => {
  const [isQuarterOpen, setIsQuarterOpen] = useState(true);
  const [isYearOpen, setIsYearOpen] = useState(true);
  const [isProfessorOpen, setIsProfessorOpen] = useState(true);
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState("");
  const [selectedCourseLevel, setSelectedCourseLevel] = useState("");
  const [professorData, setProfessorData] = useState(null);
  const [yearData, setYearData] = useState(null);
  const toggleQuarter = () => setIsQuarterOpen(!isQuarterOpen);
  const toggleYear = () => setIsYearOpen(!isYearOpen);
  const toggleProfessor = () => setIsProfessorOpen(!isProfessorOpen);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedProfessor, setSelectedProfessor] = useState();

  const handleQuarterChange = (quarter) => {
    setSelectedQuarter(quarter);
  };
  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const handleProfessorChange = (selectedProfessor) => {
    setSelectedProfessor(selectedProfessor);
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://grasp-api.fly.dev/professor`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProfessorData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://grasp-api.fly.dev/years`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setYearData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://grasp-api.fly.dev/course/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCourseData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  // Mapping quarter abbreviations to full names
  const quarterNames = {
    SPR: "Spring",
    SUM: "Summer",
    AUT: "Autumn",
    WIN: "Winter",
  };

  return (
    <main>
      <div className="browse-container">
        <div className="left-column">
          <p className="mb-4">
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
                  <label key={quarter} className="radio-label mb-2">
                    <input
                      type="radio"
                      value={quarter}
                      checked={selectedQuarter === quarter}
                      onChange={() => handleQuarterChange(quarter)}
                      className="w-4 h-4 mr-2"
                    />
                    {quarterNames[quarter]}
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
                <Autocomplete
                  id="year-select"
                  options={yearData || []}
                  getOptionLabel={(option) => "" + option}
                  renderInput={(params) => (
                    <TextField {...params} label="Year" />
                  )}
                  onChange={(event, newValue) => {
                    handleYearChange(newValue);
                  }}
                />
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button onClick={toggleProfessor} className="section-header">
              Professor*
            </button>
            {isProfessorOpen && (
              <div className="section-content">
                <Autocomplete
                  id="professor-select"
                  options={professorData || []}
                  getOptionLabel={(option) =>
                    option.first_name + option.middle_initial + option.last_name
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Professor" />
                  )}
                  onChange={(event, newValue) => {
                    handleProfessorChange(newValue);
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="right-column">
          <h1>Courses</h1>
          <button className="surprise-button">Hidden GEM!</button>
          <section className="courses-section">
            {courseData &&
              courseData.map((course, index) => (
                <Browsecard
                  key={index}
                  courseMajor={course.course_major}
                  courseNumber={course.course_number}
                  courseTitle={course.course_title}
                  courseDescription={course.course_description}
                  // courseCredits={course.courseCredits}
                />
              ))}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Browse;
