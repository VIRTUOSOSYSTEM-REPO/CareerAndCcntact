import React, { Component } from 'react'
import '../../assets/scss/theme/sections/_hero.scss'

export class CardProfileLinks extends Component {
    render() {
        const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];
        
        const linksList = profileLinks.map((link, index) =>
          <li key={index}><a href='#'><i className={'fa fa-' + link}></i></a></li>
        );
                                         
        return(
          <div className="card-social-links">
            <ul className="social-links">
              {linksList}
            </ul>
          </div>
        )
    }
}

export default CardProfileLinks
