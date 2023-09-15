import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PageUnderConstruction from "./components/PageUnderConstruction/PageUnderConstruction";
import DesignAudit from "./components/Services/DesignAudit/DesignAudit";
import IndependentAssessmentAndTesting from "./components/Services/IndependentAssessmentAndTesting/IndependentAssessmentAndTesting";
import ProgramManagement from "./components/Services/ProgramManagement/ProgramManagement";
import EffortEstimationAndValidation from "./components/Services/EffortEstimationAndValidation/EffortEstimationAndValidation";
import Industry from "./components/Services/Industry/Industry";
import WorldwideContract from "./components/Services/WorldwideContract/WorldwideContract";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/program-management" element={<ProgramManagement />} />
        <Route
          path="/effort-estimation-and-validation"
          element={<EffortEstimationAndValidation />}
        />
        <Route path="/design-audit" element={<DesignAudit />} />
        <Route
          path="/independent-assessment-and-testing"
          element={<IndependentAssessmentAndTesting />}
        />
        <Route
          path="/industry-4-0-advisory"
          element={<Industry />}
        />
        <Route
          path="/worldwide-contract-staffing"
          element={<WorldwideContract />}
        />
        <Route
          path="/blogs"
          element={<Blog/>}
        />
        <Route path="*" element={<PageUnderConstruction />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
