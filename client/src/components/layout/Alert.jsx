import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts?.length > 0 &&
  alerts.map((alert) => (
    <div
      key={alert.id}
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    >
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
