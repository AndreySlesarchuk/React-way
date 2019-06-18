import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Todo from "./__test/Todo/Todo";
import Meme from "./__test/Meme/Meme";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Geomap from "./components/Geomaps/Geomap";
import MyMap from "./components/Geomaps/MyMap";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile store={props.store} /> }/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store} /> } />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/todo' render={() => <Todo />} />
                <Route path='/meme' render={() => <Meme />} />
                <Route path='/map' render={() => <MyMap />} />
                <Route path='/geomap' render={() => <Geomap style={{height: '1000px'}} view={[53.9, 27.5]}/>} />
                <Route path='/settings' render={() => <Todo />} />
            </div>
        </div>
    );
}

export default App;
