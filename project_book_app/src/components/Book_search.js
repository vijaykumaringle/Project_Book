import React, { Component } from "react";

import "./css_comp/Book_search.css";

export class Book_search extends Component {
  render() {
    return (
      <div className="Book_search_main">
        <p>Search your book here!</p>
        <input type="text" />
        <button>Search</button>
      </div>
    );
  }
}

export default Book_search;
