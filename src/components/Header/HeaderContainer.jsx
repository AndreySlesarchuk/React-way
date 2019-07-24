import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import Header from "./Header";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

export default HeaderContainer;