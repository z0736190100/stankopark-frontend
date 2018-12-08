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
// core components
import customInputStyle from "assets/jss/material-dashboard-react/components/customInputStyle.jsx";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";


// KUNG-FUSION: error that comes from reduxForm is boolean or a string with error text
function CustomInput({input, meta: {touched, error}, ...props}) {
    const {
        classes,
        disabled,
        endAdornment,
        errorText,
        formControlProps,
        helperText,
        id,
        labelProps,
        labelText,
        maxlength,
        minlength,
        pattern,
        required,
        startAdornment,
        shrink,
        success,
        tooltipText,
        type
    } = props;

    const inputProps = input || props.inputProps;

    const labelClasses = classNames({
        [" " + classes.labelRootError]: (touched && error),
        [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
        [classes.underlineError]: (touched && error),
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
                    shrink={shrink}
                    className={classes.labelRoot + labelClasses}
                    htmlFor={id}
                    {...labelProps}
                >
                    {labelText}
                </InputLabel>

            ) : null}
            <Tooltip
                title={tooltipText || ""}
                placement={"top-start"}>
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
                    type={type}
                    required={required}
                    minLength={minlength}
                    maxLength={maxlength}
                    pattern={pattern}
                    endAdornment={endAdornment || null}
                    startAdornment={startAdornment || null}
                />
            </Tooltip>
            <FormHelperText
                className={labelClasses}>{(touched && error) ? errorText : (helperText || null)}</FormHelperText>

        </FormControl>
    );
}

// ((error && touched) ? (
//     <Clear className={classes.feedback + " " + classes.labelRootError}/>
// ) : success ? (
//     <Check className={classes.feedback + " " + classes.labelRootSuccess}/>
// ) : null)

CustomInput.propTypes = {
    classes: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    labelText: PropTypes.node,
    endAdornment: PropTypes.node,
    startAdornment: PropTypes.node,
    errorText: PropTypes.node,
    helperText: PropTypes.node,
    tooltipText: PropTypes.node,
    maxlength: PropTypes.number,
    minlength: PropTypes.number,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    type: PropTypes.string,
    pattern: PropTypes.string,
    required: PropTypes.bool,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool,
    shrink: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomInput);
