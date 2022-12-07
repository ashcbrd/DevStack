import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div className="flex w-3/4">
      <div
        key={alert.id}
        className="z-50 relative text-xs md:text-base -mb-5 bg-blue-100 border border-red-400 text-red-blue px-4 py-3 rounded mt-5 md:w-full md:mx-auto"
      >
        {alert.msg}
      </div>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
