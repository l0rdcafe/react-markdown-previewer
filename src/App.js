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
    this.setState({ currFile: e.target.value });
  };
  handleEdit = e => {
    const currFile = this.state.markdownList[parseInt(e.target.id.substr(0, 1), 10)];
    this.setState({ currFile, editEnabled: true });
  };
  handleClose = () => {
    this.setState({
      editEnabled: false
    });
  };
  handlePick = e => {
    if (!e.target.id) {
      return null;
    }
    const currFile = this.state.markdownList[e.target.id];
    this.setState({ currFile });
  };
  render() {
    const { markdownList, editEnabled, currFile } = this.state;
    console.log(currFile);

    return (
      <Container maxWidth={null}>
        <Heading textAlign="center">Markdown Previewer</Heading>
        <Divider w={1} borderColor="black" />
        <Flex flexWrap="wrap">
          {editEnabled ? (
            <Editor onChange={this.handleChange} markdown={currFile} onClick={this.handleClose} />
          ) : (
            <List list={markdownList} onClick={this.handleEdit} handlePick={this.handlePick} />
          )}
          <Preview markdown={currFile} />
        </Flex>
      </Container>
    );
  }
}

export default App;
