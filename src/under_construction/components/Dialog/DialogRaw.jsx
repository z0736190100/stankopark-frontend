import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from "../../../components/Table/Table";
import Card from "../../../components/Card/Card";
import GridItem from "../../../components/Grid/GridItem";
import CardHeader from "../../../components/Card/CardHeader";
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
});

class DialogRaw extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: props.value,
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
                    Паспорт
                    <p className={classes.cardCategoryWhite}>
                        <small>чекаут перед сохранением</small>
                    </p>
                </DialogTitle>
                <DialogContent>
                    <GridItem xs={12} sm={12} md={12}>

                        <Table
                            tableHeaderColor="success"
                            tableHead={["ID", "Сотрудник", "Дата", "Часы"]}
                            tableData={[
                                ["1", "Иванов", "13.11", "8"],
                                ["2", "Пушкин", "13.11", "13"],
                                ["3", "Шоппенгауер", "13.11", "2"],
                                ["4", "Петров", "13.11", "8"],
                                ["1", "Иванов", "13.11", "8"],
                                ["2", "Пушкин", "13.11", "13"],
                                ["3", "Шоппенгауер", "13.11", "2"],
                                ["4", "Петров", "13.11", "8"]
                            ]}
                        />
                    </GridItem>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleOk} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

DialogRaw.propTypes = {
    onClose: PropTypes.func,
    value: PropTypes.string,
};

export default withStyles(styles)(DialogRaw);