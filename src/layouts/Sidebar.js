import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import History from "../components/constant/History"
import {
    MY_LEAVE_NAVIGATION, MY_PROFILE_NAVIGATION, MANAGE_LEAVE_NAVIGATION, MANAGE_EMPLOYEE_NAVIGATION,
    CONFIGURATION_NAVIGATION
} from "../redux/action/headerNavigation/HeaderNavigation";
import { connect } from "react-redux";

import './../assets/css/Style.css';

class Sidebar extends Component {
   
    componentDidMount() {
        console.log(this.props.path)
    }

  
    renderNavigation = () => {
        if (this.props.path === "/myleave") {
    return (<ul className="list-group">
    <li className="mr-1"><NavLink exact to = "/" className="btn-ctm-space btn-dec" activeClassName = "main-nav-active"><span className="lnr lnr-home pr-0 pr-lg-2" /><span className="d-none d-lg-inline">MY_PROFILE_NAVIGATION</span></NavLink></li>
    <li className="mr-1"><NavLink exact to = "/leave-history" className="btn-ctm-space btn-dec" activeClassName = "main-nav-active"><span className="lnr lnr-briefcase pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Leave </span></NavLink></li>
</ul>)
        } else if (this.props.path === "/myprofile") {
            return (<ul className="list-group">
    <li className="mr-1"><NavLink exact to = "/" className="btn-ctm-space btn-dec" activeClassName = "main-nav-active"><span className="lnr lnr-home pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Apply Leave</span></NavLink></li>
    <li className="mr-1"><NavLink exact to = "/leave-history" className="btn-ctm-space btn-dec" activeClassName = "main-nav-active"><span className="lnr lnr-briefcase pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Leave History</span></NavLink></li>
</ul>)
}
    }
    render() {
        return (
            <Fragment>
                <aside className="sidebar sidebar-user">
                    <div className="card ctm-border-radius shadow-sm">
                        <div className="card-body py-4">
                            <div className="row">
                                <div className="col-md-12 mr-auto text-left">
                                    <div className="custom-search input-group">
                                        <div className="custom-breadcrumb">
                                            <ol className="breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2">
                                                <li className="breadcrumb-item d-inline-block"><a href="/" className="text-dark">Home</a></li>
                                                <li className="breadcrumb-item d-inline-block active">Employee</li>
                                            </ol>
                                            <h4 className="text-dark font-weight-normal">Apply Leave</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                        <div className="card-body">
                            {this.renderNavigation()}
                        </div>
                    </div>
                    </aside>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        path:state.HeaderNavigationReducer.path
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeLeavePath: () => {
            dispatch({ type: MY_LEAVE_NAVIGATION });
            console.log("hit leave in sidebar")
        }

        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
