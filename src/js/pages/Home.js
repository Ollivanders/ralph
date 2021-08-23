import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../styles/Home.scss'
import logo from '../../assets/logo.png'
import cvImage from '../../assets/cv.png'
import cv from '../../assets/OBaxandallResume.pdf'


class Home extends Component {
    render() {
        return (
            <div className="home">
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <h1 className='title'>Oli Baxandall</h1>
                        <Row>
                            <Col lg={8} md={8} sm={8}>
                                <h2 className="sub-title"> Full Stack Developer</h2>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <img src={logo} className="logo" alt="logo" />
                            </Col>
                        </Row>
                        <p className='description'>
                            Experienced in full stack development, continuous integration of software projects and finding things to do.
                            Working in numerous roles of this nature has promoted a deep love of coffee, a fascination for anything to do with technology and a DIY attitude.
                            An active individual maintaining balance with an assortment of hobbies, including work as a professional magician, 3D-printing of designed CAD projects and rock climbing.
                            </p>
                        <Row>
                            <Col lg={12} md={4} sm={4}>
                                <a className='cv' href={cv} target='_blank'>
                                    Resume
			                    </a>
                            </Col>
                            <Col lg={12} md={8} sm={8}>
                                <div className="social-container">
                                    <a href='https://github.com/Ollivanders' className='github-logo' target='_blank'><i className='fab fa-github' /></a>
                                    <a href='https://www.linkedin.com/in/oliver-baxandall/' className='linkedin-logo'  target='_blank'><i className='fab fa-linkedin' /></a>
                                    <a href='mailto:oliver.baxandall@gmail.com' className='mail-logo' ><i className='fas fa-envelope' /></a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <a href={cv} target='_blank'>
                            <img src={cvImage} className="cvImage" alt="resume" />
                        </a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;
