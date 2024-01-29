import Teacher from "./Teacher";
import { bios } from "./bios.js";
import profilePic from "../assets/jamie-profile.jpg";
import pic1 from "../assets/jamie-3.jpg";
import pic2 from "../assets/jamie-4.jpg";

export default function JamieProfile() {
  const bio = bios.filter((b) => b.name === "Mrs. Jamie")[0];

  return (
    <div className="teacher-container">
      <div id="mrs-k" className="teacher">
        <Teacher bio={bio} profilePic={profilePic} pic1={pic1} pic2={pic2} />
      </div>
    </div>
  );
}
