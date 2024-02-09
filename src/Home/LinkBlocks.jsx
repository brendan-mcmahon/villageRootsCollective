import programsIcon from "../assets/icons/small/programs.png";
import calendarIcon from "../assets/icons/small/calendar.png";
import enrollmentIcon from "../assets/icons/small/enrollment.png";
import facebookIcon from "../assets/icons/small/facebook.png";
import instagramIcon from "../assets/icons/small/instagram.png";
import melodleIcon from "../assets/icons/small/melodle.png";
import { Link } from "react-router-dom";

const LinkBlocks = ({ setShowProgramsDialog }) => {
  return (
    <div className="links">
      <div className="block-link">
        <a onClick={() => setShowProgramsDialog(true)}>
          <img src={programsIcon} />
          <span>Programs</span>
        </a>
      </div>
      <div className="block-link">
        <Link to="/calendar">
          <img src={calendarIcon} />
          <span>Calendar</span>
        </Link>
      </div>
      <div className="block-link">
        <Link to="/enrollment">
          <img src={enrollmentIcon} />
          <span>Enrollment</span>
        </Link>
      </div>
      <div className="block-link">
        <Link to="https://www.facebook.com/VillageRootsCollective/" target="_blank" rel="noreferrer">
          <img src={facebookIcon} />
        </Link>
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
