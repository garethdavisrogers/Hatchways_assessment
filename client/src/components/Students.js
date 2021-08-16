import React from "react";
import Student from "./Student";

const Students = ({ filterStudents, addTag }) => {
  return (
    <div className="student-list">
      {filterStudents &&
        filterStudents.map((student) => (
          <Student student={student} key={student.id} addTag={addTag} />
        ))}
    </div>
  );
};

export default Students;
