import React, { useState } from "react";
import Tests from "./Tests";

const Student = ({ student }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const getAverage = (arr) => {
    let len = arr.length;
    let total = 0;
    arr.forEach((item) => (total += parseInt(item)));
    return total / len;
  };
  const expand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="student-component">
      <div className="student-card">
        <div className="student-picture">
          <img className="student-img" src={student.pic} />
        </div>
        <div className="student-info">
          <div className="student-name">
            {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
          </div>
          <div className="student-datum">
            <label>Email : </label>
            <h5>{student.email}</h5>
          </div>
          <div className="student-datum">
            <label>Company : </label>
            <h5>{student.company}</h5>
          </div>
          <div className="student-datum">
            <label>Skill : </label>
            <h5>{student.skill}</h5>
          </div>
          <div className="student-datum">
            <label>Average : </label>
            <h5>{getAverage(student.grades)}%</h5>
          </div>
          <button onClick={expand}>+</button>
        </div>
      </div>
      {isExpanded && <Tests tests={student.grades} />}
    </div>
  );
};

export default Student;
