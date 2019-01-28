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

class PIButton extends React.Component {
    state = {
        show: false,
        success: false,
        warning: false
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleButtonClick = () => {
        if (!this.state.show) {
            this.timer = setTimeout(() => {
                this.setState(
                    {
                        show: true
                    },
                    () => {
                        this.timer = setTimeout(() => {
                            this.setState({
                                show: false
                            });
                        }, 3000);
                    }
                );
            }, 1000);
        }
    };

    render() {
        const {show, success, warning} = this.state;
        const {
            classes,
            type,
            color,
            style
        } = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
        });

        return (
            <div className={classes.wrapper}>
                <Button
                    type={type}
                    color={(success && "success") || (warning && "warning") || color }
                    disabled={show}
                    onClick={this.handleButtonClick}
                    style={style}
                >
                    {this.props.children}
                </Button>
                {show && <CircularProgress size={24} className={classes.buttonProgress}/>}
            </div>
        );
    }
}

PIButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PIButton);
