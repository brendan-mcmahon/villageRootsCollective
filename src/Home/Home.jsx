import { useState } from "react";
import Philosophy from "./Philosophy.jsx";
import "../App.scss";
import TeacherBlock from "./TeacherBlock.jsx";
import LinkBlocks from "./LinkBlocks.jsx";
import Quotes from "./Quotes.jsx";
import ProgramsDialog from "./ProgramsDialog.jsx";
import logo from "../assets/Logo v3.png";
import { Link } from "react-router-dom";

function Home() {
  const [showProgramsDialog, setShowProgramsDialog] = useState(false);

  return (
    <>
      <div id="sky"></div>
      <div className="page">
        <button className="donate-button">Donate</button>

        <div id="tree" className="image-container">
          <img src={logo} alt="Village Roots Collective Logo" />
        </div>

        <Philosophy />

        <TeacherBlock />

        <LinkBlocks setShowProgramsDialog={setShowProgramsDialog} />

        <Quotes />

        <ProgramsDialog showProgramsDialog={showProgramsDialog} close={() => setShowProgramsDialog(false)} />

        <p className="copyright">
          © 2024 Village Roots Collective
          <br />
          <Link to="/terms-of-use">Terms of Use</Link>
        </p>
      </div>
    </>
  );
}

export default Home;
