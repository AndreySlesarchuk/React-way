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

let DialogComponent = () => <Dialogs/>

const App = (props) => {

    let posts = [
        {id:1, message: 'Study hard my friend', likesCount: 13},
        {id:2, message: 'Ok my world!!!', likesCount: 7},
        {id:3, message: 'Yup!', likesCount: 11}]


    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ DialogComponent } />
                <Route path='/profile' render={ () => <Profile posts={posts}/>} />
                <Route path='/news' render={ () => <News />} />
                <Route path='/music' render={ () => <Music />} />
                <Route path='/todo' render={ () => <Todo />} />
                <Route path='/meme' render={ () => <Meme />} />
                <Route path='/settings' render={ () => <Todo />} />
            </div>
            {/*<Profile/>*/}
        </div>
        </BrowserRouter>
    );
}

export default App;
