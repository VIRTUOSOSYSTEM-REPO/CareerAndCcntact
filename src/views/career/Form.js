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
      console.log("responce------->", details);
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
                // name="fullName"
                // onChange={onChange}
                placeholder="Enter Name "
                required
              />
              {/* <div className="form-message">{state.formErrors.fullName}</div> */}
            </div>
            {/* email */}
            <div className="form-email form-item">
              <label htmlFor="email" className="form-label">
                Email Address<span className="form-asterisk"> *</span>
              </label>
              <input
                id="email"
                className="form-field"
                // name="email"
                type="text"
                // value={state.email}
                // onChange={onChange}
                placeholder="Email"
                required
              />
              {/* <div className="form-message">{state.formErrors.email}</div> */}
            </div>
            {/* Phone */}
            <div className="form-email form-item">
              <label htmlFor="phone" className="form-label">
                Contact Number<span className="form-asterisk"> *</span>
              </label>
              <input
                id="phone"
                className="form-field"
                // name="phone"
                type="text"
                // value={state.phone}
                // onChange={onChange}
                placeholder="+91"
                required
              />
              {/* <div className="form-message">{state.formErrors.phone}</div> */}
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
                  // name="gender"
                  // value={state.value}
                  // onChange={onChange}
                  required
                >
                  <option>Choose Your Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {/* <div className="form-message">{state.formErrors.gender}</div> */}
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
                // name="qualification"
                // value={state.qualification}
                // onChange={onChange}
                placeholder="Enter Qualification"
                required
              />
              <div className="form-message">
                {/* {state.formErrors.qualification} */}
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
                // name="address"
                type="text"
                // value={state.address}
                // onChange={onChange}
                placeholder="Address"
                required
              />
              {/* <div className="form-message">{state.formErrors.addressv}</div> */}
            </div>
            <div className="block-birthdate-gender">
              <div className="form-birthdate form-item">
                <label htmlFor="state" className="form-label">
                  State<span className="form-asterisk"> *</span>
                </label>
                <div className="form-zipecode">
                  <input
                    id="states"
                    className="form-field"
                    // name="state"/
                    type="text"
                    // value={state.state}
                    // onChange={onChange}
                    placeholder="State"
                  />
                  {/* <div className="form-message">{state.formErrors.state}</div> */}
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
                    // name="city"
                    type="text"
                    // value={state.city}
                    // onChange={onChange}
                    placeholder="City"
                    required
                  />
                  <div className="form-message">
                    {/* {state.formErrors.houseNumber} */}
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
                // name="file"
                type="file"
                accept=".doc, .docx, .pdf, .rtf, .txt"
                // onChange={onChange}
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
                // name="fileImage"
                type="file"
                accept=".jpg, .png, .jpeg"
                // onChange={onChange}
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
                // name="letter"
                type="text"
                // value={state.letter}
                // onChange={onChange}j
                placeholder="Let the company know more about you!"
              />
            </div>
            {/* submit */}
            <div className="form-submit form-item">
              <button
                className="form-item form-submit-button"
                type="submit"
                // onClick={onSubmit}
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
