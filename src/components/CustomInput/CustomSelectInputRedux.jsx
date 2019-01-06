import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Select from "@material-ui/core/es/Select/Select";
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";
// @material-ui/icons
// core components
// assets
import customInputStyle from "assets/jss/material-dashboard-react/components/customInputStyle.jsx";

function CustomSelectInputRedux({input, meta: {touched, error}, ...props}) {
    const {
        classes,
        disabled,
        formControlProps,
        labelText,
        labelProps,
        selectProps,
        id,
        success,
        errorText,
        startAdornment,
        endAdornment,
        menuValues,
        helperText
    } = props;

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

    const menuItemRenderHelper = () => {
        return menuValues ? (
            menuValues.map(element => (
                <MenuItem key={element.value} value={element.value}>
                    {element.text}
                </MenuItem>
            ))
        ) : (
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
        );
    };
    const inputProps = input || props.inputProps;

    return (
        <FormControl
            {...formControlProps}
            className={formControlProps.className + " " + classes.formControl}
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
            <Select
                {...selectProps}
                id={"select-" + id}
                className={classes.textField}
                margin={"none"}
                input={
                    <Input
                        disabled={disabled}
                        onChange={(event, index, value) => input.onChange(value)}
                        classes={{
                            root: marginTop,
                            disabled: classes.disabled,
                            underline: underlineClasses
                        }}
                        endAdornment={endAdornment || null}
                        startAdornment={startAdornment || null}
                        {...inputProps}

                    />
                }
            >
                {menuItemRenderHelper()}
            </Select>
            <FormHelperText
                className={labelClasses}>{(touched && error) ? errorText : (helperText || null)}</FormHelperText>
        </FormControl>
    );
}

/*<InputAdornment position="start">{startAdornment || null}</InputAdornment>*/

CustomSelectInputRedux.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomSelectInputRedux);
