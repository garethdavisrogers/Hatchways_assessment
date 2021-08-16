import React from "react";

const Tests = ({ tests }) => {
  return (
    <div className="grade-container">
      {tests.map((test, index) => (
        <div className="student-datum" key={index}>
          <div>Test {index + 1} : </div>
          <div className="percent"> {test} %</div>
        </div>
      ))}
    </div>
  );
};

export default Tests;
