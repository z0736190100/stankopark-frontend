import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
//core components
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/Switch/Switch";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

import customSwitchInputStyle from "assets/jss/material-dashboard-react/components/customSwitchInputStyle.jsx"


const CustomSwitchInput = ({input, input: {onChange}, meta: {touched, error}, ...props}) => {

    const {
        classes,
        disabled,
        checked,
        label,
        onClick,
        tooltipText,
        labelClasses
    } = props;
    const inputProps = input;
    return (
        <div>
            <FormControlLabel
                style={{
                    marginLeft: "13px",
                    fontFamily: "Roboto Slab"
                }}
                control={
                    <Tooltip
                        title={tooltipText || ""}
                        placement={"top-start"}>
                        <Switch
                            disabled={disabled}
                            checked={checked}
                            onClick={onClick}
                            classes={{
                                switchBase: classes.switchBase,
                                checked: classes.switchChecked,
                                icon: classes.switchIcon,
                                iconChecked: classes.switchIconChecked,
                                bar: classes.switchBar
                            }}
                            {...inputProps}
                        />
                    </Tooltip>
                }
                classes={{
                    label: classes.label
                }}
                label={label}
            />

        </div>
    );
};

// TODO
CustomSwitchInput.propTypes = {
    disabled: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.node,
    onClick: PropTypes.func
};

export default withStyles(customSwitchInputStyle)(CustomSwitchInput);
