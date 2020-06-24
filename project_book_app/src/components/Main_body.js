import React, { Component } from "react";
import Book_search from "./Book_search";
import Book_table from "./Book_table";

export class Main_body extends Component {
  render() {
    return (
      <div>
        <Book_search />
        <Book_table />
      </div>
    );
  }
}

export default Main_body;
