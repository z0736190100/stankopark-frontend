import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import customInputStyle from "assets/jss/material-dashboard-react/components/customInputStyle.jsx";

// KUNG-FUSION: error that comes from reduxForm is boolean or a string with error text
function CustomInput({input, meta: {touched, error}, ...props}) {
    const {
        classes,
        formControlProps,
        labelText,
        id,
        labelProps,
        endAdornment,
        startAdornment,
        success,
        disabled,
        helperText
    } = props;

    const inputProps = input || props.inputProps;

    const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true
    });
    const marginTop = classNames({
        [classes.marginTop]: labelText === undefined
    });
    return (
        <FormControl
            {...formControlProps}
            className={formControlProps.className + " " + classes.formControl}
            margin={"dense"}
        >
            {labelText !== undefined ? (
                <InputLabel
                    className={classes.labelRoot + labelClasses}
                    htmlFor={id}
                    {...labelProps}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <Input
                disabled={disabled}
                onChange={event => props.onChange(event)}
                classes={{
                    root: marginTop,
                    disabled: classes.disabled,
                    underline: underlineClasses
                }}
                id={id}
                {...inputProps}
                endAdornment={endAdornment || (error ? (
                    <Clear className={classes.feedback + " " + classes.labelRootError}/>
                ) : success ? (
                    <Check className={classes.feedback + " " + classes.labelRootSuccess}/>
                ) : null)}
                startAdornment={startAdornment}
            />
            <FormHelperText className={labelClasses}>{ error || helperText }</FormHelperText>

        </FormControl>
    );
}

CustomInput.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomInput);
