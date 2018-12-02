import React from "react";
import {Field, reduxForm} from "redux-form";
import * as actions from "store/actions";
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

import welcomePageStyle from "assets/jss/material-dashboard-react/views/welcomeStyle.jsx";
import {LOGIN} from "variables/welcomeFormFields.jsx";

import image from "assets/img/sidebar-1.jpg";
import _ from "lodash";

//FIXME: CardFooter buttons centering- bad
class WelcomePage extends React.Component {
    state = {
        cardAnimaton: "cardHidden",
        welcomeLogin: true
    };

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(() => {
            this.setState({cardAnimaton: ""});
        }, 777);
    }

    formRenderer = () => {
        const defaultErrorText = "Check if right.";
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

    switchForm = () => {
        this.setState({
            welcomeLogin: !this.state.welcomeLogin
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
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
                                            onSubmit={this.props.handleSubmit(values => console.log(values))}>
                                            <GridContainer>
                                                {this.formRenderer()}
                                            </GridContainer>
                                            <Button
                                                onClick={this.props.switchPermitted}
                                                color="primary"
                                                style={{
                                                    fontFamily: "Roboto Slab"
                                                }}
                                            >
                                                {this.state.welcomeLogin ? "Вход" : "Сохранить"}
                                            </Button>
                                            <p>или так:</p>
                                            <Button
                                                // disabled
                                                round
                                                justIcon
                                                color="danger"
                                                href={"/auth/google"}
                                            >
                                                <i className={"fab fa-google-plus-g"}/>
                                            </Button>
                                            <Button
                                                //type={"submit"}
                                                onClick={() => this.switchForm()}
                                                color="success"
                                            >
                                                {this.state.welcomeLogin ? "REGISTRATION" : "LOGIN"}
                                            </Button>
                                            <Button
                                                type={"submit"}
                                                color="success"
                                            >
                                                submit
                                            </Button>
                                        </form>) : <RegistrationForm switchForm={this.switchForm}/>}
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
        error: state.auth.error
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

export default reduxForm({
    validate,
    form: "login"
}, mapStateToProps, actions)(withStyles(welcomePageStyle)(WelcomePage));
