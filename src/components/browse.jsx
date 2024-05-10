import "../css/browse.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "../css/course.css";
import Browsecard from "../components/browsecard";
import { useEffect, useState } from "react";

const Browse = () => {
  const [isLevelOpen, setIsLevelOpen] = useState(true);
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCourseLevel, setSelectedCourseLevel] = useState("");
  const toggleLevel = () => setIsLevelOpen(!isLevelOpen);
  const [currentCourseData, setCurrentCourseData] = useState([]);
  const handleCourseLevelChange = (level) => {
    setSelectedCourseLevel(level);
  };
  const resetSelectedCourseLevel = () => {
    setSelectedCourseLevel(""); // Reset to initial value
  };

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
          <div className="hidden-gem">
            <button
              className="surprise-button"
              onClick={resetSelectedCourseLevel}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="right-column">
          <h1>Courses</h1>
          <section className="courses-section">
            {selectedCourseLevel == ""
              ? courseData &&
                courseData.map((course, index) => (
                  <Browsecard
                    key={index}
                    course_major={course.course_major}
                    course_number={course.course_number}
                    course_title={course.course_title}
                    course_description={course.course_description}
                  />
                ))
              : currentCourseData &&
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
