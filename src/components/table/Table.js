import React, { Component, Fragment } from "react";

export class Table extends Component {
  renderTableCol = () => {
    let column = this.props.coloumn.map((col, index) => {
      if (this.isExits("width")) {
        return (
          <th style={{ width: `${col.width}` }} key={index}>
            {col.title}
          </th>
        );
      } else {
        return (
          <th style={{ width: "200px" }} key={index}>
            {col.title}
          </th>
        );
      }
    });
    return column;
  };

  isExits = (x) => {
    let y = this.props.coloumn.map((col, index) => {
      return Object.keys(col).includes(x);
    });
    return y;
  };

  renderTableRow = () => {
    let rows = this.props.tableData.map((post, index) => {
      return (
        <tr key={index}>
          {Object.values(post).map((x, y) => {
            return <td key={y}>{x}</td>;
          })}
          {this.renderFuc()}
        </tr>
      );
    });
    return rows;
  };

  renderFuc = () => {
    let renderHtml = this.props.coloumn.map((col, index) => {
      return Object.keys(col).map((i, j) => {
        if (i === "render") {
          return <th key={j}>{col.render}</th>;
        }
      });
    });
    return renderHtml;
  };

  render() {
    return (
      <Fragment>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>{this.renderTableCol()}</tr>
          </thead>
          <tbody>{this.renderTableRow()}</tbody>
        </table>
        <div className="tab-pane py-0" id="tabs-2" role="tabpanel">
          <div className="table-responsive table-hover"></div>
        </div>
        {/* <div classname="row">
          <div classname="col-4">
            <span classname="ml-4 font-italic">
              Showing 1 to 10 of 35 entries
            </span>
          </div>
          <div classname="col-8">
            <nav classname="mr-3" aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1}>
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
      </Fragment>
    );
  }
}

export default Table;
