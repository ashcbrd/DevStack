import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "actions/alert";
import { register } from "actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="flex mt-10 absolute inset-0 m-w-full max-w-7xl overflow-hidden md:my-auto md:shadow-xl md:border md:border-gray-200 md:rounded-xl md:mx-auto md:h-3/4">
      <div className="hidden bg-blue-500 rounded-tr-full md:flex flex-col justify-center items-center w-full">
        {" "}
        <h1 className="text-8xl font-bold text-white my-4">Register</h1>
        <p className="mt-10 text-center text-xs md:text-basenpm  text-white text-xs">
          Don't have an account?{" "}
          <Link
            className="bg-white rounded-full p-2 px-4 text-blue-500 ml-2 hover:opacity-70 transition-all"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
      <div className="md:flex w-full md:w-1/2 items-center">
        <form
          className="flex flex-col mx-8 p-8 md:mx-auto md:w-full"
          onSubmit={(e) => onSubmit(e)}
        >
          <h1 className="md:hidden text-4xl font-bold text-blue-500 my-4">
            Register
          </h1>
          <p className="text-gray-500 mb-4">
            <i className="fas fa-user"></i> Create Your Account
          </p>

          <div>
            <input
              className="my-3 border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <input
              className="my-3 border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <input
              className="my-3 border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <input
              className="my-3 border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input
            type="submit"
            className="w-full my-3 text-white rounded-full shadow-base p-1 w-32 bg-blue-500 transition-all border-2 border-blue-500 hover:opacity-80 hover:shadow-lg"
            value="Register"
          />
        </form>
        <p className="md:hidden text-center text-gray-500 text-xs">
          Don't have an account?{" "}
          <Link
            className="text-blue-500 hover:opacity-70 hover:underline transition-all"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
