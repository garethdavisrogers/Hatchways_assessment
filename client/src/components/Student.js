import React, { useState } from "react";
import Tests from "./Tests";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

const Student = ({ student, addTag }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tagField, setTagField] = useState("");
  const [tags, setTags] = useState(student.tags);
  const getAverage = (arr) => {
    let len = arr.length;
    let total = 0;
    arr.forEach((item) => (total += parseInt(item)));
    return total / len;
  };
  const expand = () => {
    setIsExpanded(!isExpanded);
  };
  const getFields = (e) => {
    e.preventDefault();

    setTagField(e.target.value);
  };
  const enterTag = (e) => {
    let index = parseInt(student.id);
    if (e.charCode === 13) {
      addTag(tagField, index);
      e.target.value = "";
      getFields(e);
    }
  };
  return (
    <div className="student-component" role="student-component">
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
          {tags !== [] && (
            <div className="tag-container">
              {tags.map((tag, ind) => (
                <div className="tag" key={ind}>
                  {tag}
                </div>
              ))}
            </div>
          )}
          <input
            className="tag-input"
            name="tag-input"
            placeholder="Add a tag"
            onKeyPress={enterTag}
            onChange={getFields}
          />
        </div>
        <div className="expand-button">
          {!isExpanded ? (
            <HiPlusSm
              onClick={expand}
              size="100px"
              data-testid="expand-button"
            />
          ) : (
            <HiMinusSm
              onClick={expand}
              size="100px"
              data-testid="contract-button"
            />
          )}
        </div>
      </div>
      {isExpanded && <Tests tests={student.grades} />}
    </div>
  );
};

export default Student;
