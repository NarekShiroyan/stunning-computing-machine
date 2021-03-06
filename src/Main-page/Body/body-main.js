import React, { Component } from 'react';
import './body-main-style.css';
import video from './video/Mt_Baker.mp4';
import services from './services/services.const'
import {projectsVal} from './projects/project_const'
import ServiceBlock from './services/serviceblock'
import ProjectsBlock from './projects/projects'
import logo from './img/logowhite.png'

class body extends Component {
    render() {

        return (
            <div className='row'>
            <div className="homepage-hero-module">
                <div className="video-container">
                    <video className="fillWidth" loop autoPlay>
                        <source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                </div>
                <img src={logo} alt=""/>
            </div>
                <div className='servicesBlock'>
                    <ServiceBlock services={services}/>
                    <ProjectsBlock projects={projectsVal}/>
                </div>
            </div>
        );
    }
}

export default body;