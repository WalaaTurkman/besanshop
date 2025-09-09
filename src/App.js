import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComponent from "./componnt/Nav";
import Home from "./pages/Home";
import Cups from "./pages/Cups";
import Bags from "./pages/Bags";
import Footer from "./componnt/Footer";

function App() {
  return (
    <>
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cups" element={<Cups />} />
        <Route path="/bags" element={<Bags />} />

      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
