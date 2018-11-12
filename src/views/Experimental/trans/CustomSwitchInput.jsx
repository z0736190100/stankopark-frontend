import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/es/Switch/Switch";

import customSwitchInputStyle from "views/Experimental/trans/customSwitchInputStyle.jsx"

const CustomSwitchInput = props => {

    const {classes} = props;

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={props.checked}
                        //onChange={this.handleChange("checkedA")}
                        value="checkedA"
                        classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            icon: classes.switchIcon,
                            iconChecked: classes.switchIconChecked,
                            bar: classes.switchBar
                        }}
                    />
                }
                classes={{
                    label: classes.label
                }}
                label={props.label}
            />

        </div>
    );
};

CustomSwitchInput.propTypes = {

};

export default withStyles(customSwitchInputStyle)(CustomSwitchInput);
