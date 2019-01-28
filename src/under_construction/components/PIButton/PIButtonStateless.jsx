import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
// core components
import Button from "components/CustomButtons/Button.jsx";
// assets
import {primaryColor as primary} from "assets/jss/material-dashboard-react.jsx"

const styles = () => ({

    wrapper: {
        position: "relative"
    },
    buttonProgress: {
        color: primary,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
    },
    buttonSuccess: {
        color: "green"
    },
    buttonWarning: {
        color: "warning"
    }
});

const PIButtonStateless = (props) => {
    const {
        indicate,
        success,
        warning,
        classes,
        type,
        color,
        style
    } = props;

    const buttonClassname = classNames({
        [classes.buttonSuccess]: success
    });

    return (
        <div className={classes.wrapper}>
            <Button
                type={type}
                color={(success && "success") || (warning && "warning") || color}
                disabled={indicate}
                style={style}
            >
                {props.children}
            </Button>
            {indicate && <CircularProgress size={24} className={classes.buttonProgress}/>}
        </div>
    );
};

PIButtonStateless.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PIButtonStateless);
