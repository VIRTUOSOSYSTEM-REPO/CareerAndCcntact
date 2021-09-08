import React, { useState } from 'react';
import './contact.css';

const ContactForm = () => {
  const [status, setStatus] = useState('Send');
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    const { companyName, name, email, message, phone } = e.target.elements;
    const details = {
      companyName: companyName.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    const response = await fetch('http://localhost:8000/contact', {
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
  <div className="contact3 mt-5 py-5">
    <div className="row no-gutters">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card-shadow">
              <img alt="" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" className="img-fluid"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-box ml-3">
              <h1 className="font-weight-light mt-1 text-primary">Quick Contact</h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input className="form-control" type="text" id="companyName" required placeholder="Company Name"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input className="form-control" type="text" id="name" required placeholder="Name"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input className="form-control" type="email" id="email" required  placeholder="Email address"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input className="form-control" type="text" id="phone" required placeholder="Phone"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea className="form-control" rows="3" id="message" required  placeholder="Message"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> {status} </span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card mt-4 border-0 mb-4 w-100">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="card-body d-flex align-items-center c-detail pl-0">
                    <div className="mr-3 mt-4 align-self-center">
                      <img alt="" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"/>
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium text-primary">Address</h6>
                      <p className="">601 Kudulu Gate.
                        <br/> Silk board</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-3">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 mt-4 align-self-center">
                      <img alt="" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium text-primary">Phone</h6>
                      <p className="">855 316 6898
                        <br/> 789 219 4789</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 mt-4 align-self-center">
                      <img alt="" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                    </div>
                    <div className="ml-1">
                      <h6 className="font-weight-medium text-primary">Email</h6>
                      <p className="">
                        info@wrappixel.com
                        <br/> 123@wrappixel.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactForm;
