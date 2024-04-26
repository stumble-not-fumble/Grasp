import { useState } from "react";
import "../css/upload.css";

/**
 * Check if all required inputs are filled
 * @returns {boolean} true if all inputs are filled, false otherwise
 */
function allInputsFilled() {
  for (const input of document.querySelectorAll("input[required]")) {
    if (!input.value) {
      return false;
    }
  }
  for (const checkbox of document.querySelectorAll("input[type='radio']")) {
    console.log(checkbox.checked);
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
}

const Upload = () => {
  const [viewPdf, setViewPdf] = useState(null);
  const [pdfObject, setPdfObject] = useState(null);
  const [professor, setProfessor] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [yearOffered, setYearOffered] = useState("");
  const [quarter, setQuarter] = useState("");
  const [fileName, setFileName] = useState("");

  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = (e) => {
        setViewPdf(e.target.result);
      };
      setPdfObject(selectedFile);
      setFileName(selectedFile.name);
    } else {
      setViewPdf(null);
      setFileName("");
    }
  };

  const handleSubmit = async () => {
    if (viewPdf === null) {
      alert("Please upload a valid PDF file");
      return;
    }
    if (!allInputsFilled()) {
      return;
    }

    const formData = new FormData();
    const [course_major, course_number] = document
      .getElementById("course_code")
      .value.split(" ");

    formData.append("professor", document.getElementById("professor").value);
    formData.append(
      "course_title",
      document.getElementById("course_name").value
    );
    formData.append("course_major", course_major);
    formData.append("course_number", course_number);
    formData.append("year", document.getElementById("year_offered").value);
    for (const checkbox of document.querySelectorAll("input[type='radio']")) {
      if (checkbox.checked) {
        formData.append("quarter", checkbox.value);
      }
    }
    formData.append("pdf", pdfObject);

    formData.forEach((value, key) => {
      console.log(key, value);
    });
    const response = await fetch("https://grasp-api.fly.dev/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.text();
      alert(data);

      setProfessor("");
      setCourseName("");
      setCourseCode("");
      setYearOffered("");
      setQuarter("");
      setFileName("");
      setViewPdf(null);
      setPdfObject(null);
      document.getElementById("file_upload").value = "";
    } else {
      alert("Failed to upload syllabus");
    }
  };

  return (
    <main>
      <h1>Upload Syllabus</h1>
      <form
        className="upload_form"
        aria-label="Course syllabus upload form"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="professor">
          Professor&apos;s First and Last Name*
          <input
            type="text"
            id="professor"
            placeholder="First and Last Name"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
            required
          />
        </label>
        <label htmlFor="course_name">
          Course Name*
          <input
            type="text"
            id="course_name"
            placeholder="E.g. Client-Side Web Development"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="course_code">
          Course Code*
          <input
            type="text"
            id="course_code"
            placeholder="E.g. INFO 340"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            required
          />
        </label>
        <label htmlFor="year_offered">
          Year Offered*
          <input
            type="number"
            id="year_offered"
            placeholder="E.g. 2024"
            value={yearOffered}
            onChange={(e) => setYearOffered(e.target.value)}
            required
          />
        </label>
        <div className="quarters_offered">
          <p>Quarter Offered*</p>
          <ul className="items-center w-full rounded-lg sm:flex">
            <li>
              <div className="flex items-center">
                <input
                  id="autumn-checkbox-list"
                  type="radio"
                  name="quarter"
                  value="AUT"
                  checked={quarter === "AUT"}
                  onChange={() => setQuarter("AUT")}
                  required
                  className="w-8 h-8 rounded focus:ring-2"
                />
                <label
                  htmlFor="autumn-checkbox-list"
                  className="w-full py-3 ms-2 text-lg"
                >
                  Autumn
                </label>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center ps-3">
                <input
                  id="winter-checkbox-list"
                  type="radio"
                  name="quarter"
                  value="WIN"
                  checked={quarter === "WIN"}
                  onChange={() => setQuarter("WIN")}
                  required
                  className="w-8 h-8 rounded focus:ring-2"
                />
                <label
                  htmlFor="winter-checkbox-list"
                  className="w-full py-3 ms-2 text-lg"
                >
                  Winter
                </label>
              </div>
            </li>
            <li className="items-center	">
              <div className="flex items-center ps-3">
                <input
                  id="spring-checkbox-list"
                  type="radio"
                  name="quarter"
                  value="SPR"
                  checked={quarter === "SPR"}
                  onChange={() => setQuarter("SPR")}
                  required
                  className="w-8 h-8 rounded focus:ring-2"
                />
                <label
                  htmlFor="spring-checkbox-list"
                  className="w-full py-3 ms-2 text-lg"
                >
                  Spring
                </label>
              </div>
            </li>
            <li className="w-full dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="summer-checkbox-list"
                  type="radio"
                  name="quarter"
                  value="SUM"
                  checked={quarter === "SUM"}
                  onChange={() => setQuarter("SUM")}
                  required
                  className="w-8 h-8 rounded focus:ring-2"
                />
                <label
                  htmlFor="summer-checkbox-list"
                  className="w-full py-3 ms-2 text-lg"
                >
                  Summer
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="file_upload">
          <label htmlFor="file_upload">Syllabus*</label>
          <p>
            Help us out by uploading a syllabus! Print a PDF copy of your
            syllabus on canvas and upload it to this page.&nbsp;
            <a href="https://www.consumerfinance.gov/consumer-tools/save-as-pdf-instructions/">
              Here are instructions to print a web page to pdf.
            </a>
            &nbsp;If your class doesn&apos;t have a syllabus on canvas fill out
            this form here.
          </p>
          <input
            type="file"
            id="file_upload"
            name="file_name"
            accept=".pdf"
            onChange={handlePdfFileChange}
            required
          ></input>
        </div>
        <div className="container">
          {viewPdf && (
            <>
              <p>View PDF</p>
              <div className="pdf-container">
                <object
                  data={viewPdf}
                  type="application/pdf"
                  aria-label="Your uploaded syllabus"
                >
                  <p>Your browser doesn&apos;t have a PDF plugin to display </p>
                </object>
              </div>
              <div className="submit_button_container">
                <button
                  type="submit"
                  className="submit_button"
                  onClick={handleSubmit}
                >
                  Upload
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </main>
  );
};

export default Upload;
