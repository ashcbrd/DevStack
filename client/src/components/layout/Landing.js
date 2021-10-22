import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="fa fa-laptop-code laptop-icon"></div>
          <h1 className="x-large">Developers Connect</h1>
          <p className="lead">
            Create your profile, share, and connect with other developers.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
