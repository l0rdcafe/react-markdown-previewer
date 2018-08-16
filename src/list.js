import React from "react";
import { Box, Truncate, Code, Panel, Divider } from "rebass";
import PropTypes from "prop-types";
import { FaCode, FaTimes } from "react-icons/fa";

const List = ({ list, onClick, handlePick, handleDelete }) => (
  <Box mr={2} width={[1, 1, 1, 0.4935]}>
    <Panel>
      {list.map((text, i) => (
        <div>
          <Box p={4} bg="gray" key={text} onClick={handlePick} id={i}>
            <Code>
              <FaTimes onClick={handleDelete} style={{ float: "right", cursor: "pointer" }} m={2} id={`${i}-delete`} />
              <FaCode onClick={onClick} style={{ float: "right", cursor: "pointer" }} id={`${i}-edit`} />
              <Truncate onClick={handlePick} id={`${i}-edit2`}>
                {text}
              </Truncate>
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
  handlePick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default List;
