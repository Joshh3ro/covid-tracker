import React, { Component } from 'react'
import map from '../img/map.png';

export class About extends Component {
    render() {
        return (
            <div className="position-relative about__cta">
                <div className="row">
                    <div className="col-4 about__text">
                        <h1 className="text-uppercase my-2">Covid 19 <br /> Tracker</h1>
                        <p>Better safe than sorry</p>
                    </div>
                    <div className="col-5">
                        <img src={map} alt="map" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About
