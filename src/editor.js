import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { Textarea, Box, NavLink, Button } from "rebass";
import ToolbarWrapper from "./toolbar";

const Editor = ({ onChange, markdown, onClick, handleSave }) => (
  <Box mr={2} width={[1, 1, 1, 0.4935]}>
    <ToolbarWrapper text="Editor" onClick={onClick} handleSave={handleSave}>
      {
        <Fragment>
          <NavLink onClick={handleSave} ml="auto">
            <Button style={{ cursor: "pointer" }} bg="black">
              Save
            </Button>
          </NavLink>
          <NavLink onClick={onClick}>
            <FaTimes />
          </NavLink>
        </Fragment>
      }
    </ToolbarWrapper>
    <Textarea
      px={3}
      py={3}
      rows={24}
      defaultValue={markdown}
      onChange={onChange}
      style={{ minHeight: "78vh", maxHeight: "81vh" }}
      borderRadius={null}
    />
  </Box>
);

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  markdown: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  handleSave: PropTypes.func.isRequired
};

Editor.defaultProps = {
  onClick: null
};

export default Editor;
