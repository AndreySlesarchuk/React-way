import React from 'react'
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom"
console.log(c)

const Navbar = () => {
    return  <nav className={c.nav}>
        <div className={c.item}>
            <NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/dialogs" activeClassName={c.activeLink}>Messages</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/users" activeClassName={c.activeLink}>Users</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/news" activeClassName={c.activeLink}>News</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/music" activeClassName={c.activeLink}>Music</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/todo" activeClassName={c.activeLink}>Todo</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/meme" activeClassName={c.activeLink}>Meme</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/map" activeClassName={c.activeLink}>MyMap</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/geomap" activeClassName={c.activeLink}>Geomap</NavLink>
        </div>
        <div><p> </p></div>
        <div className={c.item}><NavLink to="/settings" activeClassName={c.activeLink}>Settings</NavLink></div>
    </nav>
}

export default Navbar