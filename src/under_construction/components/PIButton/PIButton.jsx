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
        marginLeft: -12,
    }
});

class PIButton extends React.Component {
    state = {
        loading: false,
        success: false,
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleButtonClick = () => {
        if (!this.state.loading) {
            this.timer = setTimeout(() => {
                this.setState(
                    {
                        success: false,
                        loading: true,
                    },
                    () => {
                        this.timer = setTimeout(() => {
                            this.setState({
                                loading: false,
                                success: true,
                            });
                        }, 3000);
                    }
                );
            }, 1000);
        }
    };

    render() {
        const {loading, success} = this.state;
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
                    className={buttonClassname}
                    type={type}
                    color={color}
                    disabled={loading}
                    onClick={this.handleButtonClick}
                    style={style}
                >
                    {this.props.children}
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
            </div>
        );
    }
}

PIButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PIButton);
