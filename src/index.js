import React from "react";
import ReactDOM from "react-dom";

import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";

import WelcomePage from "views/WelcomePage/WelcomePage";

import "assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "routes/index.jsx";
import Notiferatu from "under_construction/components/Notifications/Notiferatu";

const hist = createBrowserHistory();

const store = createStore(reducers, {auth: {welcomeLogin: true}}, compose(applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
                <Switch>
                    <Notiferatu>
                    <Route path={"/welcome"} component={WelcomePage} key={"welcome"}/>
                    {indexRoutes.map((prop, key) => {
                        return (
                            <Route path={prop.path} component={prop.component} key={key}/>
                        );
                    })}
                    </Notiferatu>
                </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
