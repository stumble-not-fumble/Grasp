import { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "../css/upload.css";
import { Worker } from "@react-pdf-viewer/core";

const Upload = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [viewPdf, setViewPdf] = useState(null);

  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = (e) => {
        setViewPdf(e.target.result);
      };
    } else {
      setViewPdf(null);
    }
  };

  return (
    <main>
      <h1>Upload Syllabus</h1>
      <form className="upload_form" aria-label="Course syllabus upload form">
        <label htmlFor="Professor First and Last Name">
          Professor&apos;s First and Last Name*
          <span>
            <input
              type="text"
              id="professor"
              placeholder="First and Last Name"
              required
            />
          </span>
        </label>
        <label htmlFor="Course Name">
          Course Name*
          <span>
            <input
              type="text"
              id="course_name"
              placeholder="E.g. Client-Side Web Development"
              required
            />
          </span>
        </label>
        <label htmlFor="Course Code">
          Course Code*
          <span>
            <input
              type="text"
              id="course_code"
              placeholder="E.g. INFO 340"
              required
            />
          </span>
        </label>
        <label htmlFor="Year Offered">
          Year Offered*
          <span>
            <input
              type="text"
              id="year_offered"
              placeholder="E.g. 2024"
              required
            />
          </span>
        </label>
        <label htmlFor="Quarter Offered">
          Quarter Offered*
          <ul className="items-center w-full rounded-lg sm:flex">
            <li>
              <div className="flex items-center ps-3">
                <input
                  id="autumn-checkbox-list"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 rounded focus:ring-2"
                />
                <label
                  htmlFor="autumn-checkbox-list"
                  className="w-full py-3 ms-2 text-xl"
                >
                  Autumn
                </label>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center ps-3">
                <input
                  id="winter-checkbox-list"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 rounded focus:ring-2"
                />
                <label
                  htmlFor="winter-checkbox-list"
                  className="w-full py-3 ms-2 text-xl"
                >
                  Winter
                </label>
              </div>
            </li>
            <li className="items-center	">
              <div className="flex items-center ps-3">
                <input
                  id="spring-checkbox-list"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 rounded focus:ring-2"
                />
                <label
                  htmlFor="spring-checkbox-list"
                  className="w-full py-3 ms-2 text-xl"
                >
                  Spring
                </label>
              </div>
            </li>
            <li className="w-full dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="summer-checkbox-list"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 rounded focus:ring-2"
                />
                <label
                  htmlFor="summer-checkbox-list"
                  className="w-full py-3 ms-2 text-xl"
                >
                  Summer
                </label>
              </div>
            </li>
          </ul>
        </label>
      </form>
      <form className="file_upload">
        <label htmlFor="file_upload">Syllabus*</label>
        <p>
          Help us out by uploading a syllabus! Print a PDF copy of your syllabus
          on canvas and upload it to this page.&nbsp;
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
          required
          onChange={handlePdfFileChange}
        ></input>
      </form>
      <div className="container">
        {viewPdf && (
          <>
            <p>View PDF</p>
            <div className="pdf-container">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={viewPdf}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Upload;
