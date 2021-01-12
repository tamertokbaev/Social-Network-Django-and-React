import React from "react";
import App from './components/App';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import '../static/frontend/css/bootstrap-reboot.min.css';
import '../static/frontend/css/bootstrap-grid.min.css';
import './index.css';
import store from "./redux/redux-store";



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
