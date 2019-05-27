import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Todo from "./__test/Todo/Todo";
import Meme from "./__test/Meme/Meme";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs state={props.data.dialogsPage}/> } />
                <Route path='/profile' render={() => <Profile state={props.data.profilePage}/> } />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/todo' render={() => <Todo />} />
                <Route path='/meme' render={() => <Meme />} />
                <Route path='/settings' render={() => <Todo />} />
            </div>
        </div>
    );
}

export default App;
