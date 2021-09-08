import React, { Component } from 'react'
import CardBtn from './CardBtn'
import CardInput from './CardInput'
import CardProfileLinks from './CardProfileLinks'
import CardTextarea from './CardTextarea'
import '../../assets/scss/theme/sections/_hero.scss'

export class CardBack extends Component {
    render() {
        return (
            <div>
                 <div className="card-side side-back">
        <div className="container-fluid">
          <h1>Let's get in touch!</h1>
          
          <form formAction="" className="card-form">
            <div className="row">
              <div className="col-xs-6">
                <CardInput name="contactFirstName" id="contactFirstName" type="text" placeholder="Your first name" />
              </div>

              <div className="col-xs-6">
                <CardInput name="contactLastName" id="contactLastName" type="text" placeholder="Your last name" />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6">
                <CardInput name="contactEmail" id="contactEmail" type="email" placeholder="Your email address" />
              </div>

              <div className="col-xs-6">
                <CardInput name="contactSubject" id="contactSubject" type="text" placeholder="Subject" />
              </div>
            </div>
            
            <CardTextarea name="contactMessage" id="contactMessage" placeholder="Your message" />
            
            <CardBtn className="btn btn-primary" type="submit" value="Send message" />
          </form>
          
          <CardProfileLinks />
        </div>
      </div>
            </div>
        )
    }
}

export default CardBack
