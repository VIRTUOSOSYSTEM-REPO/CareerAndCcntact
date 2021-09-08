import React, { Component } from 'react'
import '../../assets/scss/theme/sections/_hero.scss'

export class CardFront extends Component {
    render() {
        return (
            <div>
                 <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
              <img src="https://source.unsplash.com/w8YICpz1I10/358x458" />
            </div>

            <div className="col-xs-6 side-front-content">
              <h2>Czech based</h2>

              <h1>UI/UX Designer</h1>

              <p>Andrey is driven by turning ideas into scalable and and empowering experiences that solve real life problems.</p>

              <p>He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.</p>

              <p>Over the years, Michael has been priviledged to have worked with Adobe, Evernote, Square and more.</p>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default CardFront
