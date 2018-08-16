import React from "react";
import Markdown from "react-remarkable";
import PropTypes from "prop-types";
import { Card, Box } from "rebass";
import ToolbarWrapper from "./toolbar";

const Preview = ({ markdown }) => (
  <Box width={[1, 1, 1, 1 / 2]} maxWidth={1}>
    <ToolbarWrapper text="Previewer" />
    <Card style={{ minHeight: "78vh", maxHeight: "81vh" }}>
      <Markdown>{markdown}</Markdown>
    </Card>
  </Box>
);

Preview.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default Preview;
