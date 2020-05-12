import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Import Body Components

import ApplyLeave from './../leave/ApplyLeave';
import LeaveHistory from './../leave/LeaveHistory';
// End of Body Components
class Body extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={ApplyLeave} />
                <Route path="/leave-history" component={LeaveHistory} />
            </Fragment>

        )
    }
}

export default Body
