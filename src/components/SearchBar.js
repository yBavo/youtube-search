import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { value: '' };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);

    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Type here"
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
