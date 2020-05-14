import React, { Component } from 'react'

export class LeaveApplyForm extends Component {
    render() {
        return (
            <div className="row">
                <div class="col-8">
                    <div className="card ctm-border-radius shadow-sm">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Apply Leaves</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>
                                                Leave Type
												<span className="text-danger">*</span>
                                            </label>
                                            <select className="form-control select">
                                                <option>Select Leave</option>
                                                <option>Casual Leave</option>
                                                <option>Sick Leave</option>
                                                <option>Half Day</option>
                                                <option>Other Leave</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="ml-4 ml-5 ml-5 col-sm-5 leave-col">
                                        <div className="form-group">
                                            <label>Remaining Leaves</label>
                                            <input type="text" className="form-control" placeholder="0 Days" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>From</label>
                                            <input type="text" className="form-control datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 leave-col">
                                        <div className="form-group">
                                            <label>To</label>
                                            <input type="text" className="form-control datetimepicker" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 leave-col">
                                        <div className="form-group">
                                            <label>Doctor Certificate </label>&nbsp;&nbsp;
                                                                        <input type="radio" id="male" name="gender" value="male" />&nbsp;
                                                                        <label for="male">Yes</label>&nbsp;&nbsp;
                                                                        <input type="radio" id="male" name="gender" value="male" />&nbsp;
                                                                        <label for="male">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 leave-col">
                                        <div className="input-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01" />
                                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group mb-0">
                                            <label>Reason</label>
                                            <textarea className="form-control" rows="4" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4 send-req">

                                        <a href="" className=" mt-5 btn btn-theme send-btn btn-primary ctm-border-radius mt-3 ml-4">Send Request</a>
                                        <span className="clear-center">Clear Form</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaveApplyForm
