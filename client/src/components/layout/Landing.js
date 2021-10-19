import React from "react";

export const Landing = () => {
  return (
    <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Social Network for Developers</h1>
          <p class="lead">
            Create your profile and share your knowledge with other developers.
          </p>
          <div class="buttons">
            <a href="register.html" class="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" class="btn btn-light">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
