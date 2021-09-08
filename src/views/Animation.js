import React, { Component } from 'react'
import Card from './Card';
import "./custom.css"
import Shopping from "../assets/images/ecommerce.jpg"
import elearning from "../assets/images/elearn.jpg"
import food from "../assets/images/food.png"
import gaming from "../assets/images/gaming.jpg"
import healthcare from "../assets/images/healthcare.jpg"
import logistics from "../assets/images/logistics.jpg"
import ondemandsolution from "../assets/images/social-networking.jpg"
import realestate from "../assets/images/realestate-2.jpg"

export class Animation extends Component {

    render() {
        return (
            <>
          <div className="hero-content pt-3">
            <h2 className="mt-0 mb-16  text-center reveal-from-bottom" data-reveal-delay="200">
              Our Domain <span className="text-danger"> Expertise</span>
            </h2>
            <div className="container-xs">
              <p className="m-0 text-center reveal-from-bottom" data-reveal-delay="400">
               We convert your Dreams into products using premium coded quality that is highly Reliable.
                </p>
                </div>
                </div>
                <div className="container-fluid text-center">
<div className="d-flex cardView row">
    <div className=" col-md-3">
    <div className="cards ">
         <Card
          img={Shopping}
          title="E-Commerce"
          // author="ecommerce"
 />
      </div>
    </div>
    <div className="col-md-3">
    <div className='cards'>
         <Card
          img={elearning}
          title="E-Learning"
 />
      </div>
    </div>
    <div className="col-md-3">
    <div className='cards'>
         <Card
          img={food}
          title="Restaurant"
 />
      </div>
    </div>
    <div className="col-md-3">
    <div className='cards'>
         <Card
          img={gaming}
          title="Gaming"
 />
      </div>
    </div>

      </div>  
      </div>
      <div className="container-fluid text-center">
      <div className="d-flex cardView row">
    <div className="col-md-3">
    <div className='cards'>
         <Card
          img={healthcare}
          title="Healthcare"
 />
      </div>
    </div>
    <div className="col-md-3">
    <div className='cards'>
         <Card
          img={logistics}
          title="Logistics"
 />
      </div>
    </div>
    <div className="col-md-3">
    <div className='cards'>
         <Card
          img={ondemandsolution}
          title="Social Media"
 />
      </div>
    </div>
    <div className="col-md-3">
    <div className='cards'>
         <Card
          img={realestate}
          title="Real-Estate"
 />
      </div>
    </div>
      </div>
      </div>
      </>
       );
   }
}