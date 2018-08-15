import React from "react";
import PropTypes from "prop-types";
import { Toolbar, NavLink } from "rebass";
import { FaTimes } from "react-icons/fa";

const ToolbarWrapper = ({ text, onClick }) => (
  <Toolbar bg="blue">
    {text}
    {onClick ? (
      <NavLink onClick={onClick} ml="auto">
        <FaTimes />
      </NavLink>
    ) : null}
  </Toolbar>
);

ToolbarWrapper.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

ToolbarWrapper.defaultProps = {
  text: "Window",
  onClick: null
};

export default ToolbarWrapper;
