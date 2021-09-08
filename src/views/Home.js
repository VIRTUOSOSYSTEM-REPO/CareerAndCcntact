import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
// import Transition from "../views/Transition";
import { Animation } from './Animation';
import Technology from './Technology';
const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/* <Transition /> */}
      
      <Animation />
      {/* <Slide */}
      <FeaturesTiles />
      
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      <Technology />
      <Cta split />
      {/* <Card /> */}
    </>
  );
}

export default Home;