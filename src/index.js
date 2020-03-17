import React from "react"
import * as serviceWorker from './serviceWorker'
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter} from "react-router-dom"
import store from "./redux/redux-store"
import {Provider} from "react-redux"

//let h1 = document.createElement("h1");
//h1.innerHTML = "Hello";
//document.querySelector("body").appendChild(h1);
/*setInterval(()=>{ store.dispatch({type: "FAKE"})}, 1000);*/

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'))

serviceWorker.unregister();
