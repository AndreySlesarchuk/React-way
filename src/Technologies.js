import React from 'react';
import logo from './logo.svg';

const Technologies = ()  => {
    return (

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                ATMM.BY Hello World!
            </p>
            <a
                className="App-link"
                //href="https://reactjs.org"
                href="http://atmm.by"
                target="_blank"
                rel="noopener noreferrer"
            >
                Go to ATMM.BY
            </a>
        </header>

    )
}

export default Technologies;