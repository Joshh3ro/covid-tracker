import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './nav.css';

export class Nav extends Component {
    render() {
        return (
            <header>
                <nav className="Link">
                    <ul className="nav_links" >
                        <Link  to="/">
                            <li>About</li>
                        </Link>
                        <Link to="/tracker">
                            <li>Tracker</li>
                        </Link>
                        <Link to="/project">
                            <li>Project Info</li>
                        </Link>
                    </ul>
                </nav>
                <a className="cta" href="/coomer"><button>Contact</button></a>
            </header>
        )
    }
}

export default Nav
