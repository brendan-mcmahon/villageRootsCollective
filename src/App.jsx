import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Calendar from "./Calendar";
import Enrollment from "./Enrollment";
import Melodle from "./Games/Melodle/Melodle";
import NotFound from "./NotFound";
import JamieProfile from "./Teachers/JamieProfile";
import KrystallProfile from "./Teachers/KrystallProfile";
import TermsOfUse from "./TermsOfUse";
// import Gallery from "./Gallery";
// import Paper from "./Paper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers/jamie" element={<JamieProfile />} />
        <Route path="/teachers/krystall" element={<KrystallProfile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/melodle" element={<Melodle />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/paper" element={<Paper />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
