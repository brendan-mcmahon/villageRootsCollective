import { useState } from "react";
import { useParams } from "react-router-dom";
import Teacher from "./Teacher";
import { bios } from "./bios.js";

export default function Teachers() {
  let { name } = useParams();
  const [currentTeacher, setCurrentTeacher] = useState(name);
  const [krystallPosition, setKrystallPosition] = useState("0dvw");
  const [jamiePosition, setJamiePosition] = useState("100dvw");

  const switchTeacher = () => {
    switch (name) {
      case "mrsk":
        setCurrentTeacher("jamie");
        setKrystallPosition("0dvw");
        setJamiePosition("100dvw");
        break;

      case "mrsjamie":
        setCurrentTeacher("krystall");
        setKrystallPosition("-100dvw");
        setJamiePosition("0dvw");
        break;
    }
  };

  return (
    <div className="teacher-container">
      <div id="teacher-slider">
        {bios.map((bio, i) => {
          <div key={i} id="mrs-k" className="teacher">
            <Teacher bio={bio} />
            <button id="switch-teacher-button" onClick={switchTeacher}>
              Mrs. Jamie <img src="../assets/Arrow.png" />
            </button>
          </div>;
        })}
      </div>
    </div>
  );
}
