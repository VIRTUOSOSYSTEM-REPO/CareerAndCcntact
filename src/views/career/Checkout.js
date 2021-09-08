import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Uploader } from 'rsuite';

const Checkout = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div style={{ marginTop: '100px' }}>
            <div className="row">
              <div className="col-md-6 pt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col-md-6 pt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="First name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pt-2">
              <DatePicker
                className="form-control"
                onChange={onChange}
                value={value}
              />
            </div>
            <div className="col-md-6 pt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Age"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Contact Number"
                aria-label="First name"
              />
            </div>
            <div className="col-md-6  pt-2">
              <select
                className=" form-control"
                aria-label=".form-select-lg example"
              >
                <option selected>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Qualification"
                aria-label="First name"
              />
            </div>
            <div className="col-md-6 pt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Additional Course"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pt-2">
              <select
                placeholder="JOBS"
                className=" form-control"
                aria-label=".form-select-lg example"
              >
                <option selected>Select Role</option>
                <option value="1">Web Developer</option>
                <option value="2">Mobile Application </option>
                <option value="3">Testing</option>
              </select>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 pt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Expected Salary"
                aria-label="Last name"
              />
            </div>
          </div>
          <h5>Upload Photo</h5>
          <div>
            <Uploader
              listType="picture-text"
              action="//jsonplaceholder.typicode.com/posts/"
            />
          </div>
          <h5>Resume</h5>
          <Uploader action="//jsonplaceholder.typicode.com/posts/" />;
          <button className="btn btn-primary">Submit</button>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Checkout;
