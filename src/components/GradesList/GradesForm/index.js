import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import "./style.scss";

const GradesForm = ({ onSubmit }) => {
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [coef, setCoef] = useState("");

  const getCourse = (e) => {
    setCourse(e.target.value);
  };

  const getGrade = (e) => {
    setGrade(e.target.value);
  };

  const getCoef = (e) => {
    setCoef(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      course: course.replace(/\s\s+/g, " ").trim(),
      grade: Number(grade),
      coef: Number(coef),
    });

    setCourse("");
    setGrade("");
    setCoef("");
  };

  return (
    <form className="GradesForm " onSubmit={handleSubmit}>
      <div className="textField">
        <TextField
          id="outlined-basic"
          label="Course"
          variant="outlined"
          onChange={getCourse}
          value={course}
        />
      </div>
      <div className="textField">
        <TextField
          id="outlined-number"
          label="Grade"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={getGrade}
          value={grade}
        />
      </div>
      <div className="textField">
        <TextField
          id="outlined-number"
          label="Coef"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={getCoef}
          value={coef}
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default GradesForm;
