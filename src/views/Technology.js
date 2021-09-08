import React from 'react'
import nextjs from "../assets/images/Technology/nextjs2.jpeg"
import flutter from "../assets/images/Technology/flutter.png"

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
	<div className="slide-track">
		<div className="slide  pr-2">
			<img src="https://virtuoso-sys.netlify.app/wp-content/uploads/2021/08/sql.png" height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src="https://virtuoso-sys.netlify.app/wp-content/uploads/2021/08/react1.png" height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src="https://virtuoso-sys.netlify.app/wp-content/uploads/2021/08/micro.png" height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src="https://virtuoso-sys.netlify.app/wp-content/uploads/2021/08/node.png" height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src="https://virtuoso-sys.netlify.app/wp-content/uploads/2021/08/MongoDB.png" height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src="https://virtuoso-sys.netlify.app/wp-content/uploads/2021/08/java.png" height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src="https://virtuoso-sys.netlify.app/wp-content/uploads/2021/08/soapui1.png" height="100" width="250" alt="" />
		</div>
        <div className="slide pr-2">
			<img src="https://virtuoso-sys.netlify.app/wp-content/uploads/2021/08/react1.png" height="100" width="250" alt="" />
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








