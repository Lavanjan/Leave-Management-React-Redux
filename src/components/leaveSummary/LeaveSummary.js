import React, { Component } from 'react'

export class LeaveSummary extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="card dash-widget ctm-border-radius shadow-sm">
                        <div className="card-body">
                            <div className="card-icon bg-primary">
                                <i className="fa fa-signal" aria-hidden="true" />
                            </div>
                            <div className="card-right">
                                <h4 className="card-title">Casual Lea</h4>
                                <h4 className="card-title">Total : 3</h4>
                                <h4 className="card-title">Available : 1</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 col-12">
                    <div className="card dash-widget ctm-border-radius shadow-sm">
                        <div className="card-body">
                            <div className="card-icon bg-warning">
                                <i className="fa fa-signal" aria-hidden="true" />
                            </div>
                            <div className="card-right">
                                <h4 className="card-title">Sick Leave</h4>
                                <h4 className="card-title">Total : 5</h4>
                                <h4 className="card-title">Available : 2</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 col-12">
                    <div className="card dash-widget ctm-border-radius shadow-sm">
                        <div className="card-body">
                            <div classname="card-icon bg-danger">
                                <i className="fa fa-signal" aria-hidden="true" />
                            </div>
                            <div className="card-right">
                                <h4 className="card-title">Half Day</h4>
                                <h4 className="card-title">Total : 3</h4>
                                <h4 className="card-title">Available : 0</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 col-12">
                    <div className="card dash-widget ctm-border-radius shadow-sm">
                        <div className="card-body">
                            <div className="card-icon bg-success">
                                <i className="fa fa-signal" aria-hidden="true" />
                            </div>
                            <div className="card-right">
                                <h4 className="card-title">Other Leave</h4>
                                <h4 className="card-title">Total : 6</h4>
                                <h4 className="card-title">Available : 2</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaveSummary
