import React from "react";
import { Fade, Slide } from "react-reveal";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay landing-container">
        <div className="landing-left">
          <Slide left>
            <h1 className="x-large">SOCIAL NETWORK FOR DEVELOPERS</h1>
            <p className="lead">
              Create a developer portfolio, share posts and connect with other
              developers in the community.
            </p>
          </Slide>
          <Fade delay={1000} bottom>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </Fade>
        </div>
        <div className="landing-right">
          <div className="fa fa-laptop-code main-icon" />
          <h1 className="icon-text">DevStack</h1>
        </div>
      </div>
    </section>
  );
};

export default Landing;
