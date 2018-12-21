import React, {Component} from "react";
import _ from "lodash";
import AddMachineUnitForm from "views/MachineUnit/AddMachineUnitForm.jsx";
import {connect} from "react-redux";
import * as actions from "store/actions";
import ConfirmationDialogRaw from "under_construction/components/Dialog/ConfirmationDialogRaw";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from '@material-ui/core/Button';
import GridItem from "../../components/Grid/GridItem";
import Table from "../../components/Table/Table";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";

//TODO uncontrolled CustomForm component + redux-form
class AddMachineUnitClass extends Component {

    classes = this.props.classes;

    state = {
        dialogIsOpen: false,
        electric: false,
        pneumatic: false,
        hydraulic: false,
        thermo: false,
        manual: true,
        showFormConfirmationDialog: false,
        tableHead: [],
        tableData: []
    };

    componentDidUpdate() {
        if (this.props.form.addMachineUnitForm !== undefined)
            console.log(this.props.form.addMachineUnitForm);
    }

    tableHelper() {
        if (this.props.form.add_machine !== undefined) {
            let values = this.props.form.add_machine.values;
            let tableHead = ["Характеристика", "Значение"];
            let tableData = [];
            _.map(values, (value, key) => {
                let tableRow = [key, value];
                tableData.push(tableRow);
            });
            this.setState({tableData, tableHead});
        }
    }

    switchInputOnChange = (event, name) => {
        if (name === "manual") {
            this.setState({
                electric: false,
                pneumatic: false,
                hydraulic: false,
                thermo: false,
                [name]: !this.state[name]
            });
        } else {
            this.setState({
                [name]: !this.state[name],
                manual: false
            });
            console.log(event.target);
        }
    };

    formOnChange = () => {
        console.log(this.props.form.add_machine);
    };
    showDialog = () => {
        this.tableHelper();
        this.setState({dialogIsOpen: true});
    };

    cancelDialog = () => {
        console.log("dialog cancel");
        this.setState({dialogIsOpen: false});
    };

    render() {
        return (
            <div>
                <AddMachineUnitForm switchStateHandler={this.switchInputOnChange}
                                    switchState={this.state}
                                    tableData={this.state.tableData}
                                    formOnChange={this.formOnChange}
                                    showDialog={this.showDialog}
                />
                <ConfirmationDialogRaw
                    open={this.state.dialogIsOpen}
                    onClose={null}
                >
                    <DialogContent>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={this.state.tableHead}
                            tableData={this.state.tableData}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.cancelDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.cancelDialog} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </ConfirmationDialogRaw>
            </div>
        );
    }
}

function mapStateToProps({form}) {
    return {
        form
    };
}

export default connect(mapStateToProps, actions)(AddMachineUnitClass);
