import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Import Body Components

import ApplyLeave from './../leave/ApplyLeave';

// End of Body Components
class Body extends Component {
    render() {
        return (
                <Route exact path = "/apply-leave" component = { ApplyLeave } />
                
        )
    }
}

export default Body
