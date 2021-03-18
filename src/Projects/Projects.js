import React, { useState } from 'react';
import Card from '../Card/Card';
import Avatar from '../images/avatar.png';
import ProjectsCss from './Projects.css';
// import SignUp from './SignUp/SignUp';
import {
    Link
  } from "react-router-dom";

function Projects() {
    const [projects, setProjects] = useState(
        {
            img:{},
            title:''
        }
    );

    return (
        <div className="projects-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 left-sidebar">
                        <img src={Avatar} alt="Person" className="img-fluid" />
                        <ul className="person-list">
                            <li>Name: </li>
                            <li>Email:</li>
                            <li>Joined:</li>
                        </ul>
                    </div>
                    <div className="col-lg-9 pb-5 ml-auto">
                        <div className="row">
                            <div className="col-lg-6 mb-5">
                                <h1>Projects</h1>
                            </div>
                            <div className="col-lg-4 ml-auto  mb-5">
                                <Link 
                                    to="/addprojects"
                                className="purple-btn float-lg-right mr-0">
                                    New Project
                                </Link>
                            </div>
                           
                           
                            {   
             <Card 
            img =  {Avatar}
            title = 'Card Title'

        />
    }
                            {/* <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={Avatar} alt={Avatar} className="card-img-top img-fluid" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <ul className="card-list">
                                            <li>In Progess</li>
                                            <li>18 MArch 2021</li>
                                        </ul>
                                    </div>
                                    <div className="card-body-2">
                                        <ul className="card-list-2">
                                            <li>Target Amt<br /> 34</li>
                                            <li>Monthly Amt <br />20</li>
                                            <li>Avg Amt <br />12</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={Avatar} alt={Avatar} className="card-img-top img-fluid" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <ul className="card-list">
                                            <li>In Progess</li>
                                            <li>18 MArch 2021</li>
                                        </ul>
                                    </div>
                                    <div className="card-body-2">
                                        <ul className="card-list-2">
                                            <li>Target Amt<br /> 34</li>
                                            <li>Monthly Amt <br />20</li>
                                            <li>Avg Amt <br />12</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={Avatar} alt={Avatar} className="card-img-top img-fluid" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <ul className="card-list">
                                            <li>In Progess</li>
                                            <li>18 MArch 2021</li>
                                        </ul>
                                    </div>
                                    <div className="card-body-2">
                                        <ul className="card-list-2">
                                            <li>Target Amt<br /> 34</li>
                                            <li>Monthly Amt <br />20</li>
                                            <li>Avg Amt <br />12</li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
