/* eslint-disable react/no-children-prop */
import React, { useRef, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
// import Career from './views/Career';
import Career from './views/career/Career';
import ContactForm from './views/contact/ContactForm';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded');
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/career"
            component={Career}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/contact"
            component={ContactForm}
            layout={LayoutDefault}
          />
        </Switch>
       
      )}
    />
     <ToastContainer />
    </>
  );
};

export default App;
