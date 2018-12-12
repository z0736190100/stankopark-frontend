import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import WelcomePage from "views/WelcomePage/WelcomePage";

import dashboardRoutes from "routes/dashboard.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx"

import image from "assets/img/sidebar-1.jpg";
import logo from "assets/img/gh_logo3.png";
import {connect} from "react-redux";
import * as actions from "store/actions";


const switchRoutes = (
    <Switch>
        {dashboardRoutes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key}/>;
            return <Route path={prop.path} component={prop.component} key={key}/>;
        })}
    </Switch>
);

class Layout extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     mobileOpen: false
    //   };
    //   this.resizeFunction = this.resizeFunction.bind(this);
    // }

    state = {
        permitted: false,
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };
    getRoute = () => {
        return this.props.location.pathname !== "/maps";
    };
    resizeFunction = () => {
        if (window.innerWidth >= 617) {
            this.setState({mobileOpen: false});
        }
    };

    componentDidMount() {
        console.log("history ", this.props.history);
        //this.props.fetchCurrentUser();

        // if (navigator.platform.indexOf("Win") > -1) {
        //   const ps = new PerfectScrollbar(this.refs.mainPanel);
        // }
        window.addEventListener("resize", this.resizeFunction);
    }

    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({mobileOpen: false});
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }

    switchPermitted = () => {
        this.setState({permitted: !this.state.permitted});
    };

    render() {
        const {classes, ...rest} = this.props;
        return localStorage.getItem("token") ? (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={dashboardRoutes}
                    logoText={"Станкопарк"}
                    logo={logo}
                    image={image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color="purple"
                    {...rest}
                />
                <div className={classes.mainPanel} ref="mainPanel">
                    <Header
                        history={this.props.history}
                        logout={this.props.logoutUser}
                        routes={dashboardRoutes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />
                    {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
                    {this.getRoute() ? (
                        <div className={classes.content}>
                            <div className={classes.container}>{switchRoutes}</div>
                        </div>
                    ) : (
                        <div className={classes.map}>{switchRoutes}</div>
                    )}
                    {this.getRoute() ? <Footer/> : null}
                </div>
            </div>
        ) : <WelcomePage/>;
    }
}

function mapStateToProps({auth}) {
    return ({auth});
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    actions
)(withStyles(dashboardStyle)(Layout));

/*
this.props.auth || localStorage.getItem("token") ?
) : (
    <LoginPage switchPermitted={this.switchPermitted} />*/
