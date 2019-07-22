import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return  <header className={style.header}>
        <img className='App-logo' src='http://atmm.ru/623/custom/themes/default/images/company_logo.png?v=NyHHMP7OnQElMG2V_-oPog' />

        <div className={style.loginBlock}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    </header>
}

export default Header;