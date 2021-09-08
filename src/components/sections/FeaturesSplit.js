import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container text-center">
        <div className={innerClasses}>
        <div className="">
              <h2 className="text-center text-danger"> Who We <span className="text-white">Are ?</span></h2>
              <p>   We are extremely delighted to introduce to you Virutusosys a 360 solution for all your IT needs .we are experts in Web development mobile app development software testing desiging and training </p>
          <p> We believe in customizing each project based on special feature requirements and market conditions.</p>
          <p>Our Company virutusosys was formed as our answer to the constant quest for a way to utilize technological advancement for the betterment of people and their livelihood. When we started off, we were just a bunch of web designers – developers, designers, creators who were determined to go to any extent to bring out the best results for our clients .Since then, our team  have been exploring the possibilities of Information Technology to transform the way people do business. We have helped people from different walks of life to improve their livelihood and many enterprises to grow profits by developing custom solutions specifically designed for boosting their business and customer reach. Our client list includes service agencies, Exporters, Hospitals, Builders, realtors, online stores, architects, doctors, and many more. What we create for them are tailor-made solutions that escalate the productivity, value, and yield of their business.</p>
        </div>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                “Blame doesn’t fix bugs” 
                  </div>
                <h3 className="mt-0 mb-12">
                  Software Testing
                  </h3>
                <p className="m-0">
                Our dedicated QA teams perform quality verification of software products for different market segments. We conduct a wide range of testing of e-commerce, healthcare, media and entertainment, travel and accommodation, and business solutions.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/soft.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                "First, solve the problem.Then write the code"
                  </div>
                <h3 className="mt-0 mb-12">
                  Web Development
                  </h3>
                <p className="m-0">
                  Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dev.jpeg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                “Learning never exhausts the mind.”
                  </div>
                <h3 className="mt-0 mb-12">
                  Technical Training
                  </h3>
                <p className="m-0">
                  Software assurance QA testing is easy to learn and not code intensive. You will have to learn some coding, but not to the same extent as a software or web developer. Software QA test training typically takes six to ten weeks, whereas web development training takes anywhere from 12-26 weeks.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/training.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;