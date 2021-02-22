import React, { useState, useEffect } from 'react'
import '../../App.css';

const Tracker = () => {

    const [cases, setCases] = useState("");
    const [recovered, setRecovered] = useState("");
    const [all, setAll] = useState("");

    useEffect(() => {
        fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats").then((responseData) => responseData.json()).then(data => {
            setCases(data.data.total_cases);
            setAll(data.data.recovery_cases);
            setRecovered(data.data.death_cases);
        });
    });

    return (
        <div className="position-relative Information">
            <div className="row justify-content-center">
                <div className=" col-5 card__catagory text-center text-white">
                    <lable>New Cases</lable>
                    <p>{cases} ####</p>
                </div>

                <div className=" col-5 card__catagory text-center text-white">
                    <lable>Total Cases</lable>
                    <p>{all} ####</p>
                </div>

                <div className=" col-10 card__catagory text-center text-white">
                    <lable>Recoveries</lable>
                    <p>{recovered} ####</p>
                </div>
            </div>
        </div>
    )
}

export default Tracker
