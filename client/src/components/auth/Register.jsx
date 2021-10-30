import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
      console.log("passwords do not match");
    } else {
      console.log("SUCESS");
    }
  };

  return (
    <div className="flex w-full mt-16 md:my-24 md:shadow-xl md:border md:border-gray-200 md:rounded-xl md:mx-20 md:h-screen">
      <div className="bg-blue-500 hidden md:block reg-bg w-full rounded-l-xl" />
      <div className="w-full md:w-1/2 items-center">
        <form
          className="flex flex-col mx-8 p-8 md:mx-auto md:mt-10 md:w-full"
          onSubmit={(e) => onSubmit(e)}
        >
          <h1 className="text-4xl font-bold text-blue-500 my-4">Register</h1>
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
              required
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
              required
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
              required
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
              required
            />
          </div>
          <input
            type="submit"
            className="w-full my-3 text-white rounded shadow-base p-1 w-32 bg-blue-500 transition-all border-2 border-blue-500 hover:opacity-80 hover:shadow-lg"
            value="Register"
          />
        </form>
        <p className=" text-center text-gray-500 text-xs">
          Already have an account?{" "}
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

export default Register;
