import React, { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";

import TabPanel from "./TabPanel";
import { TodoList } from "../TodoList";

import "./style.scss";

const NavigationTabs = () => {
  const [value, setValue] = useState(0);

  console.log("value:::", value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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

      <SwipeableViews
        index={value}
        className="swipe"
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          My Grades
        </TabPanel>

        <TabPanel value={value} index={1}>
          <TodoList />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default NavigationTabs;
