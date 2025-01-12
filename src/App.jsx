import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About";
import CustomCursor from "./Components/CustomCursor";

import "./Styles/main.scss";

const App = () => {
  return (
    <Router basename="/Portfolio">
      <div className="container">
        <CustomCursor />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
