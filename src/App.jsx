import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import Navbar from "./components/navbar";
import Upload from "./components/upload";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
