import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header-component">
            <NavLink exact to="/" activeClassName="home-active"><h1>VIDEO GAMES</h1></NavLink>
            <NavLink exact to="/contact" activeClassName="contact-active"><h1>CONTACT</h1></NavLink>
        </div>
    )
}
