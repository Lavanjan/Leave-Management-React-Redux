import React, { Component, Fragment } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import LeaveSummary from "../leaveSummary/LeaveSummary";
import LeaveApplyForm from "../forms/LeaveApplyForm";
import EventPanel from "../eventPanel/EventPanel";
import NotificationPanel from "../notificationPanel/NotificationPanel";
import RecentLeaveActivities from "../recentLeaveActivities/RecentLeaveActivities";

import ReactForm from "../forms/ReactForm";

class ApplyLeave extends Component {
  state = {
    date: new Date(),
  };
  onChange = (date) => this.setState({ date });
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-12">
            <LeaveSummary />
            <NotificationPanel message="Your request has been accepted." />
            <div className="row">
              {/* <LeaveApplyForm /> */}
              <ReactForm />
              <div class="col-xl-4 col-lg-12 col-md-12">
                <div class="row">
                  <div class="col-xl-12 col-lg-6 col-md-6 d-flex justify-content-center"></div>
                  <EventPanel
                         card_title="Events"
                         card_title2="Calendar"
                         mgs1="No events happening"
                         mgs2="during this period"
                         submgs="Public Holidays, shifts etc. Will be shown here"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <RecentLeaveActivities />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ApplyLeave;
