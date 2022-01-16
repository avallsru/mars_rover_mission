import React from "react";
import { IoIosWarning } from "react-icons/io";

import { alerts } from "./alertsdescription";

import "./CustomizedAlerts.scss";

const CustomizedAlert = ({ type }) => {
  const selectedAlert = alerts[type];

  if (type)
    return (
      <div className="alerts-container">
        <IoIosWarning className="warning-icon" />
        <div className="alert-text">
          <h3>{selectedAlert.title}</h3>
          <p>{selectedAlert.description}</p>
        </div>
      </div>
    );
  return <div></div>;
};

export default CustomizedAlert;
