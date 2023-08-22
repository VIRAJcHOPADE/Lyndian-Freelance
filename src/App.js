import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PageUnderConstruction from "./components/PageUnderConstruction/PageUnderConstruction";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageUnderConstruction />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
