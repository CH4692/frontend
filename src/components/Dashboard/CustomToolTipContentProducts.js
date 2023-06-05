import React from "react";
import PropTypes from "prop-types";

/**
 * This is a custom tooltip for the Products Chart
 * @param {} param0
 * @returns
 */
const CustomToolTipContentProducts = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="value">{`${payload[0].payload.category}`}</p>
        <p className="value">{`${payload[0].payload.size}`}</p>
        <p className="value">ordered {`${payload[0].value}`} times</p>
      </div>
    );
  }

  return null;
};

CustomToolTipContentProducts.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
};

export default CustomToolTipContentProducts;
