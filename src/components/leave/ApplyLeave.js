import React, { Component, Fragment } from 'react'
// import Leave from "./LeaveHistory"
// import History from "../constant/History"

import LeaveSummary from '../leaveSummary/LeaveSummary';
import LeaveApplyForm from '../forms/LeaveApplyForm';

class ApplyLeave extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <LeaveSummary />
                       <LeaveApplyForm />
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default ApplyLeave
