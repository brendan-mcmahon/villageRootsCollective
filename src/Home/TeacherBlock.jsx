import jamieHouse from "../assets/Jamie House v2.png";
import krystallHouse from "../assets/Krystall House.png";
import { Link } from "react-router-dom";

const TeacherBlock = () => {
  return (
    <>
      <h2 className="meet">Meet our Teachers</h2>

      <Link id="mrs-k" className="image-container" to="/teachers/krystall">
        <img src={krystallHouse} alt="Mrs. K's House" />
        <h2>Mrs. K</h2>
      </Link>
      <Link id="mrs-j" className="image-container" to="/teachers/jamie">
        <img src={jamieHouse} alt="Mrs. Jamie's House" />
        <h2>Mrs. Jamie</h2>
      </Link>
    </>
  );
};

export default TeacherBlock;
