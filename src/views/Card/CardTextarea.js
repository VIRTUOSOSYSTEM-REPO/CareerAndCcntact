import React, { Component } from 'react'
import '../../assets/scss/theme/sections/_hero.scss'

export class CardTextarea extends Component {
    render() {
        return (
            <div>
                <fieldset>
        <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required ></textarea>
      </fieldset>
            </div>
        )
    }
}

export default CardTextarea
