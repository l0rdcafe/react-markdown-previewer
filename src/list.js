import React from "react";
import { Box, Truncate, Code, Panel, Divider } from "rebass";
import PropTypes from "prop-types";
import { FaCode, FaTimes, FaPlus } from "react-icons/fa";

const List = ({ list, onClick, handlePick, handleDelete, handleAdd }) => (
  <Box mr={2} width={[1, 1, 1, 0.4935]}>
    <Panel>
      {list.map((text, i) => (
        <div key={text}>
          <Box p={4} bg="gray" onClick={handlePick} id={i}>
            <Code>
              <FaTimes
                onClick={() => handleDelete(i)}
                style={{ float: "right", cursor: "pointer" }}
                m={2}
                id={`${i}-delete`}
              />
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
    <FaPlus onClick={handleAdd} style={{ cursor: "pointer", margin: "0 auto", display: "block", marginTop: "2%" }} />
  </Box>
);

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  handlePick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired
};

export default List;
