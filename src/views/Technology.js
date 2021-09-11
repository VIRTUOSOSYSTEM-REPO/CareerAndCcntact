import React from 'react'
import nextjs from "../assets/images/Technology/nextjs2.jpeg"
import flutter from "../assets/images/Technology/flutter.png"
import react from "../assets/images/Technology/react.png"
import sql from "../assets/images/Technology/sql.png"
import java from "../assets/images/Technology/java.png"
import node from "../assets/images/Technology/node.png"
import mongo from "../assets/images/Technology/mongo.png"
import vue from "../assets/images/Technology/vue.png"
import php from "../assets/images/Technology/php.png"


function Technology() {
    return (
        <div>
			<div className="hero-content pt-3">
            <h2 className="mt-0 mb-16  text-center reveal-from-bottom" data-reveal-delay="200">
              <span className="text-danger"> Technology</span> We Used 
            </h2>
            <div className="container-xs">
              <p className="m-0 text-center reveal-from-bottom" data-reveal-delay="400">
               We convert your Dreams into products using premium coded quality that is highly Reliable.
                </p>
                </div>
                </div>
            <div className="slider">
	<div className="slide-track pr-2">
        <div className="slide pr-2">
			<img src={react} height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src={node} height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src={mongo} height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src={vue} height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src={java} height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src={php} height="100" width="250" alt="" />
		</div>
		<div className="slide  pr-2">
			<img src={sql} height="100" width="250" alt="" />
		</div>
		<div className="slide pr-2">
			<img src={nextjs} height="200" width="250" alt="" />
		</div>
		<div className="slide pr-2">
			<img src={flutter} height="200" width="250" alt="" />
		</div>
	</div>
</div>
        </div>
    )
}

export default Technology








