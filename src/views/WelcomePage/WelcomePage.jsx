import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as actions from "store/actions";
import {withRouter} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import RegistrationForm from "views/WelcomePage/RegistrationForm.jsx";
import UCNotificationCase from "under_construction/components/Notifications/UCNotificationCase.jsx";

import welcomePageStyle from "assets/jss/material-dashboard-react/views/welcomeStyle.jsx";
import {LOGIN} from "variables/welcomeFormFields.jsx";

import image from "assets/img/sidebar-1.jpg";
import _ from "lodash";

//FIXME: CardFooter buttons centering- bad
class WelcomePage extends React.Component {
    state = {
        cardAnimaton: "cardHidden",
        welcomeLogin: true,
        notifications: [],
        open: true
    };

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(() => {
            this.setState({cardAnimaton: ""});
        }, 777);
    }

    formRenderer = () => {
        const defaultErrorText = "Заполните поле правильно.";
        return _.map(LOGIN, item => {
            const {
                component,
                name,
                labelText,
                errorText,
                tooltipText,
                endAdornment,
                startAdornment,
                breakpoints,
                constraints
            } = item;
            return (
                <GridItem key={name} {...breakpoints}>
                    <Field
                        key={name}
                        name={name}
                        component={component}
                        formControlProps={{
                            fullWidth: true
                        }}
                        labelText={labelText}
                        endAdornment={endAdornment}
                        startAdornment={startAdornment}
                        errorText={errorText || defaultErrorText}
                        tooltipText={tooltipText || null}
                        {...constraints}
                    />
                </GridItem>
            );
        })
    };

    toRegiForm = () => {
        this.props.toRegForm();
        setTimeout(() => {
            this.setState({
                welcomeLogin: this.props.welcomeLogin
            })
        }, 5)
    };
    toLoginForm = () => {
        this.props.toLoginForm();
        setTimeout(() => {
            this.setState({
                welcomeLogin: this.props.welcomeLogin
            })
        }, 5)
    };

    renderNotifications = () => {
        const notif = this.props.notifications;
        const notifArr = [];
        _.map(notif, (item, key) => {
            console.log({...item}, key);
            return notifArr.push(
                <UCNotificationCase
                    place={"tr"}
                    key={item.message}
                    open={this.state.open}
                    message={item.message}
                    color={item.color}
                    closeNotification={() => this.setState({
                        open: false
                    })}
                    close
                />
            )
        });
        console.log(notifArr);
        return notifArr;
    };


    render() {
        const {classes} = this.props;
        return (
            <div>
                {this.renderNotifications()}
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "contain",
                        //backgroundRepeat: "no-repeat",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                                <Card className={classes[this.state.cardAnimaton]}
                                      profile>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>Добро Пожаловать!</h4>
                                    </CardHeader>
                                    <CardBody profile>
                                        {this.state.welcomeLogin ?
                                            (<form
                                                onSubmit={this.props.handleSubmit(values => this.props.loginUser(values, this.props.history))}>
                                                <GridContainer>
                                                    {this.formRenderer()}
                                                </GridContainer>
                                                <Button
                                                    type={"submit"}
                                                    //onClick={this.props.switchPermitted}
                                                    color="primary"
                                                    style={{
                                                        fontFamily: "Roboto Slab"
                                                    }}
                                                >
                                                    {"Вход"}
                                                </Button>
                                                <p>
                                                    <small>или</small>
                                                </p>
                                                <Button
                                                    onClick={() => {
                                                        this.toRegiForm();
                                                    }}
                                                    color="primary"
                                                    style={{
                                                        fontFamily: "Roboto Slab"
                                                    }}
                                                >
                                                    {"РЕГИСТРАЦИЯ"}
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        this.props.testNotification();
                                                    }}
                                                    color="primary"
                                                    style={{
                                                        fontFamily: "Roboto Slab"
                                                    }}
                                                >
                                                    {"notific test"}
                                                </Button>
                                            </form>) : <RegistrationForm toLogin={this.toLoginForm}/>}
                                    </CardBody>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notifications: state.notifications,
        welcomeLogin: state.auth.welcomeLogin
    }
};

const validate = values => {
    let errors = [];
    const FIELDS_TO_VALIDATE_LIST = ["email", "password"];

    _.each(FIELDS_TO_VALIDATE_LIST, name => {
        if (!values[name]) {
            errors[name] = true;
        }
    });

    return errors;
};

export default connect(mapStateToProps, actions)(reduxForm({
    validate,
    form: "login"
})(withStyles(welcomePageStyle)(withRouter(WelcomePage))));


{/*
<Button
    // disabled
    round
    justIcon
    color="danger"
    href={"/auth/google"}
>
    <i className={"fab fa-google-plus-g"}/>
</Button>*/
}
