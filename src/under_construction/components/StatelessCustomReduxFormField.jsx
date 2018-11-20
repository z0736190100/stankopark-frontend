import React from "react";
import {Field, reduxForm} from "redux-form";
// @material-ui/core components
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import CustomInputForRedux from "under_construction/components/CustomInputForRedux.jsx";
import Button from "components/CustomButtons/Button";

// KUNG-FUSION: should it be form-component or maybe field-component?
class CustomReduxFormField extends React.Component {

    peopleIcon = () => {
        return (
            <People/>
        );
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                <Field
                    key={"key"}
                    name={"username"}
                    component={
                        CustomInputForRedux
                    }
                    formControlProps={{
                        fullWidth: true
                    }}
                    labelText={"Login"}
                    endAdornment={this.peopleIcon()}
                />
                <Button
                    type={"submit"}
                    color="primary"
                    style={{
                        fontFamily: "Roboto Slab"
                    }}
                >
                    submit
                </Button>
            </form>
        );
    }
}

export default reduxForm({
    form: "loginForm"
})(LoginForm);
