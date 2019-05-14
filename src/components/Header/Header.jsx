import React from 'react';
import c from './Header.module.css'

const Header = () => {
    return  <header className={c.header}>
        <img className='App-logo' src='http://atmm.ru/623/custom/themes/default/images/company_logo.png?v=NyHHMP7OnQElMG2V_-oPog' />
        {/*<img className='App-logo' src='./src/images/atmm_logo.jpg' />*/}
    </header>
}

export default Header;