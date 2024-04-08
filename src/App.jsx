import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import AboutUs from "./components/aboutus";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
