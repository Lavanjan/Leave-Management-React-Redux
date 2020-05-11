import React, { Component, Fragment } from 'react'

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                {/* <div className=" col-xl-3 col-lg-4 col-md-12 theiaStickySidebar"> */}
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
                                            <h4 className="text-dark">Profile</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card">
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="mr-1"><a className="btn-ctm-space btn-dec" href="/apply-leave"><span className="lnr lnr-home pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Apply Leave</span></a></li>
                                <li className="mr-1 "><a className="btn-ctm-space btn-dec" href="/luie-leave"><span className="lnr lnr-license pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Lieu Leave</span></a></li>
                                <li className="mr-1"><a className="btn-ctm-space btn-dec " href="/Emp_Holiday"><span className="lnr lnr-apartment pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Public Holidays</span></a></li>
                                <li className="mr-1"><a className="btn-ctm-space btn-dec" href="/Emp_LeaveHistory"><span className="lnr lnr-briefcase pr-0 pr-lg-2" /><span className="d-none d-lg-inline">Leave History</span></a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
                {/* </div> */}
            </Fragment>
        )
    }
}

export default Sidebar
