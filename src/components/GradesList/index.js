import React, { useEffect, useState, useRef } from "react";

import GradesForm from "./GradesForm";
import Grades from "./Grades";

import "./style.scss";

const GradesList = () => {
  const [grades, setGrades] = useState([]);
  const [averageGrade, setAverageGrade] = useState();

  const inputRef = useRef();

  useEffect(() => {
    const averageGrade = calculateAverageGrade(grades);
    setAverageGrade(averageGrade);
    inputRef.current.focus();
  }, [grades]);

  const addGrade = (grade) => {
    if (!grade.course.trim() || !grade.grade) {
      return;
    }

    if (!grade.coef) {
      grade.coef = 1;
    }

    const newGrades = [grade, ...grades];

    setGrades(newGrades);
  };

  const calculateAverageGrade = (grades) => {
    const sumTotalGrades = grades.reduce(
      (acc, current) => acc + current.grade * current.coef,
      0
    );

    const sumTotalCoef = grades.reduce(
      (prev, current) => prev + current.coef,
      0
    );

    const averageGrade = sumTotalGrades / sumTotalCoef;

    return averageGrade.toFixed(2);
  };

  const removeGrade = (id) => {
    const removeArr = [...grades].filter((grade) => grade.id !== id);

    setGrades(removeArr);
  };

  return (
    <div className="GradesList">
      <h1>My grades</h1>
      <div className="agerageGrade">
        {averageGrade === "NaN" ? "-" : averageGrade}
      </div>
      <GradesForm onSubmit={addGrade} courseInputRef={inputRef} />
      <Grades grades={grades} removeGrade={removeGrade} />
    </div>
  );
};

export default GradesList;
