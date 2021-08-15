import React from "react";

const Tests = ({ tests }) => {
  return (
    <div className="grade-container">
      {tests.map((test, index) => (
        <div className="student-datum" key={index}>
          Test {index + 1}: {test} %
        </div>
      ))}
    </div>
  );
};

export default Tests;
