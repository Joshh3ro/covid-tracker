import React, { useState, useEffect, Component } from 'react'
import '../../App.css';


export class Tracker extends Component {

    render() {
        return (
            <div className="position-relative Information">
                <div className="row justify-content-center">
                    <div className=" col-5 card__catagory text-center text-white">
                        <lable>New Cases</lable>
                        <p>{}####</p>
                    </div>
    
                    <div className=" col-5 card__catagory text-center text-white">
                        <lable>Total Cases</lable>
                        <p>{}####</p>
                    </div>
    
                    <div className=" col-10 card__catagory text-center text-white">
                        <lable>Recoveries</lable>
                        <p>{}####</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tracker
