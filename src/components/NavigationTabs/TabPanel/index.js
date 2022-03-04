import React from "react";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div hidden={value !== index} id={`tabPanel-${index}`} {...other}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default TabPanel;
