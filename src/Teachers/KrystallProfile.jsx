import Teacher from "./Teacher.jsx";
import { bios } from "./bios.js";
import profilePic from "../assets/Mrs-K-profile.png";
import pic1 from "../assets/Mrs-K-3.png";
import pic2 from "../assets/Mrs-K-1.png";

export default function KrystallProfile() {
  const bio = bios.filter((b) => b.name === "Mrs. K")[0];

  return (
    <div className="teacher-container">
      <div id="mrs-k" className="teacher">
        <Teacher bio={bio} profilePic={profilePic} pic1={pic1} pic2={pic2} />
      </div>
    </div>
  );
}
