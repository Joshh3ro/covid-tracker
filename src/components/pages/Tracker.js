import React, { useState, useEffect, Component } from 'react'
import '../../App.css';
import Axios from "axios";


export class Tracker extends Component {

    state = {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
    }

    componentDidMount() {
        this.getData();
        console.log("nice looking out headass, the api keeps failing try a new rout")
    }

    async getData() {
        const res = await Axios("https://covid19.mathdro.id/api");
        this.setState({
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value,
        });
    }

    render() {
        return (
            <div className="position-relative Information">
                <div className="row justify-content-center">
                    <div className=" col-5 card__catagory text-center text-white">
                        <lable className="card__header">Daily Cases</lable>
                        <p>{}####</p>
                    </div>
    
                    <div className=" col-5 card__catagory text-center text-white">
                        <lable className="card__header">Total Cases</lable>
                        <p>{this.state.confirmed}</p>
                    </div>
    
                    <div className=" col-10 card__catagory text-center text-white">
                        <lable className="card__header">Recoveries</lable>
                        <p>{this.state.recovered}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tracker
