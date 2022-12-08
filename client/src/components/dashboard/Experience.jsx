import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

const Experience = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <td key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button className="w-full my-3 text-white rounded-full shadow-base p-1 bg-blue-500 transition-all border-2 border-blue-500 hover:opacity-80 hover:shadow-lg">
          Delete
        </button>
      </td>
    </td>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
