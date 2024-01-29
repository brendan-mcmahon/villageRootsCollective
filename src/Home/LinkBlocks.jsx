import programsIcon from "../assets/icons/programs.png";
import calendarIcon from "../assets/icons/calendar.png";
import enrollmentIcon from "../assets/icons/enrollment.png";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import melodleIcon from "../assets/icons/melodle.png";
import { Link } from "react-router-dom";

const LinkBlocks = ({ setShowProgramsDialog }) => {
  return (
    <div className="links">
      <div className="block-link">
        <button onClick={() => setShowProgramsDialog(true)}>
          <img src={programsIcon} />
        </button>
      </div>
      <div className="block-link">
        <Link to="/calendar">
          <img src={calendarIcon} />
        </Link>
      </div>
      <div className="block-link">
        <Link to="/enrollment">
          <img src={enrollmentIcon} />
        </Link>
      </div>
      <div className="block-link">
        <a href="https://www.facebook.com/VillageRootsCollective/" target="_blank" rel="noreferrer">
          <img src={facebookIcon} />
        </a>
      </div>
      <div className="block-link">
        <a href="https://www.instagram.com/village.roots.collective/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} />
        </a>
      </div>
      <div className="block-link">
        <Link to="/melodle">
          <img src={melodleIcon} />
        </Link>
      </div>
    </div>
  );
};

export default LinkBlocks;
