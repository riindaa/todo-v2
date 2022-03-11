import React, { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabPanel from "./TabPanel";
import { TodoList } from "../TodoList";

import "./style.scss";
import GradesList from "../GradesList";

const NavigationTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styledTab = {
    color: "#1976d2",
  };

  return (
    <div className="NavigationTabs">
      <div className="tabs">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          variant="fullWidth"
        >
          <Tab label="My Grades" sx={styledTab} />
          <Tab label="My Todo" sx={styledTab} />
        </Tabs>
      </div>

      <TabPanel value={value} index={0}>
        <GradesList />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TodoList />
      </TabPanel>
    </div>
  );
};

export default NavigationTabs;
