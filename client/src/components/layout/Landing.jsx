import React from "react";
import { Fade, Slide } from "react-reveal";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className="bg h-screen w-screen">
      <div className="flex flex-col-reverse bg-black bg-opacity-50 md:justify-betweens md:flex-row">
        <div className="flex flex-col justify-center h-screen w-4/6 ml-16">
          <Slide left>
            <h1 className="x-large text-8xl font-sans font-bold text-white mb-4">
              SOCIAL NETWORK FOR DEVELOPERS
            </h1>
          </Slide>
          <Slide delay={500} left>
            <p className="text-white text-3xl mb-4">
              Create a developer portfolio, share posts and connect with other
              developers in the community.
            </p>
          </Slide>
          <Fade delay={1500} bottom>
            <div className="mt-8">
              <Link
                to="/register"
                className="text-xl mr-4 text-white p-4 px-12 bg-blue-500 hover:opacity-80 border-2 border-blue-500 rounded-lg"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-xl text-white p-4 px-14 border-2 border-blue-500 hover:opacity-80 rounded-lg"
              >
                Login
              </Link>
            </div>
          </Fade>
        </div>
        <div className="flex items-end justify-end mb-14 mr-14">
          <div className="main-icon fa fa-laptop-code text-white text-4xl mr-4" />
          <h1 className="text-icon font-sans font-bold text-white text-4xl">
            DevStack
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Landing;
