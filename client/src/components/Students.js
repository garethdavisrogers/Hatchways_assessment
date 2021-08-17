import React from "react";
import Student from "./Student";

const Students = ({ filterStudents, addTag }) => {
  return (
    <div className="student-list" role="student-list">
      {filterStudents &&
        filterStudents.map((student, ind) => (
          <Student student={student} key={ind} addTag={addTag} />
        ))}
    </div>
  );
};

export default Students;
