import React, { Component } from 'react'
import '../../App.css';

export class Error extends Component {
    render() {
        return (
            <div className="position-relative Information">
                <div className="row justify-content-center error__text">
                    <div className=" col-12 card__header text-center">
                        <p> 404 | You have found nothing</p>
                        <p> Congratulation </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Error
