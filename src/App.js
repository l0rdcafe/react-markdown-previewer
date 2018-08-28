import React, { Component } from "react";
import { Heading, Container, Divider, Flex } from "rebass";
import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";
import { FaUndo } from "react-icons/fa";
import placeholder from "./misc";
import Editor from "./editor";
import Preview from "./preview";
import List from "./list";
import { deleteNote, saveNote } from "./actions/notes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editEnabled: false,
      isSaved: false,
      currFile: placeholder,
      currIdx: 0,
      init: true
    };
  }
  handleChange = value => {
    this.setState({ currFile: value, isSaved: false });
  };
  handleSave = (value, i) => {
    this.props.dispatch(saveNote(value, i));
    console.log(value, i);
    this.setState({ isSaved: true, init: false });
  };
  handleEdit = e => {
    if (/edit/.test(e.target.id)) {
      const { notes } = this.props;
      const i = e.target.id.substring(0, 1);
      const currFile = notes.present[i];
      this.setState({ currFile, editEnabled: true, currIdx: Number(i) });
    }
  };
  handleClose = () => {
    const currFile = this.state.currFile || this.props.notes.present[this.props.length - 1];
    this.setState({
      editEnabled: false,
      currFile
    });
  };
  handlePick = e => {
    if (/edit/.test(e.target.id)) {
      return null;
    }

    const i = Number(e.target.id);
    const currFile = this.props.notes.present[i] || this.state.currFile;
    this.setState({ currFile, currIdx: i });
  };
  handleDelete = i => {
    this.props.dispatch(deleteNote(i));
    this.setState({ init: false });
  };
  handleAdd = () => {
    this.setState({
      editEnabled: true,
      currFile: "",
      currIdx: this.props.notes.present.length,
      init: false
    });
  };
  handleUndo = () => {
    this.props.dispatch(ActionCreators.undo());

    if (this.props.notes.past.length === 1) {
      this.setState({ init: true });
    }
  };
  render() {
    const { editEnabled, currFile, isSaved, currIdx, init } = this.state;
    console.log(currIdx);
    const { notes } = this.props;
    const list = notes.present;

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
              list={list}
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

function mapStateToProps({ notes }) {
  return {
    notes
  };
}

export default connect(mapStateToProps)(App);
