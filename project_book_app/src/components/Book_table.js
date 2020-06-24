import React, { Component } from "react";

import Books from "../data/books";

import "./css_comp/Book_table.css";

//import from fluent ui
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
} from "office-ui-fabric-react/lib/DetailsList";
import { Link } from "office-ui-fabric-react/lib/Link";

function _renderItemColumn(item, index, column) {
  const fieldContent = item[column.fieldName];

  switch (column.key) {
    case "column4":
      return <Link href={fieldContent}>{fieldContent}</Link>;

    default:
      return <span>{fieldContent}</span>;
  }
}

export class Book_table extends Component {
  _columns = [
    {
      key: "column1",
      name: "Book Name",
      fieldName: "title",
      minWidth: 150,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Author",
      fieldName: "author",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column3",
      name: "Pages",
      fieldName: "pages",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column4",
      name: "Website",
      fieldName: "website",
      minWidth: 150,
      maxWidth: 200,
      isResizable: true,
    },
  ];

  render() {
    var book_s = Books.books.map((book, index) => {
      return (
        <li key={index}>
          Title: {book.title} | Author: {book.author}
        </li>
      );
    });
    return (
      <div className="Book_tableClass">
        <DetailsList
          items={Books.books}
          columns={this._columns}
          setKey="set"
          layoutMode={DetailsListLayoutMode.justified}
          onRenderItemColumn={_renderItemColumn}
          //   selection={this._selection}
          //   selectionPreservedOnEmptyClick={true}
          //   ariaLabelForSelectionColumn="Toggle selection"
          //   ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          checkButtonAriaLabel="Row checkbox"
          //   onItemInvoked={this._onItemInvoked}
        />
      </div>
    );
  }
}

export default Book_table;
