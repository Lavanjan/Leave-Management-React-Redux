import React, { Component } from 'react'

export class NotificationPanel extends Component {
    render() {
        return (
            <div className="card shadow-sm ctm-border-radius">
                <div className="card-body">
                    <span><i className="fa fa-bell text-warning" aria-hidden="true"></i></span>
                    <span className="ml-4">{ this.props.message }</span>
                </div>
            </div>
        )
    }
}

export default NotificationPanel
