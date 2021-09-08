import React, { Component } from 'react'
import CardBack from './CardBack'
import CardFront from './CardFront'
import '../../assets/scss/theme/sections/_hero.scss'
export class Card extends Component {
    render() {
        return (
      <div className="card-container">
        <div className="card-body">
          <CardBack/>
          <CardFront />
        </div>
      </div>

         
        )
    }
}

export default Card
