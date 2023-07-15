import React from "react";
import PropTypes from "prop-types";

/**
 * This is a custom tooltip for the Gainer Chart
 * @param {} param0
 * @returns
 */
const CustomToolTipContentGainers = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="value">{`${payload[0].payload.state}`}</p>
        <p className="value">{`${payload[0].value}`} €</p>
      </div>
    );
  }

  return null;
};

CustomToolTipContentGainers.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
};

export default CustomToolTipContentGainers;
