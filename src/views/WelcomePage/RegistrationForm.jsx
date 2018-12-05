import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import _ from "lodash";
import * as actions from "store/actions";

import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import {REGISTRATION} from "variables/welcomeFormFields.jsx";


const formRenderer = () => {
    const defaultErrorText = "Check if right.";
    return _.map(REGISTRATION, item => {
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

const RegistrationForm = props => {

    const regUser = props.registerUser;

    return (
        <form onSubmit={props.handleSubmit(values => {
            regUser(values);
            setTimeout(() => props.toLogin(), 3000)
        })}>
            <GridContainer>
                {formRenderer()}
            </GridContainer>
            <Button
                //type={"submit"}
                onClick={() => props.toLogin()}
                color="primary"
                style={{
                    fontFamily: "Roboto Slab"
                }}
            >
                {" <  Назад"}
            </Button>
            <Button
                type={"submit"}
                color="primary"
                style={{
                    fontFamily: "Roboto Slab"
                }}
            >
                {"Зарегистрировать"}
            </Button>

        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

const validate = values => {
    let errors = [];
    const FIELDS_TO_VALIDATE_LIST = ["lastName", "firstName", "email", "password", "password2"];
    if (values.password !== values.password2) errors.password2 = true;

    _.each(FIELDS_TO_VALIDATE_LIST, name => {
        if (!values[name]) {
            errors[name] = true;
        }
    });

    return errors;
};

export default connect(mapStateToProps, actions)(
    reduxForm({
        destroyOnUnmount: false,
        validate,
        form: "registration"
    })(withRouter(RegistrationForm)));
