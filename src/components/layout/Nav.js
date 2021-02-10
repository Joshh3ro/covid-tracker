import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './nav.css';

export class Nav extends Component {
    render() {
        return (
            <header>
                <nav className="Link">
                    <ul className="nav_links" >
                        <Link  to="/about">
                            <li>About</li>
                        </Link>
                        <Link to="/projects">
                            <li>Projects</li>
                        </Link>
                        <Link to="/schedule">
                            <li>Schedule</li>
                        </Link>
                    </ul>
                </nav>
                <a className="cta" href="/coomer"><button>Contact</button></a>
            </header>
        )
    }
}

export default Nav
