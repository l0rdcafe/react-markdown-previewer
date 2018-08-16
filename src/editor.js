import React from "react";
import PropTypes from "prop-types";
import { Textarea, Box } from "rebass";
import ToolbarWrapper from "./toolbar";

const Editor = ({ onChange, markdown, onClick }) => (
  <Box mr={2} width={[1, 1, 1, 0.4935]}>
    <ToolbarWrapper text="Editor" onClick={onClick} />
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
  onClick: PropTypes.func
};

Editor.defaultProps = {
  onClick: null
};

export default Editor;
