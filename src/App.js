import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Market } from "./pages";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<Market />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
