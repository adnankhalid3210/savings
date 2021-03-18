import React from 'react';
import Avatar from '../images/avatar.png';
import ProjectsCss from '../Projects/Projects.css';

function Card(props) {
  return (
    <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={props.img} alt={props.img} className="card-img-top img-fluid" />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
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
  );
}

export default Card;
