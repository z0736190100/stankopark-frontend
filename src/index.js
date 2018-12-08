import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";
// custom components
import WelcomePage from "views/WelcomePage/WelcomePage";
import Notiferatu from "components/Notifications/Notiferatu";
// assets
import "assets/css/material-dashboard-react.css?v=1.5.0";
import indexRoutes from "routes/index.jsx";


const hist = createBrowserHistory();

const store = createStore(reducers, {auth: {welcomeLogin: true}}, compose(applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch history={hist}>
                {indexRoutes.map((prop, key) => {
                    return (
                        <Route path={prop.path} component={prop.component} key={key}/>
                    );
                })}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
