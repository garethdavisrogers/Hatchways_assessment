import React, { useState } from "react";
import Tests from "./Tests";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

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
          <div className="student-datum">Email : {student.email}</div>
          <div className="student-datum">Company : {student.company}</div>
          <div className="student-datum">Skill : {student.skill}</div>
          <div className="student-datum">
            Average : {getAverage(student.grades)}%
          </div>
        </div>
        <div className="expand-button">
          {!isExpanded ? (
            <HiPlusSm onClick={expand} size="100px" />
          ) : (
            <HiMinusSm onClick={expand} size="100px" />
          )}
        </div>
      </div>
      {isExpanded && <Tests tests={student.grades} />}
    </div>
  );
};

export default Student;
