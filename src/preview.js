import React from "react";
import Markdown from "react-remarkable";
import PropTypes from "prop-types";
import { Card, Box } from "rebass";
import { FaCheck, FaTimes } from "react-icons/fa";
import ToolbarWrapper from "./toolbar";

const Preview = ({ markdown, isSaved, editEnabled }) => (
  <Box width={[1, 1, 1, 1 / 2]} maxWidth={1}>
    <ToolbarWrapper text="Previewer">
      {editEnabled && isSaved ? <FaCheck style={{ marginLeft: "auto", color: "#00ee10" }} /> : null}
      {editEnabled && !isSaved ? <FaTimes style={{ marginLeft: "auto", color: "#ee1000" }} /> : null}
    </ToolbarWrapper>
    <Card style={{ minHeight: "78vh", maxHeight: "81vh" }}>
      <Markdown>{markdown}</Markdown>
    </Card>
  </Box>
);

Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
  isSaved: PropTypes.bool,
  editEnabled: PropTypes.bool
};

Preview.defaultProps = {
  isSaved: false,
  editEnabled: false
};

export default Preview;
