import React from "react";
import {Field, reduxForm} from "redux-form";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import welcomePageStyle from "assets/jss/material-dashboard-react/views/welcomeStyle.jsx";
import WELCOME_FORM_FIELDS from "views/WelcomePage/x.jsx";

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
        let section = this.state.welcomeLogin ? "LOGIN" : "REGISTRATION";
        return _.map(WELCOME_FORM_FIELDS[section], item => {
            console.log(item);
            const {
                component,
                name,
                labelText,
                errorText,
                tooltipText,
                endAdornment,
                startAdornment,
                breakpoints
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
                    />
                </GridItem>
            );
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
                                    <form className={classes.form}>
                                        <CardHeader color="primary" className={classes.cardHeader}>
                                            <h4>Добро Пожаловать!</h4>
                                        </CardHeader>
                                        <CardBody profile>
                                            <GridContainer>
                                                {this.formRenderer(this.state.welcomeForm)}
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
                                                onClick={() => {
                                                    this.setState({
                                                        welcomeLogin: !this.state.welcomeLogin
                                                    })
                                                }}
                                                color="success"
                                            >
                                                {this.state.welcomeLogin ? "REGISTRATION" : "LOGIN"}
                                            </Button>
                                        </CardBody>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: "welcomeForm"
})(withStyles(welcomePageStyle)(WelcomePage));
