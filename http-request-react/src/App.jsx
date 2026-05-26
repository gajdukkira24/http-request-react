import React, { Component } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";
import "./App.css";

class App extends Component {
  state = {
    query: "cat"
  };

  handleSearch = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Giphy Search</h1>

        <GifSearch onSearch={this.handleSearch} />

        <GifList query={this.state.query} />
      </div>
    );
  }
}

export default App;