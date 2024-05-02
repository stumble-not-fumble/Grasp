import { useState } from "react";
import "../css/browse.css";

const Browse = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedQuarter, setSelectedQuarter] = useState("");
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [selectedCourseLevel, setSelectedCourseLevel] = useState("");

  // More states and functions needed for handling filters and fetching course data from DB

  return (
    <main className="browse-main">
      <h1 className="page-title">Browse Courses</h1>
      <div className="browse-container">
        <aside className="filter-section">
          <div className="filter-group">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              placeholder="Input Year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <label>Quarter</label>
            <div className="radio-group">
              {["Autumn", "Winter", "Spring", "Summer"].map((quarter) => (
                <label key={quarter}>
                  <input
                    type="radio"
                    name="quarter"
                    value={quarter}
                    checked={selectedQuarter === quarter}
                    onChange={() => setSelectedQuarter(quarter)}
                  />
                  {quarter}
                </label>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label htmlFor="professor">Professor</label>
            <input
              type="text"
              id="professor"
              placeholder="Professor Name"
              value={selectedProfessor}
              onChange={(e) => setSelectedProfessor(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <label htmlFor="course-level">Course Level</label>
            <select
              id="course-level"
              value={selectedCourseLevel}
              onChange={(e) => setSelectedCourseLevel(e.target.value)}
            >
              <option value="">Select Level</option>
              {["100", "200", "300", "400"].map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </aside>
        <section className="courses-section">
          {/* Course cards need to go here */}
        </section>
      </div>
    </main>
  );
};

export default Browse;
