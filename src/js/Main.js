import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types'; import { Helmet, HelmetProvider } from 'react-helmet-async';
// import Navigation from './components/Nav';
import Home from './pages/Home'

const Main = (props) => (
  <Container>
    <Home />
  </Container>
);

// const Main = (props) => (
//   <HelmetProvider>
//     <Helmet titleTemplate="%s | Michael D'Angelo" defaultTitle="Michael D'Angelo">
//       {props.title && <title>{props.title}</title>}
//       <meta name="description" content={props.description} />
//     </Helmet>
//     <div id="wrapper">
//       <Navigation />
//       <div id="main">
//         {props.children}
//       </div>
//       {props.fullPage ? null : <SideBar />}
//     </div>
//   </HelmetProvider>
// );


// Main.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]),
//   fullPage: PropTypes.bool,
//   title: PropTypes.string,
//   description: PropTypes.string,
// };

// Main.defaultProps = {
//   children: null,
//   fullPage: false,
//   title: null,
//   description: "Michael D'Angelo's personal website.",
// };

export default Main;
