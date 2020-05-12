import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './../assets/css/Style.css';
import logo from './../assets/images/logo-sgic.png';
import profile from'./../assets/images/manager.png';

class Navbar extends Component {
    render() {
        return (
            <header className="header">
            <div className="top-header-section">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                    <div className="logo my-3 my-sm-0">
                      <a href="index.html">
                        <img src={logo} alt="logo image" className="img-fluid" width={100} />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-6 text-right">
                    <div className="user-block d-none d-lg-block">
                      <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="user-notification-block align-right d-inline-block">
                          </div>
                          <div className="user-info align-right dropdown d-inline-block header-dropdown">
                            <a href="javascript:void(0)" data-toggle="dropdown" className=" menu-style dropdown-toggle">
                              <div className="user-avatar d-inline-block">
                                <img src={ profile } alt="user avatar" className="rounded-circle img-fluid" width={55} />
                              </div>
                            </a>
                            <div className="dropdown-menu notification-dropdown-menu shadow-lg border-0 p-3 m-0 dropdown-menu-right">
                              <a className="dropdown-item p-2" href="/Emp_Dashboard">
                                <span className="media align-items-center">
                                  <span className="lnr lnr-user mr-3" />
                                  <span className="media-body text-truncate">
                                    <span className="text-truncate">Profile</span>
                                  </span>
                                </span>
                              </a>
                              <a className="dropdown-item p-2" href="#">
                                <span className="media align-items-center">
                                  <span className="lnr lnr-cog mr-3" />
                                  <span className="media-body text-truncate">
                                    <span className="text-truncate">Settings</span>
                                  </span>
                                </span>
                              </a>
                              <a className="dropdown-item p-2" href="#">
                                <span className="media align-items-center">
                                  <span className="lnr lnr-power-switch mr-3" />
                                  <span className="media-body text-truncate">
                                    <span className="text-truncate">Logout</span>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-wrapper d-none d-sm-none d-md-none d-lg-block">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="header-menu-list d-flex bg-white rt_nav_header horizontal-layout nav-bottom">
                      <div className="append mr-auto my-0 my-md-0 mr-auto">
                        <ul className="list-group list-group-horizontal-md mr-auto">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <li className="mr-1 current"><NavLink exact to = "/" activeClassName = "main-nav-active" className="btn-ctm-space btn-dec"><span className="lnr lnr-home pr-0 pr-lg-2" /><span className="d-none d-lg-inline">My Leave</span></NavLink></li>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <li className="mr-1"><NavLink exact to = "/my-profile" activeClassName = "main-nav-active" className="btn-ctm-space btn-dec "><span className="lnr lnr-apartment pr-0 pr-lg-2" /><span className="d-none d-lg-inline">My Profile</span></NavLink></li>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <li className="mr-1"><NavLink exact to = "/manage-leave" activeClassName = "main-nav-active" className="btn-ctm-space btn-dec"><span className="lnr lnr-apartment pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Manage Leave</span></NavLink></li>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <li className="mr-1"><NavLink exact to ="/manage-employee" activeClassName = "main-nav-active" className="btn-ctm-space btn-dec "><span className="lnr lnr-apartment pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Manage Employee</span></NavLink></li>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <li className="mr-1"><NavLink exact to = "/configuration" activeClassName = "main-nav-active" className="btn-ctm-space btn-dec"><span className="lnr lnr-briefcase pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Configuration</span></NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

export default Navbar
