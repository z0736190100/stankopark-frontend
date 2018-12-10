import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// material-ui components
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
//core components
import Table from "components/Table/Table";
import GridItem from "components/Grid/GridItem";
import CardHeader from "components/Card/CardHeader";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        width: '80%',
        maxHeight: 435,
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontFamily: "Roboto",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto Slab', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
});

class ConfirmationDialogRaw extends Component {
    constructor(props) {
        super();
        this.state = {
            value: props.value,
            open: false
        };
    }

    // TODO
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value});
        }
    }

    handleEntering = () => {
        console.log("entering");
    };

    handleCancel = () => {
        this.props.onClose(this.props.value);
    };

    handleOk = () => {
        this.props.onClose(this.state.value);
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value, classes, ...other} = this.props;

        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="md"
                onEntering={this.handleEntering}
                aria-labelledby="confirmation-dialog-title"
                scroll={"body"}
                {...other}
            >
                <DialogTitle id="confirmation-dialog-title">
                    <small style={{fontFamily: "Roboto Slab" }}>Проверьте данные перед сохранением:</small>
                </DialogTitle>
                {this.props.children}
            </Dialog>
        );
    }
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func,
    value: PropTypes.string,
};

export default withStyles(styles)(ConfirmationDialogRaw);