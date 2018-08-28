import React from "react";
import PropTypes from "prop-types";
import { Toolbar } from "rebass";

const ToolbarWrapper = ({ text, children }) => (
  <Toolbar bg="blue">
    {text}
    {children}
  </Toolbar>
);

ToolbarWrapper.propTypes = {
  text: PropTypes.string,
  children: PropTypes.arrayOf(null || PropTypes.object, null || PropTypes.object).isRequired
};

ToolbarWrapper.defaultProps = {
  text: "Window"
};

export default ToolbarWrapper;
