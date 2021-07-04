import React, {Component} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Todo from './__test/Todo/Todo'
import Meme from './__test/Meme/Meme'
import {Route, withRouter} from 'react-router-dom'
import Music from './components/Music/Music'
import News from './components/News/News'
import MyMap from './components/Geomaps/MyMap'
import Geomap from './components/Geomaps/Geomap'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import Settings from "./components/Settings/Settings";

class App extends Component {
    componentDidMount = () => {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/todo' render={() => <Todo/>}/>
                    <Route path='/meme' render={() => <Meme/>}/>
                    <Route path='/map' render={() => <MyMap/>}/>
                    <Route path='/geomap' render={() => <Geomap style={{height: '1000px'}} view={[53.9, 27.5]}/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

