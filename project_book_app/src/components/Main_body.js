import React, { Component } from "react";
import Book_search from "./Book_search";

export class Main_body extends Component {
  render() {
    return (
      <div>
        <p>This is para in a body</p>
        <Book_search />
      </div>
    );
  }
}

export default Main_body;
