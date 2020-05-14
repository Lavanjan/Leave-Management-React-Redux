import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import History from "../components/constant/History"
import {
    MY_LEAVE_NAVIGATION, MY_PROFILE_NAVIGATION, MANAGE_LEAVE_NAVIGATION, MANAGE_EMPLOYEE_NAVIGATION,
    CONFIGURATION_NAVIGATION
} from "../redux/action/headerNavigation/HeaderNavigation";

import {
    APPLY_LEAVE, LEAVE_HISTORY, PROFILE, SETTING, MANAGE_LEAVE,
    LEAVE_ALLOCATION, MANAGE_EMPLOYEE, MANAGE_DEPARTMENT,
    SYSTEM_SETTING, CALENDAR
} from "../redux/action/siderNavigation/SiderNavigation";

import { connect } from "react-redux";
import BreedCrumb from "../components/breedCrumb/BreedCrumb";

import './../assets/css/Style.css';

class Sidebar extends Component {

    componentDidMount() {
        console.log(this.props.path)
    }


    renderNavigation = () => {
        if (this.props.path === "/myleave") {
            return (
                <ul className="list-group">
                    <li className="mr-1"><NavLink onClick={this.props.changeApplyLeavePagePath} exact to="/" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span className="lnr lnr-home pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Apply Leave</span></NavLink></li>
                    <li className="mr-1"><NavLink onClick={this.props.changeLeaveHistoryPagePath} exact to="/leave-history" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span className="lnr lnr-briefcase pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Leave History </span></NavLink></li>
                </ul>)
        } else if (this.props.path === "/myprofile") {
            return (
                <ul className="list-group">
                    <li className="mr-1"><NavLink onClick={this.props.changeProfilePagePath} exact to="/my-profile" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span className="lnr lnr-home pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Profile</span></NavLink></li>
                    <li className="mr-1"><NavLink exact to="/leave-history" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span className="lnr lnr-briefcase pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Settings</span></NavLink></li>
                </ul>)
        } else if (this.props.path === "/manageLeave") {
            return (
                <ul className="list-group">
                    <li className="mr-1"><NavLink exact to="/manage-leave" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span className="lnr lnr-home pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Manage Leave</span></NavLink></li>
                    <li className="mr-1"><NavLink exact to="/leave-history" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span className="lnr lnr-briefcase pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Leave Allocation</span></NavLink></li>
                </ul>)
        } else if (this.props.path == "/manageEmployee") {
            return (
                <ul className="list-group">
                    <li className="mr-1"><NavLink exact to="/manage-employee" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span lassName="lnr lnr-home pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Manage Employees</span></NavLink></li>
                    <li className="mr-1"><NavLink exact to="/leave-history" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span className="lnr lnr-briefcase pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Manage Department</span></NavLink></li>
                </ul>
            )
        } else if (this.props.path === "/configuration") {
            return (
                <ul className="list-group">
                    <li className="mr-1"><NavLink exact to="/configuration" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span className="lnr lnr-home pr-0 pr-lg-2" /><span className="d-none d-lg-inline">System Setting</span></NavLink></li>
                    <li className="mr-1"><NavLink exact to="/leave-history" className="btn-ctm-space btn-dec" activeClassName="main-nav-active"><span className="lnr lnr-briefcase pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Calendar</span></NavLink></li>
                </ul>
            )
        }
    }

    renderPagePath = () => {
        if (this.props.pagePath === "/applyLeave") {
            return (
                <BreedCrumb
                    title="SGIC'"
                    title2="My Leave"
                    title3="Apply Leave"
                />
            )
        } else if (this.props.pagePath === "/leaveHistory") {
            return (
                <BreedCrumb
                    title="SGIC'"
                    title2="My Leave"
                    title3="Leave History"
                />
            )
        } else if (this.props.pagePath === "/profile") {
            return (
                <BreedCrumb
                    title="SGIC'"
                    title2="My Profile"
                    title3="Profile"
                />
            )
        } else if (this.props.pagePath === "/settings") {
            return (
                <BreedCrumb
                    title="SGIC'"
                    title2="My Profile"
                    title3="Settings"
                />
            )
        }
        else if (this.props.pagePath === "/manageLeave") {
            return (
                <BreedCrumb
                    title="SGIC'"
                    title2="Manage Leave"
                    title3="Manage Leave"
                />
            )
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
                                        {this.renderPagePath()}
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
        path: state.HeaderNavigationReducer.path,
        pagePath: state.SiderNavigationReducers.pagePath
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        changeLeavePath: () => {
            dispatch({ type: MY_LEAVE_NAVIGATION });
            console.log("hit leave in sidebar")
        },
        changeApplyLeavePagePath: () => {
            dispatch({
                type: APPLY_LEAVE


            }); console.log("hit APply page")
        },
        changeLeaveHistoryPagePath: () => {
            dispatch({
                type: LEAVE_HISTORY
            })
        },
        changeProfilePagePath: () => {
            dispatch({
                type: PROFILE
            })
        },
        changeSettingPagePath: () => {
            dispatch({
                type: SETTING
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
