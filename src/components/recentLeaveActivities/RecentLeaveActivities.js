import React, { Component } from "react";

import Table from "../table/Table";

const col = [
  { title: "Date", dataIndex: "date" },
  { title: "Type", dataIndex: "type" },
  { title: "Days", dataIndex: "days" },
  { title: "Comments", dataIndex: "comments" },
  { title: "Status", dataIndex: "status" },
  {
    title: "Edit",
    dataIndex: "edit",
    render: (
      <a className="edit-btn" href="#">
        <i class="fa fa-pencil" aria-hidden="true"></i>
      </a>
    ),
  },
  {
    title: "Cancel",
    dataIndex: "cancel",
    render: (
      <a className="dele-btn" href="#">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </a>
    ),
  },
];
const row = [
  {
    date: "26/05/2020 Tue",
    type: "Sick Leave",
    days: "1 day",
    comments: "I am suffering from fever",
    status: "Approved",
    },
    {
        date: "30/05/2020 Mon",
        type: "Medical Leave",
        days: "1 day",
        comments: "I am suffering from Cold",
        status: "Pending",
    },
    {
        date: "05/06/2020 Fri",
        type: "Annual Leave",
        days: "1 day",
        comments: "I will meet my friends",
        status: "Rejected",
      },
];

export class RecentLeaveActivities extends Component {
  render() {
    return (
      <div>
        <div className="card ctm-border-radius shadow-sm">
          <span className="card-header card-head mb-0">
            Recent Leave Activities
          </span>
          <div className="card-body">
            {/* <span className = "card-head ml-3">Recent Leave Activities</span> */}
            <Table coloumn={col} tableData={row} />
          </div>
        </div>
      </div>
    );
  }
}

export default RecentLeaveActivities;
