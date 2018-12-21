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
        checked,
        value,
        label,
        onClick,
        tooltipText
    } = props;
    const inputProps = input;
    return (
        <div>
            <FormControlLabel
                control={
                    <Tooltip
                        title={tooltipText || ""}
                        placement={"top-start"}>
                        <Switch
                            checked={checked}
                            onClick={onClick}
                            onChange={(checked) => {
                                let check = checked.toString();
                                onChange(check)
                            }}
                            value={checked + ""}
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
    classes: PropTypes.object.isRequired,
    checked: PropTypes.bool,
    value: PropTypes.node,
    label: PropTypes.node,
    onClick: PropTypes.func
};

export default withStyles(customSwitchInputStyle)(CustomSwitchInput);
