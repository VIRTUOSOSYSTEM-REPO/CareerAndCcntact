import React, { useState } from 'react';
import './Form.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
  const [status, setStatus] = useState('Send');
    const handleSubmit = async e => {
      e.preventDefault();
      setStatus('Sending...');
      const { name, email, phone, birthDate, qualification, gender, address, city, states, letter  } = e.target.elements;
      const details = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        gender: gender.value,
        birthDate: birthDate.value,
        qualification: qualification.value,
        address: address.value,
        city: city.value,
        state: states.value,
        letter: letter.value
      };
      const response = await fetch('http://localhost:8000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(details),
      });
      setStatus('Send');
      const result = await response.json();
      alert(result.status);
    };
    
    return (
      <div className="pt-5 ">
        <h1 className="text-center">
          <span className="text-danger">Job</span> Application
        </h1>
        <p className="form-text">
          In order to apply, please fill the following form.
        </p>
        <p className="form-subtext">
          All fields with <span className="form-asterisk"> *</span> are
          <span className="text-danger"> required.</span>
        </p>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form" noValidate>
            {/* name */}
            <div className="form-name form-item">
              <label htmlFor="fullName" className="form-label">
                Name<span className="form-asterisk"> *</span>
              </label>
              <input
                id="name"
                className="form-field"
                type="text"
                placeholder="Enter Name "
                required
              />
            </div>
            {/* email */}
            <div className="form-email form-item">
              <label htmlFor="email" className="form-label">
                Email Address<span className="form-asterisk"> *</span>
              </label>
              <input
                id="email"
                className="form-field"
                type="text"
                placeholder="Email"
                required
              />
            </div>
            {/* Phone */}
            <div className="form-email form-item">
              <label htmlFor="phone" className="form-label">
                Contact Number<span className="form-asterisk"> *</span>
              </label>
              <input
                id="phone"
                className="form-field"
                type="text"
                placeholder="+91"
                required
              />
            </div>
            {/* birthdate */}
            <div className="block-birthdate-gender">
              <div className="form-birthdate form-item">
                <label htmlFor="birthDate" className="form-label">
                  Date of Birth<span className="form-asterisk"> *</span>
                </label>
                <DatePicker
                  id="birthDate"
                  className="form-field"
                  // name="birthDate"
                  // selected={state.birthDate}
                  // onChange={onHandleDate}
                  // value={state.birthDate}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  placeholder="dd/mm/yyyy"
                  required
                />
                {/* <input
                  className="form-field"
                  name="birthDate"
                  value={state.birthDate}
                  placeholder="dd/mm/yyyy"
                  required
                /> */}
                {/* <div className="form-message">{state.formErrors.birthDate}</div> */}
              </div>

              {/* gender */}
              <div className="form-gender form-item">
                <label htmlFor="gender" className="form-label">
                  Gender<span className="form-asterisk"> *</span>
                </label>

                <select
                  id="gender"
                  className="form-field"
                  required
                >
                  <option>Choose Your Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            {/* Qualification */}
            <div className="form-name form-item">
              <label htmlFor="qualification" className="form-label">
                Qualification<span className="form-asterisk"> *</span>
              </label>
              <input
                id="qualification"
                className="form-field"
                type="text"
                placeholder="Enter Qualification"
                required
              />
              <div className="form-message">
              </div>
            </div>
            {/* address */}
            <div className="form-address form-item">
              <label htmlFor="address" className="form-label">
                Address<span className="form-asterisk"> *</span>
              </label>
              <input
                id="address"
                className="form-field"
                type="text"     
                placeholder="Address"
                required
              />
            </div>
            <div className="block-birthdate-gender">
              <div className="form-birthdate form-item">
                <label htmlFor="states" className="form-label">
                  State<span className="form-asterisk"> *</span>
                </label>
                <div className="form-zipecode">
                  <input
                    id="states"
                    className="form-field"
                    type="text"
                    placeholder="State"
                  />
                </div>
                {/* <input
                  className="form-field"
                  name="birthDate"
                  value={state.birthDate}
                  placeholder="dd/mm/yyyy"
                  required
                /> */}
                {/* <div className="form-message">{state.formErrors.birthDate}</div> */}
              </div>

              {/* gender */}
              <div className="form-gender form-item">
                <div className="form-housNumber">
                  <label htmlFor="city" className="form-label">
                    City<span className="form-asterisk"> *</span>
                  </label>
                  <input
                    id="city"
                    className="form-field"
                    type="text"
                    placeholder="City"
                    required
                  />
                  <div className="form-message">
                  </div>
                </div>
              </div>
            </div>
            {/* file */}
            <label className="form-label" />
            <div className="form-file form-item">
              <label htmlFor="file" className="form-label">
                Resume<span className="form-asterisk"> *</span>
              </label>
              <input
                id="file"
                className="form-field"
                type="file"
                accept=".doc, .docx, .pdf, .rtf, .txt"
              />
            </div>
            <label className="form-label" />
            <div className="form-file form-item">
              <label htmlFor="fileImage" className="form-label">
                Image<span className="form-asterisk"> *</span>
              </label>
              <input
                id="fileImage"
                className="form-field"
                type="file"
                accept=".jpg, .png, .jpeg"
              />
            </div>
            {/* motivational letter */}
            <div className="form-letter form-item">
              <label htmlFor="letter" className="form-label">
                why should you be Hire this role...?
              </label>
              <textarea
                id="letter"
                className="form-field-text form-item"
                type="text"
                placeholder="Let the company know more about you!"
              />
            </div>
            {/* submit */}
            <div className="form-submit form-item">
              <button
                className="form-item form-submit-button"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

export default Form;
