import React, { Component, Fragment } from "react";

import Table from "../table/Table";

const col = [
  { title: "Date", dataIndex: "date", width: "150px" },
  { title: "LeaveType", dataIndex: "leavetype", width: "200px" },
  { title: "From", dataIndex: "from", width: "150px" },
  { title: "To", dataIndex: "to", width: "150px" },
  { title: "Status", dataIndex: "status", render: <button className = "btn btn-primary">Accepted</button>, width: "150px" },
  { title: "Action", dataIndex: "action", render: <button className = "btn btn-primary">View</button>, width: "150px" },
];

const row = [
  {
    date: "2020.04.15",
    leavetype: "Casual Leave",
    from: "2020.04.01",
    to: "2020.04.03",
  },
  {
    date: "2020.04.15",
    leavetype: "Casual Leave",
    from: "2020.04.01",
    to: "2020.04.03",
  },
  {
    date: "2020.04.15",
    leavetype: "Casual Leave",
    from: "2020.04.01",
    to: "2020.04.03",
  },
];

class LeaveHistory extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-md-12">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-7 col-12 d-flex">
              <div className="card ctm-border-radius shadow-sm flex-fill">
                <div className="card-header">
                  <h4 className="card-title mb-0">Leave History </h4>
                </div>
                <table className="table table-borderless table-sm mt-3">
                  <tbody>
                    <tr>
                      <td classname="text-center mb-4" width="4%">
                        Show
                      </td>
                      <td width="6%">
                        <select className="custom-select custom-select-sm">
                          <option selected>10</option>
                          <option value={1}>15</option>
                          <option value={2}>20</option>
                          <option value={3}>25</option>
                        </select>
                      </td>
                      <td classname="text-center mb-4" width="1%">
                        Entries
                      </td>
                      <td width="8%">
                        <select className="custom-select custom-select-sm">
                          <option selected>Status</option>
                          <option value={1}>Approved</option>
                          <option value={2}>Rejected</option>
                        </select>
                      </td>
                      <td width="20%" />
                      <td classname="text-center mb-4" width="2%" />
                      <td classname="mr-4" width="12%">
                        <input
                          className="form-control search-box"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="card-body">
                  <div className="row">
                    <div className="row">
                      <div className="col-12">
                        <div className="tab-content py-0" id="pills-tabContent">
                          <div
                            className="tab-pane py-0 active"
                            id="tabs-1"
                            role="tabpanel"
                          >
                            <div>
                              <Table
                                coloumn={col}
                                tableData={row}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LeaveHistory;
