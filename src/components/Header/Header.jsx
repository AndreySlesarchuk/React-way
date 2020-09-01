import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom"

const Header = (props) => {
    return <header className={style.header}>
        <img className='App-logo'
             src="http://192.168.0.202/623/custom/themes/default/images/company_logo.png?v=NyHHMP7OnQElMG2V_-oPog"
             alt=''/>
        <div className={style.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header