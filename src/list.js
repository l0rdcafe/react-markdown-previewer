import React from "react";
import { Box, Truncate, Code, Panel, Divider } from "rebass";
import PropTypes from "prop-types";
import { FaCode } from "react-icons/fa";

const List = ({ list, onClick, handlePick }) => (
  <Box width={[1, 1 / 2]}>
    <Panel>
      {list.map((text, i) => (
        <div>
          <Box p={4} bg="gray" key={text} onClick={handlePick} id={i}>
            <Code>
              <FaCode onClick={onClick} style={{ float: "right", cursor: "pointer" }} id={`${i}-edit`} />
              <Truncate>{text}</Truncate>
            </Code>
          </Box>
          <Divider my={0} borderColor="black" />
        </div>
      ))}
    </Panel>
  </Box>
);

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  handlePick: PropTypes.func.isRequired
};

export default List;
