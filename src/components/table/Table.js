import React, { Component, Fragment } from "react";


export class Table extends Component {



  renderTableCol = () => {
      let column = this.props.coloumn.map((col, index) => {

          if (this.isExits("width")) {
            
              return <th style={{ width: `${col.width}` }} key={index} >{col.title}</th>
              
          } else {
            return <th  style={{width:"200px"}} key={index} >{col.title}</th>
        }
    
      
    });
    return column;
  };

    isExits = (x) => {
       let y= this.props.coloumn.map((col, index) => {
           return Object.keys(col).includes(x)
       })
        
        return y
    }
    
  renderTableRow = () => {
    let rows = this.props.tableData.map((post, index) => {
      return (
        <tr key={index} >
              {Object.values(post).map((x, y) => {
            return <th  key={y}>{x}</th>;
              })}
            {this.renderFuc()}
        </tr>
      );
    });
    return rows;
    };
    
    renderFuc = () => {
        let renderHtml =this.props.coloumn.map((col, index) => {
         return   Object.keys(col).map((i, j) => {
                if (i === "render") {
                    return <th key={j}>{col.render}</th>
                 }
             })
              
        })
        return renderHtml;
    }

  render() {
    return (
      <Fragment>
        <table className="table table-bordered table-hover">
          <thead>
            <tr >{this.renderTableCol()}</tr>
          </thead>
          <tbody>
            {this.renderTableRow()}
          </tbody>
        </table>
        <div className="tab-pane py-0" id="tabs-2" role="tabpanel">
          <div className="table-responsive table-hover">
            {/* <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th classname=" th-bold" scope="col">
                    Date{" "}
                    <span classname="float-right sort-opacity">
                      <i className="fa fa-sort" aria-hidden="true" />
                    </span>
                  </th>
                  <th classname=" th-bold" scope="col">
                    Employee Name
                  </th>
                  <th classname=" th-bold" scope="col">
                    Leave Type
                  </th>
                  <th classname=" th-bold" scope="col">
                    From
                  </th>
                  <th classname=" th-bold" scope="col">
                    To
                  </th>
                  <th classname=" th-bold" scope="col">
                    Status
                  </th>
                  <th classname=" th-bold" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2020.03.25</td>
                  <td>Lavanjan</td>
                  <td>Sick Leave</td>
                  <td>2020.03.26</td>
                  <td>2020.03.28</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info view-btn btn-sm"
                      data-toggle="modal"
                      data-target="#view-emp-information"
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2020.04.15</td>
                  <td>Sivapriyan</td>
                  <td>Casual Leave</td>
                  <td>2020.04.01</td>
                  <td>2020.04.03</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info view-btn btn-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2020.04.15</td>
                  <td>Saathurya</td>
                  <td>Medical Leave</td>
                  <td>2020.04.21</td>
                  <td>2020.04.23</td>
                  <td>
                    <span className="badge badge-danger">Rejected</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info view-btn btn-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2020.06.25</td>
                  <td>Hritik</td>
                  <td>Sick Leave</td>
                  <td>2020.06.25</td>
                  <td>2020.06.25</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info view-btn btn-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2020.08.10</td>
                  <td>TigerShroff</td>
                  <td>Casual Leave</td>
                  <td>2020.08.14</td>
                  <td>2020.08.15</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info view-btn btn-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2020.09.25</td>
                  <td>Vidyut</td>
                  <td>Annual Leave</td>
                  <td>2020.09.16</td>
                  <td>2020.09.18</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info view-btn btn-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2020.09.25</td>
                  <td>JohnAbraham</td>
                  <td>Sick Leave</td>
                  <td>2020.09.26</td>
                  <td>2020.09.90</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info view-btn btn-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
        <div classname="row">
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
        </div>
      </Fragment>
    );
  }
}

export default Table;
