import React, { Component } from 'react'

export class EventPanel extends Component {
    render() {
        return (
            <div className="col-xl-12 col-lg-6 col-md-6 d-flex mt-4">
                <div className="card bg-none mb-3"
                    style={{ width: "19rem" }}>
                    <div className="card-body text-center"
                        style={{ height: "7rem" }}>
                        <span>
                            <i className="fa fa-calendar"
                                style={{ fontSize: "60px" }}
                                aria-hidden="true">
                            </i>
                        </span>
                    </div>
                    <h6 className="text-center font-weight-normal">
                        {this.props.mgs1}<br />
                        {this.props.mgs2}
                    </h6>
                    <p className="font-italic text-center  small">
                        {this.props.submgs}
                    </p>
                </div>
            </div>
        )
    }
}

export default EventPanel
