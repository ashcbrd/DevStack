import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div>
      <Link to="/edit-profile">
        <i className="fas fa-user-circle"></i>
      </Link>
      <Link to="/add-experience">
        <i className="fab fa-black-tie"></i>
      </Link>
      <Link to="/add-education">
        <i className="fas fa-graduation-cap"></i>
      </Link>
    </div>
  );
};

export default DashboardActions;
