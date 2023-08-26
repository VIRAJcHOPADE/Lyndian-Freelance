import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PageUnderConstruction from "./components/PageUnderConstruction/PageUnderConstruction";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<PageUnderConstruction />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
