import React from "react";
import { Fade, Slide } from "react-reveal";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="dashboard" />;
  }
  return (
    <section>
      <div className="flex bg-white md:justify-center">
        <div className="flex flex-col justify-center w-full h-screen ml-16">
          <Slide left>
            <h1 className="x-large text-9xl font-sans font-bold text-blue-500 mb-4 -mt-44">
              DevStack
            </h1>
          </Slide>
          <Slide delay={500} left>
            <p className="text-white text-blue-500 text-xl font-sans mb-4">
              Share posts and connect with other developers in the community.
            </p>
          </Slide>
          <Fade delay={1500} bottom>
            <div className="mt-8">
              <Link
                to="/register"
                className="text-xl mr-4 text-white p-4 px-12 bg-blue-500 hover:opacity-50 border-2 border-blue-500 rounded-lg"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-xl text-blue-500 p-4 px-14 border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg"
              >
                Login
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
