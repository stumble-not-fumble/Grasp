import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import Navbar from "./components/navbar";
import CoursePage from "./components/coursepage";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/course-page" element={<CoursePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
