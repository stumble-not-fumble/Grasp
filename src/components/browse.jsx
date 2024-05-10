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
  const [isLevelOpen, setIsLevelOpen] = useState(true);
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState("");
  const [selectedCourseLevel, setSelectedCourseLevel] = useState("");
  const [professorData, setProfessorData] = useState(null);
  const [yearData, setYearData] = useState(null);
  const toggleQuarter = () => setIsQuarterOpen(!isQuarterOpen);
  const toggleYear = () => setIsYearOpen(!isYearOpen);
  const toggleProfessor = () => setIsProfessorOpen(!isProfessorOpen);
  const toggleLevel = () => setIsLevelOpen(!isLevelOpen);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedProfessor, setSelectedProfessor] = useState();
  const [currentCourseData, setCurrentCourseData] = useState([]);
  const handleQuarterChange = (quarter) => {
    setSelectedQuarter(quarter);
  };
  const handleCourseLevelChange = (level) => {
    setSelectedCourseLevel(level);
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
        setCourseData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const updateCurrentCourseData = () => {
    const filteredData = courseData.filter((course) => {
      const courseHundred = Math.floor(Number(course.course_number) / 100);
      const selectedHundred = Math.floor(Number(selectedCourseLevel) / 100);
      return courseHundred === selectedHundred;
    });

    setCurrentCourseData(filteredData);
  };
  useEffect(() => {
    updateCurrentCourseData();
  }, [selectedCourseLevel]);

  const quarterNames = {
    SPR: "Spring",
    SUM: "Summer",
    AUT: "Autumn",
    WIN: "Winter",
  };

  const courseLevels = {
    100: "100",
    200: "200",
    300: "300",
    400: "400",
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
            <button className="section-header">Quarter</button>
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
            <button className="section-header">Year</button>
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
            <button className="section-header">Professor</button>
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
          <div className="expandable-section">
            <button className="section-header">Course Level</button>
            {isLevelOpen && (
              <div className="section-content">
                {["100", "200", "300", "400"].map((level) => (
                  <label key={level} className="radio-label mb-2">
                    <input
                      type="radio"
                      value={level}
                      checked={selectedCourseLevel == level}
                      onChange={() => handleCourseLevelChange(level)}
                      className="w-4 h-4 mr-2"
                    />
                    {courseLevels[level]}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="right-column">
          <h1>Courses</h1>
          <section className="courses-section">
            {currentCourseData &&
              currentCourseData.map((course, index) => (
                <Browsecard
                  key={index}
                  course_major={course.course_major}
                  course_number={course.course_number}
                  course_title={course.course_title}
                  course_description={course.course_description}
                />
              ))}
          </section>
          <div className="hidden-gem">
            <button className="surprise-button">Hidden GEM!</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Browse;
