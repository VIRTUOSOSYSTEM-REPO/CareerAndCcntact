import React, { Component } from 'react'
import '../../assets/scss/theme/sections/_hero.scss'

export class CardInput extends Component {
    render() {
        return (
            <div>
                  <fieldset>
        <input name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
      </fieldset>
            </div>
        )
    }
}

export default CardInput
