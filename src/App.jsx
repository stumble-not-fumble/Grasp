import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import Navbar from "./components/navbar";
import CoursePage from "./components/coursepage";
import Upload from "./components/upload";
import AboutUs from "./components/aboutus";
import Browse from "./components/browse";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/course-page" element={<CoursePage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
