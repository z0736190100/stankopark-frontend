import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/es/Switch/Switch";

import customSwitchInputStyle from "assets/jss/material-dashboard-react/components/customSwitchInputStyle.jsx"

const CustomSwitchInput = (props, input) => {

    const {
        classes,
        checked,
        value,
        name,
        label,
        onClick,
        id
    } = props;
const inputProps = input;
    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={checked}
                        onClick={onClick}
                        value={value}
                        classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            icon: classes.switchIcon,
                            iconChecked: classes.switchIconChecked,
                            bar: classes.switchBar
                        }}
                        {...inputProps}
                    />
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
    classes: PropTypes.object.isRequired
};

export default withStyles(customSwitchInputStyle)(CustomSwitchInput);
