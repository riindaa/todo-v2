import React, { useState } from "react";

import GradesForm from "./GradesForm";
import Grades from "./Grades";

const GradesList = () => {
  const [grades, setGrades] = useState([]);

  const addGrade = (grade) => {
    if (!grade.course || /^\s*$/.test(grade.course) || !grade.grade) {
      return;
    }

    if (!grade.coef) {
      grade.coef = "1";
    }

    const newGrades = [grade, ...grades];

    setGrades(newGrades);
  };

  return (
    <div>
      <h1>My grades</h1>
      <GradesForm onSubmit={addGrade} />
      <Grades grades={grades} />
    </div>
  );
};

export default GradesList;
