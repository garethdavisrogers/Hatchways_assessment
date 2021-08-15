import React from "react";

const Tests = ({ tests }) => {
  return tests.map((test, index) => (
    <div key={index}>
      Test {index + 1}: {test} %
    </div>
  ));
};

export default Tests;
