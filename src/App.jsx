import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
