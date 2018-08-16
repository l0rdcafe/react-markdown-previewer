import React, { Component } from "react";
import { Heading, Container, Divider, Flex } from "rebass";
import placeholder from "./misc";
import Editor from "./editor";
import Preview from "./preview";
import List from "./list";

class App extends Component {
  constructor(props) {
    super(props);
    const markdownList = [placeholder, `# 2nd Markdown _File_`];

    this.state = {
      markdownList,
      editEnabled: false,
      currFile: placeholder
    };
  }
  handleChange = e => {
    const { value } = e.target;
    const { markdownList, currFile } = this.state;
    const i = markdownList.indexOf(currFile);
    const slicedList = i > 0 ? markdownList.slice(0, i) : markdownList.slice(1, markdownList.length);
    const newList = [...slicedList, value];
    this.setState({ currFile: value, markdownList: newList });
  };
  handleEdit = e => {
    if (/edit/.test(e.target.id)) {
      const { markdownList } = this.state;
      const i = e.target.id.substring(0, 1);
      const currFile = markdownList[i];
      this.setState({ currFile, editEnabled: true });
    }
  };
  handleClose = () => {
    this.setState({
      editEnabled: false
    });
  };
  handlePick = e => {
    if (/edit/.test(e.target.id)) {
      return null;
    }

    const currFile = this.state.markdownList[e.target.id] || this.state.currFile;
    this.setState({ currFile });
  };
  handleDelete = e => {
    const { markdownList } = this.state;
    const { id } = e.target;

    if (/delete/.test(id)) {
      const i = id.substring(0, 1);
      let slicedList;

      if (markdownList.length === 1) {
        slicedList = [];
      } else if (i === markdownList.length - 1) {
        slicedList = markdownList.splice(0, markdownList.length - 1);
      } else {
        slicedList = [...markdownList.splice(0, i), ...markdownList.splice(i, markdownList.length)];
      }

      this.setState({ markdownList: [...slicedList] });
    }
  };
  handleAdd = () => {
    const { markdownList } = this.state;
    const newList = [...markdownList, ""];
    this.setState({
      editEnabled: true,
      markdownList: newList,
      currFile: ""
    });
  };
  render() {
    const { markdownList, editEnabled, currFile } = this.state;

    return (
      <Container maxWidth={null}>
        <Heading textAlign="center">Markdown Previewer</Heading>
        <Divider w={1} borderColor="black" />
        <Flex flexWrap="wrap">
          {editEnabled ? (
            <Editor onChange={this.handleChange} markdown={currFile} onClick={this.handleClose} />
          ) : (
            <List
              list={markdownList}
              handleDelete={this.handleDelete}
              onClick={this.handleEdit}
              handlePick={this.handlePick}
              handleAdd={this.handleAdd}
            />
          )}
          <Preview markdown={currFile} />
        </Flex>
      </Container>
    );
  }
}

export default App;
