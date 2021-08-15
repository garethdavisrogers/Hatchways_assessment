import React from "react";
import Student from "./Student";

const Students = ({ students, search, filterStudents }) => {
  return (
    <div className="student-list">
      {filterStudents &&
        filterStudents.map((student) => (
          <Student student={student} key={student.id} />
        ))}
    </div>
  );
};

export default Students;
