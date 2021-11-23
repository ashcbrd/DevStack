import React, { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const authLinks = (
    <>
      <div className="relative flex justify-between items-center flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <Link
            className="fa fa-laptop-code h-8 w-8 text-white text-2xl "
            to="/"
          />
        </div>
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="ml-auto flex justify-between w-full">
                  <a
                    onClick={logout}
                    href="#!"
                    className="flex items-center hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <i className="fas fa-sign-out-alt mr-2" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-opacity-80 hover:bg-blue-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                onClick={logout}
                href="#!"
                className="flex items-center hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                <i className="fas fa-sign-out-alt mr-2" />
                Logout
              </a>
            </div>
          </div>
        )}
      </Transition>
    </>
  );

  const guestLinks = (
    <>
      <div className="relative flex justify-between items-center flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <Link
            className="fa fa-laptop-code h-8 w-8 text-white text-2xl "
            to="/"
          />
        </div>
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="ml-auto flex justify-between w-full">
                  <a
                    href="#!"
                    className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Developers
                  </a>

                  <Link
                    to="posts"
                    className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Posts
                  </Link>
                  <Link
                    to="/login"
                    className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-opacity-80 hover:bg-blue-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#*"
                className="hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Developers
              </a>

              <Link
                to="/posts"
                className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Posts
              </Link>

              <Link
                to="/login"
                className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </>
  );

  return (
    <nav className="sticky w-full top-0 bg-blue-500 shadow-xl">
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
