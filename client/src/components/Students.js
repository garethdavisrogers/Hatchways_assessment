import React from "react";

const Students = ({ students, search, filterStudents }) => {
  const getAverage = (arr) => {
    let len = arr.length;
    let total = 0;
    arr.forEach((item) => (total += parseInt(item)));
    return total / len;
  };

  return (
    <div className="student-list">
      {filterStudents &&
        filterStudents.map((student) => (
          <div className="student-card" key={student.id}>
            <div className="student-picture">
              <img className="student-img" src={student.pic} />
            </div>
            <div className="student-info">
              <div className="student-name">
                {student.firstName.toUpperCase()}{" "}
                {student.lastName.toUpperCase()}
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
            </div>
          </div>
        ))}
    </div>
  );
};

export default Students;
