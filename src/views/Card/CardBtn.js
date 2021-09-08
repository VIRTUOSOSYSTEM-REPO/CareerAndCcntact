import React, { Component } from 'react'
import '../../assets/scss/theme/sections/_hero.scss'

export class CardBtn extends Component {
    render() {
        return (
            <div>
                 <fieldset>
        <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
      </fieldset>
            </div>
        )
    }
}

export default CardBtn
