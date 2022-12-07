import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    youtube: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    instagram,
    youtube,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1>Create your profile</h1>
      <p>
        <i className="fas fa-user" />
        Let's get some information to make your profile stand out!
      </p>
      <small>* required field</small>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <select name="status" value={status} onChange={(e) => onChange(e)}>
            <option value="0"></option>
            <option value="Developer"></option>
            <option value="Junior Developer"></option>
            <option value="Senior Developer"></option>
            <option value="Manager"></option>
            <option value="Student"></option>
            <option value="Instructor"></option>
            <option value="Intern"></option>
            <option value="Other"></option>
          </select>
          <small>Give us an idea of your career</small>
        </div>
        <div>
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small>Could be your own company or one you work for</small>
        </div>
        <div>
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small>Could be your own of a company website</small>
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small>Municipality & City (eg. Leon, Iloilo)</small>
        </div>
        <div>
          <input
            type="text"
            placeholder="Skills"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small>
            Please use comma separated values (eg. HTML, CSS, JavaScript,
            Python)
          </small>
        </div>
        <div>
          <input
            type="text"
            placeholder="Github username"
            name="githubusername"
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small>
            If you want to display your latest repos and Github link, include
            your username
          </small>
        </div>
        <div>
          <input
            type="text"
            placeholder="A short bio about yourself"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          />
          <small>Tell us a little about yourself</small>
        </div>

        <div>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
          >
            Add Social Network Links
          </button>
          <span>optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div>
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div>
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div>
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div>
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="LinkedIn URL"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div>
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="Youtube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}
        <input
          type="submit"
          value="create profile"
          className="p-8 bg-blue-500 hover:cursor-pointer"
        />
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
