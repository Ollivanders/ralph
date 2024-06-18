import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../styles/Home.scss'
import logo from '../../assets/logo.png'
import cvImage from '../../assets/cv.jpg'
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
                                <h2 className="sub-title">Lead Cloud Engineer</h2>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <img src={logo} className="logo" alt="logo" />
                            </Col>
                        </Row>
                        <p className='description'>
                            Accomplished software engineer, supporting cloud, full-stack and DevOps experience. Previously with an academic background and focus on research, I now specialise in enabling enterprise Cloud solutions. With prolific experience across start ups and established corporations, I have fostered a committed DIY approach and a fair love of coffee.
                        </p>
                        <Row>
                            <Col lg={12} md={4} sm={4}>
                                <a href={cv} className='cv' target='_blank'>
                                    Resume
                                </a>
                                <p></p>
                            </Col>
                            <Col lg={12} md={8} sm={8}>
                                <div className="social-container">
                                    <a href='https://github.com/Ollivanders' className='github-logo' target='_blank'><i className='fab fa-github' /></a>
                                    <a href='https://www.linkedin.com/in/oliver-baxandall/' className='linkedin-logo' target='_blank'><i className='fab fa-linkedin' /></a>
                                    <a href='mailto:oliver@baxandall.dev' className='mail-logo' ><i className='fas fa-envelope' /></a>
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
