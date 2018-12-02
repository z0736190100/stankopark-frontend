import React from 'react';
import {Field, reduxForm} from "redux-form";
import PropTypes from 'prop-types';
import _ from "lodash";

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
            type,
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
    return (
        <form onSubmit={props.handleSubmit(values => console.log(values))}>
            <GridContainer>
                {formRenderer()}
            </GridContainer>
            <Button
                color="primary"
                style={{
                    fontFamily: "Roboto Slab"
                }}
            >
                {"Сохранить"}
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
                onClick={() => props.switchForm()}
                color="success"
            >
                { "LOGIN"}
            </Button>
            <Button
                type={"submit"}
                color="success"
            >
                submit
            </Button>
        </form>
    );
};

const validate = values => {
    let errors = [];
    const FIELDS_TO_VALIDATE_LIST = ["lastName", "firstName", "email", "password", "password2"];
    console.log(values);
    if (values.password !== values.password2) errors.password = "Password not equals";

    _.each(FIELDS_TO_VALIDATE_LIST, name => {
        if (!values[name]) {
            errors[name] = true;
        }
        console.log(errors);
    });

    return errors;

};


RegistrationForm.propTypes = {

};

export default reduxForm({
    validate,
    form: "registration"
})(RegistrationForm);
