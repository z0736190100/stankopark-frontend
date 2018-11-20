import React from "react";
import _ from "lodash";
import {Field, reduxForm} from "redux-form";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/es/Icon/Icon";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter";
import CustomInputForRedux from "under_construction/components/CustomInputForRedux.jsx";
//assets
import loginPageStyle from "assets/jss/material-dashboard-react/views/loginStyle.jsx";
import image from "assets/img/sidebar-1.jpg";

//FIXME: CardFooter buttons centering- bad
class UCLoginPage extends React.Component {

    state = {
        cardAnimaton: "cardHidden"
    };

    classes = this.props.classes;

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(() => {
            this.setState({cardAnimaton: ""});
        }, 777);
    }

    FORM_FIELD_PROPS = [
        {
            name: "username",
            labelText: "Email",
            endAdornment: <Email className={this.classes.inputIconsColor}/>
        },
        {
            name: "password",
            labelText: "Пароль",
            endAdornment:
                <Icon className={this.classes.inputIconsColor}>
                    lock_outline
                </Icon>
        }
    ];

    formRenderer = () => {
        return _.map(this.FORM_FIELD_PROPS, item => {
            return (
                <Field
                    key={item.name}
                    name={item.name}
                    component={
                        CustomInputForRedux
                    }
                    formControlProps={{
                        fullWidth: true
                    }}
                    labelText={item.labelText}
                    endAdornment={item.endAdornment}
                />
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
                                    <form className={classes.form}
                                          onSubmit={this.props.handleSubmit(values => console.log(values))}>
                                        <CardHeader color="primary" className={classes.cardHeader}>
                                            <h4>Добро Пожаловать!</h4>
                                        </CardHeader>
                                        <CardBody profile>
                                            {this.formRenderer()}
                                            <Button
                                                type={"submit"}
                                                color="primary"
                                                style={{
                                                    fontFamily: "Roboto Slab"
                                                }}
                                            >
                                                submit
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
    form: "loginForm"
})((withStyles(loginPageStyle)(UCLoginPage)));
