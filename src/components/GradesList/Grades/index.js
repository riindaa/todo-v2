import React from "react";

import "./style.scss";

const Grades = ({ grades }) => {
  return grades.map((grade, index) => (
    <div className="Grades" key={index}>
      <div>{grade.course}</div>
      <div>Grade: {grade.grade}</div>
      <div>Coef.: {grade.coef}</div>
    </div>
  ));
};

export default Grades;
