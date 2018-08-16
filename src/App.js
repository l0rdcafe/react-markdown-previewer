import React, { Component } from "react";
import { Heading, Container, Divider, Flex } from "rebass";
import placeholder from "./misc";
import Editor from "./editor";
import Preview from "./preview";
import List from "./list";

class App extends Component {
  constructor(props) {
    super(props);
    const markdownList = [placeholder, `# Truth sayer`];

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
    const list = [...markdownList];
    const { id } = e.target;

    if (/delete/.test(id)) {
      const i = id.substring(0, 1);
      console.log(i);
      const slicedList = list.splice(i, 1);

      this.setState({ markdownList: [...slicedList] });
    }
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
            />
          )}
          <Preview markdown={currFile} />
        </Flex>
      </Container>
    );
  }
}

export default App;
