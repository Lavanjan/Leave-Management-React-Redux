import React, { Component } from 'react'

export class BreedCrumb extends Component {
    render() {
        return (
            <div className="custom-breadcrumb">
                <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                    <li className="breadcrumb-item d-inline-block"><a href="/" className="text-dark">{this.props.title}</a></li>
                    <li className="breadcrumb-item d-inline-block active">{this.props.title2}</li>
                </ol>
                <h4 className="text-dark">{this.props.title3}</h4>
            </div>
        )
    }
}

export default BreedCrumb
