import React from 'react';
//import classes from ... changed to c
import c from './Navbar.module.css';
console.log(c);

const Navbar = () => {
    return  <nav className={c.nav}>
        <div className={c.item}>
            <a href="/profile">Profile</a>
        </div>
        <div className={c.item}>
            <a href="/dialogs">Messages</a>
        </div>
        <div className={c.item}>
            <a href="/profile">News</a>
        </div>
        <div className={c.item}>
            <a href="/profile">Music</a>
        </div>
        <div><p> </p></div>
        <div className={c.active}>
            <a href="/profile">Settings</a>
        </div>
    </nav>
}

export default Navbar;