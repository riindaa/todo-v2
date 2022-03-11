import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./style.scss";

const Grades = ({ grades, removeGrade }) => {
  const [selectedGradeId, setSelectedGradeId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (gradeId) => (event) => {
    setAnchorEl(event.currentTarget);
    setSelectedGradeId(gradeId);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    removeGrade(selectedGradeId);
    setAnchorEl(null);
  };

  return grades.map((grade) => {
    return (
      <div className="Grades" key={grade.id}>
        <div>{grade.course}</div>
        <div>Grade: {grade.grade}</div>
        <div>Coef.: {grade.coef}</div>

        <div className="menu">
          <IconButton onClick={handleClick(grade.id)}>
            <MoreVertIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
    );
  });
};

export default Grades;
