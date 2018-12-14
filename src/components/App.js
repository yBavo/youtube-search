import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

export default class App extends Component {
  state = { videos: [] };

  onSearchSumit = async value => {
    const response = await youtube.get("/search", {
      params: {
        q: value
      }
    });

    this.setState({ videos: response.data.items })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSumit} />
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}
