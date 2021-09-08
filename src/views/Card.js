/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h5 className="text-black">{this.props.title}</h5>
            <h5>{this.props.author}</h5>
          </div>
            </div>
        )
    }
}

export default Card
