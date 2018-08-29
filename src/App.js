import React, { Component } from "react";
import { Heading, Container, Divider, Flex } from "rebass";
import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";
import { FaUndo } from "react-icons/fa";
import PropTypes from "prop-types";
import Editor from "./editor";
import Preview from "./preview";
import List from "./list";
import { deleteNote, saveNote, changeNote, newNote, pickNote, editNote, undoNote, closeNote } from "./actions/notes";

class App extends Component {
  handleChange = value => {
    this.props.dispatch(changeNote(value));
  };
  handleSave = (value, i) => {
    this.props.dispatch(saveNote(value, i));
  };
  handleEdit = e => {
    if (/edit/.test(e.target.id)) {
      const { notes } = this.props.state.present;
      const i = e.target.id.substring(0, 1);
      const currFile = notes[i];
      this.props.dispatch(editNote(currFile, Number(i)));
    }
  };
  handleClose = () => {
    const { notes } = this.props.state.present;
    const currFile = this.props.state.present.currFile || notes[notes.length - 1];
    this.props.dispatch(closeNote(currFile));
  };
  handlePick = e => {
    if (/edit/.test(e.target.id)) {
      return null;
    }

    const i = Number(e.target.id);
    const currFile = this.props.state.present.notes[i] || this.props.state.present.currFile;
    this.props.dispatch(pickNote(currFile, i));
  };
  handleDelete = i => {
    this.props.dispatch(deleteNote(i));
  };
  handleAdd = e => {
    this.props.dispatch(newNote());
  };
  handleUndo = () => {
    this.props.dispatch(ActionCreators.undo());

    if (this.props.state.past.length === 1) {
      this.props.dispatch(undoNote(true));
    }
  };
  render() {
    const { editEnabled, currFile, isSaved, currIdx, init, notes } = this.props.state.present;

    return (
      <Container maxWidth={null}>
        <Heading textAlign="center">Markdown Previewer</Heading>
        {!init && <FaUndo style={{ cursor: "pointer", marginLeft: "auto" }} onClick={this.handleUndo} />}
        <Divider w={1} borderColor="black" />
        <Flex flexWrap="wrap">
          {editEnabled ? (
            <Editor
              handleSave={() => this.handleSave(currFile, currIdx)}
              onChange={e => this.handleChange(e.target.value)}
              markdown={currFile}
              onClick={this.handleClose}
            />
          ) : (
            <List
              list={notes}
              handleDelete={this.handleDelete}
              onClick={this.handleEdit}
              handlePick={this.handlePick}
              handleAdd={this.handleAdd}
            />
          )}
          <Preview markdown={currFile} isSaved={isSaved} editEnabled={editEnabled} />
        </Flex>
      </Container>
    );
  }
}

App.propTypes = {
  state: PropTypes.shape({
    future: PropTypes.arrayOf(PropTypes.object).isRequired,
    history: PropTypes.shape({
      past: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
    past: PropTypes.arrayOf(PropTypes.object).isRequired,
    present: PropTypes.shape({
      currFile: PropTypes.string.isRequired,
      editEnabled: PropTypes.bool.isRequired,
      isSaved: PropTypes.bool.isRequired,
      notes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      init: PropTypes.bool.isRequired,
      currIdx: PropTypes.number.isRequired
    })
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ state }) => ({ state });

export default connect(mapStateToProps)(App);
