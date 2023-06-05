import React from "react";
import PropTypes from "prop-types";

/**
 * This is a custom tooltip for the Seasons Chart
 * @param {} param0
 * @returns
 */
const CustomToolTipContentSeason = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="value">{`${payload[0].payload.month}`}</p>
        <p className="value">{`${payload[0].value}`} €</p>
      </div>
    );
  }

  return null;
};

CustomToolTipContentSeason.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
};

export default CustomToolTipContentSeason;
