import React, { Component } from "react";
import DatePicker from "../calendar/datePicker";

export class ReactForm extends Component {
  state = {
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
    days: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    return (
      // <form>
      //     <input
      //         name = "firstName"
      //         placeholder = "FirstName"
      //         value={this.state.firstName}
      //         onChange = { e => this.handleChange(e) }
      //     /><br/>
      //     <input
      //         name = "lastName"
      //         placeholder = "LastName"
      //         value={this.state.lastName}
      //         onChange = { e => this.handleChange(e) }
      //     /><br/>
      //     <input
      //         name = "userName"
      //         placeholder = "UserName"
      //         value={this.state.userName}
      //         onChange = { e => this.handleChange(e) }
      //     /><br/>
      //     <input
      //         name = "email"
      //         placeholder = "Email"
      //         value={this.state.email}
      //         onChange = { e => this.handleChange(e) }
      //     /><br/>
      //     <input
      //         name = "password"
      //         placeholder = "Password"
      //         value={this.state.password}
      //         onChange = { e => this.handleChange(e) }
      //     /><br />
      //     <button onClick={e => this.onSubmit(e)}>Submit</button>
      // </form>

      <div class="col-8">
        <div className="card ctm-border-radius shadow-sm">
          <span className="card-header card-head mb-0">Apply Leaves</span>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Leave Type
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="leaveType"
                      className="form-control select"
                      value={this.state.leaveType}
                      onChange={this.handleChange}
                    >
                      <option>Select Leave</option>
                      <option>Casual Leave</option>
                      <option>Sick Leave</option>
                      <option>Half Day</option>
                      <option>Other Leave</option>
                    </select>
                  </div>
                </div>

                <div className="ml-4 ml-5 ml-5 col-sm-4 justify-content-end align-rl">
                  <div className="container-fluid">
                    <div className="span2">
                      <div className="form-group">
                        <label>Remaining Leaves</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0 Days"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Select Date</label>
                    <DatePicker />
                  </div>
                </div>
                <div className="ml-4 ml-5 ml-5 col-sm-4 align-rl">
                  <div className="container-fluid">
                    <div className="span2">
                      <div className="form-group">
                        <label>Taken Days</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0 Days"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-sm-8">
                  <div className="form-group mb-0">
                    <label>Reason</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="reason"
                      placeholder="Include comments for your approver"
                      value={this.state.reason}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="container-fluid">
                    <div className="span2">
                      <div className="form-group">
                        <button
                          onClick={(e) => this.onSubmit(e)}
                          className="btn sub-btn"
                        >
                          Send Request
                        </button>
                      </div>
                    </div>
                    </div>
                </div>
              </div>

              <div className="row justify-content-center mt-3">

              </div>
              {/* <div className="row">
                <div className="col-sm-4 send-req">
                  <button onClick={(e) => this.onSubmit(e)}>Submit</button>
                  <span className="clear-center">Clear Form</span>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactForm;
