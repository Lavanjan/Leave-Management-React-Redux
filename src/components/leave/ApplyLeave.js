import React, { Component, Fragment } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import LeaveSummary from '../leaveSummary/LeaveSummary';
import LeaveApplyForm from '../forms/LeaveApplyForm';
import EventPanel from '../eventPanel/EventPanel';

class ApplyLeave extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date });
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <LeaveSummary />
                        <div className="row">
                            <LeaveApplyForm />
                            <div class="col-xl-4 col-lg-12 col-md-12">
                                <div class="row">
                                    <div class="col-xl-12 col-lg-6 col-md-6 d-flex">
                                        <Calendar
                                            onChange={this.onChange}
                                            value={this.state.date}
                                        />
                                    </div>
                                    <EventPanel
                                        mgs1="No events happening"
                                        mgs2 = "during this period"
                                        submgs = "Public Holidays, shifts etc. Will be shown here"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default ApplyLeave
