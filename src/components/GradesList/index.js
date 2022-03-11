import React, { useEffect, useState } from "react";

import GradesForm from "./GradesForm";
import Grades from "./Grades";

import "./style.scss";

const GradesList = () => {
  const [grades, setGrades] = useState([]);
  const [averageGrade, setAverageGrade] = useState();

  useEffect(() => {
    const averageGrade = calculateAverageGrade(grades);
    setAverageGrade(averageGrade);
  }, [grades]);

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

  const calculateAverageGrade = (grades) => {
    let totalGradesWithCoef = [];
    let totalCoef = [];

    for (const element of grades) {
      const calculateCoef = Number(element.grade) * Number(element.coef);
      totalGradesWithCoef.push(calculateCoef);
      totalCoef.push(Number(element.coef));
    }

    const sumTotalGrades = totalGradesWithCoef.reduce(
      (prev, current) => prev + current,
      0
    );

    const sumTotalCoef = totalCoef.reduce((prev, current) => prev + current, 0);

    const averageGrade = sumTotalGrades / sumTotalCoef;

    return averageGrade.toFixed(2);
  };

  return (
    <div className="GradesList">
      <h1>My grades</h1>
      <div className="agerageGrade">{averageGrade}</div>
      <GradesForm onSubmit={addGrade} />
      <Grades grades={grades} />
    </div>
  );
};

export default GradesList;
