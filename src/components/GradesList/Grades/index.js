import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./style.scss";

const Grades = ({ grades, removeGrade }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return grades.map((grade, index) => {
    const handleDelete = () => {
      removeGrade(grade.id);
      setAnchorEl(null);
    };

    return (
      <div className="Grades" key={index}>
        <div>{grade.course}</div>
        <div>Grade: {grade.grade}</div>
        <div>Coef.: {grade.coef}</div>

        <div className="menu">
          <IconButton onClick={handleClick}>
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
