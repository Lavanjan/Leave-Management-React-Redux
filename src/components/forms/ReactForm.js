import React, { Component } from "react";
import DatePicker from "../calendar/datePicker";

export class ReactForm extends Component {
  state = {
    LeaveType: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
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
                    <select
                      name = "LeaveType"
                      className="form-control select"
                      value={this.state.LeaveType}
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

                <div className="ml-4 ml-5 ml-5 col-sm-5 leave-col">
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
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Select Date</label>
                    <DatePicker />
                  </div>
                </div>
                <div className="col-sm-6 leave-col">
                  <div className="form-group">
                    <label>To</label>
                    <input
                      type="text"
                      className="form-control datetimepicker"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 leave-col">
                  <div className="form-group">
                    <label>Doctor Certificate </label>&nbsp;&nbsp;
                    <input type="radio" id="male" name="gender" value="male" />
                    &nbsp;
                    <label for="male">Yes</label>&nbsp;&nbsp;
                    <input type="radio" id="male" name="gender" value="male" />
                    &nbsp;
                    <label for="male">No</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 leave-col">
                  <div className="input-group">
                    <div className="custom-file">
                      {/* <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                      />
                      <label
                        className="custom-file-label"
                        for="inputGroupFile01"
                      >
                        Choose file
                      </label> */}
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
                  {/* <a
            href=""
            className=" mt-5 btn btn-theme send-btn btn-primary ctm-border-radius mt-3 ml-4"
          > */}
                  <button onClick={(e) => this.onSubmit(e)}>Submit</button>
                  {/* </a> */}
                  <span className="clear-center">Clear Form</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactForm;
