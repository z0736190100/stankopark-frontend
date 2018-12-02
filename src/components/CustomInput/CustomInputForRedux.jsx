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
import Info from "@material-ui/icons/Info";
import Icon from "@material-ui/core/Icon/Icon";
// core components
import customInputStyle from "assets/jss/material-dashboard-react/components/customInputStyle.jsx";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";


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
        helperText,
        errorText,
        tooltipText,
        type,
        required,
        pattern,
        minlength,
        maxlength
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
                    shrink={startAdornment}
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
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomInput);
