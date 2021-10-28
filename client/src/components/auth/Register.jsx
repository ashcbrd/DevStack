import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== password2) {
      console.log("passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <div className="flex border border-gray-200 m-20 mx-40 shadow-xl sm:flex-col-reverse sm:m-12">
        <form
          className="w-5/6 p-8 m-4/5 min-w-4/5 flex flex-col mx-auto sm:p-2"
          onSubmit={(event) => onSubmit(event)}
        >
          <h1 className="text-4xl font-bold text-blue-500 my-4">Register</h1>
          <p className="text-gray-500">
            <i className="fas fa-user"></i> Create Your Account
          </p>

          <div className="form-group">
            <input
              className="my-3 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(event) => onChange(event)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="my-3 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(event) => onChange(event)}
              required
            />
            <small className="">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              className="my-3 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(event) => onChange(event)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="my-3 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={(event) => onChange(event)}
              required
            />
          </div>
          <input
            type="submit"
            className="w-full text-xl  my-3 text-white shadow-base p-1 w-32 bg-blue-500 transition-all border-2 border-blue-500 hover:opacity-80 hover:shadow-lg sm:mw-auto sm:w-full"
            value="Register"
          />
          <p className="my-4 text-gray-500 text-xs hover:opacity-80 cursor-pointer sm:my-2">
            Forgot password?
          </p>
          <p className="text-gray-500 sm:mb-6 text-xs">
            Already have an account?{" "}
            <Link
              className="text-blue-500 hover:opacity-70 hover:underline transition-all"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
        <div className="bg-blue-500 bg-cover">
          <img
            className="bg-register bg-cover"
            src="https://images.pexels.com/photos/211856/pexels-photo-211856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Register background"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
